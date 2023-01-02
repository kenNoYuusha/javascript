import { MediaPlayer } from "./MediaPlayer";
import { AutoPlay } from "../plugins/AutoPlay";
import { AutoPause } from "../plugins/AutoPause";
const video = document.querySelector("video");
const button:HTMLElement = document.querySelector("button") as HTMLElement;
const muteButton:HTMLElement = document.querySelector("#muteButton") as HTMLElement;

const player = new MediaPlayer({ video, plugins: [new AutoPlay(), new AutoPause()] });

button.onclick = () => player.toogle();
muteButton.onclick = () => player.toogleMute();

// if('serviceWorker' in navigator){
//    navigator.serviceWorker.register('/sw.js')   
//         .catch(error => console.log(error.message))
// }