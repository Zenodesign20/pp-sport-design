/* CURSOR */
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

/* PARALLAX */
window.addEventListener("scroll",()=>{
  const logo=document.querySelector(".logo");
  if(logo) logo.style.transform=`translateY(${scrollY*0.25}px)`;
});

/* LAZY LOAD (FAST) */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const img=e.target;
      img.src=img.dataset.src;
      img.onload=()=>img.classList.add("loaded");
      io.unobserve(img);
    }
  });
},{rootMargin:"200px"});

document.querySelectorAll("img[data-src]").forEach(img=>io.observe(img));
