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

//********************************** */

// stringOne = 'bubble gum'
// stringTwo = 'turtle ham'

// function mutateMyStrings(stringOne, stringTwo){
//     let a1 = stringOne.split('')
//     let a2 = stringTwo.split('')
//     let morph = [stringOne].join('\n')

//     for(i=0; i<a1.length; i++) {
//         a1[i] = a2[i];
//         morph = a1.join('').push()
//     }
//     return morph
// }
// console.log(mutateMyStrings(stringOne, stringTwo))
//************************************************** */
// let s = 'red blue gold'

// function stringOfWords(s){
//     return s.split(' ').sort((a,b) => a.length-b.length).pop()
// }
// console.log(stringOfWords(s))
//******************************************** */
// let infected = '*h*s *s v*ry *tr*ng*'
// let discovered = 'tiiesae'

// function uncensor(infected, discovered){
//     const arr = [...discovered]

//     return [...infected].map(el => el ==='*'? arr.shift() : el).join('')
// }

// console.log(uncensor(infected, discovered))

//**************************************************** */
//  let stringOne = 'bubble gum'
//  let stringTwo = 'turtle ham'

//  function mutateMyStrings(stringOne, stringTwo){
//     let arr1 = stringOne.split('')
//     let arr2 = stringTwo.split('')
//     let finalValue = [stringOne]
//     for(i=0; i<arr1.length; i++){
//         arr1[i] = arr2[i]
//         finalValue.push(arr1.join(""))
//     }
//     return finalValue.join('\n')
//  }
//  console.log(mutateMyStrings(stringOne, stringTwo))

//****************************************** */

// let infected = "*h*s *s v*ry *tr*ng*"
// let discovered = "tiiesae"

// function uncensor(infected, discovered){
//     const arr = [...discovered]
//     return [...infected].map(el => el ==='*'? arr.shift() : el).join('')
// }
//************************************************ */

// let stringOne = "bubble gum"
// let stringTwo = "turtle ham"

// function mutateMyStrings(stringOne, stringTwo){
//     let arr1 = stringOne.split('')
//     let arr2 = stringTwo.split('')
//     let finalValue = [stringOne]
//     for(i=0; i<arr1.length; i++){
//         arr1[i] = arr2[i];
//         finalValue.push(arr1.join(''))
//     }
//     return finalValue.join('\n')
// }

// console.log(mutateMyStrings(stringOne, stringTwo))
//********************** */

// let infected = "*h*s *s v*ry *tr*ng*"
// let discovered = "tiiesae"

// function uncensor(infected, discovered){
//     let arr = [...discovered];
//     return [...infected].map(el => el === '*'? arr.shift(): el).join('')
// }

// console.log(uncensor(infected, discovered))

//****************************************** */

