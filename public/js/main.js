const navbarEmail = document.querySelector(".navbar-email")

const menuDesktop = document.querySelector(".desktop-menu")

const mobileMenu = document.querySelector(".mobile-menu")

const menuHam = document.querySelector(".menu")


const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");

const asideProductDetail = document.querySelector(".product-detail")




navbarEmail.addEventListener("click", toggleMenuDesktop);
menuHam.addEventListener("click", toggleMenuMobile);
shoppingCartIcon.addEventListener("click",toggleShoppingCart);



function toggleMenuDesktop(){
   
    menuDesktop.classList.toggle("inactive");

};

function toggleMenuMobile(){


    mobileMenu.classList.toggle('inactive');
}


function toggleShoppingCart(){

    const isMobileClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileClosed){

        
        mobileMenu.classList.toggle('inactive');

    }

    asideProductDetail.classList.toggle('inactive');
}