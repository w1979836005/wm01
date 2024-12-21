//1.同步和异步 Promise Async 常见的异步操作：定时器、Ajax
   /*
   当我们使用setIntreal定时任务的时候，
   我们肯定不希望这行代码阻塞我们的后续代码，这时候需要使用异步函数
    */
{
    //异步任务会在当前的同步任务都执行结束后再被触发
    // {
    //     console.log('任务1：...同步');
    //     console.log('任务2：...同步');
    //     setTimeout(()=>{
    //         console.log('任务4：...异步');
    //     },0);
    //     console.log('任务3：...同步');
    // }
    // console.log('------------------------------------------');
    // {
    //     console.log('任务1：...同步');
    //     console.log('任务2：...同步');
    //     console.log('任务3：...同步');
    //     setTimeout(()=>{
    //         console.log('任务4：...异步');
    //     },0); //所以这里的时间是决定异步任务的触发时机的
    // }

    //如果说我们当前异步任务很多，如何确定异步任务的触发时机呢？
    const p1 = new Promise((resolve,reject)=>{
        resolve('任务1成功');
    })
    // console.log(p1)
    // p1.then(data=>{
    //     console.log(data)
    //     return new Promise((resolve,reject)=>{
    //         resolve('任务2成功');
    //     })
    // }).then(data=>{
    //     console.log(data)
    // }).catch(err=>{
    //         console.log(err)
    // })
    //
    //如何给多个then添加catch方法呢
    // p1.then(data=>{
    //     console.log(data);
    //     return new Promise((resolve,reject)=>{
    //         reject('任务2成功');
    //     })
    // },err=>{
    //     console.log(err);
    //     throw new Error('任务1以失败');
    // }).then(data=>{
    //     console.log(data);
    // },err=>{
    //     console.log(err);
    // })
}

//Async
//1.准备一个返回priomise对象函数
{
    function asyncTask() {
        return new Promise((resolve,reject)=>{
            const isSuccess = true;
            if(isSuccess){
                resolve('异步任务2执行成功');
            }else{
                reject('异步任务2执行失败');
            }
        })
    }

//2.为使用await 的函数添加 async
    async function main() {
        console.log('任务1执行成功');
        const data = await asyncTask();
        console.log(data)
        console.log('任务3执行成功');
    }
    main();
}

//2.Proxy


//3.Module