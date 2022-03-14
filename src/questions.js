const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHtml = require('./generateHtml');


// array containing questions for manager card.
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your team manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID of your team manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of your team manager?'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the office number of your team manager?'
    },
    {
        type: 'list',
        message: 'What member would you like to add next?',
        name: 'option',
        default: '',
        choices: ['intern', 'engineer'],
    }
];

// Array containing questions for intern card creation.
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your team intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your team intern's school?",
    }
]

// Array containing questions for engineer card creation.
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "what is your engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's employee Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your team engineer's Github username?"
    }
]