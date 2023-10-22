const initApp = () => {
    const burgerBtn = document.getElementById("burger-menu")
    const mobileMenu = document.getElementById("mobile-menu")
    const body = document.getElementById("body")
    const closeAdd =document.getElementById("close-add")
    const add =document.getElementById("add")




    const toggleMenu = () => {
        mobileMenu.classList.toggle("flex")
        mobileMenu.classList.toggle("hidden")
        body.classList.toggle("overflow-y-hidden")
    }   

    const hideAdd = () => {
        add.classList.add("hidden")
    }

    
    burgerBtn.addEventListener("click",toggleMenu)
    mobileMenu.addEventListener("click",toggleMenu)
    closeAdd?.addEventListener("click",hideAdd)
}

document.addEventListener("DOMContentLoaded",initApp)