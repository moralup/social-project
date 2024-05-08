import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
<<<<<<< HEAD
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});
=======
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

>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
