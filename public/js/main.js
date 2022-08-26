const navbarEmail = document.querySelector(".navbar-email")

const menuDesktop = document.querySelector(".desktop-menu")

const mobileMenu = document.querySelector(".mobile-menu")

const menuHam = document.querySelector(".menu")

const shoppingCartIcon = document.querySelector(".shopping-cart-icon");

const asideProductDetail = document.querySelector(".product-detail")




navbarEmail.addEventListener("click", toggleMenuDesktop);
menuHam.addEventListener("click", toggleMenuMobile);
shoppingCartIcon.addEventListener("click",toggleShoppingCart);



function toggleMenuDesktop(){

    const isProductDetailClosed = asideProductDetail.classList.contains("inactive");

    if(!isProductDetailClosed){

        asideProductDetail.classList.add("inactive")
    }

    menuDesktop.classList.toggle("inactive")

    console.log("que tranza");

};

function toggleMenuMobile(){

    const isProductDetailClosed = asideProductDetail.classList.contains("inactive");

    if(!isProductDetailClosed){

       
        asideProductDetail.classList.add("inactive")
        
    }


    mobileMenu.classList.toggle('inactive');
}


function toggleShoppingCart(){

    const  isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const  isDesktopMenuClosed = menuDesktop.classList.contains("inactive");

    if(!isMobileMenuClosed  || !isDesktopMenuClosed){

        menuDesktop.classList.add("inactive")

        mobileMenu.classList.add("inactive")
    }
    asideProductDetail.classList.toggle('inactive');


}