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
// let arr = ['CAR', 7, false, 'FUN', 'BUNNY']
// function arrayLowerCase(arr) {
//     for(i=0; i<arr.length; i++){
//         if(typeof arr[i] === 'string'){
//             arr[i] = arr[i].toLowerCase()
//         }
//     }
// return arr
// }

// console.log(arrayLowerCase(arr))
//******************************************************************* */


// const helloWorld = () => {
//     let x = String(/Hello, World!/)
//     x = x.substring(1, x.length - 1)
//     return x
//     };
//     console.log(helloWorld())
//     console.log(helloWorld())
//********************************************************************************************** */

//array to lowercase
// try map() with ternary typeof === 'string

// let arr = ['CAR', 7, false, 'FUN', 'BUNNY']
// function arrayLowerCase(arr) {
//    return arr.map(el => typeof el === 'string'? el = el.toLowerCase():el)
// }
// console.log(arrayLowerCase(arr))

//************************************************************* */

// function helloWorld(){
//     let x = String(/Hello, World!/)
//     x = x.substring(1,x.length-1)
//     return x
// }
// console.log(helloWorld())

//**************************************************************** */
// merge two strings together 

// str1 is count and str2 is for loop i
// if str2 = str1 ++count
// else count = 0 if(str2 = str1 ++count)

// let first = "abaab" 
// let second = "aabab"

// function mergeStrings(first, second){
//     let count = 0

//     for(i=0; i<first.length; i++){
//         if(first[i]=== second[count]){
//             count++
//         }
//         else {
//             count = 0
//             if(first[i]===second[count]){
//                 count++
//             }
//         }
//     }
//    return first+second.slice(count)
// }
// console.log(mergeStrings(first, second))
//******************************************************************************** */

// let first = "abaab" 
// let second = "aabab"




// function mergeStrings(first, second){
//     let count = 0;
//     for(i=0; i<first.length; i++){
//         if(first[i] === second[count]){
//             count++
//         } else{
//             count = 0
//             if(first[i] === second[count]){
//                 count++
//             }
//         }
//     } return first + second.slice(count)

// }
// console.log(mergeStrings(first, second))

//********************************************************************** */

// function helloWorld(){
//     x = String(/Hello, world!!/)
//     return x.slice(1,-1)
// }

// console.log(helloWorld())

//*************************************************************** */

// let names = ['Car', 'Bunny', 'for', 'Letter']
// sortMe = function( names ){
//     return names.sort()
// }
// console.log(sortMe(names))

//*********************************************************************** */

// let data = {
//     a: 1,
//     b: 2,
//     c: 3
//     }
    
//     function keysAndValues(data){
//        return [Object.keys(data), Object.values(data)] 
//     }
//     console.log(keysAndValues(data))
//****************************************************************8 */

// let a = ['a','b', 'c', 'd']
// let b = [1, 2, 3, 4, 5]
// function mergeArrays(a, b) {
//     let returnArray = []
//     let counter = 0
//     while(a[counter] || b[counter]){
//         if(a[counter]){
//             returnArray.push(a[counter])
//         }
//         if(b[counter]){
//             returnArray.push(b[counter])
//         }
//         counter++
//     }
//     return returnArray
// }

// console.log(mergeArrays(a,b))

//************************************************************************* */

// let names = ['Car', 'Bunny', 'for', 'Letter']
// sortMe = function( names ){
//     return names.sort()
// }
// console.log(sortMe(names))

//**************************************************************************** */

// let data = {
//     a: 1,
//     b: 2,
//     c: 3
//     }
    
//     function keysAndValues(data){
//         return [Object.keys(data), Object.values(data)]
//     }
//     console.log(keysAndValues(data))

//******************************************************************************************* */

// let a = ['a', 'b', 'c', 'd']
//  let b = [1, 2, 3, 4, 5]
//  function mergeArrays(a, b) {
//     let returnArray = []
//     let counter = 0
//     while(a[counter] || b[counter]){
//         if(a[counter]){
//             returnArray.push(a[counter])
//         }
//         if(b[counter]){
//             returnArray.push(b[counter])
//         }
//         counter++
//     }
//     return returnArray
// }
// console.log(mergeArrays(a,b))

