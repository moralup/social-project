export const titleCase = (word: string): Capitalize<string> => {
    if (!word.length) return '';
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}` as Capitalize<string>;
};
