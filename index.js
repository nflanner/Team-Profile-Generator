// required imports
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

// User input array for the initial managers questions
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the manager\'s employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the manager\'s email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'office',
    },
];

const buildQuestions = [
    {
        type: 'list',
        message: 'What ype of employee would you like to add to your team?',
        name: 'employee',
        choices: [
            "Engineer",
            "Intern",
            "Finished building team"
        ],
    },
];

const employeeQuestions = [
    {
        type: 'input',
        message: 'What is the employee\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the employee\'s employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the employee\'s email?',
        name: 'email',
    },
];

const engineerQuestions =
    {
        type: 'input',
        message: 'What is the employee\'s github?',
        name: 'github',
    };

const internQuestions =
    {
        type: 'input',
        message: 'What is the employee\'s school?',
        name: 'school',
    };

// Function for file writing
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generatedHTML(data), err =>
    err ? console.error(err) : console.log('HTML Initially Stored!')
    );
}

// Function for file appending
function appendToFile(fileName, data) {
    fs.appendFile(fileName, generatedHTML(data), err =>
        err ? console.error(err) : console.log('HTML Appended!')
    );
}

// Function to initialize the app
function init() {
    console.log('working');

    // Ask about manager first
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            console.log(response);
            writeToFile('./dist/generated-HTML.HTML', response);
            console.log('Successfully wrote to file!');
        })

    // Continue building with employees (or finish)
    let buildTeam = true;
    let finalEmployeeQuestions;
    while(buildTeam) {
        // check to build team or not
        inquirer
            .prompt(buildQuestions)
            .then((response) => {
                if(response == 'Finished building team') {
                    buildTeam = false;
                } else if (response == 'Engineer') {
                    finalEmployeeQuestions = employeeQuestions.push(engineerQuestions);
                } else {
                    finalEmployeeQuestions = employeeQuestions.push(internQuestions);
                }
            })

        if (buildTeam) {
            inquirer
                .prompt(finalEmployeeQuestions)
                .then((response) => {
                    appendToFile('./dist/generated-HTML.HTML', response);
                    console.log('Successfully appended file!');
                })
        }
    }
}

// Initialize the app
init();
