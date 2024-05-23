
function fetchData(url, fn){
        console.log("Fetching started....");
        setTimeout(function(){
            let data = "Aditya Kumar";
            console.log("Fetching completed.");
            fn(data);
        }, 3000)
}

function writeData(data, fn){
    console.log("Writing Data....");
    setTimeout(function(){
        console.log("Writing completed...");
        let file = data;
        fn(file);
    })
}


function uploadData(file, fn){
    console.log("Uploading Data...");
    setTimeout(function(){
        console.log("Uploading Completed....");
        let res = true;
        fn(res);
    })

}

fetchData("www.google.com", function(data){
    writeData(data, function(file){
        uploadData(file, function(data){
              console.log(data);
        })
    })
});
