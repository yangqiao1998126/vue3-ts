//类型断言的方式 告诉编译器 我知道自己是什么类型
//语法
//1. <类型>变量名
//2. 值 as 类型
function aaa(str) {
    if (str.length) {
        //  return (<string>str).length
        return str.length;
    }
    else {
        return str.toString().length;
    }
}
