import renderer from 'react-test-renderer';
import Learning from '../../screens/Learning';

test("Check Learning screen", () => {

    let learning = Learning({navigation: { navigator }})
    let tree = renderer.create(learning)
    expect(tree).toMatchSnapshot();
})

