const item1 = document.querySelector('.product1')
const item2 = document.querySelector('.product2')
const item3 = document.querySelector('.product3')
const item4 = document.querySelector('.product4')
const item5 = document.querySelector('.product5')
let items_list = [item1,item2,item3,item4,item5]
const left_arrow = document.querySelector('.left-arrow')
const right_arrow = document.querySelector('.right-arrow')

let window_width = window.innerWidth
let x_jump = 0
//let jump_val = item1.getBoundingClientRect().right - item1.getBoundingClientRect().left
//item5.style.transition = `${0.4}s`
function carousel() {
    let stop_flag = false
    items_list.forEach((elem) => {
        elem.style.transition = `${0.4}s`
    })
    items_list.forEach((elem) => {
        x_jump += 10
        elem.style.transform = `translate(${x_jump}px)`
        if(elem.getBoundingClientRect().right > window_width*2) {
            //console.log(true)
            x_jump = 0
            stop_flag = true
        }
        
    })
    return stop_flag
}

function move_left() {
    let flag = carousel()
    if(flag){
        x_jump -= window_width/1.2
    }
    item5.style.transform = `translate(${x_jump}px)`
}

right_arrow.addEventListener("click",move_left)