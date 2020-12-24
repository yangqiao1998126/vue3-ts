//类修饰符 主要描述 类中的成员的属性、函数等 的可访问性

class Person1 {
   // public name:string
   //  private name:string  private修饰符 子类也不能访问
    //protected   外部无法访问  子类可以访问
    private name:string
    public constructor(name:string){
        this.name = name
    }

    public fun(){
        console.log('Person,,,,,')
    }
}
var per = new Person1('名字1')