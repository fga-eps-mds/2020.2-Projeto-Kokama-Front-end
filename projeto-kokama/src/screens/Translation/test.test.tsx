import React from 'react';
import Translation from './index';
import {act, create}  from 'react-test-renderer';

const tree = create(<Translation />);

function sleep(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('renders correctly', async () => {
  const symbol = tree.root.findByProps({testID:'insertSymbol'}).props;
  const text = tree.root.findByProps({testID:'setTranslation'}).props;
  const changeLanguage = tree.root.findByProps({testID:'exchangeLanguage'}).props;

  await act(()=> sleep(500) as unknown as void);

  act (() => symbol.onPress());

  act(() => text.onChangeText('Cem'));

  act(() => changeLanguage.onPress());

  act(() => text.onChangeText('Pachata'));
  
  expect(tree).toMatchSnapshot();
});

