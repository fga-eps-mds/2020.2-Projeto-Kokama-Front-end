import renderer, { act } from 'react-test-renderer';
import About from '../../screens/About';


function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

test("Check About screen", async () => {

    let about = About()
    let tree = renderer.create(about)

    await act(() => sleep(500) as unknown as void);

    expect(tree).toMatchSnapshot();
})