//************************************************************************************8 

// let a = ['a', 'b', 'c', 'd', 'e']
// let b = [1, 2, 3, 4, 5, 6];
// function mergeArrays(a, b){
//     let returnArray = [];
//     let counter = 0;
//     while(a[counter] || b[counter]){
//         if(a[counter]){
//             returnArray.push(a[counter])
//         }
//         if(b[counter]){
//             returnArray.push(b[counter]);
//         }
//         counter++

//     }
// return returnArray
// }
// console.log(mergeArrays(a, b))

// ***********************************************************************

// let names = ['Car', 'Bunny', 'for', 'Letter']
// sortMe = function( names ){
//     return names.sort()
// }
// console.log(sortMe(names))

//*********************************************************** */

// let data = {
//     a: 1,
//     b: 2,
//     c: 3
//     }
    
//     function keysAndValues(data){
//         return [Object.keys(data), Object.values(data)];

//     }
//     console.log(keysAndValues(data))

//*********************************************************** */
//return a mixed array of one element from each array one after the other
// while loop with || for both arrays
// if array element is truthy push() element to a return array - two if statements
// count++
// return a return array
// create a counter variable
// let a = ['a', 'b', 'c', 'd']
// let b = [1, 2, 3, 4, 5]
// function mergeArrays(a, b) {
//     let counter = 0;
//     let returnArray = [];
//     while(a[counter] || b[counter]){
//         if(a[counter]){
//             returnArray.push(a[counter])
//         }
//         if(b[counter]){
//             returnArray.push(b[counter])
//         }
//         counter++
//     }
//     return returnArray

// }

// console.log(mergeArrays(a, b))

//******************************************************************** */

// let arr = [91,75,86,14,82]
// function solve(arr){
//     arr=arr.sort((a, b) => b - a)
//     let finalArray = [];
//     for(i=0,j=arr.length-1; i<=j; i++,j--){
//         if(i === j){
//             finalArray.push(arr[i])
//         }
//         else{finalArray.push(arr[i], arr[j])}
//     }
//     return finalArray
// }

// console.log(solve(arr))

//******************************************************************************** */

// sort array, new array, double for loop, push elements to new array, if statements(arr[i]===arr[j] arr[i] if arr[i or j] {push arr[i or j]})

// let arr = [91,75,86,14,82]
// function solve(arr){
//     const newArray = [];
//     arr.sort((a, b)=> b - a)
//     for(i=0,j=arr.length-1; i<=j; i++,j--){
//         if(i === j){
//             newArray.push(arr[i])
//         }
//         else{
//             newArray.push(arr[i], arr[j])
//         }
//     }
//     return newArray
// }
// console.log(solve(arr))

//************************************************************************** */

// let [arr1, arr2] = [[6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]]

// function findMissing(arr1, arr2) {
//     let missingNumber = 0
//     let value1 = arr1.reduce((accum, curVal) => accum + curVal, 0);
//     let value2 = arr2.reduce((accum, curVal) => accum + curVal, 0);
//     value1>value2? missingNumber = value1 - value2 : missingNumber = value2 - value1
//     return missingNumber
// }
// console.log(findMissing(arr1, arr2))
//********************************************************************************** */

// let [arr1, arr2] = [[6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]]

// function findMissing(arr1, arr2) {
//     let finalValue = 0;
//     let reducer = (accumulator, currentValue) => accumulator + currentValue;
//     return arr1.reduce(reducer,0) - arr2.reduce(reducer,0) 
// }
// console.log(findMissing(arr1, arr2))

//************************************************************************************** */

// sort array double loop  push result to newArray if i === j push i 

// let arr = [91,75,86,14,82]
// function solve(arr){
//     arr.sort((a,b)=> b-a)
//     const newArray = [];
//     for(i=0,j=arr.length-1; i<=j; i++,j-- ){
//         if(i===j){
//             newArray.push(arr[i])
//         } else {
//             newArray.push(arr[i], arr[j])
//         }
//     }
//     return newArray
// }
// console.log(solve(arr))
//****************************************************************************************** */
//map(), find()
// var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
// var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

// function sortArray(a1, a2) {
//     return a1.map(el1 => a2.find(el2 => el1[0] === el2[0]))
// }

