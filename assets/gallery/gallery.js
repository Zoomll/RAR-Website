// Array of image filenames (manually listed)
const images = [
    'winningsmile.png'
];

// Directory where images are stored relative to this script
const imageDirectory = '../gallery/';

// Function to load and display images
function loadImages() {
    const imageContainer = document.getElementById('image-container');

    // Loop through image filenames and create <img> elements
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = imageDirectory + image;
        imageContainer.appendChild(img);
    });
}

// Load the images on page load
window.onload = loadImages;
