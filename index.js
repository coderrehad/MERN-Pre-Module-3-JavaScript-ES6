//Strict Mode
//'use strict'

function MyFunc() {
    return name = "Rehad"
}

console.log(MyFunc())

//Spread Operator
let poorCountry = ['Bangladesh','Pakistan','Italy']
let richCountry = [...poorCountry,'America','SriLanka','Singapore']

//console.log(richCountry)


//Without Spread Operator
poorCountry.push(richCountry);

//console.log(richCountry)

//Rest Parameter
function RestFunc(...numbers) {
    return numbers
}

console.log(RestFunc(2,4,3,6,5,7,8,9))

//Dynamic Function
let f = function (a){
    return a
}

console.log(f(10))
