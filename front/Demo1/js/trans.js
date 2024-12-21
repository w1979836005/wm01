// var a = 3;
// var b = a.toString();
// console.log(b);
// console.log(typeof b);
//
// // console.log(3.toString()); toString方法不能使用数字常量
//
// var a1 = '高桥凉介';
// var a2 = 29;
// var a3 = false;
//
// var a4 = [1, 2, 3];
// var a5 = {name:'高桥凉介', age: 20};
//
// var a6 = null;
// var a7 = undefined;
//
// console.log(a5.toString());
// // console.log(a6.toString());  null和undefeated不能toString
// // console.log(a7.toString());
//
//
// //大多数情况下toString不会接受参数,但是如果是一个整数，可以传入一个转换的进制
// let a10 = 255;
// a10 = a10.toString(16);
// console.log(typeof a10);
// console.log(a10);
//
//
// const num1 = 0.000001; // 小数点后面紧跟五个零
// console.log(num1.toString()); // 打印结果："0.000001"
//
// const num2 = 0.0000001; // 小数点后面紧跟六个零
// console.log(num2.toString()); // 【重点关注】打印结果："1e-7"
//
// const num3 = 1.0000001;
// console.log(num3.toString()); // 打印结果："1.0000001"
//
// const num4 = 0.10000001;
// console.log(num4.toString()); // 打印结果："0.10000001"
//
// /*
// parseInt()：将传入的数据当作字符串来处理，从左至右提取数值
// 旦遇到非数值就立即停止；停止时如果还没有提取到数值，就返回NaN。
//  */
// const result = parseInt("132afdsa123");
// console.log(result);
//
// //可以一起转换进制
// var g = '110';
// var num = parseInt(g, 16);
// console.log(num);

// {
//     let a = 3;
// }
// console.log(a)

function testBody(){
    const height = parseFloat(prompt('请输入身高，m'));
    const weight = parseFloat(prompt('请输入体重，kg'));

    const BMI = weight / Math.pow(height, 2);

    if(BMI < 18.5) {
        alert('偏瘦');
    } else if(BMI < 25) {
        alert('正常');
    } else if(BMI < 28) {
        alert('过重');
    } else if(BMI < 32) {
        alert('肥胖');
    } else {
        alert('太胖了');
    }
}

function testBody2(){
    const msg = '1';
    switch (msg) {
        case '1':
        case '2':
            alert('1或2');
            break;
        case '3':
            alert('3');
            break;
        default:
            alert('其他');
    }
}

// let n = 20;
// for(let i = 0; i < n; i ++) {
//     console.log(i + 1);
// }

// let n = 20;
// while(n !== 0) {
//     console.log(n % 10);
//     n = Math.floor(n / 10);
// }

let n = 20;
do {
    n ++;
    console.log(n);
}while(n < 30);