import { History, Props } from "../../components/History";
import { KOKAMA } from "../../config/constants";
import renderer, { act } from 'react-test-renderer';


function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

test("Check History component", async () => {
    const props: Props = {
        isEnabled: true,
        data: [],
        onPressTitle: () => {console.log('')},
        translateFrom: KOKAMA,
        onPressWord: (_kokamaWord: string, _originLanguage: string) => {console.log('')}
    }

    let menu = History(props)
    const tree = renderer.create(menu)
    await act(() => sleep(500) as unknown as void);  
    expect(tree).toMatchSnapshot();
})