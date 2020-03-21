const numbers = [1, 2, 3, 4, 5, 6, 7];

const reducedSumNumbers = numbers.reduce((acc, value) => acc + value)
const reducedStingNumbers = numbers.reduce((acc, value) => acc + value, '')

const pow = x => x * x;
const increment = x => x + 1;
const decrement = x => x - 1;
const compose = (...fns) => initValue => fns.reduce((value, fn) => fn(value), initValue)

const reduce = (arr, cb, acc) => {
    if (arr.length === 0) return acc;
    const [currValue, ...tail] = arr;
    const nextAcc = cb(currValue);
    return reduce(tail, cb, acc.concat(nextAcc))
}

const map = (arr, cb) => {
    const [curr, ...tail] = arr;
    const result = cb(curr)
    return tail.length ? [result].concat(map(tail, cb)) : result
}


const composed = compose(
    increment,
    pow,
    increment,
    decrement,
    decrement
)
const doubleIncrement = compose(
    increment,
    increment
)
console.log(map([1, 2, 3, 4], doubleIncrement))

const doubleIncrementRuduce = (arr) => reduce(arr, doubleIncrement, [])

