import { DimonLocale, getLocaleSettings } from './locale';

export const encodeDimon = (
    inputNumber: number,
    locale = DimonLocale.ru
): string => {
    const { alphabet, prefix, postfix } = getLocaleSettings(locale);

    const body = Math.floor(inputNumber)
        .toString(alphabet.length)
        .replace(/./g, (char, index, wholeString) => {
            const charIndex =
                (parseInt(char, alphabet.length) ^ index ^ wholeString.length) %
                alphabet.length;

            return alphabet[charIndex];
        });

    return `${prefix}${body}${postfix}`;
};
