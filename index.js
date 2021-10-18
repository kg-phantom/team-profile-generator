const inquirer = require("inquirer");
const { writeFile, copyFile } = require('./utils/generate-site');
const generatePage = require("./src/page-template");

const promptManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
                validate: input => {
                    if(input) {
                        return true;
                    } else {
                        console.log('\nPlease enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's ID?",
                validate: input => {
                    var regex=/^[0-9]+$/;
                    if(input.match(regex)) {
                        return true;
                    } else {
                        console.log('\nPlease enter an ID number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?",
                validate: input => {
                    const validEmail = /\S+@\S+\.\S+/;
                    if(validEmail.test(input)) {
                        return true;
                    } else {
                        console.log('\nPlease enter an email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: input => {
                    var regex=/^[0-9]+$/;
                    if(input.match(regex)) {
                        return true;
                    } else {
                        console.log('\nPlease enter an office number!');
                        return false;
                    }
                }
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
                    writeFile(generatePage(employeeData))
                        .then(() => {
                            return copyFile();
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    console.log("Your team profile has been generated! Find it in /dist.");
            }
        })
};

const promptEngineer = employeeData => {
    if(!employeeData.engineers) {
        employeeData.engineers = [];
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: input => {
                    if(input) {
                        return true;
                    } else {
                        console.log('\nPlease enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?",
                validate: input => {
                    var regex=/^[0-9]+$/;
                    if(input.match(regex)) {
                        return true;
                    } else {
                        console.log('\nPlease enter an ID number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
                validate: input => {
                    const validEmail = /\S+@\S+\.\S+/;
                    if(validEmail.test(input)) {
                        return true;
                    } else {
                        console.log('\nPlease enter an email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                validate: input => {
                    if(input) {
                        return true;
                    } else {
                        console.log('\nPlease enter a username!');
                        return false;
                    }
                }
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
                    writeFile(generatePage(employeeData))
                        .then(() => {
                            return copyFile();
                        })
                        .catch(err => {
                            console.log(err);
                        });
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
                message: "What is the intern's name?",
                validate: input => {
                    if(input) {
                        return true;
                    } else {
                        console.log('\nPlease enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID?",
                validate: input => {
                    var regex=/^[0-9]+$/;
                    if(input.match(regex)) {
                        return true;
                    } else {
                        console.log('\nPlease enter an ID number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
                validate: input => {
                    const validEmail = /\S+@\S+\.\S+/;
                    if(validEmail.test(input)) {
                        return true;
                    } else {
                        console.log('\nPlease enter an email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?",
                validate: input => {
                    if(input) {
                        return true;
                    } else {
                        console.log('\nPlease enter a school!');
                        return false;
                    }
                }
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
                    writeFile(generatePage(employeeData))
                        .then(() => {
                            return copyFile();
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    console.log("Your team profile has been generated! Find it in /dist.");
            }
        })
};

promptManager();