// console.log(sortArray(a1, a2))

//***************************************************************** */

// REFACTORING ARRAYS
// let arr = [9, 7, 6, 9]
// let n = 1
// function removeNthElement(arr, n) {
// // Fix it
// var arrCopy = arr.slice();
//  arrCopy.splice(n, 1); // removes the nth element
//  return arrCopy
// }

// console.log(removeNthElement(arr,n))

//*************************************************************************** */

// const arr = [[1, 2, [1, 3, 2]], 6]

// // function arraySum(arr) {
// //     return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : Number.isNaN(x) ? 0 : x), 0)
// //     }

//     function arraySum(arr){
//         return arr.reduce((n,x) => n + (Array.isArray(x) ? arraySum(x) : Number.isNaN() ? 0 : x), 0)
//     }

//     console.log(arraySum(arr))

//************************************************************************************* */
//concat() arrays,
// const arr1 = [77, "ciao"]
// const arr2 = [78, 42, "ciao"]

// function hotSingles(arr1, arr2) {
//     var newArr = [];  
//     for(var i=0;i<arr1.length;i++)
//     {
//       if(!newArr.includes(arr1[i]) && !arr2.includes(arr1[i]))
//       {
//         newArr.push(arr1[i]);
//       }
//     }
//     for(var i=0;i<arr2.length;i++)
//     {
//       if(!newArr.includes(arr2[i]) && !arr1.includes(arr2[i]))
//       {
//         newArr.push(arr2[i]);
//       }
//     }
//     return newArr;
//   }

//   function hotSingles(arr1, arr2){
//     var newArr = []
//     for(let i = 0; i<arr1.length;i++){
//         if(!newArr.includes(arr1[i]) && !arr2.includes(arr1[i])){
//             newArr.push(arr1[i])
//         }
//     }
//     for(var i = 0; i< arr2.length; i++){
//         if(!newArr.includes(arr2[i]) && !arr1.includes(arr2[i])){
//             newArr.push(arr2[i])
//         }
//     }
//     return newArr;
//   }

//   console.log(hotSingles(arr1, arr2))
//********************************************************* */

// var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
// var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

// /*function sortArray (a1, a2) {
// return a1.map( v => a2.find( w => v[0]===w[0] ) )
// }*/

// function sortArray (a1, a2){
//     return a1.map(v=>a2.find(w => v[0]===w[0]))
// }
// console.log(sortArray(a1, a2))

//********************************************************************************** */
//type of array run function again
// const arr = [[1, 2, [1, 3, 2]], 6]
// /*function arraySum(arr) {
//     return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : Number.isNaN(x) ? 0 : x), 0)
//     }*/

// function arraySum(arr) {
//     return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : Number.isNaN(x) ? 0 : x), 0)
// }    
// console.log(arraySum(arr))
//*************************************************************************** */

// let arr = [9, 7, 6, 9]
// let n = 1
// function removeNthElement(arr, n) {
// // Fix it
// var arrCopy = arr.slice();
// arrCopy.splice(n, 1); // removes the nth element
// return arrCopy;
// }

// console.log(removeNthElement(arr, n))

//********************************************************************** */
//populate and retun new array with values that appear only once. includes()
// const arr1 = [77, "ciao"]
// const arr2 = [78, 42, "ciao"]

// function hotSingles(arr1, arr2) {
//     let newArray = []
//     for(let i = 0; i<arr1.length; i++){
//         if(!newArray.includes(arr1[i]) && !arr2.includes(arr1[i])){
//             newArray.push(arr1[i])
//         }
//     }
//     for(let i = 0; i<arr2.length; i++){
//         if(!newArray.includes(arr2[i]) && !arr1.includes(arr2[i])){
//             newArray.push(arr2[i])
//         }

//     }
//     return newArray
// }

// console.log(hotSingles(arr1, arr2))

//********************************************** */

// return arrays with like values only str, num etc

//let arr = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]];
/*function filterHomogenous(arr) {
    return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val === typeof subArr[0]));
    }*/

    // function filterHomogenous(arr){
    //     return arr.filter(subArr => subArr.length > 0 && subArr.every( val => typeof val === typeof subArr[0]))
    // }

    // console.log(filterHomogenous(arr))

    //********************************************************************************* */

