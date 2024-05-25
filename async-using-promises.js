function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Downloading Started...");
        setTimeout(function(){
            console.log("Downloading Completed...");
            let data = "Aditya Kumar";
            resolve(data);
        },3000)
    })
}

function uploadData(file){
    console.log("Data Uploading started...");
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Uploading Completed...");
            resolve("---Uploaded---");
        },3000)
    })
}

function writingData(value){
    console.log("Data writing started...");
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Writing Completed...");
            resolve("read.txt");
        },3000)
    })
}

let Downloading = fetchData("www.google.com");
let x = Downloading.then(function(value){
    return value;
})
.then(function(value){
    return writingData(value);
})
.then(function(value){
    return uploadData(value);
})
.then(function(){
    console.log("Done");
})

