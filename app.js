const express = require("express"),
path = require("path"),
app = express();



app.use(express.static(__dirname + '/dist/Volme'))


app.get("/*", function(req,res){
    res.sendFile(path.join(__dirname + '/dist/Volme/index.html'))
});

console.log("Server has started")
app.listen(process.env.PORT || 8080);
