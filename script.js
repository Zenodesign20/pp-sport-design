const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const images = {
    jersey: ["j(1).jpg", "j(2).jpg"],
    polo: ["p(1).jpg", "p(2).jpg"],
    ordinationshirt: ["o(1).jpg", "o(2).jpg"],
    gymshirt: ["g(1).jpg", "g(2).jpg"]
};

function showGallery(category) {
    gallery.innerHTML = "";

    images[category].forEach(img => {
        const image = document.createElement("img");
        image.src = `images/${category}/${img}`;
        image.onclick = () => {
            lightbox.style.display = "flex";
            lightboxImg.src = image.src;
        };
        gallery.appendChild(image);
    });
}

lightbox.onclick = () => {
    lightbox.style.display = "none";
};

// โหลดหมวดแรก
showGallery("football");
