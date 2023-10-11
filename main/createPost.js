// CREATE POSTS
const fs = require("fs");
const path = require("path");

fs.watchFile(path.join(__dirname, 'posts', 'blogPost.txt'), "HELLO THERE",(err)=> {
     if (err) {
          throw err;
     }
     console.log("FILE CREATED !");
})