//     let arr = [6, 7, 8, 9]

//     function withoutLast(arr) {
//     // Fix it
//     //return arr.pop(); // removes the last element
//     return arr.slice(0, -1)
//     return arr

// }

// console.log(withoutLast(arr))

//******************************************************************** */

// const arr = [[1, 2, [1, 3, 2]], 6]
// function arraySum(arr) {
//     return arr.map(el => Array.isArray(el))
// }

// function arraySum(arr) {
//     return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : Number.isNaN(x) ? 0 : x), 0)
//     }

    // function arraySum(arr) {
    //     return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : Number.isNaN(x) ? 0 : x), 0)
    // }

    // console.log(arraySum(arr))

    //****************************************************************************************** */

    // let arr = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]];
// function filterHomogenous(arrays) {
//     return arr.map()
// }

// function filterHomogenous(arr) {
//     return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val === typeof subArr[0]));
//     }

//     function filterHomogenous(arr) {
//         return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val ==== typeof subArr[0]))
//     }

//     function filterHomogenous(arr) {
//         return arr.filter(subArr => subArr.length>0 && subArr.every(val => typeof val === typeof subArr[0]))
//     }

//**************************************************************************** */

// let arr = [6, 7, 8, 9]

// function withoutLast(arr) {
// // Fix it
// return arr.slice(0, -1); // removes the last element
// }
// console.log(withoutLast(arr))

//******************************************************************* *
//reduce -> map -> double ternary
// const arr = [[1, 2, [1, 3, 2]], 6]
// function arraySum(arr) {
//     return arr.reduce((n, x) => n + ( Array.isArray(x) ? arraySum(x) : Number.isNaN(x)? 0 : x),0)
// }
// console.log(arraySum(arr))
//*************************************************************************** */
//forEach() array inside array use every() to find out if all elements are the same type. el => typeof el[0] ===el  
//let arr = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]];
// function filterHomogenous(arrays) {
//     returnArray = []
//     for(const array of arrays){
//         if(every(el => el[0]===el)){
//           returnArray.push(array)
//         }
//     }
//     return returnArray
// function filterHomogenous(arr){
// return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val === typeof subArr[0]))
// }
// console.log(filterHomogenous(arr))
// filter() every()
// let arr = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]];
// function filterHomogenous(arr) {
//     return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val === typeof subArr[0]))
// }
// console.log(filterHomogenous(arr))

//********************************************************************************************** */

// const arrays = [[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]]
// let shift = 3


// function addingShifted (arrays, shift) {
//     let result = [];
//     let start = 0;
//     for (let array of arrays) {
//     for (let i = 0; i < array.length; i++) {
//     result[start + i] = (result[start + i] || 0) + array[i];
//     }
//     start += shift;
//     }
//     return result;
//     }
//     console.log(addingShifted(arrays, shift))

//*************************************************************************** */

// const arr = [1, 2, 3]
// let index = 1

// Array.prototype.remove = function (index){
//     return this.splice(index, 0)
// }

// Array.prototype.remove = function (index) {
//     if (Number.isInteger(index) && index >= 0) this.splice(index, 1);
//     return this;
// }

// console.log(arr.remove(1))

//********************************************************************** */

// let numbers = [1, 5.2, 4, 0, -1]
// function sum (numbers) {
//     return numbers.reduce((a, b) => a + b, 0)
// }

// console.log(sum(numbers))

//************************************************ */
// filter(), every()
// let arrays = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]];
// function filterHomogenous(arrays) {

//     return arrays.filter(subArray => subArray.length > 0 && subArray.every((el) => typeof subArray[0] === typeof el))
// }
// console.log(filterHomogenous(arrays))

//***************************************************************************************** */

// const arrays = [[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]]
// let shift = 3
// // [1,2,3,11,12,13,-6,8,8,1,1,1]

// function addingShifted (arrays, shift) {
//     let result = [];
//     let start = 0;
//     for (let array of arrays) {
//     for (let i = 0; i < array.length; i += 1) {
//     result[start + i] = (result[start + i] || 0) + array[i];
//     }
//     start += shift;
//     }
//     return result;
// }

// console.log(addingShifted(arrays, shift))

