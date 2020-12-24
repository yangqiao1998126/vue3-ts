// 类    类的类型可以通过接口来实现
//接口和接口之间叫继承， 类和接口之间叫实现
//定义一个接口
interface Lei {
    aaa()
}

interface Lei2 {
    bbb()
}

//
class Person implements Lei {
    aaa() {
        console.log('11111')
    }
}

var person = new Person()
person.aaa()


//一个类 可以被多个接口进行约束
class Person2 implements Lei, Lei2 {
    aaa() {
    }

    bbb() {
    }
}

var t = new Person2()
t.aaa();
t.bbb()

//接口可以继承其他的多个接口
interface ExtendInterface extends Lei, Lei2 {

}