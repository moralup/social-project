import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional class', () => {
        expect(classNames('class', {}, ['class1', 'class2'])).toBe('class class1 class2');
    });

    test('with mods', () => {
        expect(classNames('class', { class1: true, class2: true })).toBe('class class1 class2');
    });

    test('with mods false', () => {
        expect(classNames('class', { class1: true, class2: false })).toBe('class class1');
    });

    test('with mods undefined', () => {
        expect(classNames('class', { class1: undefined, class2: true })).toBe('class class2');
    });

    test('full param', () => {
        expect(
            classNames(
                'class',
                {
                    class1: undefined,
                    class2: true,
                    class3: false,
                },
                ['class4', 'class5'],
            ),
        ).toBe('class class4 class5 class2');
    });
});

