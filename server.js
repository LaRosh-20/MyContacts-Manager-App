const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

const port= process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

// console.log("hi")
// app.get('/hi', (req, res) => {
//   res.send('hello world')
// })

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(async () => {
    console.log("MongoDB Connected!");
  })
// respond with "hello world" when a GET request is made to the homepage