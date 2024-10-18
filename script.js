document.getElementById("menuToggle").onclick = function() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
};
