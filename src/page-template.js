function templateGenerator(employeeArray) {
  let runningHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile</title>
        <script src="https://kit.fontawesome.com/15dddbcffc.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <header class="page-header text-center text-white bg-danger header-padding">
        <h1>My Team</h1>
    </header>
            
          <div class="container">
                <div class="row">`;
  for (var i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].employeeRole === "Manager") {
      runningHTML += `<div class="card col-2 card-margins bg-light text-white" style="width: 20rem;">
            <div class="card-header bg-primary">
              <h3>${employeeArray[i].employeeName}</h3>
              <h4><i class="fas fa-mug-hot"></i>Manager</h4>
            </div>
            <ul class="list-group list-group-flush text-dark">
            <li class="list-group-item">ID: ${employeeArray[i].employeeId}</li>
            <li class="list-group-item">Email: <a href="${employeeArray[i].employeeEmail}">${employeeArray[i].employeeEmail}</a></li>
            <li class="list-group-item">Office number: ${employeeArray[i].extension}</li>
            </ul>
        </div> `;
    } else if (employeeArray[i].employeeRole === "Engineer") {
      runningHTML += `<div class="card col-2 card-margins bg-light " style="width: 20rem;">
                        <div class="card-header bg-primary text-white">
                          <h3>${employeeArray[i].employeeName}</h3>
                          <h4><i class="fas fa-glasses"></i> Engineer</h4>
                        </div>
                        <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item">ID: ${employeeArray[i].employeeId}"</li>
                        <li class="list-group-item">Email: <a href="${employeeArray[i].employeeEmail}">${employeeArray[i].employeeEmail}</a></li>
                        <li class="list-group-item">Github: <a href='https://github.com/${employeeArray[i].github}'>${employeeArray[i].github}</a></li>
                        </ul>
                    </div> `;
    } else {
      runningHTML += `<div class="card col-2 card-margins text-secondary bg-light" style="width: 20rem;">
                      <div class="card-header bg-primary text-white">
                        <h3>${employeeArray[i].employeeName}</h3>
                        <h4><i class="fas fa-user-graduate"></i>Intern</h4>
                      </div>
                      <ul class="list-group list-group-flush text-dark">
                      <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                      <li class="list-group-item">Email: <a href="${employeeArray[i].employeeEmail}">${employeeArray[i].employeeEmail}</a></li>
                      <li class="list-group-item">School: ${employeeArray[i].school}</li>
                      </ul>
                  </div> `;
    }
  }

  let restOfHTML = `</div>
</div>
</body>
</html>`;

  runningHTML += restOfHTML;

  return runningHTML;
}

module.exports = templateGenerator;
