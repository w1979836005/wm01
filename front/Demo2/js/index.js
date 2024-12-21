/*
 * @Author: Gaoqiao
 * @Date: 2020-06-03 14:08:06
 */
//1.变量
// var age = 18;
// let age1 = 19;
//
// //2.数据类型
// let str = 'heihei'; //string字符串
// let num = 12;//数字
// let flag = false;//bool
// let myNull = null;//清空
// let myUn;//undefin 是默认值
// console.log(myUn);

//3.运算符
/*
这里需要注意JavaScript都是二进制运算，所以我们需要数学计算都需要使用函数实现
 */
// let sum = 1 - 2 * 4 % 4;
// console.log(sum);
//
// let resultStr = '你好' +'javaScript';
// console.log(resultStr);
//
// let isTrue = 3 > 2;
// console.log(isTrue);
// //两个等号会做类型隐式转换
// console.log(3 === 3);

//4.语句
// if(flase) {
//     console.log('if')
// }
//
// if(true) {
//     console.log('hello world');
// } else {
//     console.log('heheheh');
// }
//
// if(true) {
//     console.log('1');
// } else if(false) {
//     console.log('2');
// } else {
//     console.log('else');
// }

// let Sum = 0;
// for(let i = 1; i <= 100; i ++) {
//     if(i % 2 == 0)
//     Sum += i;
// }
// console.log(Sum);

//函数
// function getSum(a , b) {
//     let sum = 0;
//     for(let i = a; i <= b; i ++) {
//         if(i % 2 == 0)
//         sum += i;
//     }
//     return sum;
// }
//
// let s = getSum(1 , 100);
// console.log(s);

// function getSum(start , end, fn) {
//     let sum = 0;
//     for(let i = start; i <= end; i ++) {
//         if(fn(i))
//         sum += i;
//     }
//     return sum;
// }
//
// let result = getSum(1, 100, function (n) {
//     if(n % 2 == 0) return true;
//     return false;
// })
//
// console.log(result);

// //数组
// let myArr = [1,2,3,4,5];
// // console.log(myArr.length);
// // console.log(myArr);
// // myArr.push(10);
// // myArr.unshift(20);
// // console.log(myArr);
//
// /*
// 两种获取方式
//   1.遍历
//   2.foreach
//  */
//
// // for(let i = 0; i < myArr.length; i ++) {
// //     console.log(myArr[i]);
// // }
// myArr.forEach(function (item, index) {
//     console.log(item);
// })

//自己学会查开发需要的函数

//对象
let myObj = {
    name: 'gaoqiao',
    age: 18,
    sex: '男',
    hobby: ['打球', '看电影'],
    say: function () {
        console.log('我是一个JavaScript程序员');
    }
}
// myObj.say();
// console.log(myObj.name);

for(let key in myObj) {
    console.log(key, myObj[key]);
}
//需要自己使用后续学习