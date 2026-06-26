const video = document.getElementById('wildlife-video');
const videoBtn = document.getElementById('video-btn');
const videoWrapper = document.getElementById('video-wrapper');

videoBtn.addEventListener('click', () => {
    if (video.paused) {
        videoWrapper.style.display = 'block';
        video.play();
        videoBtn.textContent = 'Hide Video';
    } else {
        
        video.pause();
        videoWrapper.style.display = 'none';
        videoBtn.textContent = 'Play Video';
    }
});

video.addEventListener('play', () => {
    videoBtn.textContent = 'Hide Video';
});

video.addEventListener('pause', () => {
    videoBtn.textContent = 'Play Video';
});
