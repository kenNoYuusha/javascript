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

export { MediaPlayer }