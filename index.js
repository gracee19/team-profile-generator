const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let responses = [];

const generateManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Manager's office number?",
        name: "officenumber",
      },
    ])
    .then((answers) => {
      const { name, email, id, officenumber } = answers;
      const newManager = new Manager(name, id, email, officenumber, "Manager");
      // newManager.office(officenumber);
      newManager.getRole("Manager");
      responses.push(newManager);
      generateIntorEng();
    });
};

const generateIntorEng = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Add a new employee",
        name: "newEmployee",
        choices: ["Intern", "Engineer", "No thanks, my team is ready!"],
      },
    ])
    .then((res) => {
      if (res.newEmployee == "Intern") {
        generateIntern();
      }
      if (res.newEmployee == "Engineer") {
        generateEngineer();
      }
      if (res.newEmployee == "No thanks, my team is ready!") {
        writeFile();
      }
    });
};

generateManager();

const generateIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What school does the intern attend?",
        name: "school",
      },
    ])
    .then((res) => {
      const { name, email, id, school } = res;
      const newIntern = new Intern(name, id, email, school, "Intern");
      newIntern.getRole("Intern");
      newIntern.getSchool(school);
      responses.push(newIntern);
      generateIntorEng();
    });
};

const generateEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Engineer's github link?",
        name: "gitHub",
      },
    ])
    .then((results) => {
      const { name, email, id, gitHub } = results;
      const newEngineer = new Engineer(name, id, email, gitHub, "Engineer");
      newEngineer.getgitHub(gitHub);
      newEngineer.getRole("Engineer");
      responses.push(newEngineer);
      generateIntorEng();
    });
};

const writeFile = () => {
  let newFile = "";
  let addToFile = "";

  for (let i = 0; i < responses.length; i++) {
    let employee = responses[i];
    let empName = employee.name;
    let empEmail = employee.email;
    let empId = employee.id;
    let empRole = employee.role;
    let extDet = "";

    if (employee.officenumber) {
      extDet = `Office Number: ${employee.officenumber}`;
    }
    if (employee.gitHub) {
      extDet = `<a href = "${employee.gitHub}" target = "_blank">Github</a>`;
    }
    if (employee.school) {
      extDet = `School: ${employee.school}`;
    }

    addToFile += 
    `<div class="card col-md-3">
    <img src="https://placehold.co/150x150" alt="Avatar">
              <div class="box">
                <h4>${empName}</h4>
                <h6>${empRole}</h6>
              </div>
              <hr class="solid">
              <div class="details">
                <ul>
                  <li>Id: ${empId}</li>
                  <li>Email: <a href="mailto:${empEmail}"> ${empEmail} </a></li>
                  <li>${extDet}</li>
                </ul>
              </div> 
            </div>`;
  }

  newFile = newFile = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="./assets/css/style.css" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                crossorigin="anonymous"
            />
        </head>
        <body>
            <header id="head"> 
                <h1>Engineering Team</h1>
            </header>
            <main class="container">
                <div class="row">
                    <div class="col-md-12">
                        <section class="row employees">
                            ${addToFile}                         
                        </section>
                    </div>
                </div>
            </main>
        </body>
    </html>
    `;

  fs.writeFile("./dist/index.html", newFile, null, (err) => {
    err
      ? console.log("Oops, an error has occured: " + err)
      : console.log(
          "Your team was successfully created! Head over to dist/index.html to see your page"
        );
  });
};
