var a = 1.11101;
var b = 12;

console.log(typeof a);
console.log(typeof b);


console.log('abc'/18);

console.log("我"+"爱"+"你");
console.log("我+爱+你");
console.log(1+2+3);

//虽然程序可以帮我们隐士转换，但是为了代码可读性，我们需要自己转换好
var a = '1';
var b = 2;
console.log(typeof (a + b));

//使用js计算高精度的运算会出错，因为小数在二进制里是无穷的，所以需要调用第三方库
var f1 = 0.1;
var f2 = 0.2;
console.log(f1 + f2);

//使用cdn引入