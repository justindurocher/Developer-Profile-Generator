const fs = require("fs");

const axios = require("axios");

const inquirer = require("inquirer");

const util = require("util");

const converterHTML = require("pdf-puppeteer");

const converterPDF = util.promisify(converterHTML);

function askQuestions() {
    
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub Username?"
        },
        {
            type: "input",
            name: "color",
            message: "What color do you want the PDF file?"
        }
    ])
}
askQuestions();