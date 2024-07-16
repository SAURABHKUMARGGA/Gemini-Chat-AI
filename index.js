require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const route = require("./Router/route");
const app = express();
let genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"})

app.use("/", route);

// async function run(){
//     const prompt = "hi";

//     const result = await model.generateContent(prompt);
//     const response = await result.response.text();

//     console.log(response);
// }

// run();
app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});

