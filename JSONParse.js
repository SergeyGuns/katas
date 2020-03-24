const JSONParse = (str) => {
    str = str.trim()
    if(str[0] === '"') {
        return str.substring(1,str.length-1)
    }
    if(str[0] === '{') {
        let splitIndex = str.indexOf(':')
        let key = str.substring(1,splitIndex-1)
        let value = str.substring(splitIndex + 1, str.length-1)
        key = key.replace('"', '')
        return {[key] : JSONParse(value)}
    }
}


console.dir(JSONParse('{"key": {"subKey": "value" }}'))
console.dir(JSONParse('{"key": {"num": 1 }}'))
console.dir(JSONParse('[]'))