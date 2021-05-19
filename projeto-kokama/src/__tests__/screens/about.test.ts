import renderer from 'react-test-renderer';
import About from '../../screens/About';

test("Check About screen", () => {
    
    let about = About()
    let tree = renderer.create(about)
    expect(tree).toMatchSnapshot();
})