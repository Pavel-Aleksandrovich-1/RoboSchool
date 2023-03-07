const VideoBlog = document.querySelector(".video__content");
const video = VideoBlog.querySelector('video');
const PlayBtn = VideoBlog.querySelector(".video__content-btn");

PlayBtn.addEventListener('click', () => {
  video.play();
  video.controls = true;
  PlayBtn.classList.add('video__content-btn--played')
});
