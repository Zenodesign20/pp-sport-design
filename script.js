const products = [
  { name: "Jersey", folder: "jersey", prefix: "j", total: 468 },
  { name: "Polo", folder: "polo", prefix: "p", total: 58 },
  { name: "Ordination Shirt", folder: "ordinationshirt", prefix: "o", total: 14 },
  { name: "Gym Shirt", folder: "gymshirt", prefix: "g", total: 16 }
];

const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");

products.forEach((item, index) => {
  // Filter button
  const btn = document.createElement("button");
  btn.textContent = item.name;
  if (index === 0) btn.classList.add("active");
  btn.onclick = () => showCategory(item.folder, btn);
  filters.appendChild(btn);

  // Section
  const section = document.createElement("section");
  section.id = item.folder;
  if (index !== 0) section.style.display = "none";

  const title = document.createElement("h2");
  title.textContent = item.name;
  section.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "grid";

  for (let i = 1; i <= item.total; i++) {
    const img = document.createElement("img");
    img.src = `images/${item.folder}/${item.prefix}(${i}).jpg`;
    img.loading = "lazy";
    img.onclick = () => openLightbox(img.src);
    grid.appendChild(img);
  }

  section.appendChild(grid);
  gallery.appendChild(section);
});

function showCategory(id, button) {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById(id).style.display = "block";

  document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
  button.classList.add("active");
}

/* Lightbox */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

close.onclick = () => lightbox.style.display = "none";
lightbox.onclick = e => e.target === lightbox && (lightbox.style.display = "none");
