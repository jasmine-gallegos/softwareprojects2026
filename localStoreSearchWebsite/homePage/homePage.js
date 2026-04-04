import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "softwareprojects2026",
    password: "sdU*ns7Bs$",
    port: 5432,
});

db.connect();

db.query("SELECT * FROM users", (err, res) => {
    if (err) {
        console.error("Error executing query", err.stack);
    } else {
        quiz = res.rows;
    }

    db.end();
});


// check if user is logged in or not
// then switch the login/signup button accordingly 


// add event listener for the search button
// document.getElementById("search-button").addEventListener("click", function () {
//     // get user text
//     var userSearchText = document.getElementById("search-input").value;
    
//     // get rid of white space around it
//     userSearchText = userSearchText.trim()
    
//     // if input is < 3 chars, then reject it
//     if (userSearchText.length < 3) { 
//         alert("uh maybe type some text bro");
    
//     } else {
//         window.location.href = "../searchResults/searchResults.html"
//     }

    
// })

