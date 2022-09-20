const express = require("express");

const app = express();

app.get("/home", (req, res) => {
   res.send("This is home page.");
});

app.post("/out", (req, res) => {
   res.send("This is home page with post request.");
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});