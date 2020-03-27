const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
// const api = require("./utils/api.js");
// const generateMarkdown = require(".utils/generateMarkdown.js")

const questions = ["what is your Github username?", 
"What is your project title?", 
"Please write a description about your project",
"What kind of license should your project have?",
"What commmand should be used to install dependencies?",
"What do you want the user know about using this repo?",
"What commmand should be used to run tests?",
"What does the user need to know about contributing to the repo?"
];

inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: questions[0]
    },
    {
        type: "input",
        name: "title",
        message: questions[1]
    },
    {
        type: "input",
        name: "description",
        message: questions[2]
    },
    {
        type: "list",
        name: "license",
        message: questions[3],
        choices: [
            "MIT",
            "APACHE 2.0", 
            "GPL 3.0", 
            "BSD 3",
            "None"
          ]
    },
    {
        type: "input",
        name: "install",
        message: questions[4]
    },
    {
        type: "input",
        name: "usage",
        message: questions[5]
    },
    {
        type: "input",
        name: "tests",
        message: questions[6]
    },
    {
        type: "input",
        name: "contributions",
        message: questions[7]
    }
]).then(function(data) {
    const {username, title, description, license, install, usage, tests, contributions} = data;
    const queryUrl = `https://api.github.com/users/${username}/events/public`;

    axios.get(queryUrl).then(function(res) {
        const avatarUrl = (res.data[0].actor.avatar_url);
        
        fs.writeFile("README.md", `#${username}`, function(err) {
            if (err) {
                return console.log(err);
            }

    });
  });
});
