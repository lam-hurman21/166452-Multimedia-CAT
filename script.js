

const video = document.getElementById('wildlife-video');
const videoBtn = document.getElementById('video-btn');
const videoContainer = document.querySelector('.video-container');

// Synchronize button text if the user uses native video controls instead
video.addEventListener('play', () => {
    videoBtn.textContent = 'Hide Video';
});

video.addEventListener('pause', () => {
    videoBtn.textContent = 'Play Video';
});

videoBtn.addEventListener('click', () => {
    if (video.paused) {
        
        videoContainer.style.display = 'block';
        video.play();
        videoBtn.textContent = 'Hide Video';
    } else {
       
        video.pause();
        videoContainer.style.display = 'none';
        videoBtn.textContent = 'Play Video';
    }
});
