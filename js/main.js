// 06FindOddInt
// let arr = [88,0,0,0,0,2,2]
// function findOddInt(arr){
//     let obj = {}
//     arr.forEach(key => obj[key] ? obj[key]++ : obj[key] = 1 )
//     for(prop in obj){
//         if (obj[prop] %2 !== 0){
//             return Number(prop)
//         }
//     }
// }
// console.log(findOddInt(arr))

obj = {
    first : '1',
    second : '2',
    third : false,
    fourth : ['anytime', 2, 3, 4],
    fifth : null
}

function strCount(obj) {
    // count all string values inside of an object.
    let value = 0
    for(key in obj){
        if(typeof obj[key] === 'string'){
            value ++
        }
        if(typeof obj[key] === 'object'){
          value +=  strCount(obj[key])
        }
    }
    return value
}

console.log(strCount(obj))