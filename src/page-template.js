const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateManager = managerData => {
    if(!managerData) {
        return ``;
    }

    return `
    <div class="pure-u-1-1 pure-u-sm-1-3 pure-u-md-1-4 employee">
            <div class="card-header">
                <h2>${managerData.getName()}</h2>
                <h3><i class="fas fa-mug-hot"></i> Manager</h3>
            </div>
            <div class="card-body">
                <div class="info">
                    <p id="id">ID: ${managerData.getId()}</p>
                    <p>Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></p>
                    <p>Office Number: ${managerData.officeNumber}</p>
                </div>
            </div>
        </div>
    `;
}

const generateEngineer = engineerData => {
    if(!engineerData) {
        return ``;
    }

    let engineers = engineerData.map(engineer => {
        return new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
    });

    return `
        ${engineers.map(engineer => {
            return `
            <div class="pure-u-1-1 pure-u-sm-1-3 pure-u-md-1-4 employee">
                <div class="card-header">
                    <h2>${engineer.getName()}</h2>
                    <h3><i class="fas fa-glasses"></i> Engineer</h3>
                </div>
                <div class="card-body">
                    <div class="info">
                        <p id="id">ID: ${engineer.getId()}</p>
                        <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                        <p>GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
                    </div>
                </div>
            </div>
            `;
        })
        .join('')}
    `;
};

const generateIntern = internData => {
    if(!internData) {
        return ``;
    }

    let interns = internData.map(intern => {
        return new Intern(intern.name, intern.id, intern.email, intern.school);
    });

    return `
        ${interns.map(intern => {
            return `
                <div class="pure-u-1-1 pure-u-sm-1-3 pure-u-md-1-4 employee">
                    <div class="card-header">
                        <h2>${intern.getName()}</h2>
                        <h3><i class="fas fa-user-graduate"></i> Intern</h3>
                    </div>
                    <div class="card-body">
                        <div class="info">
                            <p id="id">ID: ${intern.getId()}</p>
                            <p>Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></p>
                            <p>School: ${intern.getSchool()}</p>
                        </div>
                    </div>
                </div>
            `;
        })
        .join('')}
    `;
}

const generatePage = ({ manager, engineers, interns }) => {
    let currentManager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/base-min.css">
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css" />
    <script src="https://kit.fontawesome.com/6c2a299ddf.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <section class="pure-g">
        ${generateManager(currentManager)}
        ${generateEngineer(engineers)}
        ${generateIntern(interns)}
    </section>
    
</body>
</html>
    `;
};

module.exports = generatePage;