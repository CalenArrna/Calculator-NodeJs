//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser({extended: true}));

app.get("/", (req, res) => {
  console.log("User is on root page.");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log("User posted an input!");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result is: " + result);
});

app.get("/bmicalculator", (req, res) => {
  console.log("User is on BMI page.");
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  console.log("User posted BMI data.");
  var height = req.body.height;
  var weight = req.body.weight;

  var bmi = weight / Math.pow(height / 100, 2);
  res.send("Your bmi data is: " + bmi);
});

app.listen(3000, () => console.log("App is running on port: 3000"));
