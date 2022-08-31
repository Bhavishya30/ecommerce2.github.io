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
search1=document.querySelector(".input-1");
dropdown_icon=document.querySelectorAll(".dropdown-icon");
dropmenu=document.getElementsByClassName("sidenav-item1");
for( let i=0 ; i < dropmenu.length ; i++)
{
       dropmenu[i].addEventListener("click",() =>
       {
       let result=dropmenu[i].classList.toggle("active6");
       if(result)
       {
          dropdown_icon[i].classList.add("active8");
       }
       else
       {
         dropdown_icon[i].classList.remove("active8");
       }
       })
}
 hamburger=document.querySelector(".hamburger");
line1=document.querySelector(".line-1");
line2=document.querySelector(".line-2");
line3=document.querySelector(".line-3")
sidenav=document.querySelector(".sidenav");
hamburger.addEventListener("click",xyz2);
searchicon=document.querySelector(".search-icon");
icon=document.querySelector(".search-icon");
searchbox=document.querySelector(".search");
icon.addEventListener("click",xyz);
function xyz()
{
    let x;
    x=searchbox.classList.toggle("active");
    searchicon.classList.toggle("active2");
   
    
}
function xyz2()
{
    sidenav.classList.toggle("active3");
    line1.classList.toggle("active4");
    line2.classList.toggle("active5");
    line3.classList.toggle("active1");
}
function xyz3()
{
  
}
/*swiper js starts here*/
var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    dynamicBullets: true,
    loop:true,
    grabCursor:true,
  },
});

