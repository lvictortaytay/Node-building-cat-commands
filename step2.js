const fs = require("fs")
const process = require("process")
const axios = require("axios")


const path = process.argv[2]

let cat = function(path){
    fs.readFile(`${path}` , "utf8" , (err,data) =>{
        if(err){
            console.log(`ERROR: cannot read file ${path}`)
            process.kill(0)
        }
        console.log(data)
    })
    
}


// cat(path)



async function webCat(url){

    
    try{
        let resp = await axios.get(`${url}`)
        console.log(resp.data)
    }catch(err){
        console.log(`ERROR: cannot find url ${url}` ,err)
        process.exit(0)

    }

}
const argUrl = process.argv[2];
if(argUrl.slice(0,4) === "http"){
    webCat(argUrl)
}else{
    cat(argUrl);
}