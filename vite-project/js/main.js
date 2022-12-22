import { favSongs } from "./favSongs";
import "../styles/style.css";
import { DOMselectors } from "./DOMMMM";

<<<<<<< HEAD
const DOMselectors = {
  btn: document.querySelector(".btn"),
  hozierbtn: document.querySelector("#hozier"),
  tsbtn: document.querySelector("#taylor swift"),
  ambtn: document.querySelector("#arctic monkes"),
  displaycard: document.querySelector("display-card"),
};


=======
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
>>>>>>> 23c1d881ea4121f91045c704d8687cdcc98e17fb
