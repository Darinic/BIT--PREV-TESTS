// let user = {
//     name: ['Petras', 'Petraitis'],
//     age:23,
//     gender:'male',
//     interests:['web technology', 'traveling'],
//     greeting:function() { //Geteris (mes gaunam objekto varda)
//         console.log(`Labas as esu ${this.name[0]}`)
//     },
//     setAge:function(age) { //seteris
//         this.age=age;
//     }
// }

// console.log(user.name) //noriu iskviesti objekto savybe
// user.age=33; //bloga praktika
// user.setAge(55) //gera praktika
// console.log(user.age)
// user.greeting() //noriu iksviesti objekto metoda

// function CreateUser(name,email,active) {
//     this.name = name;
//     this.email =email;
//     this.active =false;
// }

// CreateUser.prototype.showName = function() {
//     alert(`mano vardas yra ${this.name}`)
// }

// let userOne = new CreateUser('Petras', 'petras@gmail.com');

// console.log(userOne)

// import User from "./modules/User";

// let userOne1= new User('Jonas', 'jonas@gmail.com', 'IT')

// userOne1.setName('Jonas')
// userOne1.printInfo()

import Student from "./modules/Student";

let newStudent= new Student('Jonas','Jonaitis@gmail.com','BIT','JS');

console.log(newStudent.getInfo())