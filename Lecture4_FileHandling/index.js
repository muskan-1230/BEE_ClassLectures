const {formatDate,dateConverter} = require("./Helper/date-convertor.js")

let date = formatDate(new Date());
console.log(date);

let localDate = dateConverter(new Date());
console.log(localDate);

const fs = require("fs");

// async approach 
console.log("1");
fs.writeFile("./text.txt", "hello world",(err)=>{                        // this does not return anything , we need callback function 
    console.log(err);                                                   // data is overwritten 
    console.log("done!");
})

console.log("2");

// sync approach
console.log("1");
const result = fs.writeFileSync("./text2.txt","helo world!!!");         // this is void function, does not print abything 
console.log(result);
console.log("2");

fs.readFile("./text.txt","utf-8",(err,data)=>{        // async
    console.log("async -> ",data);
})

// const data = fs.readFileSync("./text.txt","utf-8");  // sync 
// console.log("sync -> ", data)

//to update file 
// fs.appendFile("./text.txt","\nHelooo again",(err,data)=>{
//     console.log("async ->", data);
// })

// fs.appendFileSync("./text.txt","\nthis is pushed ny sync");

// to delete file 
// fs.unlink("./text.txt",(err)=>{
//     console.log(err);
//     console.log("file deleted");
// })