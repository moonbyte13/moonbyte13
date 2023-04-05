const fs = require('fs');

function generateProjectCard(imgURL, projTitle, projDesc, deployedURL) {
  const html = `
<li class="card">
  <img class="card-img-top" src="${imgURL}">
  <div class="card-body">
    <h6 class="card-title">${projTitle}</h6>
    <p class="card-text">${projDesc}</p>
    <a href="${deployedURL}" class="btn btn-primary">
      See it Live
    </a>
  </div>
</li>`
  console.log(`
<li class="card">
  <img class="card-img-top" src="${imgURL}">
  <div class="card-body">
    <h6 class="card-title">${projTitle}</h6>
    <p class="card-text">${projDesc}</p>
    <a href="${deployedURL}" class="btn btn-primary">
      See it Live
    </a>
  </div>
</li>`);
  return html;
}

function appendProjectCard(
  imgURL,
  projTitle,
  projDesc,
  deployedURL
) {
  const cardHTML = generateProjectCard(imgURL, projTitle, projDesc, deployedURL)
  $('#projectList').append(cardHTML)
}

function init() {
  fs.readFile('./projects.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.forEach(elm => {
        appendProjectCard(
          elm.imgURL,
          elm.projTitle,
          elm.projDesc,
          elm.deployedURL
          )
      });
      // writeToFile(file, parsedData);
    }
  })
  /* .then((data) => {
    console.log(data);
    data.forEach(
      appendProjectCard(
        data.imgURL,
        data.projTitle,
        data.projDesc,
        data.deployedURL
      )
    )
  }) */
}

init()