// //result[start + i] = (result[start +i] || 0) + array[i])
// // starts building result array by adding array[i] to 0 under index result[start + i], then adds shift number to start, on second loop result[start + i] can have a value so result[start + i] should be added to array[i], eventually the loop will go back to adding elements to the end of the array genius!!!! 

//******************************************************************************** */


// const arrayOfArrays = [[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]]
// let shift = 3

// function addingShifted (arrayOfArrays, shift) {
//     let newArr = []
//     let count = 0;
//     for(let array of arrayOfArrays){
//         for(let i = 0; i < array.length; i++) {
//             newArr[count + i] = (newArr[count + i] || 0) + array[i]
//         }
//         count += shift;
//     }
//     return newArr
// }
// console.log(addingShifted(arrayOfArrays, shift))

//******************************************************************** */

// const arr = [1, 2, 3]
// let index = 1

// Array.prototype.remove = function (index){
//     if (Number.isInteger(index) && index >= 0){
//             this.splice(index, 1)
//         }
//         return this;
// }

// console.log(arr.remove(1))

//************************************************************************** */

// const arrays = [[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]]
// let shift = 3

// function addingShifted (arrays, shift) {
//     const newArr = [];
//     let index = 0
//     for(let array of arrays){
//         for(i=0; i<array.length; i++){
//             newArr[index + i] = (newArr[index + i] || 0) + array[i]
//         }
//         index += shift
//     }
//     return newArr
// }

// console.log(addingShifted(arrays, shift))

//***************************************************************** */

// function mergeArrays(arr1, arr2) {
//     return arr1.filter((item) => !arr2.includes(item)).concat(arr2).sort((a, b) => a - b)
//   }
// console.log(mergeArrays(arr1, arr2))

// const [arr1, arr2] = [[1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]]

// function mergeArrays(arr1, arr2){
//     return arr1.filter((item) => !arr2.includes(item)).concat(arr2).sort((a,b) => a - b)
// }
// console.log(mergeArrays(arr1, arr2))

//************************************************************************************* */

// input: names - unsorted strings
// output: case-agnostic sort
/*sortme = function( names ){
    return names.sort(function(first, second) {
    return first.toLowerCase().localeCompare(second.toLowerCase())
    })
    }
    console.log(sortme(b))*/

// const names = ["Hello", "there", "I'm", "fine"]
// const b = ["C", "d", "a", "B"]

// function sortMe(names){
//     return names.sort((a,b) => a.toLowerCase().localCompare(b.toLowerCase()))
// }
// console.log(sortMe(names))

// sortme = function( names ){
//     return names.sort(function(first, second) {
//     return first.toLowerCase().localeCompare(second.toLowerCase())
//     })
//     }
//     console.log(sortme(names))
//***************************************************************************** */
//const a = ["Hello", "there", "I'm", "fine"]
//const names = ["C", "d", "a", "B"]
// input: names - unsorted strings
// output: case-agnostic sort
// sortme = function( names ){
//     return names.sort(function(first, second) {
//     return first.toLowerCase().localeCompare(second.toLowerCase())
//     })
//     }


// sortme = function( names ){
//     return names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// }


// console.log(sortme(names))

//*****************************************************

// const names = ["Hello", "there", "I'm", "fine"]
// const d = ["C", "d", "a", "B"]
// // // input: names - unsorted strings
// // // output: case-agnostic sort
// sortme = function( names ) {
//     return names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// }
// console.log(sortme(names))

//******************************************************************************************** */

// const [arr1, arr2] = [[1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]]

// // function mergeArrays(arr1, arr2) {
// //     return arr1.filter((item) => !arr2.includes(item))
// //     .concat(arr2)
// //     .sort((a, b) => a - b)
// //   }

// function mergeArrays(arr1, arr2){
//     return arr1.filter(item => !arr2.includes(item))
//     .concat(arr2)
//     .sort((a,b) => a - b)
// }
// console.log(mergeArrays(arr1, arr2))

//********************************************************************** */

// const names = ["A", "a", "Anna", "anNa", "AnnA", "A"]
// // // input: names - unsorted strings
// // // output: case-agnostic sort
// sortme = function( names ){
//      console.log(names.sort((a,b) => a.localeCompare(b, {sensitivity: 'base'})));
//     console.log(names.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase())));
//     return names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// }
// console.log(sortme(names))

