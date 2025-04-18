
export function deepCopy(obj) {
    var result = Array.isArray(obj) ? [] : {}
    for (var key in obj) {
        //Object.prototype.hasOwnProperty.call(obj, key)
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                result[key] = deepCopy(obj[key])  //递归复制
            } else {
                result[key] = obj[key]
            }
        }
    }
    return result
}