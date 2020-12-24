//浅拷贝
  //方法1   利用es6中的方法
    function clone1(target) {
        if(Array.isArray(target)){
            return [...target]
            // return target.slice()
            // return target.filter(() => true)
            // return target.map(item => item)
        }else if(target.constructor == Object){
            return {...target}
        }else {
            return target
        }
    }
    


function getDataType(arg) {
    return Object.prototype.toString.call("2222").slice(8,-1)
}
    
//深拷贝
var obj = {
    a:1,
    b:{
        bb:1,
        bc:{
            bbb:"bbb"
        }
    },
    c:function () {

    }
}
    //方法1  大众乞丐版
            //函数属性会丢失 循环引用会报错
        function deepclone1(target) {
                return JSON.parse(JSON.stringify(target))
        }

        var dep1 = deepclone1(obj)
        // dep1.a = 2
        // dep1.b.bb = 33
        // dep1.b.bc.bbb = 99933
        //console.log(obj,dep1)
    //方法2 面试基础版本
        //console.log(['e','r'].hasOwnProperty(2))
            //解决函数属性会丢失的问题
        function deepClone2(target){
            var type = getDataType(target)
            if(type ==='Object' || type === 'Array'){
                let cloneTarget =  type === 'Array' ? [] : {}
                for(let flag in target){
                    if(target.hasOwnProperty(flag)){
                        cloneTarget[flag] = deepClone2(target[flag])
                    }
                }
                return cloneTarget
            }else{
                return target
            }
        }
        var dep1 = deepClone2(obj);dep1.a = 2;dep1.b.bb = 33;dep1.b.bc.bbb = 99933;

    //方法3   面试加强版 循环引用会丢失

console.log([1, 2, 3, [4],[{a:1}]].toString().split(',').map(item => +item));;