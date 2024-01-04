// Function to fetch and display images
function displayImages() {
    const imageContainer = document.getElementById('imageContainer');
    const imageFolder = 'images/'; // Update the folder path

    // Fetch images from the specified folder
    fetch(imageFolder)
        .then(response => response.text())
        .then(data => {
            // Create an array of image file names
            const imageFiles = data.split('\n').filter(file => file.trim() !== '');

            // Create and append <img> elements to the container
            imageFiles.forEach(file => {
                const img = document.createElement('img');
                img.src = imageFolder + file;
                img.alt = 'Image';
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}

// Call the function to display images
displayImages();
