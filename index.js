//Strict Mode
//'use strict'

function MyFunc() {
    return name = "Rehad"
}

//console.log(MyFunc())

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

//console.log(RestFunc(2,4,3,6,5,7,8,9))

//Dynamic Function
let f = function (a){
    return a
}

//console.log(f(10))


// JavaScript Variables
var name = "Rehad"
var name = "Shawn"

let MyName = "Rehad"
MyName = "Shawn"

const City = "Pabna"

//console.log(City)

// Variable Global Scope
let size = "M"

function GlobalScope() {
    //console.log(size)
}
GlobalScope()


// Variable Local Scope
function LocalScope() {
    let size = "M"
    //console.log(size)
}
LocalScope()

// Variable Hosting
color = "Red";
//console.log(color)

var color;

// Loop Concept
let i;
for (i=0;i<=10;i++){
    //console.log(i)
}

// For Loop
let NameArr = ['Rehad','Shawn','Rabbil']
for(let item of NameArr){
    //console.log(item)
}

// JavaScript Object

let Men = {
    name:"Bill Gates",
    Address:"Medina, Washington",
    Age:"68",
    Dress:{
        Shirt:true,
        Pant:true,
        Shoe:true,
        Cap:false
    }
}

console.log(Men['Dress']['Shirt'])























