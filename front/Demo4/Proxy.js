//Proxy
// {
//     const obj = {name:'高桥', age:18};
//     const container = document.querySelector('div');
//     container.textContent = '高桥凉介';
//
//     const p1 = new Proxy(obj, {
//         get(target, property){
//             return obj[property];
//         },
//         set(target, property, value) {
//             obj[property] = value;
//             container.textContent = value;
//         }
//     })
//     p1.name = '李白';
//     console.log(p1.age);
// }

//Module  不同类型的功能放到不同的文件模块 ESM(浏览器) CommonJs(nodejs)
{   //html 引入使用type = 'module'
    // import moduleA from './a';
    // import moduleB from './b';
    //
    // console.log(moduleA);
    // console.log(moduleB);
    // Proxy.js
    import moduleA, { aTitle as aTitleA, aFn as aFnA } from './a.js';
    import moduleB, { aTitle as aTitleB, aFn as aFnB } from './b.js';

    console.log(moduleA); // 默认导出的对象
    console.log(aTitleA); // 命名导出的常量
    aFnA(); // 命名导出的函数

    console.log(moduleB); // 默认导出的对象
    console.log(aTitleB); // 命名导出的常量
    aFnB(); // 命名导出的函数

}
