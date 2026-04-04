

const fs = require("fs");



// check if user is logged in or not
// then switch the login/signup button accordingly 


// add event listener for the search button
document.getElementById("search-button").addEventListener("click", function () {
    // get user text
    var userSearchText = document.getElementById("search-input").value;
    
    // get rid of white space around it
    userSearchText = userSearchText.trim()
    
    // if input is < 3 chars, then reject it
    if (userSearchText.length < 3) { 
        alert("uh maybe type some text bro");
    
    } else {
        window.location.href = "../searchResults/searchResults.html"
    }

    
})

