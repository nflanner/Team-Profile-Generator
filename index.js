// required imports
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// User input array for the initial manager.js questions
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
    fs.writeFile(fileName, generateHTML(data), err =>
    err ? console.error(err) : console.log('HTML Initially Stored!')
    );
}

// Function for file appending
function appendToFile(fileName, data) {
    fs.appendFile(fileName, generateHTML(data), err =>
        err ? console.error(err) : console.log('HTML Appended!')
    );
}

// data is the manager or employee (engineer or intern) object
function generateHTML(data) {
    const header = `<!DOCTYPE html>` +
        `<html lang=\"en\">` +

        `<head>` +
        `<meta charset=\"UTF-8\">` +
        `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` +
        `<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">` +
        `<meta name=\"Description\" content=\"Enter your description here\" />` +
        `<meta http-equiv=\"Content-Security-Policy\" content=\"upgrade-insecure-requests\">` +
        `<link rel=\"stylesheet\" href=\"./template.css\">` +
        `<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css\">` +
       ` <title>Team Profile</title>` +
    `</head>` +

    `<body>` +
    `<nav class=\"navbar navbar-light navbar-default text-white justify-content-center mb-5\">` +
        `<div>` +
            `My Team` +
        `</div>` +
    `</nav>`;

    const footer = `</body>` +

            `</html>`;

    const role = data.get();

    const trait = role === 'Manager' ? data.office : role === 'Engineer' ? data.github : data.school;

    return header + generateCard(data.id, data.name, role, data.email, trait) + footer;
}

function generateCard(id, name, role, email, trait) {
    const cardBlock = `<section className=\"container\">` +
        `<div className=\"row\">` +
            `<div className=\"col-3 border p-2 m-2 secondary flex-column\">` +
                `<div className=\"card\">` +
                    `<div className=\"card-body text-white bg-primary\">` +
                        `<h5 className=\"card-title\">${name}</h5>` +
                        `<p className=\"card-text\">${role}</p>` +
                    `</div>` +

                    `<div>` +
                        `<ul className=\"list-group list-group-flush bg-secondary\">` +
                            `<li className=\"list-group-item\">ID: ${id}</li>` +
                            `<li className=\"list-group-item\">Email: <a href=\"#\" className=\"card-link\">email here</a></li>` +
                            `<li className=\"list-group-item\">
                                ${trait == 'manager' ? ('Office: ' + trait)
                                : trait == 'engineer' ? `Github: <a href=\"http://github.com/${trait}\" className=\"card-link\">${trait}</a>` 
                                    : 'School: ' + trait}
                                </li>` +
                        `</ul>` +
                    `</div>` +
                `</div>` +
            `</div>` +
        `</div>` +
    `</section>`;
    return cardBlock
}

// Function to initialize the app
function init() {
    console.log('working');

    // Ask about manager first
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            console.log(response);
            const manager = new Manager(response.name, response.id, response.email, response.office);
            writeToFile('./dist/generated-HTML.HTML', manager);
            console.log('Successfully wrote manager!');
        })

    // Continue building with employees (or finish)
    let buildTeam = true;
    let isEngineer;
    let finalEmployeeQuestions;
    while(buildTeam) {
        // check to build team or not
        inquirer
            .prompt(buildQuestions)
            .then((response) => {
                if(response == 'Finished building team') {
                    buildTeam = false;
                } else if (response == 'Engineer') {
                    isEngineer = true;
                    finalEmployeeQuestions = employeeQuestions.push(engineerQuestions);
                } else {
                    isEngineer = false;
                    finalEmployeeQuestions = employeeQuestions.push(internQuestions);
                }
            })

        let employee;
        if (buildTeam) {
            inquirer
                .prompt(finalEmployeeQuestions)
                .then((response) => {
                    if(isEngineer) {
                        employee = new Engineer(response.name, response.id, response.email, response.github);
                    } else {
                        employee = new Intern(response.name, response.id, response.email, response.school);
                    }
                    appendToFile('./dist/generated-HTML.HTML', employee);
                    console.log('Successfully appended employee!');
                })
        }
    }
}

// Initialize the app
init();
