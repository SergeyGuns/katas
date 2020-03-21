
const map = (arr, cb) => {
    const [curr, ...tail] = arr;
    const result = cb(curr)
    return tail.length ? [result].concat(map(tail, cb)) : result
}

console.log(map([1,2,3,4], x => x+1))