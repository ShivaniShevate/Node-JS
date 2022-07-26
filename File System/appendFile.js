//Write a program to read a file(text) & add/append the information and save it 
// read the file again and print it.

let fs = require("fs")
let buffer = Buffer.alloc(1000)

fs.open('open.txt',function(err,data)
{
    if(err)
    {
        console.error(err)
    }
    else
    {
        console.log("file opened successfully");
    }

    fs.appendFile("open.txt","\naddress = mexico",function(err)
    {
        if(err)
        {
            console.error(err)
        }
        else
        {
            console.log("data is appended")
        }

        fs.read(data,buffer,0,buffer.length,0,function(err,bytes)
        {
            if(bytes>0)
            {
                console.log(buffer.slice(0,bytes).toString());
            }
        })
    })
})