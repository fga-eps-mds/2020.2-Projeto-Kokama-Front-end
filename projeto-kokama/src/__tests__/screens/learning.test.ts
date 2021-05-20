import renderer, { act } from 'react-test-renderer';
import Learning from '../../screens/Learning';


function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

test("Check Learning screen", async () => {

    let learning = Learning({navigation: { navigator }})
    let tree = renderer.create(learning)

    await act(() => sleep(500) as unknown as void);

    expect(tree).toMatchSnapshot();
})

