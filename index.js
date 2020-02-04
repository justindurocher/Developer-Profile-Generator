// const fs = require("fs");

// const axios = require("axios");

// const inquirer = require("inquirer");

// // import util from "util";

// // import converterHTML from "pdf-puppeteer";

// // const converterPDF = util.promisify(converterHTML);

// function askQuestions() {

//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "username",
//             message: "What is your GitHub Username?"
//         },
//         {
//             type: "input",
//             name: "color",
//             message: "What color do you want the PDF file?"
//         }
//     ])
// }
// askQuestions();

function githubAjaxCall() {

    let queryUrl = "https://api.github.com/users/justindurocher";

    $.ajax({
        url: queryUrl,
        method : "GET"
    }).then(function(response){

        console.log(response);

        $("img").attr("src", response.avatar_url);

        $(".myNameIs").text("My name is " + response.name);

        $(".current").text("I am currently employed at " + response.company);

        if (response.company === null) {

            $(".current").text("I am currently Unemployed");

        }

        $(".location").text(response.location);

        $(".biography").text(response.bio);

        $(".pubRepos").text(response.public_repos);

        $(".numFollow").text(response.followers);

        $(".whoFollow").text(response.following);

    });


}

githubAjaxCall();

