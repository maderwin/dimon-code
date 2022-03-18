import { DimonError } from './DimonError';

export enum DimonLocale {
    ru = 'ru',
    en = 'en',
    es = 'es',
}

export type DimonSettings = {
    alphabet: string;
    prefix: string;
    postfix: string;
};

export const dimonSettings: Record<DimonLocale, DimonSettings | undefined> = {
    [DimonLocale.ru]: {
        //
        alphabet: '-о',
        prefix: 'Димо',
        postfix: 'он!',
    },
    [DimonLocale.en]: {
        //
        alphabet: '-o',
        prefix: 'Dimo',
        postfix: 'on!',
    },
    [DimonLocale.es]: {
        //
        alphabet: '-o',
        prefix: '¡Dimo',
        postfix: 'on!',
    },
};

export const getLocaleSettings = (locale: DimonLocale): DimonSettings => {
    const settings = dimonSettings[locale];

    if (typeof settings === 'undefined') {
        throw new DimonError('Wrong locale', { locale });
    }

    return settings;
};
