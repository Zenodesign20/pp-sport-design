/* SOUND */
window.addEventListener("click",()=>{
  const sound=document.getElementById("hit-sound");
  sound.volume=0.3;
  sound.play();
},{once:true});

/* GALLERY DATA */
const products=[
{folder:"jersey",prefix:"j",total:468},
{folder:"polo",prefix:"p",total:58},
{folder:"ordinationshirt",prefix:"o",total:14},
{folder:"gymshirt",prefix:"g",total:16}
];

const gallery=document.getElementById("gallery");

/* LOAD GALLERY */
products.forEach(item=>{
  const title=document.createElement("h2");
  title.textContent=item.folder.toUpperCase();
  title.style.padding="40px 40px 0";
  title.style.color="#d4af37";
  gallery.appendChild(title);

  const grid=document.createElement("div");
  grid.className="grid";

  for(let i=1;i<=item.total;i++){
    const img=document.createElement("img");
    img.src=`images/${item.folder}/${item.prefix}(${i}).jpg`;
    img.loading="lazy";
    grid.appendChild(img);

    img.onclick=()=>{
      document.getElementById("lightbox").style.display="flex";
      document.getElementById("lightbox-img").src=img.src;
    };
  }
  gallery.appendChild(grid);
});

/* LIGHTBOX CLOSE */
document.getElementById("lightbox").onclick=()=>{
  document.getElementById("lightbox").style.display="none";
};

/* SCROLL ANIMATION */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
},{threshold:0.2});

setTimeout(()=>{
  document.querySelectorAll(".grid img").forEach(img=>observer.observe(img));
},2000);
