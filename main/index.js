// THIS IS THE STARTING PART OF THE NODE JS
const fs = require("fs");
const path = require("path");

// CREATE REPOSITORY 
fs.mkdir(path.join(__dirname, "/posts"), (err) => {
     if (err) {
          console.log(err);
          console.log("FOLDER WITH THE NAME ALREDY EXSITS");
          return;
     }
     console.log("POST FOLDER CREATED")
});