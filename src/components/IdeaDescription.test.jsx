import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import IdeaDescription from './IdeaDescription';

import IDEA from '../__fixtures__/idea';

describe('IdeaDescription', () => {
  const handleClickThink = jest.fn();
  const handleClickLike = jest.fn();

  function renderIdeaDescription() {
    render(<IdeaDescription
      idea={IDEA}
      onClickThink={handleClickThink}
      onClickLike={handleClickLike}
    />);
  }

  beforeEach(() => {
    handleClickThink.mockClear();
    handleClickLike.mockClear();
  });

  it('renders idea', () => {
    renderIdeaDescription();

    expect(screen.getByText(/'프로그래머'를 위한 '맛있는 라면' 어때\?/)).toBeInTheDocument();
  });

  it('refreshes idea', () => {
    renderIdeaDescription();

    fireEvent.click(screen.getByRole('button', { name: '생각하기' }));

    expect(handleClickThink).toBeCalled();
  });

  it('likes idea', () => {
    renderIdeaDescription();

    fireEvent.click(screen.getByRole('button', { name: '좋아요' }));

    expect(handleClickLike).toBeCalled();
  });
});
