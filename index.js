const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

const questions = ["what is your Github username?", 
"What is your project title?", 
"Please write a description about your project",
"Would you like a Table of Contents?",
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
        type: "input",
        name: "tableOfContents",
        message: questions[3]
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
        // const queryUrl = `https://api.github.com/users/${username}/events/public`;

        console.log(data);

        // axios.get(queryUrl).then(function(res) {
        //     // const repoNames = res.data.map(function(repo) {
        //     //   return repo.name;
        //     // console.log(res);
        //     });
    



      });     

// inquirer.prompt([
//     {
//       type: "input",
//       name: "githubName",
//       message: questions[0]
//     },
//     {
//         type: "input",
//         name: "description",
//         message: questions[0]
//       },
    
//     {
//       type: "checkbox",
//       message: "What languages do you know?",
//       name: "stack",
//       choices: [
//         "HTML", 
//         "CSS", 
//         "JavaScript", 
//         "MySQL"
//       ]
//     },
//     {
//       type: "list",
//       message: "What is your preferred method of communication?",
//       name: "contact",
//       choices: [
//         "email",
//         "phone",
//         "telekinesis"
//       ]
//     }
//   ]).then(function(data) {
  
//     var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
//       if (err) {
//         return console.log(err);
//       }
  
//       console.log("Success!");
  
//     });
//   });
  

//  console.log(questions[0]);
function writeToFile(fileName, data) {
}

