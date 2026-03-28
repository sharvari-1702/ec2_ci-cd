const express = require("express");
const app = express();

const port = 2005;

app.get("/" , (req ,res) => {
    res.send("Hii , Im Full Stack Developer Intern");
})

app.listen(port , () => {
  console.log(`server is running on ${port}`);
})