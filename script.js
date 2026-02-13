const gallery = document.getElementById("gallery");

const products = [
  { folder: "jersey", prefix: "j", total: 468 },
  { folder: "polo", prefix: "p", total: 58 },
  { folder: "ordinationshirt", prefix: "o", total: 14 },
  { folder: "gymshirt", prefix: "g", total: 16 }
];

// CREATE GALLERY
products.forEach(item => {
  const title = document.createElement("h2");
  title.className = "section-title";
  title.textContent = item.folder.toUpperCase();
  title.dataset.category = item.folder;
  gallery.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "grid";
  grid.dataset.category = item.folder;

  for (let i = 1; i <= item.total; i++) {
    const img = document.createElement("img");
    img.dataset.src = `images/${item.folder}/${item.prefix}(${i}).jpg`;
    img.alt = `${item.folder} design ${i}`;
    img.loading = "lazy";
    grid.appendChild(img);
  }

  gallery.appendChild(grid);
});

// FILTER
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll("[data-category]").forEach(el => {
      el.style.display = filter === "all" || el.dataset.category === filter ? "" : "none";
    });
  });
});

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

gallery.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    lightboxImg.src = e.target.src;
    lightbox.style.display = "flex";
  }
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// INTERSECTION OBSERVER
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll("img[data-src]").forEach(img => observer.observe(img));

// INTRO REVEAL
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".hidden").forEach(el => el.classList.add("show"));
  }, 2600);
});
