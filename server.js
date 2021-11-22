let PORT = process.env.PORT || 8000;
let express = require("express");
let app = express();

let http = require("http");
let server = http.Server(app);

app.use(express.static("client"));

server.listen(PORT, function() {
  console.log('Dictionary server is running');
});
