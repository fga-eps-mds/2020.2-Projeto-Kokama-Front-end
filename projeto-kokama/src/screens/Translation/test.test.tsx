import React from 'react';
import Translation from '../Translation/index';
import {act, create}  from 'react-test-renderer';

const tree = create(<Translation />);

test('renders correctly', () => {
  const TouchableWithoutFeedback = tree.root.findByProps({testID:'insertSymbol'}).props;
  act(() => TouchableWithoutFeedback.onPress());

  expect(tree).toMatchSnapshot();
});

test('change language', () =>{
  const TouchableWithoutFeedback = tree.root.findByProps({testID:'exchangeLanguage'}).props;
  act(() => TouchableWithoutFeedback.onPress());
});
