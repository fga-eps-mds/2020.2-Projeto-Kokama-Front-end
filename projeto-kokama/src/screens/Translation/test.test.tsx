import React from 'react';
import renderer  from 'react-test-renderer';
import Translation from '../Translation/index';
import {act, create}  from 'react-test-renderer';

const tree = create(<Translation />);

test('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});

test('change language', () =>{
  const TouchableWithoutFeedback = tree.root.findByProps({testID:'exchangeLanguage'}).props;
  act(() => TouchableWithoutFeedback.onPress());
});