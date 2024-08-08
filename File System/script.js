const fs = require('fs');


// fs.writeFile("index.txt","hey, this is index.js ",(err)=>{
//     try {
//         console.log("Index.js created sucsesfully");
//     } catch (error) {
//         console.log(error);
//     }
// });

// fs.readFile("index.txt","utf8",(err,data)=>{
//     if(err){
//         console.error(err);
//         return
//     }else{
//         console.log("this is Data of file", data);
//     }
// });
// fs.appendFile("index.txt","data is appended",(err)=>{
//     err ? console.error(err) : console.log("data is append");
// });
// fs.mkdir("new folder",err=>{
//    err ? console.error(err) : `folder is created`
// });

// fs.readdir("new folder",{withFileTypes: true},(err,file)=>{
//     err ? console.error(err) : console.log(file);
    
//     //when we use {withFileTypes: true} that time it show which is file and which is folder using 1 and 2 , 1mean file and 2 means folder
// })
// fs.rename("index.txt","hey.txt",(err)=>{
//     err ? console.error(err) : console.log("rename sucessfully");
    
// });

//use fs.rm insted using fs.rmdir
fs.rm("./new folder/xyz",{recursive: true},(err)=>{
   err ? console.error(err) : `folder is created`
});

// fs.unlink("hey.txt",(err)=>{
//     err ? console.error(err) : console.log("rename sucessfully");
    
// })