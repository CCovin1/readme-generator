// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Assuming your generateMarkdown function is in a separate file called generateMarkdown.js
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of the project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'None'],
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your contact email:',
    },
  ];
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing README:', err);
      } else {
        console.log('README generated successfully!');
      }
    });
  }
  // TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
      })
      .catch((err) => console.error('Error initializing app:', err));
  }
  
  // Function call to initialize app
  init();