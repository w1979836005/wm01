// //1.变量和常量
// {
//     let count = 0;
//     count ++;
//
//     //这是一个常量
//     const BASE_URL = 'http://www.baidu.com/api';
// }
//
// //2.模板字符串
// {
//     const str = '123';
//     const str2 = `haha${str}
//     sdafasdfsda
//     fasdfda`
//     console.log(str2);
// }
// //3.解构赋值
// {
//     const [a, b, c] = [1, 2, 3];
//     console.log(a, b, c);
//     //剩余项才能使用... 这是在等号前面
//     const {username, age:userAge, ...otherinfo} = {
//         username:'Gaoqiao',
//         age:18,
//         gender:'男',
//         phone:'123'
//     }
//     console.log(username, userAge, otherinfo);
// }
// //4.数组和对象扩展
// {
//     //...这是在等号后面
//     const arr1 = [1,2,3];
//     const arr2 = [4,5,6];
//     const arr3 = [...arr1, ...arr2];
//     console.log(arr3);
//
//
//     const obj1 = {
//         a:1
//     }
//     const obj2 = {
//         b:2
//     }
//
//     const obj3 = {
//         name:'Gaoqiao',
//         ...obj1,
//         ...obj2
//     }
//     console.log(obj3);
// }

//4.2数组方法
// {
//     function fn(){
//         // console.log(arguments);
//         Array.from(arguments).forEach(function (item){
//             console.log(item);
//         })
//     }
//     fn(1,2,3)
// }

//4.3对象的方法
/*
因为对象和引用数据类型都是放在堆内存中，所以对象是值传递，而不是引用传递，
所以当我们想要拷贝一个对象的时候，需要用Object.assign()方法 这就是对象的浅拷贝
 */
// {
//     const objA = {
//         name:'Gaoqiao',
//         age:18
//     }
//     const objB = Object.assign({}, objA);
//     objB.name='Gaoqiao2';
//     console.log(objA,objB);
//
//     const objC={
//         gender:'male'
//     }
//
//     const objD = Object.assign({},objA, objC);
//     console.log(objD);
// }

//5.class
// {
//     class Person{
//         constructor(name, age){
//             this.name = name;
//             this.age = age;
//         }
//         sayHi(){
//             console.log(`我的名字叫${this.name},今年${this.age}岁`);
//         }
//     }
//     const a = new Person('Gaoqiao', 18);
//     a.sayHi();
//
//
//     class  B extends  Person {
//         constructor(name, age, gender) {
//             super(name, age);
//             this.gender = gender;
//         }
//         sayHi(){
//             console.log(`我的名字叫${this.name},今年${this.age}岁,我是${this.gender}的`);
//         }
//     }
//     const b1 = new B('Gaoqiao', 18, '男');
//     b1.sayHi()
// }


//6.箭头函数
{
    const getSum1 = n =>n + 3;
    console.log(getSum1(1));

    const getSum2 = (n, m) =>n + m;
    const getSum3 = (n, m, ...other) => console.log(n, m, other);
    getSum3(1, 2, 3, 4, 5);

    const getResult = (arr) =>{
        let sum = 0;
        arr.forEach(item => sum += item);
        return sum;
    }
    console.log(getResult([1,2,3,4,5]));
}