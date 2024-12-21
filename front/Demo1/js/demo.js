function div() {
    console.log(3 % 5);
}

function demo2(){
    //js中的都是二进制运算，如果出现小数点位就补准却了
    let a =  1 + ((2 * 3) % 4) / 3;
    console.log(a);
}

function demo3() {
    //因此不要直接计算两个浮点数，对于数据运算建议一把梭，都是用库函数
    console.log(0.1 + 0.2);
    console.log(0.07 * 100);
}

function demo4 () {
    result = 1 + 2 + '3';
    result2 = '1' + 2 + 3;
    console.log(result);
    console.log(result2);
}

let buffer = '';
function  print(text) {
    buffer += text;
    buffer += ' ';
}

function printLne(){
    console.log(buffer);
    buffer = '';
}
function demo5() {
    for(let i = 1; i < 10; i ++) {
        for(let j = 1; j < 10 && j <= i; j ++) {
            print(`${i}*${j}=${i * j}`);
        }
        printLne();
    }
}
function demo6() {
    const person = {
        name:'Gaoqiao',
        age:38,
        sex:'男',
        favor:['阅读','羽毛球'],
        sayHi:function () {
            console.log(`我叫${this.name}`);
        }
    }
    person.sayHi();
}

function demo7() {
    let obj1 = new Object();
    obj1.test = undefined;

    let obj2 = new Object();
    obj2.name='Gaoqiao';

    obj1.test = obj2;
    console.log(obj1.test.name);
}
function demo8() {
    let a = 1;
    let b = a;
    b = 2;
    console.log(a+' '+b);

    let obj1 = new Object();
    obj1.name = 'Gaoqiao';

    let obj2 = new Object();
    obj2 = obj1;//对象放在堆内存中，所以是地址拷贝

    obj2.name = '1';

    console.log(obj1.name);
}

function demo9() {
    var str = 'Gaoqiao';
    str.aaa = 13;
    console.log(typeof str);
    console.log(str.aaa);
}

function demo10() {
    let strObj = new String('Gaoqiao');
    strObj.aaa = 123;
    console.log(strObj);
    console.log(typeof strObj);
    console.log(strObj.aaa);
}

function demo11() {
    let str1 = 'Gaoqiao';
    let str2 = new String('Gaoqiao');

    let num = new Number(3);
    let bool = new Boolean(true);

    console.log(typeof str1);
    console.log(typeof str2);

    let bool1 = new Boolean(true);
    let bool2 = new Boolean(true);
    /*
    使用 == 时，JavaScript会进行类型转换，这可能导致一些难以调试的问题。
    使用 === 时，不会进行类型转换，比较更为严格和直观。
     */
    console.log(bool === bool2);

    //这里有隐shi'zi
    var str = 'qianguyihao';
    console.log(str.length); // 打印结果：11

    // 步骤（1）：把简单数据类型 string 转换为 引用数据类型  String，保存到临时变量中
    var temp = new String('qianguyihao');

    // 步骤（2）：把临时变量的值 赋值给 str
    str = temp;

    //  步骤（3）：销毁临时变量
    temp = null;
}

//字符串常见方法
/*
字符串的所有方法，都不会改变原字符串（字符串的不可变性），操作完成后会返回一个新的值。
 */
function demo12() {
    const str = 'abcedea';

//给字符查索引(索引值为0,说明字符串以查询的参数为开头)
    console.log(str.indexOf('c'));
    console.log(str.lastIndexOf('c'));

    console.log(str.indexOf('a'));
    console.log(str.lastIndexOf('a'));

    const name = 'qianguyihao';

    console.log(name.indexOf('yi')); // 打印结果：6


    var str1 = 'qianguyihao';
    result = str1.indexOf('a', 3); // 从下标为3的位置开始查找 'a'这个字符 【重要】

    console.log(result); // 打印结果：9
}
function demo13() {
    const str = "qianguyihao";

    let index = str.indexOf('a');
    let num = 0;
    while(index != -1) {
        console.log(index)
        num ++;
        index = str.indexOf('a', index + 1);
    }

    const name = 'qianguyihao';

    console.log(name.search('yi')); // 打印结果：6
    console.log(name.search(/yi/i)); // 打印结果：6
}

function demo14() {
    let arr = [];
    let arr2 = [1,2,3];

    console.log(arr2);

    let arr1 = new Array(3);
    arr1[0] = 1;
    arr1[1] = 2;
    arr1[2] = 3;
    console.log(arr1);

    console.log(arr1.length);
}


function sum(a, b) {
    return a + b;

}

const fun2 = function (a, b) {
    return a + b;
}

// (function (){
//     console.log("立即执行函数");
// })();
