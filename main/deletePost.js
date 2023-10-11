// DELETE POST 
const fs = require("fs");
const path = require("path");

fs.unlink(path.join(__dirname, "/posts", "blogPost.txt"), (err) => {
     if (err) {
          console.log("NO SUCH FILE IS PRESENT IN THE PRESENT TENSE");
          return;
     }
     console.log("FILE DELETED !");
});