import React from 'react';
import renderer from 'react-test-renderer';
import Translation from '../Translation/index';

test('renders correctly', () => {
  const tree = renderer.create(<Translation />).toJSON();
  expect(tree).toMatchSnapshot();
});