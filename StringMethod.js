
// str method
  
let str = 'Ashutosh Maurya is the best Frontend developer'

console.log(str.toLowerCase())

console.log(str.toUpperCase())
// it generally convert str to lower string. it is universal, consistent lowercase conversion
console.log(str.toLocaleLowerCase())
// toLocaleLowerCase()  is especially used in internationalized applications to convert the string
// to lower case. its take local language to convert the string

console.log(str.toLocaleUpperCase())
// is especially used in internationalized applications to convert the string
// to lower case. its take local language to convert the string
console.log(str.toUpperCase())

console.log(str.toString())

let number = 123123323
console.log(number.toString())


let obj = {
    name:'ashu',
    age:24
}
// convert obj to string
console.log(obj, JSON.stringify(obj))

