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
//********** */
// obj = {
//     first : '1',
//     second : '2',
//     third : false,
//     fourth : ['anytime', 2, 3, 4],
//     fifth : null
// }
//****** */
// function strCount(obj) {
//     // count all string values inside of an object.
//     let value = 0
//     for(key in obj){
//         if(typeof obj[key] === 'string'){
//             value ++
//         }
//         if(typeof obj[key] === 'object'){
//           value +=  strCount(obj[key])
//         }
//     }
//     return value
// }

// console.log(strCount(obj))
//***************** */
// for(let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i, 'fizzbuzz')
//     }
//     else if (i % 3 === 0){
//         console.log(i, "fizz")
//     }
//     else if (i % 5 === 0){
//         console.log(i, "buzz")
//     }
// }
//*************** */

// product 2 'strings' 

// let arr = ['7','10']
// function arrMultiply(arr){
//     return `${arr[0] * arr[1]}`
// }

// console.log(arrMultiply(arr))

// *********************************

// let a = 'red white blue'
// let s = 'red blue gold'

// function stringOfWords(s){
//     return s.split(' ').sort((a,b)=> a.length - b.length).pop()
// }

// console.log(stringOfWords(s))

// function stringOfWords(s){
//     return s.split(' ').sort((a,b)=> a.length - b.length).reverse()[0]
// }

// console.log(stringOfWords(s))

//********************************** */


// let arr = ['7', '10']

// function arrMultiply(arr){
//     return `${arr[0] * arr[1]}`
// }
// console.log(arrMultiply(arr))