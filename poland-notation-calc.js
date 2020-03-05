function calc (str) {
    const [a,b,operator, ...tail] = str.split(' ')
    const res = eval(''+a+operator+b)
    return tail.length ? calc(`${res} ${tail.join(' ')}`) : res
}

function calcWithoutEval (str) {
    const [a,b,operator, ...tail] = str.split(' ')
    const operators = {
        "+" : (a,b) => a+b,
        "-" : (a,b) => a-b,
        "*" : (a,b) => a*b,
        "/" : (a,b) => a/b
    }
    const res = operators[operator](parseInt(a),parseInt(b))
    return tail.length ? calc(`${res} ${tail.join(' ')}`) : res
}

function calcFor(str) {
    let res = 0;
    str=str.split(' ');
    for (let index = 0; index < str.length; index+= 2) {
        const a =  index === 0 ? str[index] : res;
        const b = str[index+1];
        const operator = str[index+2];
        if(a && b && operator) {
            res = eval(''+a+operator+b);
        }
    }
    return res
}


let res = 0;
let index = 0;
function PascalStyle(str) {
    res = 0;
    index = 0;
    str=str.split(' ');
    label1 : while(true) {
        const a =  index === 0 ? str[index] : res;
        const b = str[index+1];
        const operator = str[index+2];
        if(a && b && operator) {
            res = eval(''+a+operator+b);
        }
        if (index < str.length) {
            index+=2;
            continue label1;
        } break;
    }
    return res
}

console.log('calc')
console.log(calc('3 4 +') === 7)
console.log(calc('2 4 * 8 +') === 16)
console.log(calc('10 15 - 3 *') === -15);
console.log(calc('4 4 + 10 * 8 - -1 *'))
console.log(calc('4 4 + 10 * 8 - -1 * 2 /'))

console.log('calcWithoutEval')
console.log(calcWithoutEval('3 4 +') === 7)
console.log(calcWithoutEval('2 4 * 8 +') === 16)
console.log(calcWithoutEval('10 15 - 3 *') === -15);
console.log(calcWithoutEval('4 4 + 10 * 8 - -1 *'))
console.log(calcWithoutEval('4 4 + 10 * 8 - -1 * 2 /'))

console.log('calcFor')
console.log(calcFor('3 4 +') === 7)
console.log(calcFor('2 4 * 8 +') === 16)
console.log(calcFor('10 15 - 3 *') === -15);
console.log(calcFor('4 4 + 10 * 8 - -1 *'))
console.log(calcFor('4 4 + 10 * 8 - -1 * 2 /'))

console.log('PascalStyle')
console.log(PascalStyle('3 4 +') && res === 7)
console.log(PascalStyle('2 4 * 8 +') && res === 16)
console.log(PascalStyle('10 15 - 3 *')&& res === -15);
console.log(PascalStyle('4 4 + 10 * 8 - -1 *')&& res)
console.log(PascalStyle('4 4 + 10 * 8 - -1 * 2 /') && res)

