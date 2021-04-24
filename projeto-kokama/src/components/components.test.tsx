import React from 'react';
import renderer from 'react-test-renderer';
import History from './History';
import { HistoryTuple } from "../screens/Translation/interface";
import {act}  from 'react-test-renderer';

interface Props {
    isEnabled: boolean;
    data: HistoryTuple[];
    onPressTitle: () => void;
    translateFrom: string;
    onPressWord: (kokamaWord:string, originLanguage:string) => void;
}

let props:Props
beforeEach(() => {
    props = {
        isEnabled: true,
        data: [{
            kokama: "pacha",
            portuguese: "cem",
          }],
        onPressTitle: () => {},
        translateFrom: "portugues",
        onPressWord:() =>{},
    };
  });


test('renders correctly', () => {
  const tree = renderer.create(<History {... props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  let tree = renderer.create(<History {... props}/>);
  const TouchableWithoutFeedback = tree.root.findByProps({testID:'history'}).props;
  act(() => TouchableWithoutFeedback.onPress());
});
