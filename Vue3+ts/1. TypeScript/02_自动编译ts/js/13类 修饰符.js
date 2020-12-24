//类修饰符 主要描述 类中的成员的属性、函数等 的可访问性
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.fun = function () {
        console.log('Person,,,,,');
    };
    return Person1;
}());
var per = new Person1('名字1');
