import { encodeDimon } from '../src/encodeDimon';
import { decodeDimon } from '../src/decodeDimon';
import { DimonLocale } from '../src/locale';

describe('encodeDimon and decodeDimon', () => {
    it('ru', () => {
        for (let i = 1; i < 10000; i += 1) {
            expect(
                decodeDimon(encodeDimon(i, DimonLocale.ru), DimonLocale.ru)
            ).toEqual(i);
        }
    });
    it('en', () => {
        for (let i = 1; i < 10000; i += 1) {
            expect(
                decodeDimon(encodeDimon(i, DimonLocale.en), DimonLocale.en)
            ).toEqual(i);
        }
    });
    it('es', () => {
        for (let i = 1; i < 10000; i += 1) {
            expect(
                decodeDimon(encodeDimon(i, DimonLocale.es), DimonLocale.es)
            ).toEqual(i);
        }
    });
});
