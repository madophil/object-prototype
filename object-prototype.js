function myObject() {
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
console.log(nameObj)
