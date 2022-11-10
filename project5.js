let x=document.getElementsByClassName("list-1");
let icon=document.querySelectorAll(".icon-5");
for(let i=0;i<x.length;i++)
{

    icon[i].addEventListener("click",()=>
    {
        x[i].classList.toggle("active");
    })

}
var swiper = new Swiper(".card-slider-2", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300:
        {
            slidesPerView:1,
            spaceBetween:5,
        },
      
      340: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  
  
  });
  var swiper = new Swiper(".card-slider-4", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      
      300: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  
  
  });