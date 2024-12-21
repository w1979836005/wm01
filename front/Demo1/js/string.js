// var a = 'abcde';
// var b = '时间机器研究所';
// var c = '123123';
// var d = '哈哈哈哈';
// var e = '';
//
// // var f = haha;//不打分号会报错
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// // var f = 'haha";单引号和双引号不能混用
//
// console.log(a.length);
//
// var h = a + b;
// console.log(h);
//
// var name = '张三';
// var age = '18';
//
// console.log('我是'+name+age+'heihei');//传统字符串拼接
// console.log(`我是${name}${age}hahah`);//es6模板字符串


//模板字符串方便而且可以换行
const a = 5;
const b = 10;

console.log('this is ' + (a + b) + 'and \n not ' + (2 * a + b) + '.');
console.log(`this is ${a + b} and 
not ${2 * a + b}`);

const result = {
    name:'张三',
    age:'28',
    sex:'男',
};

const html = `<div>
        <span>${result.name}</span>
        <span>${result.age}</span>
        <span>${result.sex}</span>
</div>`;
console.log(html);


function getName() {
    return 'baidu';
}

console.log(`https://www.${getName()}.com`);


var flag = true;
console.log(flag);
