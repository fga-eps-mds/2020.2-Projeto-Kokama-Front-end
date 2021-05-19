import { checkListKokama, checkListPortuguese, getCorrectStories } from "../../components/StoryList"
import { KokamaStories } from "../../screens/KokamaStories/interface"


test("Check story inside kokama story list", () => {
    const stories_list:KokamaStories[] = [
        {
            id: 1,
            title_portuguese: 'titulo portugues',
            text_portuguese: 'texto portugues',
            title_kokama: 'titulo kokama',
            text_kokama: 'texto kokama'
        },
        {
            id: 2,
            title_portuguese: 'outro titulo portugues',
            text_portuguese: 'outro texto portugues',
            title_kokama: 'outro titulo kokama',
            text_kokama: 'outro texto kokama'
        }
    ];

    let result:KokamaStories[] = checkListKokama(stories_list, 'outro');
    let expected:KokamaStories[] = [
        {
            id: 2,
            title_portuguese: 'outro titulo portugues',
            text_portuguese: 'outro texto portugues',
            title_kokama: 'outro titulo kokama',
            text_kokama: 'outro texto kokama'
        }
    ];
    expect(result).toStrictEqual(expected);

    result = checkListKokama(stories_list, 'banana');
    expected = [];
    expect(result).toStrictEqual(expected);

    result = checkListKokama(stories_list, '');
    expected = [...stories_list].reverse();
    expect(result).toStrictEqual(expected);

});

test("Check story inside portuguese story list", () => {
    const stories_list:KokamaStories[] = [
        {
            id: 1,
            title_portuguese: 'titulo portugues',
            text_portuguese: 'texto portugues',
            title_kokama: 'titulo kokama',
            text_kokama: 'texto kokama'
        },
        {
            id: 2,
            title_portuguese: 'outro titulo portugues',
            text_portuguese: 'outro texto portugues',
            title_kokama: 'outro titulo kokama',
            text_kokama: 'outro texto kokama'
        }
    ];

    let result:KokamaStories[] = checkListPortuguese(stories_list, 'outro');
    let expected:KokamaStories[] = [
        {
            id: 2,
            title_portuguese: 'outro titulo portugues',
            text_portuguese: 'outro texto portugues',
            title_kokama: 'outro titulo kokama',
            text_kokama: 'outro texto kokama'
        }
    ];
    expect(result).toStrictEqual(expected);

    result = checkListPortuguese(stories_list, 'panara');
    expected = [];
    expect(result).toStrictEqual(expected);

    result = checkListPortuguese(stories_list, '');
    expected = [...stories_list].reverse();
    expect(result).toStrictEqual(expected);

});

test("Check story list search filter", () => {

    const stories_list:KokamaStories[] = [
        {
            id: 1,
            title_portuguese: 'titulo portugues',
            text_portuguese: 'texto portugues',
            title_kokama: 'titulo kokama',
            text_kokama: 'texto kokama'
        },
        {
            id: 2,
            title_portuguese: 'outro titulo portugues',
            text_portuguese: 'outro texto portugues',
            title_kokama: 'outro titulo kokama',
            text_kokama: 'outro texto kokama'
        }
    ];

    let result = getCorrectStories(stories_list, 'portuguese', 'outro');
    const expected:KokamaStories[] = [
        {
            id: 2,
            title_portuguese: 'outro titulo portugues',
            text_portuguese: 'outro texto portugues',
            title_kokama: 'outro titulo kokama',
            text_kokama: 'outro texto kokama'
        }
    ];
    expect(result).toStrictEqual(expected);

    result = getCorrectStories(stories_list, 'Kokama', 'outro');
    expect(result).toStrictEqual(expected);
});