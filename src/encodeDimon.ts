import { DimonError } from './DimonError';
import { DimonLocale, getLocaleSettings } from './locale';

export const encodeDimon = (
    inputValue: number,
    locale = DimonLocale.ru
): string => {
    const { alphabet, prefix, postfix } = getLocaleSettings(locale);

    if (
        isFinite(inputValue) === false ||
        isNaN(inputValue) ||
        inputValue < 0 ||
        inputValue > Number.MAX_SAFE_INTEGER
    ) {
        throw new DimonError('Input value out of supported range', {
            inputValue,
        });
    }

    const body = Math.floor(inputValue)
        .toString(alphabet.length)
        .replace(/./g, (char, index, wholeString) => {
            const charIndex =
                (parseInt(char, alphabet.length) ^ index ^ wholeString.length) %
                alphabet.length;

            return alphabet[charIndex];
        });

    return `${prefix}${body}${postfix}`;
};
