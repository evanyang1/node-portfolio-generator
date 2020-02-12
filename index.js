const inquirer = require('inquirer')
const fs = require('fs')


const createHTML = infoObj => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
    <meta charset="UTF-8">
    <title>title</title>
      </head>
      <body>

        Name: ${infoObj.name}
        Location: ${infoObj.location}
        Bio: ${infoObj.bio}
        LinkedIn: <a href="${infoObj.linkedIn}">LinkedIn</a>
        GitHub: <a href="${infoObj.linkedIn}">GitHub</a>

      </body>
      </html>
  `
}