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
    const nextAcc = cb(acc,currValue);
    if(Array.isArray(acc)) return reduce(tail, cb, acc.concat(nextAcc));
    if(typeof acc === 'object') return reduce(tail, cb, nextAcc);
    //if string||number
    return reduce(tail, cb, acc+nextAcc);
}


console.log(reduce([1,2,3], (acc,currValue) => acc))

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

const doubleIncrementRuduce = (arr) => reduce(arr, doubleIncrement, '')

