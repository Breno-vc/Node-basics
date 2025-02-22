const express = require("express");

const server = express();

server.get("/helloWorld", (req, res) => {
  const { name } = req.query; // query params

  return res.json({
    title: "Hello World",
    message: `First NodeJS project, welcome ${name}!`,
  });
});

server.get("/helloWorld/:name", (req, res) => {
  const { name } = req.params; // route params

  return res.json({
    title: "Hello World",
    message: `First NodeJS project, welcome ${name}!`,
  });
});

server.listen(3000);
