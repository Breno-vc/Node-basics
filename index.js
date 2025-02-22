const express = require("express");

const server = express();

server.get("/helloWorld", (req, res) => {
  return res.json({
    title: "Hello World",
    message: "Primeiro projeto com Node.js",
  });
});

server.listen(3000);
