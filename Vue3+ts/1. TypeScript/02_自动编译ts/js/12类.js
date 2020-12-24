//
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.aaa = function () {
        console.log('11111');
    };
    return Person;
}());
var person = new Person();
person.aaa();
//一个类 可以被多个接口进行约束
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.aaa = function () {
    };
    Person2.prototype.bbb = function () {
    };
    return Person2;
}());
var t = new Person2();
t.aaa();
t.bbb();
