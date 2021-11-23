var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/styles.css"));

app.use(express.static(__dirname));

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});

