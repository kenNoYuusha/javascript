import { MediaPlayer } from "../src/MediaPlayer";

class AutoPlay {
    constructor() {
    }
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}

export { AutoPlay }