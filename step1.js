const fs = require("fs")


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


cat(path)