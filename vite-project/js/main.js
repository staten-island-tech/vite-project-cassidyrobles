import { favSongs } from "./favSongs";
import "../styles/style.css";
import { DOMselectors } from "./DOMMMM";

favSongs.forEach((el)=>{
    DOMselectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        <p>${el.name}</p>
        <img class= "theimage" src="${el.img}">
        <p>${el.artist}</p>
        </div>`
    );
});