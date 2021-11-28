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

const products = {
    start: 0,
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
            reviews: 38,
            banner: false,
            price:"$5.99",
            prime: true
        },
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
            reviews: 38,
            banner: false,
            price:"$5.99",
            prime: true
        },
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
            reviews: 38,
            banner: false,
            price:"$5.99",
            prime: true
        }
    ]
};

const caruselSize = 6;

function setProduct(product, element){
    // const card = document.querySelector('.carusel__products--card > a');

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
    const prods = products.array.slice(products.start, products.start + caruselSize);

    for(let i=0; i<caruselSize; i++){
        setProduct(prods[i], cards[i])
    }
}

setCarusel();