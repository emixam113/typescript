///////////////////////////////////////////
//Class
//////////////////////////////////////////


class Person {
    private name: string; 
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
  
    tellMyName(): string {
      return `i am ${this.name}`;
    }
  
    tellMyAge(): string{
    return `i am ${this.age} years old`;
   }

  }
///////////////////////////////////////////
//Programme
//////////////////////////////////////////

const Person1 = new Person('Jhon', 40 );
const Person2 = new Person('Mary',  35);

console.log(Person1.tellMyName(), Person2.tellMyAge())
console.log(Person1.tellMyAge(), Person2.tellMyName())