const express = require("express");
const path = require("path");

const app = express();
const PORT = 2005;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route to show login page
app.get("/", (req, res) => {
  res.render("login    ");
});

// Handle login form submit
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Email:", email);
  console.log("Password:", password);

  res.send(`
    <h2>Login Successful</h2>
    <p>Email: ${email}</p>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});