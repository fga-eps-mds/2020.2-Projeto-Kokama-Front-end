import renderer from 'react-test-renderer';
import Story from '../../screens/Story';
import { KokamaStories } from '../../screens/KokamaStories/interface';
import { KOKAMA, PORTUGUESE } from '../../config/constants';


test("Check Story screen", () => {
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
    expect(tree).toMatchSnapshot();

    params = {'story': expected, 'language': PORTUGUESE}
    story = Story({ route: {'params': params}, navigation: null})
    tree = renderer.create(story)
    expect(tree).toMatchSnapshot();
})