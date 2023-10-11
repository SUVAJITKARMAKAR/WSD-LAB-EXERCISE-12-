// UPDATE POSTS
const fs = require("fs");
const path = require("path");


fs.appendFile((path.join(__dirname, "/posts", "blogPost.txt"), (err) => {
     if (err) {
          console.log("THE FILE CAN NOT BE UPDATED !");
          return;
     }
     console.log("FILE UPDATED IN THE FOLDER STURCTURE !");
}));