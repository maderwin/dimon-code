import { DimonLocale, getLocaleSettings } from './locale';
import { DimonError } from './DimonError';

export const decodeDimon = (
    inputString: string,
    locale: DimonLocale.ru
): number => {
    const { alphabet, prefix, postfix } = getLocaleSettings(locale);

    const regex = new RegExp(`/^${prefix}([${alphabet}]*)${postfix}$/`);

    const matches = inputString.match(regex);

    if (!matches || matches.length != 2) {
        throw new DimonError('Not Dimon', { inputString });
    }

    const body = matches[1];

    const digitsString = body.replace(/./g, (char, index, str) => {
        const digit =
            (alphabet.indexOf(char) ^ index ^ str.length) % alphabet.length;
        return digit.toString(alphabet.length);
    });

    return parseInt(digitsString, alphabet.length);
};
