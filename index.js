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

//console.log(Men['Dress']['Shirt'])

// For in loop
for(let props in Men['Dress']){
    //console.log(props)
}

// Decision making
if(Men['name'] === "Bill Gates"){
    console.log("First Person Found")
}else if(Men['Bill Gates']){
    console.log("Second Person Found")
}else{
    console.log("No Person Found")
}

// Simple Function
function SimpleFunc() {
    //console.log("Simple Function")
}
SimpleFunc()


// Parameterized functions
function ParameterFunc(value) {
    //console.log(value)
}
ParameterFunc("Parameterized Function")

// Rest Parameter functions
function RestPeraFunc(...item){
    //console.log(item)
}

RestPeraFunc(10,29,30,50)


// Function return
function ReturnFunc(){
    return 100
}

// console.log(ReturnFunc())

// Anonymous functions
const AnonymousFunc = function (){
    //console.log("Anonymous Function")
}
AnonymousFunc()

// Arrow Anonymous functions
const ArrowFunc = () => {
    //console.log("Arrow Function")
}

ArrowFunc()

// ES6 Array
let array = [
    {
       name:"Rehad",
       age:"20",
       city:"Pabna"
    },
    {
        name:"Shawn",
        age:"20",
        city:"Pabna"
    },
    {
        name:"Rabbil",
        age:"40",
        city:"Dhaka"
    }
]

//console.log(Array[2]['name'])

// ES6 Multidimensional Array
let ArrayOne = [
    {
        name:"Rehad",
        age:"20",
        city:"Pabna"
    },
    {
        name:"Shawn",
        age:"20",
        city:"Pabna"
    },
    {
        name:"Rabbil",
        age:"40",
        city:"Dhaka"
    }
]

let ArrayTwo = [
    {
        name:"Rehad",
        age:"20",
        city:"Pabna"
    },
    {
        name:"Shawn",
        age:"20",
        city:"Pabna"
    },
    {
        name:"Rabbil",
        age:"40",
        city:"Dhaka"
    }
]

let ArrayThree = [
    {
        name:"Rehad",
        age:"20",
        city:"Pabna"
    },
    {
        name:"Shawn",
        age:"20",
        city:"Pabna"
    },
    {
        name:"Rabbil",
        age:"40",
        city:"Dhaka"
    }
]

let totalArray = [ArrayOne,ArrayTwo,ArrayThree]
//console.log(totalArray)

// ES6 Map
let myMap = new Map();

myMap.set("name","Rehad")
myMap.set("name2","Rabbil")
myMap.set("name3","Rupom")
myMap.set("name4","Rana")
myMap.set("name5","Roy")
myMap.set("name6","Rehan")

// values() & keys()
// Map() => delete,clear,get,has
//myMap.delete("name")
//myMap.clear()
//console.log(myMap.get("name"))
//console.log(myMap.has("name10"))

for(let item of myMap.keys()){
    //console.log(item)
}


// ES6 Set()
let mySet = new Set()
mySet.add('Bangladesh')
mySet.add('India')
mySet.add('America')
mySet.add('London')
mySet.add('Pakistan')
mySet.add('India')

//Set() => delete,clear,size,values,has
//mySet.delete('Bangladesh')
//mySet.clear()
//console.log(mySet.size)
//console.log(mySet.values())
//console.log(mySet.has('India'))

//console.log(mySet)

// ES6 classes
class myClass{
    myFunc(){
        //console.log("Function one")
    }
    myFuncTwo(){
        //console.log("Function Two")
    }
    myFuncThree(){
        //console.log("Function Two")
    }
}

let Obj = new myClass;
Obj.myFunc()
Obj.myFuncTwo()

// JavaScript Classes
class myClass2 {
    constructor(a,b) {
        this.firstNum = a;
        this.lastNum = b;
    }
    firstFunc(){
        let result = this.firstNum+this.lastNum;
        //console.log(result)
    }
}
let myClassObj = new myClass2(10,20)
myClassObj.firstFunc();


// With static keyword
class StaticClass {
    static staticFunc(){
        //console.log("Hello Static")
    }
}
StaticClass.staticFunc()

// ES6 class inheritance & overriding
class parent{
    Property(){
        console.log(1000)
    }
}

class child extends parent{
    Property(){
        console.log(2000)
    }
}
let childObj = new child();
childObj.Property()

