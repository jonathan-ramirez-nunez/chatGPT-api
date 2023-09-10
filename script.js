import { config } from "dotenv"
config()

// can learn which imports to do from openAI documentation
import { OpenAI } from "openai"
import readline from "readline" // a node.js library

const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

const userInterface = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

// userInterface.on() will cause a loop?

userInterface.prompt() // prompt user for input...
userInterface.on("line", async input => { // once they give us input...
    // give that input to gpt...
    const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // version of chatGPT
        messages: [{ role: "user", content: input }],
    })
    console.log(res.choices[0].message.content) // console log out result
    userInterface.prompt() // prompt user for input again
})