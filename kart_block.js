//variables
const button1 = document.querySelector(".iphone-button");
const button2 = document.querySelector(".laptop-button");
const button3 = document.querySelector(".earphone-button");
const button4 = document.querySelector(".graphic_card-button");
const button5 = document.querySelector(".camera-button");
let kart_block_structure = document.querySelector(".kart-block")
let kart_count_value = document.querySelector(".kartcount")
let buttons_list = [button1,button2,button3,button4,button5]

let products_directory = {
    "product0" : {
        "name" : "iphone",
        "image" : "./iphone.jpg",
        "price" : 10000
    },
    "product1" : {
        "name" : "laptop",
        "image" : "./pexels-pixabay-434346.jpg",
        "price" : 10000
    },
    "product2" : {
        "name" : "earphone",
        "image" : "./bose-earphone.jpg",
        "price" : 10000
    },
    "product3" : {
        "name" : "graphic_card",
        "image" : "./External-graphic.jpg",
        "price" : 10000
    },
    "product4" : {
        "name" : "camera",
        "image" : "./camera.jpg",
        "price" : 10000
    }
}

buttons_list.forEach((elem) => {
    elem.addEventListener("click",() => {
        //console.log(elem.className)
        let name = "product"
        for(let i = 0;i<buttons_list.length;i++) {
            //let val = parseInt(i)
            let class_names = elem.className.split(' ')
            class_names.forEach((val) => {
                if(i == parseInt(val)) {
                    name += i;
                    console.log(name)
                }
            })

            if(products_directory.hasOwnProperty(name)) {
                //console.log("Yes")
                kart_block_structure.insertAdjacentHTML("beforeend",
                    `
                    <div class='kart_container'>
                        <img class=image_alignment src=${products_directory[name].image} alt=${products_directory[name].name}>
                        <p class='kart-price'>${products_directory[name].price}</p>
                    </div>`
                )
            }
        }
        kart_count_value.textContent = parseInt(kart_count_value.textContent) + 1;

    })
})

