// const fs = require("fs");

const htmlToPdf = require("html-to-pdf");

const inquirer = require("inquirer");

htmlToPdf.convertHTMLFile("index.html","profiles.pdf", function(error,success){

    if (error) {

        console.log("error");

        console.log(error);

    } else {

        console.log("Success");

        console.log(success);

    }

});

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

