console.log(document.getElementById("search-button").textContent);

document.getElementById("search-button").addEventListener("click", function () {
    var text = document.getElementById("search-input").value;
    console.log(text)
    alert(text);
})