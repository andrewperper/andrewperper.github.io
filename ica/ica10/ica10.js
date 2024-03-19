document.addEventListener("DOMContentLoaded", function() {
    // Event listener to change the background color when a button is clicked
    document.getElementById("button1").addEventListener("click", function() {
        document.body.style.backgroundColor = "lightblue";
    });

    // Event listener to change the text color when a paragraph is clicked
    document.getElementById("paragraph1").addEventListener("click", function() {
        this.style.color = "red";
    });
});
