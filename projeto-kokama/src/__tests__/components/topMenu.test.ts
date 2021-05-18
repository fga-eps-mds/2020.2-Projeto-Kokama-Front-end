import renderer from 'react-test-renderer';
import TopMenu from '../../components/TopMenu'


test("Check TopMenu render", () => {

    let menu = TopMenu({name:'teste'})
    const tree = renderer.create(menu)
    expect(tree).toMatchSnapshot();
})