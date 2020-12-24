//接口是对象的状态和行为的约束  是一种类型是一种规范是

//定义一个接口 作为 person对象的类型使用 约束 person对象的属性



interface PersonInterface {
  readonly  id:number,   //只读
    aaa?: string,   // ?  代表可有可无
}

let obj :PersonInterface={
    id:1,
   // aaa:'333'
}