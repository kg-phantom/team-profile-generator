const inquirer = require("inquirer");
const { writeFile, copyFile } = require('./utils/generate-site');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");

const promptManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?"
            },
            {
                type: 'list',
                name: 'confirmAdd',
                message: "What do you want to do?",
                choices: ['Add Engineer', 'Add Intern', 'Finish team']
            }
        ])
        .then(managerData => {
            let employeeData = {
                manager: managerData
            };

            switch (managerData.confirmAdd) {
                case 'Add Engineer':
                    promptEngineer(employeeData);
                    break;
                case 'Add Intern':
                    promptIntern(employeeData);
                    break;
                case 'Finish team':
                    generatePage(employeeData);
                    console.log("Your team profile has been generated! Find it in /dist.");
            }
        })
};

// const promptEmployee = employeeData => {
//     return inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 name: 'confirmAdd',
//                 message: "What do you want to do?",
//                 choices: ['Add Engineer', 'Add Intern', 'Finish team']
//             }
//         ])
//         .then(({ confirmAdd }) => {
//             switch (confirmAdd) {
//                 case 'Add Engineer':
//                     promptEngineer(employeeData);
//                     break;
//                 case 'Add Intern':
//                     promptIntern(employeeData);
//                     break;
//                 case 'Finish team':
//                     generatePage(employeeData);
//                     console.log("Your team profile has been generated! Find it in /dist.");
//             }
//         })
// };

const promptEngineer = employeeData => {
    if(!employeeData.engineers) {
        employeeData.engineers = [];
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?"
            },
            {
                type: 'list',
                name: 'confirmAdd',
                message: "What do you want to do?",
                choices: ['Add Engineer', 'Add Intern', 'Finish team']
            }
        ])
        .then(engineerData => {
            employeeData.engineers.push(engineerData);

            switch (engineerData.confirmAdd) {
                case 'Add Engineer':
                    promptEngineer(employeeData);
                    break;
                case 'Add Intern':
                    promptIntern(employeeData);
                    break;
                case 'Finish team':
                    console.log(generatePage(employeeData));
                    console.log("Your team profile has been generated! Find it in /dist.");
            }
        })
};

const promptIntern = employeeData => {
    if(!employeeData.interns) {
        employeeData.interns = [];
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            },
            {
                type: 'list',
                name: 'confirmAdd',
                message: "What do you want to do?",
                choices: ['Add Engineer', 'Add Intern', 'Finish team']
            }
        ])
        .then(internData => {
            employeeData.interns.push(internData);

            switch (internData.confirmAdd) {
                case 'Add Engineer':
                    promptEngineer(employeeData);
                    break;
                case 'Add Intern':
                    promptIntern(employeeData);
                    break;
                case 'Finish team':
                    generatePage(employeeData);
                    console.log("Your team profile has been generated! Find it in /dist.");
            }
        })
};

promptManager()
    // .then()
    // .then(pageHTML => writeFile(pageHTML))
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // });