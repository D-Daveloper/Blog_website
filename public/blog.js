const open = document.querySelector(".menu-button")
const close = document.querySelector(".close-button")
const side_bar = document.querySelector(".moblie-nav")
const mobile_li = document.getElementsByClassName("moblie-nav-compo")  
const mobile_li_array = Array.from(mobile_li)



open.addEventListener("click", ()=> {
    open.style.display = "none";
    side_bar.classList.add("open")
    close.style.display ="flex"
    mobile_li_array.forEach(li => {
        li.classList.add("clear")
    });
    
})
close.addEventListener("click", ()=> {
    open.style.display = "flex";
    side_bar.classList.remove("open")
    close.style.display ="none"
    mobile_li_array.forEach(li => {
        li.classList.remove("clear")
    });
    
})
