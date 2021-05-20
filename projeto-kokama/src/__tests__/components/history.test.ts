import { History, Props } from "../../components/History";
import { KOKAMA } from "../../config/constants";
import renderer from 'react-test-renderer';


test("Check History component", () => {
    const props: Props = {
        isEnabled: true,
        data: [],
        onPressTitle: () => { },
        translateFrom: KOKAMA,
        onPressWord: (_kokamaWord: string, _originLanguage: string) => { }
    }

    let menu = History(props)
    const tree = renderer.create(menu)    
    expect(tree).toMatchSnapshot();
})