// "use strict";

// * if you've used "use strict" then normal function and anonymous function(not the arrow one) then this will not work 
// ? wheneEver you see this right? it depends on how you're calling the functions
// ! arrow function depends on its parent function's this and other's are not ,others are depend on where it is used

function normalFunction() {
    console.log(this)
}

var anonymousFunc = function () {
    console.log(this)
}
const arrowFunction = () => {
    console.log(this)
}

normalFunction()  // if you've used "use strict" then undefined else WINDOW OBJECT 

anonymousFunc()// if you've used "use strict" then undefined else WINDOW OBJECT 

arrowFunction()// if you've used "use strict" OR not it will return WINDOW OBJECT


// -------------------------------------------------------------------------------------------------------------

console.log("----------------------------------------------------------------------------------")


// * you're using this in function for OBJECT then IT BEHAVES DIFFRENTLY , 

var obj = {
    fn1: function () {
        console.log(this) //? If function is anonymous then it will print the PARENT object 
    },
    fn2: () => {

        console.log(this) //? If function is arrow then it will print the window object as , In arrow function : its lexical parent object's this is binded to the function

    },
    fn3: function () {  //if parent function is anonymous then its children, anonymous function and normal function this will print window and arrow functions will print object ,as it takes its parent lexical this 
        function normalFunction() {
            console.log(this) //  if "use strict " is used then it'll return undefined else ,it'll reutrn Window as its parent's this is  WINDOW ,so it is window too 
        }

        var anonymousFunc = function () {
            console.log(this) //  if "use strict " is used then it'll return undefined else ,it'll reutrn Window as its parent's this is  WINDOW ,so it is window too 
        }
        const arrowFunction = () => {
            console.log(this)// obj
        }

        normalFunction()

        anonymousFunc()

        arrowFunction()
    },
    fn4: () => {//if parent function is arrow function then its children, anonymous function and normal function this will print window and arrow functions will print object ,as it takes its parent lexical this 
        function normalFunction() {
            console.log(this)// if "use strict " is used then it'll return undefined else ,it'll reutrn Window as its parent's this is  WINDOW ,so it is window too 
        }

        var anonymousFunc = function () {
            console.log(this)// if "use strict " is used then it'll return undefined else, it'll reutrn Window as its parent's this is  WINDOW ,so it is window too 
        }
        const arrowFunction = () => {
            console.log(this) // window as its parent is binded to window plus use strict doesn'nt matter
        }

        normalFunction()

        anonymousFunc()

        arrowFunction()
    }
    ,
    fn5: function () {
        const arrowfunction = () => {
            function normalFunction() {
                console.log(this) //window 
            }

            var anonymousFunc = function () {
                console.log(this)//window 
            }
            const arrowFunction = () => {
                console.log(this) //obj
            }

            normalFunction()

            anonymousFunc()

            arrowFunction()
        }
        arrowfunction()
    }
}
console.log("-------fn1")
obj.fn1();
console.log("-------fn2")
obj.fn2();
console.log("-------fn3")
obj.fn3();
console.log("-------fn4")
obj.fn4();
console.log("-------fn5")
obj.fn5();


// -------------------------------------------------------------------------------------------------------------

console.log("----------------------------------------------------------------------------------")
var obj2 = {
    firstName: "John",
    printLastName: function () {
      return  this.lastName
    },
    FirstName: ()=> {
// here if you use arrow FUNCTION AND PRINT this.firstName then it will show undefined as here this is window and window.firstname is not available
        return this.firstName
    }
}
var obj3 = {
    lastName: "Doe"
}
const printFirstName = function () {
    console.log(this.firstName + " "+obj2.printLastName.call(obj3) )
}
printFirstName.call()
printFirstName.call(obj2)