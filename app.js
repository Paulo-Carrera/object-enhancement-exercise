
//  SAME KEYS AND VALUES


//      function createInstructor(firstName, lastName){
//          return {
//            firstName: firstName,
//            lastName: lastName
//          }
//        }


//ES2015 VERSION :

const createInstructor = (firstName , lastName)=> {
    return {
        firstName ,
        lastName 
    }
}
console.log(createInstructor('Paulo' , 'Carrera'));
//  {firstName: 'Paulo', lastName: 'Carrera'}



//----------------------------------------------------------------------------------------------------------------

//  COMPUTED PROPERTY NAMES

var favoriteNumber = 42;
//  
//  var instructor = {
//    firstName: "Colt"
//  }


//ES2015 VERSION :

let instructor = {
    firstName : '',
    lastName : '',
    favoriteNumber : '',
}

instructor['firstName'] = 'Brad';
instructor['lastName'] = 'Pitt'
instructor['favoriteNumber'] = 14; 
//  {firstName: 'Brad', lastName: 'Pitt', favoriteNumber: 14}



//----------------------------------------------------------------------------------------------------------------

//  OBJECT METHODS

//      var instructor = {
//          firstName: "Colt",
//          sayHi: function(){
//            return "Hi!";
//          },
//          sayBye: function(){
//            return this.firstName + " says bye!";
//          }
//        }


//ES2015 VERSION :


let instructor2 = {
    firstName : 'Colt',
    sayHi(){
        return "Hi" ;
    },
    sayBye(){
        return this.firstName + "says bye!" ;
    }
}
//   instructor2.sayHi()
//   'Hi'




//----------------------------------------------------------------------------------------------------------------

//  createAnimal function 

const createAnimal = (species , verb , noise )=> {
    return {
        species ,
        // [verb] : noise
        [verb](){
            return noise ;
        }
    }
}


const dog = createAnimal('dog', 'bark', 'woof');
//  {species: 'dog', bark: ƒ}
console.log(dog.bark())
//  woof
