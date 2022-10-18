import fs from "fs"

//This is a callback
fs.readFile("file.txt","utf8",function (err,data) {
    console.log(data);

})
//promise (then)
fs.readFile("file.txt","utf8").then((err,data => {
    console.log(data);
}) 

//async
const showText = async () => {

}

async function showText() {
const data = await fs.promises.readFileSync("file.txt","utf8")
return data 

}
console.log(showText())





