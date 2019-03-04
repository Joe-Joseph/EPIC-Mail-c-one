/*open*/
const menuBar=document.querySelector(".menuBar");
const openMenu=document.querySelector(".nav-inbox");
const closeMenu=document.querySelector(".close");
menuBar.addEventListener("click",()=>{
  openMenu.style="transform:translateX(0%)";
})
/*close*/
closeMenu.addEventListener("click",()=>{
  openMenu.style="transform:translateX(100%)";
})
