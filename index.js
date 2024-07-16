require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

let genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"})


async function run(){
    const prompt = "hi";

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    console.log(response);
}

run();

