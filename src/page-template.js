const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateManager = managerData => {
    if(!managerData) {
        return ``;
    }

    return `
    <div class="pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 employee">
            <div class="card-header">
                <h2>${managerData.getName()}</h2>
                <h3><i class="fas fa-mug-hot"></i> Manager</h3>
            </div>
            <div class="card-body">
                <div class="info">
                    <p id="id">ID: ${managerData.getId()}</p>
                    <p>Email: <a href="${managerData.getEmail()}">${managerData.getEmail()}</a></p>
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

    return `
    <div class="pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 employee">
            <div class="card-header">
                <h2>${engineerData.getName()}</h2>
                <h3><i class="fas fa-glasses"></i> Engineer</h3>
            </div>
            <div class="card-body">
                <div class="info">
                    <p id="id">ID: ${engineerData.getId()}</p>
                    <p>Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></p>
                    <p>GitHub: <a href="https://github.com/${engineerData.getGithub()}">${engineerData.getGithub()}</a></p>
                </div>
            </div>
        </div>
    `;
};

const generateIntern = internData => {
    if(!internData) {
        return ``;
    }

    return `
    <div class="pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 employee">
            <div class="card-header">
                <h2>${internData.getName()}</h2>
                <h3><i class="fas fa-user-graduate"></i> Intern</h3>
            </div>
            <div class="card-body">
                <div class="info">
                    <p id="id">ID: ${internData.getId()}</p>
                    <p>Email: <a href="${internData.getEmail()}">${internData.getEmail()}</a></p>
                    <p>School: ${internData.getSchool()}</p>
                </div>
            </div>
        </div>
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
    <link rel="stylesheet" href="../src/style.css" />
    <title>My Team</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <section class="pure-g">
        ${generateManager(currentManager)}
        ${generateEngineer(engineer)}
        ${generateIntern(intern)}
    </section>
    
</body>
</html>
    `;
};

module.exports = generatePage;