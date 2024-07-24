///////////////////////////////////////////
//Class
//////////////////////////////////////////
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return "i am ".concat(this.name);
    };
    Person.prototype.tellMyAge = function () {
        return "i am ".concat(this.age, " years old");
    };
    return Person;
}());
///////////////////////////////////////////
//Programme
//////////////////////////////////////////
var Person1 = new Person('Jhon', 35);
console.log(Person1.tellMyAge);
