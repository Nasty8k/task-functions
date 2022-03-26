// Фильтр к переданным аргументам, который отбирает все числа больше num
export function higherThan(num) {
    return (x) => x > num;
}

// Фильтр к переданным аргументам, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
export function hasSubstring(substr) {
    return function (str) {
        return str.includes(substr);
    };
}

// Функция, которая работает так: console.log(multiply(5)(10));
export function multiply(num) {
    return (number) => number * num;
}
