export const toUpperCaseFirstLetter = (str) => 
    str.charAt(0).toUpperCase() + str.slice(1);

export const toUpperCaseEveryWord = (str) => {
    return str.split('_').map(word => 
        word === 'and' ? word : toUpperCaseFirstLetter(word)
    ).join(' ');
};
