//Create a file, add a text and save it( Employee Information)

let fs = require("fs");

fs.open('open.txt',function(err,data)
{
    if(err)
    {
        console.error(err)

    }
    else{
        console.log("new File created successfully");
    }

    fs.writeFile('open.txt',
    "employee info: \n name = john smith \n age :28 \n employee ID = 101",
    function(err)
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