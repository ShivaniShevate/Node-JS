// read file (text) & add a content and save it.

let fs = require("fs");

fs.readFile('input.txt',function(err,data)
{
    if(err)
    {
        console.err(err)

    }
    else{
        console.log(data.toString());
    }

    fs.writeFile('input.txt',"cats are Fluffy",function(err)
    {
        if(err)
        {
            console.error(err)
        }
        else
        {
            console.log("data is written successfully");
        }
    })
})

console.log(`${data}`)