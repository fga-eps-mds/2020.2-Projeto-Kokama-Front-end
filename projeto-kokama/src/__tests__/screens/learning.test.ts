import renderer, { act } from 'react-test-renderer';
import Learning from '../../screens/Learning';

test("Check Learning screen", () => {

    let learning = Learning({navigation: { navigator }})
    let tree = renderer.create(learning)
    expect(tree).toMatchSnapshot();
    // let TouchableWithoutFeedback = tree.root.findByProps({testID:'history'}).props;
    // act(() => TouchableWithoutFeedback.onPress());
})

