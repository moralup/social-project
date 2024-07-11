import { getQueryParams } from './addQueryParams';

describe('getQueryParams', () => {
    test('test with one params', () => {
        const params = {
            test: 'value',
        };
        expect(getQueryParams(params)).toBe('?test=value');
    });

    test('test with multiple params', () => {
        const params = {
            test: 'value',
            search: 'hello',
            sort: 'asc',
        };
        expect(getQueryParams(params)).toBe('?test=value&search=hello&sort=asc');
    });

    test('test with undefined', () => {
        const params = {
            test: 'value',
            search: undefined,
            sort: 'asc',
        };
        expect(getQueryParams(params)).toBe('?test=value&sort=asc');
    });
});
