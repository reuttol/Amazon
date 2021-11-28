// const stars = {
//     0 : {
//         img: ,
//         x: ,
//         y:
//     },
//     0.5: ,
//     1: ,
//     1.5: ,
//     2: ,
//     2.5: ,
//     3: ,
//     3.5: ,
//     4: ,
//     4.5: ,
//     5: ,
// };

const caruselSize = 6;

const products = {
    start: caruselSize,
    array: [
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 38,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 39,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 40,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 41,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 42,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 43,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 44,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 45,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 46,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 47,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 48,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 49,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 50,
            banner: false,
            price:"$5.99",
            prime: true
        },
        {
            img: "Assets/Images/product1.jpg",
            title:"Collapsible Microwave Splatter Cover,Microwave Cover for Food,Fruit Drainer Basket,BPA-Free Silicone & Plastic and Dishwasher Safe 10.5 inch (GREY)",
            stars: 4.5,
            reviews: 51,
            banner: false,
            price:"$5.99",
            prime: true
        }
    ]
};

let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

next.addEventListener("click", nextProducts);
prev.addEventListener("click", previosProducts);


function nextProducts(){
    if(products.start <= products.array.length - caruselSize)
        products.start += caruselSize;
    else
        products.start = products.array.length;

    setCarusel();
}
function previosProducts(){
    if(products.start - caruselSize >= 0)
        products.start -= caruselSize;
    else
        products.start = caruselSize;

    setCarusel();
}

function setProduct(product, element){
    const children = element.children;

    children[0].style.background = `url(${product.img}) no-repeat center center/cover`;
    
    children[1].innerText = `${product.title}`;
    
    const rating = children[2].children;
    rating[0].style.background = 'url(Assets/Images/stars-sprite.png) -84px -28px no-repeat';
    rating[0].style.backgroundSize = '512px 256px';
    rating[1].innerText = `${product.reviews}`;
    
    const price = children[4].children;
    price[0].innerText = product.price;
    if(product.prime)
        price[1].style.visibility = "visible";
}

function setCarusel(){
    const cards = [...document.querySelectorAll('.carusel__products--card > a')];
    const prods = products.array.slice(products.start - caruselSize, products.start);
    
    for(let i=0; i<caruselSize; i++){
        setProduct(prods[i], cards[i])
    }
}

setCarusel();