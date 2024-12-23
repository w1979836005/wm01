/*
1.函数重载
 */
function hello(name:string) :string
function hello(num:number) :string
function hello(value:string|number): string {
    if(typeof value === 'string') {
        return 'hello ' + value;
    }

    if(typeof value === 'number') {
        return (13 + value).toString();
    }
}

console.log(hello('李白'))

/*
2.接口继承
 */
interface Pro{
    pro1:string
    pro2:number
}

interface Person extends Pro{
    name:string
}

const person:Person = {
    name:'李白',
    pro1:'hello',
    pro2:13
}

console.log(person)

/*
3.类
 */