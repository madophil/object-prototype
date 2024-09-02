/***
 * function myObject() {
    this.name='ben'
}

let nameObj = new myObject()

myObject.prototype.getProperty=function (param){
    if(this[param]){
        console.log(this[param])
    }
    else{
        console.log('cant get it')
    }
}

console.log(nameObj)
nameObj.getProperty('age')
myObject.prototype.addProperty = function(param1, param2){
    this[param1]=param2
}
nameObj.addProperty('age', 25)
console.log(nameObj)*/

/**
 * array of supper heros
 * inside that array we will have object (name, and power and weakness)
 * initially the array should be empty. find a way to add the supper heros to that array
 * add 2 prototype functions to the object (i) to add property (ii) remove property from the object
 * 
 * 
 */

let superhero =[];
let superhero1 ={
    'name':'Ananse',
    'strenght':'intelligence',
    'weakness':'greed',
};
let superhero2={
    'name':'Kofi',
    'strenght':'fast runner',
    'weakness':'pepper',
};
let superhero3 ={
    'name':'Akua',
    'strenght':'beauty',
    'weakness':'boyz',
};
let superhero4 ={
    'name':'Ama',
    'strenght':'wasitpower',
    'weakness':'greed',
};
let superhero5 ={
    'name':'junior',
    'strenght':'fight',
    'weakness':'greed',
};

superhero = [superhero1,superhero2,superhero3,superhero4,superhero5]
console.log(superhero);
function mysuperhero(){

}
let addsuperhero= new mysuperhero
mysuperhero.prototype.addproperty = function(param1,param2){
    this[param1]=param2
}
addsuperhero.addproperty('name','kathey')
console.log(addsuperhero)


