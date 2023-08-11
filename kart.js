//variables
const kart_logo = document.querySelector(".kart-logo")
const kart_count = document.querySelector(".kartcount")
const kart_block = document.querySelector('.kart-block')
const kart_block_close_button = document.querySelector('.kart-close')
// functionality

kart_logo.addEventListener("click",()=> {
    let kart_count_num = parseInt(kart_count.textContent)
    if(kart_count_num == 0) {
        alert("Please select a product to see the kart")
    }
    else{
        kart_block_func()
    }
})
//kart_block.style.transform = `scale(${0})`
function kart_block_func() {
    //kart_block.style.transform = `scale(${0})`

    if(kart_block.getBoundingClientRect().width > 0) {
        kart_block_close_button.addEventListener("click",() => {
            kart_block.style.transform = `scale(${0})` 
        })
    }
    else{
        kart_block.style.transform = `scale(${1})` 
    }
}

kart_block_func()
