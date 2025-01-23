
 const images = {
    head: ["Bilder/head1.png", "Bilder/head2.png", "Bilder/head3.png", "Bilder/head4.png"],
    body: ["Bilder/body1.png", "Bilder/body2.png", "Bilder/body3.png", "Bilder/body4.png"],
    legs: ["Bilder/legs1.png", "Bilder/legs2.png", "Bilder/legs3.png", "Bilder/legs4.png"]
};

const currentIndex = {
    head: 0,
    body: 0,
    legs: 0
};

function updateImage(part, direction) {
    const partImages = images[part];
    const totalImages = partImages.length;

    if (direction === "next") {
        currentIndex[part] = (currentIndex[part] + 1) % totalImages;
    } else if (direction === "prev") {
        currentIndex[part] = (currentIndex[part] - 1 + totalImages) % totalImages;
    }

    const imgElement = document.getElementById(part);
    imgElement.src = partImages[currentIndex[part]];
}

const arrowButtons = document.querySelectorAll(".arrow");
arrowButtons.forEach(button => {
    button.addEventListener("click", () => {
        const part = button.getAttribute("data-part");
        const direction = button.getAttribute("data-direction");
        updateImage(part, direction);
    });
});