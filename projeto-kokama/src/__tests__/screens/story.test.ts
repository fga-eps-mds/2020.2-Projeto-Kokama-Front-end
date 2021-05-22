import renderer, { act } from 'react-test-renderer';
import Story from '../../screens/Story';
import { KokamaStories } from '../../screens/KokamaStories/interface';
import { KOKAMA, PORTUGUESE } from '../../config/constants';


function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

test("Check Story screen", async () => {
    const expected: KokamaStories =
    {
        id: 2,
        title_portuguese: 'outro titulo portugues',
        text_portuguese: 'outro texto portugues',
        title_kokama: 'outro titulo kokama',
        text_kokama: 'outro texto kokama'
    }
    let params = {'story': expected, 'language': KOKAMA}
    let story = Story({ route: {'params': params}, navigation: null})
    let tree = renderer.create(story)

    await act(() => sleep(500) as unknown as void);

    expect(tree).toMatchSnapshot();

    params = {'story': expected, 'language': PORTUGUESE}
    story = Story({ route: {'params': params}, navigation: null})
    tree = renderer.create(story)

    await act(() => sleep(500) as unknown as void);
    
    expect(tree).toMatchSnapshot();
})