# 창업하자, 아이디어는 내게 맡겨.

아이디어 발굴을 할 때 사용합니다. 새로운 아이템, 서비스 등을 기획하기 위해서는 아이디어가 필요합니다. 그러나, 아이디어는 잘 떠오르지 않습니다. 이럴 때 앱이 영감을 불러일으켜 줍니다.

## 요구 사항

- 앱 메인 화면에 ${누구}를 위한 ${무엇} 형태의 아이디어가 매번 임의로 출력되어야 합니다.
- 사용자는 ${누구}와 ${무엇}에 해당하는 데이터 셋에 자유롭게 데이터를 추가할 수 있어야 합니다.
- 사용자는 마음에 드는 아이디어에 '좋아요'를 누를 수 있어야 합니다.
- 제일 최근에 '좋아요'가 눌린 순서로 아이디어 목록을 확인할 수 있어야 합니다.


## 설치하기

```bash
npm install
```

## 실행하기

```bash
npm start
```

## 린트 실행하기

```bash
npm run lint
```

## 테스트 실행하기

### 전체 테스트 실행하기

```bash
npm test
```

### 유닛 테스트 실행하기

```bash
npm run test:unit

# 파일이 저장됐을 때 자동으로 테스트 실행하기
npm run test:watch

# 커버리지 출력하기
npm run test:coverage
```

### e2e 테스트 실행하기

서버가 실행중인 상태에서 테스트를 실행해야 합니다.

```bash
npm run test:e2e
```
