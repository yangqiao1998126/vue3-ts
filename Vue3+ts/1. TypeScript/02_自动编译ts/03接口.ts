//接口 一种约束
( () => {
    //定义一个接口
    interface Person{
        firsrName:String,
        lastName:String
    }
    
    function yy(oo:Person) {
        return oo.firsrName +'___'+oo.lastName
    }
    yy({firsrName:'Jay',lastName:'Chou'})
})()