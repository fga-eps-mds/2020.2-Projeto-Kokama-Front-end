import React from 'react';
import Translation from './index';
import {act, create}  from 'react-test-renderer';

const tree = create(<Translation />);

function sleep(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('renders correctly', async () => {
  const TouchableWithoutFeedback = tree.root.findByProps({testID:'insertSymbol'}).props;
  await act(()=> sleep(500) as unknown as void);
  act (() => TouchableWithoutFeedback.onPress());
  expect(tree).toMatchSnapshot();
});


test('change language', () => {
  const TouchableWithoutFeedback = tree.root.findByProps({testID:'exchangeLanguage'}).props;
  act(() => TouchableWithoutFeedback.onPress());
});

