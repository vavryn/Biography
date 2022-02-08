
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    document.getElementById("navbar").style.background = "#fff";
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});

function changeMode() {
    var image = document.getElementById('myImg');
    var textonpicture = document.getElementById("textonpicture");
    var about = document.getElementById("about");
    var work = document.getElementById("work");
    var footer = document.getElementById("footer");
    if (image.src.match("Picture/1.png")) {
        image.src = "Picture/black.JPG";
        textonpicture.classList.remove("textonpicture-light");
        textonpicture.classList.add("textonpicture-dark");
        about.classList.remove("light-about");
        about.classList.add("dark-about");
        link1.classList.remove("light-link");
        link1.classList.add("dark-link");
        link2.classList.remove("light-link");
        link2.classList.add("dark-link");
        link3.classList.remove("light-link");
        link3.classList.add("dark-link");
        link4.classList.remove("light-link");
        link4.classList.add("dark-link");
        footer.classList.remove("light-footer");
        footer.classList.add("dark-footer");

        work.classList.remove("light-workandexperience");
        work.classList.add("dark-workandexperience");
    }
    else {
        image.src = "Picture/1.png";
        textonpicture.classList.remove("textonpicture-dark");
        textonpicture.classList.add("textonpicture-light");
        about.classList.remove("dark-about");
        about.classList.add("light-about");

        link1.classList.remove("dark-link");
        link1.classList.add("light-link");
        link2.classList.remove("dark-link");
        link2.classList.add("light-link");
        link3.classList.remove("dark-link");
        link3.classList.add("light-link");
        link4.classList.remove("dark-link");
        link4.classList.add("light-link");
        footer.classList.remove("dark-footer");
        footer.classList.add("light-footer");

    }
}