const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Display registration form
app.get("/", (req, res) => {
    res.render("index");
});

// Handle registration
app.post("/register", (req, res) => {
    const username = req.body.username;
    const age = Number(req.body.age);

    if (!username || username.length < 3) {
        return res.render("result", {
            success: false,
            message: "Username must be at least 3 characters long.",
            username: username || "",
            age: req.body.age || ""
        });
    }

    if (!req.body.age || age < 18 || age > 60) {
        return res.render("result", {
            success: false,
            message: "Age must be between 18 and 60.",
            username: username,
            age: req.body.age || ""
        });
    }

    res.render("result", {
        success: true,
        username: username,
        age: age
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});