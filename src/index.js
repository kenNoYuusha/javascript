import { MediaPlayer } from "./MediaPlayer.js";
import { AutoPlay } from "../plugins/AutoPlay.js";
const video = document.querySelector("video");
const button = document.querySelector("button");
const muteButton = document.querySelector("#muteButton");

const player = new MediaPlayer({ video, plugins: [new AutoPlay()] });

button.onclick = () => player.toogle();
muteButton.onclick = () => player.toogleMute();
