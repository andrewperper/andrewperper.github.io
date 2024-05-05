const volumeBar = document.getElementById('volumeBar');
const volumeHandle = document.getElementById('volumeHandle');
const volumeText = document.getElementById('volumeText');
const volumeImg = document.getElementById('volumeImg');
const changeColorBtn = document.getElementById('changeColorBtn');
let isDragging = false;

// Array of image URLs
const volumeImages = [
    '1.png',
    '2.png',
    '3.png',
    // Add more image URLs as needed
];

volumeHandle.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);
changeColorBtn.addEventListener('click', changeBackgroundColor);

function startDrag(e) {
    isDragging = true;
    volumeText.textContent = "Volume: Changing (Worst Way)";
}

function drag(e) {
    if (!isDragging) return;

    const volumeBarRect = volumeBar.getBoundingClientRect();
    let newX = e.clientX - volumeBarRect.left;

    if (newX < 0) {
        newX = 0;
    } else if (newX > volumeBarRect.width) {
        newX = volumeBarRect.width;
    }

    volumeHandle.style.left = newX + 'px';

    // Calculate volume level based on handle position
    const volumeLevel = newX / volumeBarRect.width;

    // Calculate index based on volume level
    const imageIndex = Math.floor(volumeLevel * volumeImages.length);

    // Set the volume image source
    volumeImg.src = volumeImages[imageIndex];
}

function endDrag(e) {
    isDragging = false;
    volumeText.textContent = "Volume: Unchanged";
}

function changeBackgroundColor() {
    const colors = ['#ff6347', '#ffd700', '#00ff00', '#87ceeb', '#9400d3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
