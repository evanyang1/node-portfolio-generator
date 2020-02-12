const inquirer = require('inquirer')

  / inquirer.prompt([
{
  type: 'input',
  name: 'Name',
  message: 'what is your name?'
},
{
  type: 'input',
  name: 'Bio',
  message: 'Please input your bio'
},
{
   type: 'input',
    name: 'Linkedin',
    message: 'what is your Linkedin URL?'
},
    {
      type: 'input',
      name: 'Github',
      message: 'what is your GitHub URL?'
    },
]
).then(response => {})