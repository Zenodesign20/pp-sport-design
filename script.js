const products = [
  { folder: "jersey", prefix: "j", total: 468 },
  { folder: "polo", prefix: "p", total: 58 },
  { folder: "ordinationshirt", prefix: "o", total: 14 },
  { folder: "gymshirt", prefix: "g", total: 16 }
];

const gallery = document.getElementById("gallery");

/* ---------- CREATE GALLERY ---------- */
products.forEach(cat => {
  const section = document.createElement("section");
  section.className = "category";
  section.dataset.category = cat.folder;

  const title = document.createElement("h2");
  title.textContent = cat.folder.toUpperCase();
  section.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "grid";

  for(let i=1;i<=cat.total;i++){
    const img = document.createElement("img");
    img.src = `images/${cat.folder}/${cat.prefix}(${i}).jpg`;
    img.alt = `${cat.folder} design ${i}`;
    img.loading = "lazy";

    img.addEventListener("click",()=>openLightbox(img.src));

    observer.observe(img);
    grid.appendChild(img);
  }

  section.appendChild(grid);
  gallery.appendChild(section);
});

/* ---------- FILTER ---------- */
document.querySelectorAll(".nav button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".nav button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".category").forEach(cat=>{
      cat.style.display = (filter==="all" || cat.dataset.category===filter)
        ? "block"
        : "none";
    });
  });
});

/* ---------- LIGHTBOX ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src){
  lightboxImg.src = src;
  lightbox.style.display="flex";
}

lightbox.addEventListener("click",()=>{
  lightbox.style.display="none";
});

/* ---------- INTERSECTION OBSERVER ---------- */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.1});
