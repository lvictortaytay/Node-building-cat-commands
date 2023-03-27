const fs = require("fs")
const process = require("process")
const axios = require("axios")


// const path = process.argv[2]



function writeFile(text,out){
    if(out){
        fs.writeFile(out , text , "utf8" , function(err){
            if(err){
                console.log(`cannot write file :${out}`)
                process.exit(0)
            }
            

        })

    }
    else{

        console.log(text)
    }
}


  











let cat = function(path,out){
    fs.readFile(path , "utf8" , (err,data) =>{
        if(err){
            console.error(`CAT ERROR: cannot read file ${path} : ${err}`)
            process.exit(0)
        }
        else{
            writeFile(data, out);
        }
    });
    
}


















async function webCat(url , out){
    try{
        let resp = await axios.get(url)
        writeFile(resp.data, out);
    }catch(err){
        console.log(`webCat ERROR: cannot find url ${url} :${err}`)
        process.exit(0)
    }
}




















const argUrl = process.argv[2];
let out;
let path;
if(argUrl === "--out"){
    out = process.argv[3];
    path = process.argv[4];
 
}else{
    path = argUrl
}


if(path.slice(0,4) === "http"){
    webCat(path,out)
}
else{
    cat(path,out)
}

