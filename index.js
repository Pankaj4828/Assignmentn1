const fs=require("fs");
fs.writeFile('file.txt',"hello world",(err)=>{
   
    console.log(err)
});    //create a  file name as file.txt
fs.readFile('file.txt','utf8',(err,item)=>{  //read the content of file
    console.log(item);
})
fs.appendFile('file.txt',"hello pankaj",(err)=>{    //file is updated content
    if(!err){
        console.log("file is updated")
    }
})
fs.rename('file.txt','xyz.txt',(err)=>{      //file is rename 
    console.log("file name is updated");
})
// fs.unlinkSync('file.txt')    //file is deleted

