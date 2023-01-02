class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  constructor(config) {
    this.media = config.video;
    this.plugins = config.plugins || [];

    this.init_plugins();
  }
  private init_plugins() {
    // const player = {
    //   play: this.play,
    //   pause: this.pause,
    //   media: this.media,
    //   get muted() {
    //     return this.media.muted;
    //   },
    //   set muted(value) {
    //     this.media.muted = value;
    //   }
    // };

    this.plugins.forEach(plugin => plugin.run(this));
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  toogle() {
    this.media.paused ? this.play() : this.pause();
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toogleMute() {
    this.media.muted = !this.media.muted;
  }
}

export { MediaPlayer }