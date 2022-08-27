const navbarEmail = document.querySelector(".navbar-email");

const menuDesktop = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");

const menuHam = document.querySelector(".menu");

const shoppingCartIcon = document.querySelector(".shopping-cart-icon");

const asideProductDetail = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector(".product-detail-secondary");

const closeDetail = document.querySelector('.product-detail-close');






navbarEmail.addEventListener("click", toggleMenuDesktop);

menuHam.addEventListener("click", toggleMenuMobile);

shoppingCartIcon.addEventListener("click",toggleShoppingCart);

closeDetail.addEventListener("click", closeDetailWindow);



function toggleMenuDesktop(){

    const isProductDetailClosed = asideProductDetail.classList.contains("inactive");
    const isProductDetailAsideClosed = productDetailContainer.classList.contains("inactive");
    

    if(!isProductDetailClosed || !isProductDetailAsideClosed){

        asideProductDetail.classList.add("inactive")

        productDetailContainer.classList.add("inactive")
    }

    menuDesktop.classList.toggle("inactive")

    console.log("que tranza");

};

function toggleMenuMobile(){

    const isProductDetailClosed = asideProductDetail.classList.contains("inactive");
    const isProductDetailAsideClosed = productDetailContainer.classList.contains("inactive");

    if(!isProductDetailClosed || !isProductDetailAsideClosed){

       
        asideProductDetail.classList.add("inactive")
        productDetailContainer.classList.add("inactive")
        
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){

    const  isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const  isDesktopMenuClosed = menuDesktop.classList.contains("inactive");
    const isProductDetailAsideClosed = productDetailContainer.classList.contains("inactive");
 
    

    if(!isMobileMenuClosed  || !isDesktopMenuClosed || !isProductDetailAsideClosed){

        menuDesktop.classList.add("inactive")

        mobileMenu.classList.add("inactive")
        
        productDetailContainer.classList.add("inactive")


    }

    asideProductDetail.classList.toggle('inactive');

}


function closeDetailWindow(){



    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside(){

    const isProductDetailClosed = asideProductDetail.classList.contains("inactive");

    if(!isProductDetailClosed){

        asideProductDetail.classList.add("inactive")
    }

    productDetailContainer.classList.remove("inactive");


    }
    

const productList = [];

    productList.push({

        name:"Bike",
        price:"120 $",
        Image:"./assets/images/products/bike.jpg"
    });

    productList.push({

        name:"Bike",
        price:"10 $",
        Image:"./assets/images/products/bookcase.jpg"
    });

    productList.push({

        name:"Bike",
        price:"19 $",
        Image:"./assets/images/products/books.jpg"
    });

    productList.push({

        name:"Bike",
        price:"120 $",
        Image:"./assets/images/products/bike.jpg"
    });

    productList.push({

        name:"Bike",
        price:"10 $",
        Image:"./assets/images/products/bookcase.jpg"
    });

    productList.push({

        name:"Bike",
        price:"19 $",
        Image:"./assets/images/products/books.jpg"
    });



function addProductosHomePage(productCards){


for( product of productList){


    const productCard = document.createElement('div');

    productCard.classList.add("product-card");

    const productImg = document.createElement('img');

    productImg.setAttribute('src', product.Image);

    productImg.addEventListener("click", openProductDetailAside)



    const productInfo = document.createElement('div');

    productInfo.classList.add("product-info");

    const porductInfoEmpty = document.createElement("div");

    const productoPrice = document.createElement("p")

    productoPrice.innerText = "$" + product.price;

    const productName = document.createElement("p")

    productName.innerText = product.name;

    porductInfoEmpty.appendChild(productoPrice)

    porductInfoEmpty.appendChild(productName)

    const productInfoFigure = document.createElement("figure");

    const productImgCard = document.createElement('img');

    productImgCard.setAttribute('src',"./assets/icons/bt_add_to_cart.svg" );

    productInfoFigure.appendChild(productImgCard);


    productInfo.appendChild(porductInfoEmpty);

    productInfo.appendChild(productInfoFigure);


    productCard.appendChild(productImg);

    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);


};



};

addProductosHomePage(productList);

