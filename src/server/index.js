var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

console.log(__dirname);

// Variables for url and api key
const baseUrl = `https://api.meaningcloud.com/sentiment-2.1`;
const apiKey = process.env.API_KEY;
console.log(`Your API key is ${apiKey}`);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// POST Route
app.post("/api", async (req, res) => {
  console.log(req.body);
  const { url } = req.body;
  console.log(url);
  const response = await fetchApi(url);
  res.json(response);
  console.log(response);
});

//Fecth Api

async function fetchApi(url) {
  let completeUrl = `${baseUrl}?key=${apiKey}&url=${url}&lang=en`;
  console.log(completeUrl);

  const response = await fetch(completeUrl);
  try {
    console.log("I am try");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});