// let x = 'car'
// let y = 'CAR'

// console.log(names[2].localeCompare(names[3], {sensitivity: 'base'}))
// console.log(names[2].localeCompare(names[3], {caseFirst : 'false'}))
// console.log(names[2].toLowerCase().localeCompare(names[3].toLowerCase()))
// console.log(y.localeCompare(x))
// console.log(y.toLowerCase().localeCompare(x.toLowerCase()))
// console.log(x.localeCompare(x))

// let z = names.slice()
// console.log(z[2].toLowerCase().localeCompare(z[3].toLowerCase()))

//********************************************************************************* */

// const a = ["Hello", "there", "I'm", "fine"]
// const names = ["C", "d", "a", "B"]
// // // input: names - unsorted strings
// // // output: case-agnostic sort
// sortme = function( names ){
//     return names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// }
// console.log(sortme(names))

//************************************************ */

// const [arr1, arr2] = [[1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]]
// function mergeArrays(arr1, arr2) {
//     return arr1.filter(item => !arr2.includes(item)).concat(arr2).sort((a,b)=> a-b)
// }
// console.log(mergeArrays(arr1, arr2))

//************************************************************************************************** */

//Make this work: `duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

// const arr = [1,2,3,4,5]

// function doubleArray(arr){
//     return arr.concat(arr)
// }
// console.log(doubleArray(arr))

// function duplicate(arr) {
//     return arr.concat(arr);
//   }

//************************************************************ */

// const arr1 = [1, 2, 2, 3, 4]
// const arr2 = [2, 1, 2, 4, 3]
// const arr3 = [1, 2, 3, 4]
// const arr = [1, 2, 3, "4"]


// function arraysSimilar(arr1, arr2) {
//     arr1 = arr1.sort(sortFunc);
//     arr2 = arr2.sort(sortFunc);
//     return arr1.length == arr2.length && arr1.every((a,i) => a === arr2[i]);
//     }
//     function sortFunc(a,b) {return a-b;}
//     console.log(arraysSimilar(arr1, arr2))
//*********************************************************************** */

// const courses = ['aeb-1305', 'site-1305', 'play-1215', 'web-1304', 'site-1304', 'beb-1305']

// // input: courses - array of course-names "name-yymm"
// // output: sorted by "yymm", then "name"
// const compare = (a, b) => a.slice(-4) - b.slice(-4) || a.localeCompare(b);
// const sortme = (courses) => courses.sort(compare);


// console.log(sortme(courses))


//********************************************************************* */

// const courses = ['aeb-1305', 'site-1305', 'play-1215', 'web-1304', 'site-1304', 'beb-1305']

// // input: courses - array of course-names "name-yymm"
// // output: sorted by "yymm", then "name"
// sortme = function( courses ){
//     return courses.sort((a,b) => a.slice(-4) - b.slice(-4) || a.localeCompare(b))
// }
// console.log(sortme(courses))

//******************************************** */

// const arr1 = [1, 2, 2, 3, 4]
// const arr2 = [2, 1, 2, 4, 3]
// const arr3 = [1, 2, 3, 4]
// const arr = [1, 2, 3, "4"]

// // function arraysSimilar(arr1, arr2) {
// //     const sorted = (a,b) => a-b;
// //     arr1.sort(sorted).filter((item,i) => )
// // }

// function arraysSimilar(arr1, arr2) {
//     const sortFunction = (a, b) => a-b;
//     return arr1.length === arr2.length && arr1.sort(sortFunction).every((a,i) => a === arr2.sort(sortFunction)[i]);
// }
// console.log(arraysSimilar(arr1, arr2))
//******************************************** */

// const courses = ['aeb-1305', 'site-1305', 'play-1215', 'web-1304', 'site-1304', 'beb-1305']

// // input: courses - array of course-names "name-yymm"
// // output: sorted by "yymm", then "name"
// sortme = function( courses ){
//     const sortFunct = (a,b) => a.slice(-4) - b.slice(-4) || a.localeCompare(b)
//     return courses.sort(sortFunct)
// }
// console.log(sortme(courses))
//*********************************************** */

