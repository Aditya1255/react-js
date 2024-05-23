function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Fetching Started....");
        setTimeout(function(){
            console.log("Fetching completed");
            let data = "Aditya Kumar";
            resolve(data);
        },3000)
    })
}

let x = fetchData("www.google.com");
console.log("Promise consumed...", x);