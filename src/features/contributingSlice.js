import { createSlice } from '@reduxjs/toolkit';

import { batch } from 'react-redux';

import { postItem } from '../services/api';

const { actions, reducer } = createSlice({
  name: 'contributing',
  initialState: {
    loading: false,
    message: '',
    fields: {
      who: '',
      what: '',
    },
  },
  reducers: {
    setField: (state, { payload: { name, value } }) => ({
      ...state,
      fields: {
        ...state.fields,
        [name]: value,
      },
    }),

    setLoading: (state, { payload: loading }) => ({
      ...state,
      loading,
    }),

    setMessage: (state, { payload: message }) => ({
      ...state,
      message,
    }),
  },
});

export const { setField, setLoading, setMessage } = actions;

export function contributeItem() {
  return async (dispatch, getState) => {
    const { contributing: { fields: { who, what } } } = getState();
    dispatch(setLoading(true));

    await postItem({ who, what });

    batch(() => {
      dispatch(setField({ name: 'who', value: '' }));
      dispatch(setField({ name: 'what', value: '' }));
      dispatch(setMessage('좋은 아이디어네요! 빠른 시일내에 반영할게요.'));
      dispatch(setLoading(false));
    });
    setTimeout(() => {
      dispatch(setMessage(''));
    }, 5000);
  };
}

export default reducer;
