import { MediaPlayer } from "./MediaPlayer.js";
import { AutoPlay } from "../plugins/AutoPlay.js";
import { AutoPause } from "../plugins/AutoPause.js";
const video = document.querySelector("video");
const button = document.querySelector("button");
const muteButton = document.querySelector("#muteButton");

const player = new MediaPlayer({ video, plugins: [new AutoPlay(), new AutoPause()] });

button.onclick = () => player.toogle();
muteButton.onclick = () => player.toogleMute();

if('serviceWorker' in navigator){
   navigator.serviceWorker.register('/sw.js')   
        .catch(error => console.log(error.message))
}