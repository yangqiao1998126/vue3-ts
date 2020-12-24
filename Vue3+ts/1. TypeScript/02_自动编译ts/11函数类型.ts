//通过接口的方式 实现函数的类型

    //定义一个接口 作为函数的类型使用
interface funType {
    (a:string,b:string) : boolean
}

// function f :funType(a,b){
//     return b >0
// }

let fun  : funType= function (a,b) {
    return a.search(b) >0
}