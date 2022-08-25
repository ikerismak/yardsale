const navbarEmail = document.querySelector(".navbar-email")

const menuDesktop = document.querySelector(".desktop-menu")

const mobileMenu = document.querySelector(".mobile-menu")

const menuHam = document.querySelector(".menu")




navbarEmail.addEventListener("click", toggleMenuDesktop);
menuHam.addEventListener("click", toggleMenuMobile);



function toggleMenuDesktop(){
   
    menuDesktop.classList.toggle("inactive");

};

function toggleMenuMobile(){

    console.log("object");

    mobileMenu.classList.toggle('inactive');
}
