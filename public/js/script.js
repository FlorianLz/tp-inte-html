document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById("burgerIcon")) {
        document.getElementById("burgerIcon").addEventListener("click", function() {
            document.getElementById("burgerIcon").classList.toggle("open");
            document.getElementById("nav").classList.toggle("open");
        });
    }

    //add scroll class to header if scrolled
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("is-scroll", window.scrollY > 50);
        document.getElementById("nav").classList.toggle("is-scroll",window.scrollY > 50);

    });
});
