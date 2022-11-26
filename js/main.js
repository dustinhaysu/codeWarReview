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

// let input1 = "It was great and I\'ve never been on live television before but sometimes i don\'t watch this"
// let input2 = "but apparently"
// let input = ''
// function butApparently(input){
//     arr = input.split(' ')
//     for(i=0; i<arr.length; i++){
//         if(arr[i] === 'but' && arr[i+1] !== 'apparently'){
//             arr.splice(i+1,0,'apparently')
//         }
//         if(arr[i] === 'and' && arr[i+1] !== 'apparently'){
//             arr.splice(i+1,0,'apparently')
//         }
//     }
//     return arr.join(' ')
// }
// console.log(butApparently(input))
//*************************************************** */

// let input = "It was great and I\'ve never been on live television before but sometimes i don\'t watch this"
//  let input2 = "but apparently"
//  let input3 = ''

//  function apparently(input){
//     arr = input.split(' ')
//     for(i=0; i<arr.length; i++){
//         for(i=0; i<arr.length; i++){
//             if(arr[i] === 'but' && arr[i + 1] !== 'apparently'){
//                 arr[i] = 'but apparently'
//             } else if(arr[i] === 'and' && arr[i+1] !== 'apparently'){
//                 arr[i] = 'and apparently'
//             }
//     }
//  } return arr.join(' ')
// }
// console.log(apparently(input))

//****************************************************************** */\\

// use template literal, for loop, if(!arr[i]){arr[i] = " "}, join('\n') final array

// let array = [7, ,'car']
// array[7]='what?'
// console.log(array)

// let str1 = "Hello"
// let str2 = "World!!!"

// function transpose(str1, str2){
//     let ar1 = str1.split('')
//     let ar2 = str2.split('')
//     let transStr = []
//     let length = ar1.length > ar2.length ? ar1.length : ar2.length

//     for(i=0; i<length; i++){
//         if(!ar1[i]){ar1[i] = " "}
//         if(!ar2[i]){ar2[i] = " "}
//         transStr.push(`${ar1[i]} ${ar2[i]}`)
//     }
//     return transStr.join('\n')
// }
// console.log(transpose(str1, str2))

//*****************************8 */

// let str2 = "We\'re going to party like it\'s 1999"
// let str1 = "It\'s my part and I\'ll cry if I want to"

// let str2 ='Pqqqqqqqqqqqqoh'
// let str1 = 'oh'
    // function SubstringTest(str1, str2){
    //     str1 = str1.toLowerCase();
    //     str2 = str2.toLowerCase();
    //     length = Math.max(str1.length, str2.length)
    //     for(let i = 0 ; i <length-1; i++){
    //        if(str1.indexOf(str2.substring(i, i+2))>-1)
    //          return true;
    //     }
    //     return false;
    //   }
    //   console.log(substringTest(str1, str2))

    // function substringTest(str1, str2){
    //     str1 = str1.toLowerCase()
    //     str2 = str2.toLowerCase()
    //     let length = Math.max(str1.length, str2.length)
    //     for(i=0; i<length; i++){
    //         if(str1.indexOf(str2.substring(i,i+2))>-1){
    //             return true
    //         }
    //     } 
    //     return false
    // }
 
    //console.log(SubstringTest(str1, str2))

    //*********************************************************************************************** */


    // let str1 = "cccccc"
    // let str2 = "aaa"
    // function substringTest(str1, str2) {
    //     str1 = str1.toLowerCase()
    //     str2 = str2.toLowerCase()
    //     let loopLength = Math.max(str1.length, str2.length)
    //     for(i=0; i<loopLength-1; i++){
    //         if(str1.indexOf(str2.substring(i, i+2)) > -1 ){
    //             return true
    //         }
    //     }
    //     return false
    // }
    // console.log(substringTest(str1, str2))

    //****************************************************** */

   // switch:

    // function likes(names) {
    //     names = names || [];
    //     switch(names.length){
    //             case 0: return 'no one likes this'; break;
    //             case 1: return names[0] + 'like this'; break;
    //             case 2: return names[0] + 'and' + names[1] + 'like this'; break;
    //         case 3: return names[0] + ',' + names[1] + 'and' + names[2] + 'like this'; break;
    //     default: return names[0 +',' + names[1] + 'and' + (names.length -2) +'others like this';      
    //  }
    // }

    //******************************************************************** */
// let str1 = 'abcde'
// let str2 = 'cdefgh'
// let str3 = 'abaab'
// let str4 = 'aabab'

// // split strings, count like occurrences, slice array 2

//     function mergeStrings(str1, str2){
//        let arr1 = str1.split('')
//         let arr2 = str2.split('')
//         let repeatCount = 1

//         for(i=0; i<arr1.length -1; i++){
//             if(arr1[i] === arr2[i] && arr1[i+1] === arr2[i+1]){
//                 repeatCount = 1+1
//             }
//         }
//         return arr2.slice(repeatCount).join('')


//     }
//     console.log(mergeStrings(str1, str2))

//************************************** *

//indexOf(), loop, substring(), toLowerCase(), 

// let str4 = "We\'re going to party like it\'s 1999"
// let str3 = "It\'s my party and I\'ll cry if I want to"
// let str1 = 'AAAAAAAAAAA'
// let str2 = "ABABABABABAB"
// function substringTest(str1, str2){
//     str1 = str1.toLowerCase()
//     str2 = str2.toLowerCase()
//      for(i=0; i<str1.length;i++){
//         if(str1.indexOf(str2.substring(i,i+2))>-1){
//             return true
//         }
//      }
// return false
// }
// console.log(substringTest(str1, str2))
//********************************************************************* */
//// test with this "abcde" + "cdefgh" => "abcdefgh"
// test with this too "abaab" + "aabab" => "abaabab"

// let first = "abaab"
// let second = "aabab"


// function mergeStrings(first, second){
//     let count = 0;
   
//     for (let i = 0; i < first.length; i++) {
//       if (first[i] == second[count]) {
//         count++;
//       } else {
//         count = 0;
//         if (first[i] == second[count]) count++;
//       }
//     }
 
//     return first + second.slice(count);
//   }

// console.log(mergeStrings(first, second))

//************************************************** */
// for loop, if type of === 'string' index i = index[i].toLowerCase()
let arr = ['CAR', 7, false, 'FUN', 'BUNNY']
function arrayLowerCase(arr) {
    for(i=0; i<arr.length; i++){
        if(typeof arr[i] === 'string'){
            arr[i] = arr[i].toLowerCase()
        }
    }
return arr
}

console.log(arrayLowerCase(arr))