// const arr1 = [1, 2, 2, 3, 4]
// const arr2 = [2, 1, 2, 4, 3, 4]
// const arr3 = [1, 2, 3, 4]
// const arr = [1, 2, 3, "4"]


// function arraysSimilar(arr1, arr2) {
//     const sortFunc = (a,b) => a - b;
//     arr1.sort(sortFunc);
//     arr2.sort(sortFunc);
//     return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])
// }
// console.log(arraysSimilar(arr1, arr2))

//************************************************ */

//localeCompare()

// const courses = ['aeb-1305', 'site-1305', 'play-1215', 'web-1304', 'site-1304', 'beb-1305']

// // input: courses - array of course-names "name-yymm"
// // output: sorted by "yymm", then "name"
// sortme = function( courses ){
//     return courses.sort((a,b) => a.slice(-4) - b.slice(-4) || a.localeCompare(b))
// }

// console.log(sortme(courses))


//************************************************ */

// const arr1 = [1, 2, 2, 3, 4]
// const arr2 = [2, 1, 2, 4, 3]
// const arr3 = [1, 2, 3, 4]
// const arr = [1, 2, 3, "4"]

// var sorted = (a,b) => a - b
// function arraysSimilar(arr1, arr2) {
//     arr1.sort(sorted)
//     arr2.sort(sorted)
//     return arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i])
// }

// console.log(arraysSimilar(arr1, arr2))

//************************************************** */
// let number = 2112
// function squareEveryDigit(number){
//     return `${number}`.split('').map(el => Number(el * el)).join('') * 1
// }
// console.log(typeof squareEveryDigit(number))

// console.log(-1 * 1)
//*************************** */

// let x = 'I have 75 cans of beer'
// console.log(parseInt(x.slice(7,9)) + 5)
//************************************** */
// let num = 9119
// function squareDigits(num){
//     return Number(("" + num).split("").map(function (val) { return val * val;}).join(""));
//     }
//     console.log(squareDigits(num))
//******************************************** */
//  let string = "dude where is my car" // vowel count = 6

// function vowelCount(string){
//     let vowels = 0;
//     let vowel = ['a','e','i', 'o', 'u']
//     for(let i in string){
//         if(vowel.includes(string[i]) ){
//             vowels += 1
//         }
//     }
//     return vowels
// }
//console.log(vowelCount(string))
// let str = 'ron'
// function tad(str){
//     if(str[0] === 'a' || 'e'){
//         return true
//     }
//     return false
// }
// console.log(tad(str))
// console.log(str[0])
// console.log('r' === 'a')
//***************************************** */

// let num = '17 66 2 89 107 12'

// function highestLowest(num){
//     const numArr = num.split(' ')
//     return `${Math.max(...numArr)}, ${Math.min(...numArr)}`
// }
// console.log(highestLowest(num))

//************************** */

// const arr1 = [12, 'car', false, 45, 'peaches']
// const arr2 = ['car', 'beaches', 'windows', 'joined']
// arr2.push(...arr1)
// console.log(arr1)
// console.log(arr2)

//******************************************** */

// let numbers = '18 27 14 109'

// function highestAndLowest(numbers) {
//     numbers = numbers.split(' ')
//     return `${Math.max(...numbers)}, ${Math.min(...numbers)}`

// }

// console.log(highestAndLowest(numbers))
//***************************************************************** */

// let string = "dude where is my car"

// function vowelCount(string){
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     return string.split('').filter(el => vowels.includes(el) ).length
// }
// console.log(vowelCount(string))

//*************************************** */

// let num = 8118

// function squareEveryDigit(num){
//     return Number(num.toString().split('').map(el => el * el).join(''))
// }
// console.log(squareEveryDigit(num))

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// let word1 = "car"
// let word = "boat"

// function middleChar(word){
//     return word.length % 2 === 0 ? word[word.length/2-1] + word[word.length/2] : word[Math.floor(word.length/2)]
// }

// console.log(middleChar(word))

//********************** */

// let aa = true
// let a = false

// function boolean(a){
//     if(a === true){
//         return 'Yes'
//     }
//     return 'No'
// }
// console.log(boolean(a))

//********************************** */

