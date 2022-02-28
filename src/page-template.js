function templateGenerator (employeeArray) {
    let runningHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="page-header text-center text-white bg-dark header-padding">
            <h1>My Team Profile</h1>
        </header>
            
          <div class="container">
                <div class="row">`
// for loop for each employee and if statements for their role cards
    for (var i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].employeeRole === 'Manager') {
            runningHTML += `<div class="card col-2 card-margins" style="width: 18rem;">
            <div class="card-header bg-primary">
              <h3>${employeeArray[i].employeeName}</h3>
              <h4><i class="fas fa-mug-hot"></i>Manager</h4>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employeeArray[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].employeeEmail}">${employeeArray[i].employeeEmail}</a></li>
            <li class="list-group-item">Office Number: ${employeeArray[i].extension}</li>
            </ul>
        </div> `
        } else if (employeeArray[i].empoyeeRole === 'Engineer') {
            runningHTML += `<div class="card col-2 card-margins" style="width: 18rem;">
                        <div class="card-header bg-primary">
                          <h3>${employeeArray[i].employeeName}</h3>
                          <h4><i class="fas fa-glasses"></i> Engineer</h4>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].employeeEmail}">${employeeArray[i].employeeEmail}</a></li>
                        <li class="list-group-item">Github: <a href='https://github.com/${employeeArray[i].github}'>${employeeArray[i].github}</a></li>
                        </ul>
                    </div> `
        } else {
            runningHTML += `<div class="card col-2 card-margins" style="width: 18rem;">
                      <div class="card-header bg-primary">
                        <h3>${employeeArray[i].employeeName}</h3>
                        <h4><i class="fas fa-user-graduate"></i> Intern</h4>
                      </div>
                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].employeeEmail}">${employeeArray[i].employeeEmail}</a></li>
                      <li class="list-group-item">School: ${employeeArray[i].school}</li>
                      </ul>
                  </div> `
        }
    }

let restOfHTML = `</div>
</div>
</body>
</html>`                  

runningHTML += restOfHTML;

return runningHTML;
}

module.exports = templateGenerator;