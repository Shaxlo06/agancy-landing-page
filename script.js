let headerNavList = document.querySelector('.header-list');
let headerNavItems = ["Services", "Our Values", "Case Studies", "Blog", "Inner Pages"]


let headerNav = headerNavItems.map(function (element){

    const navItem = document.createElement("li");
    navItem.className = "header-item"
    const navLink = document.createElement("a");
    navLink.className = "header-link"
    navLink.innerHTML = element
    
    navItem.appendChild(navLink)
    headerNavList.appendChild(navItem)
})


let counter = 1

setInterval(() => {

    document.querySelector(".mySlider.show").classList.remove("show")
    const slider = document.querySelector(`.mySlider${counter}`)

    slider.classList.add("show")
    counter++

    if(counter > 3 ){
        counter = 1
    }
}, 2500)


let mySwiper = document.querySelector(".mySwiper")

var swiper = new Swiper(mySwiper, {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseMouseEnter: true,
    },
    slidesPerGroup:1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },   
})









