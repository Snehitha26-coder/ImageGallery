let images = document.querySelectorAll(".gallery-image");
let modal = document.getElementById("imageModal");
let modalImg = document.getElementById("modalImg");
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = images[currentIndex].src;
}

function closeModal() {
    modal.style.display = "none";
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    modalImg.src = images[currentIndex].src;
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};