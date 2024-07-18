const express = require("express");
const app = express();
app.use(express.json());

app.get("/home", (req, res) => {
  res.send("This is the home page");
});

app.post("/user", (req, res) => {
  const { name, email, password } = req.body;
  res.send(`Name: ${name}, Email: ${email}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Activity running on port ${port}`));
