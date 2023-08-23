// let headerNavList = document.querySelector('.header-list');
// let headerNavItems = ["Services", "Our Values", "Case Studies", "Blog", "Inner Pages"]


// let headerNav = headerNavItems.map(function (element){

//     const navItem = document.createElement("li");
//     navItem.className = "header-item"
//     const navLink = document.createElement("a");
//     navLink.className = "header-link"
//     navLink.innerHTML = element
//     navLink.setAttribute("id", element.toLocaleLowerCase());
//     console.log(navLink);

    
//     navItem.appendChild(navLink)
//     headerNavList.appendChild(navItem)
// })

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop
    let height = sec.offsetHeight
    let id = sec.getAttribute("id")

    if (top >= offset & top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active")
        document.querySelector("header nav a[href*="+ id +"]").classList.add("active")
      })
    }
  })
}




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


let valueDisplays = document.querySelectorAll(".num")
let interval = 10 

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0
  let endValue = parseInt(valueDisplay.getAttribute("data-val"))

  let duration = Math.floor(interval / endValue)
  let counter = setInterval(function () {
    startValue += 1
    valueDisplay.textContent = startValue

    if (startValue == endValue ) {
      clearInterval(counter)
    }
  }, 1)
})


 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


  const slider = new Swiper(".js-testimonials-slider", {
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: ".js-testimonials-pagination",
      clickable: true
    }
  })


  var swiperImg = new Swiper(".mySwiper1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperImg2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });