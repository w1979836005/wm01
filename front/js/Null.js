let myObj = null;
console.log(typeof myObj);

let name;
console.log(name);
console.log(typeof name);

// console.log(a);
console.log(typeof a);

/*
 @author king
 */
// function foo(name) {
//    return  name = name || "heiehei";
// }

//es6写法
function foo(name = 'heihei') {
    return name;
}

console.log(foo("12312"));