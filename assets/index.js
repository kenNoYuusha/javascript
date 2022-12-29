const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config) {
  this.media = config.video;
}
MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};
MediaPlayer.prototype.toogle = function () {
  this.media.paused ? this.play() : this.pause();
};

const player = new MediaPlayer({ video });
button.onclick = () => player.toogle();
