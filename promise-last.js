function dummyPromise(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve("Chanda");
        }, 7000);
    })
}

function promiseA(){
    return new Promise(function(resolve, rej){
        setTimeout(function(){
            resolve("Subham Kumar");
        }, 7000);
    })
}
 
console.log("start of file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
    let y = dummyPromise();
    y.then(function promiseY(value){
        console.log("Whose's Promise ?" , value);
    })
}, 0);

let x = Promise.resolve("Aditya Kumar");
x.then(function promiseX(value){
    console.log("Whose's Promise ?" , value);
})

setTimeout(function timer2(){
    console.log("Timer 2 done");
    let a = promiseA();
    a.then(function promiseA(value){
        console.log("Whose's Promise ?" , value);
    })
}, 0);

console.log("end of file");