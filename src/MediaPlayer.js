function MediaPlayer(config) {
  this.media = config.video;
  this.plugins = config.plugins || [];

  this._init_plugins()
}

MediaPlayer.prototype._init_plugins = function(){
  this.plugins.forEach( plugin => plugin.run(this))
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
MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
}
MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
}
MediaPlayer.prototype.toogleMute = function () {
  this.media.muted = !this.media.muted;
}

export { MediaPlayer }