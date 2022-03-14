const managerCard = (manager1) => {
    let card = "";
  for (const manager of manager1) {
    card += `
    
    <div class="card" id="manager-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left"></div>
                    <div class="media-content">
                    <p class="title is-2 has-text-info has-text-centered"><i class="fas fa-tasks"></i></p>
                      <p class="title is-4 has-text-dark has-text-centered"> 
                      ${manager.name}
                      </p>
                      <p
                        class="subtitle has-text-weight-bold is-6 has-text-dark has-text-centered"
                      >
                        Manager
                      </p>
                      <p class="subtitle is-6 has-text-dark"><strong>ID: </strong> ${manager.id}</p>
                      <p class="subtitle is-6 has-text-dark"><strong>Email: </strong><a href="mailto:${manager.email}">${manager.email}</a></p>
                      <p class="subtitle is-6 has-text-dark"><strong>Office Number: </strong> ${manager.officeNumber}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
        </div>
        `;
  }
return card;
};
    
  const engineerCard = (engineer2) => {
    let card = "";
    for (const engineer of engineer2) {
      card += `
          <div class="card" id="engineer-card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left"></div>
                      <div class="media-content">
                        <p class="title is-4 has-text-primary has-text-centered">
                          <i class="fas fa-tools"></i> 
                        </p>
                        <p class="title is-4 has-text-dark has-text-centered"> ${engineer.name}</p>
                        <p
                        class="subtitle has-text-weight-bold is-6 has-text-dark has-text-centered"
                        >
                          Engineer
                        </p>
                        <p class="subtitle is-6 has-text-dark"><strong>ID:</strong> ${engineer.id}</p>
                        <p class="subtitle is-6 has-text-dark"><strong>Email:</strong> <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="subtitle is-6 has-text-dark"><strong>GitHub Profile:</strong> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p> 
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          `;
    }
    return card;
  };
  
  const internCard = (intern3) => {
    let card = "";
    for (const intern of intern3) {
      card += `
          <div class="card" id="intern-card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left"></div>
                      <div class="media-content">
                        <p class="title is-4 has-text-danger has-text-centered">
                          <i class="fas fa-mug-hot"></i> 
                        </p>
                        <p class="title is-4 has-text-dark has-text-centered"> ${intern.name}</p>
                        <p
                        class="subtitle has-text-weight-bold is-6 has-text-dark has-text-centered"
                        >
                          Intern
                        </p>
                        <p class="subtitle is-6 has-text-dark"><strong>ID:</strong> ${intern.id}</p>
                        <p class="subtitle is-6 has-text-dark"><strong>Email:</strong> <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p class="subtitle is-6 has-text-dark"><strong>School:</strong> ${intern.school}</p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          `;
    }
    return card;
  };
  
  const createHTML = (manager1, engineer2, intern3) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile</title>
    </head>
    <body>
      <main>
        <section class="hero is-fullheight">
          <p class="title" id="title">Meet Our Team:</p>
          <div class="hero-body">
            <div class="columns is-desktop">
              <div class="column">
              ${managerCard(manager1)}
              <div class="column">
              ${engineerCard(engineer2)}
              <div class="column">
              ${internCard(intern3)}
            </div>
          </div>
        </section>
      </main>
    </body>
  </html>`;
  
  };
  
  // Exporting to use with the createHTML function in index.js
  module.exports = createHTML;


