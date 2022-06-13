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
function writeToFile(fileName, data, header, footer) {
    fs.writeFile(fileName, generateHTML(data, header, footer), err =>
    err ? console.error(err) : console.log('HTML Initially Stored!')
    );
}

// Function for file appending
function appendToFile(fileName, data, header, footer) {
    fs.appendFile(fileName, generateHTML(data, header, footer), err =>
        err ? console.error(err) : console.log('HTML Appended!')
    );
}

// data is the manager or employee (engineer or intern) object
function generateHTML(data, header, footer) {
    const headerHTML = `<!DOCTYPE html>` +
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

    const footerHTML = `</body>` +

            `</html>`;


    const role = 'name' in data ? data.getRole() : '';
    console.log(`role: ${role}`);
    const trait = role == 'Manager' ? data.office : role == 'Engineer' ? data.github : data.school;


    let finalStr;
    finalStr = header && role ? headerHTML + generateCard(data.id, data.name, role, data.email, trait) 
        : data && role ? generateCard(data.id, data.name, role, data.email, trait)
        : footerHTML; 
    
    return finalStr;
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
                                ${role == 'Manager' ? ('Office: ' + trait)
                                : role == 'Engineer' ? `Github: <a href=\"http://github.com/${trait}\" className=\"card-link\">${trait}</a>` 
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
async function init() {
    console.log('working');

    // Ask about manager first
    await inquirer
        .prompt(managerQuestions)
        .then(async (response) => {
            const manager = new Manager(response.name, response.id, response.email, response.office);
            console.log(manager);
            writeToFile('./dist/generated-HTML.HTML', manager, true, false);
            console.log('Successfully wrote manager!');
        })

    // Continue building with employees (or finish)
    let buildTeam = true;
    let isEngineer;
    while(buildTeam) {
        // check to build team or not
        let finalEmployeeQuestions = employeeQuestions.slice(0, employeeQuestions.length);
        await inquirer
            .prompt(buildQuestions)
            .then(async (response) => {
                console.log(response.employee);
                if(response.employee == 'Finished building team') {
                    buildTeam = false;
                } else if (response.employee == 'Engineer') {
                    console.log('engineer block');
                    isEngineer = true;
                    finalEmployeeQuestions.push(engineerQuestions);
                } else {
                    console.log('intern block');
                    isEngineer = false;
                    finalEmployeeQuestions.push(internQuestions);
                }
                console.log(`response: ${response}`);
            })

        let employee;
        if (buildTeam) {
            console.log(finalEmployeeQuestions);
            console.log('in emplyee block')
            await inquirer
                .prompt(finalEmployeeQuestions)
                .then(async (response) => {
                    if(isEngineer) {
                        employee = new Engineer(response.name, response.id, response.email, response.github);
                    } else {
                        employee = new Intern(response.name, response.id, response.email, response.school);
                    }
                    appendToFile('./dist/generated-HTML.HTML', employee, false, true);
                    console.log('Successfully appended employee!');
                })
        } else {
            console.log('writing footer');
            appendToFile('.dist/generated-HTML.HTML', {}, false, true);
            console.log('DONE!');
        }
    }
}

// Initialize the app
init();
