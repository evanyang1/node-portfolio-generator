const inquirer = require('inquirer')
const fs = require('fs')
var createHTML = require('create-html')

inquirer.prompt([
{
  type: 'input',
  name: 'name',
  message: 'what is your name?'
},
{
  type: 'input',
  name: 'bio',
  message: 'Please input your bio'
},
{
   type: 'input',
    name: 'linkedin',
    message: 'what is your Linkedin URL?'
},
    {
      type: 'input',
      name: 'github',
      message: 'what is your GitHub URL?'
    },
]
).then(({name, bio, linkedin, github}) => {

  var html = createHTML({
    title: 'example',
    body: `
    <div>Name: ${name} </div>
    <div>Bio: ${bio} </div>
    <div>Linkedin: ${linkedin} </div>
    <div>GitHub URL: ${github} </div>
    `
  })
  fs.writeFile('index.html', html, function (err) {
    if (err) console.log(err)
  })
})