const navbarEmail = document.querySelector(".navbar-email")

const menuDesktop = document.querySelector(".desktop-menu")






navbarEmail.addEventListener("click", toggleMenuDesktop);



function toggleMenuDesktop(){


    console.log("click");

   
    menuDesktop.classList.toggle("inactive");

};

console.log("jsfi");
