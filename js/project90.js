let icon;
let searchbox;
let searchicon;
let hamburger;
let sidenav;
let search1;
let line1;
let line2;
let line3;
let dropmenu;
let content;
let dropdown_icon;
let icon2;
let icon3;
icon2=document.querySelector(".icon-3");
icon3=document.querySelector(".icon-3-content");
icon2.addEventListener("click",xyz4);
function xyz4()
{
  icon3.classList.toggle("active11");
}

dropdown_icon = document.querySelectorAll(".dropdown-icon");
dropmenu = document.getElementsByClassName("sidenav-item1");
for (let i = 0; i < dropmenu.length; i++) {
  dropmenu[i].addEventListener("click", () => {
    let result = dropmenu[i].classList.toggle("active6");
    if (result) {
      dropdown_icon[i].classList.add("active8");
    }
    else {
      dropdown_icon[i].classList.remove("active8");
    }
  })
}
hamburger = document.querySelector(".hamburger");
line1 = document.querySelector(".line-1");
line2 = document.querySelector(".line-2");
line3 = document.querySelector(".line-3")
sidenav = document.querySelector(".sidenav");
hamburger.addEventListener("click", xyz2);
function xyz() {
  let x;
  x = searchbox.classList.toggle("active");



}
function xyz2() {
  sidenav.classList.toggle("active3");
  line1.classList.toggle("active4");
  line2.classList.toggle("active5");
  line3.classList.toggle("active1");
}
function xyz3() {

}
/*swiper js starts here*/
var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
    loop: true,
    grabCursor: true,
  },
});
/*swiper js for second slider */
var swiper = new Swiper(".home-slider2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    grabCursor: true
  },
});

var swiper = new Swiper(".card-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  }
  ,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 5,

    },
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,

    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,


    },
  },
});


/*product-cards*/
var swiper = new Swiper(".arrivals-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});
const countdown = () => {
  const countdate = new Date("Nov 29, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countdate - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const textday = Math.floor(gap / day);
  const texthour = Math.floor((gap % day) / hour);
  const textminute = Math.floor((gap % hour) / minute);
  const textsecond = Math.floor((gap % minute) / second);
  document.querySelector(".day").innerText = textday;
  document.querySelector(".hour").innerText = texthour;
  document.querySelector(".min").innerText = textminute;
  document.querySelector(".sec").innerText = textsecond;



};

setInterval(countdown, 1000);


/*seller section js*/
var swiper = new Swiper(".seller-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },


});
