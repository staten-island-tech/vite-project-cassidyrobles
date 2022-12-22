import { favSongs } from "./favSongs";
import "../styles/style.css";
import { DOMselectors } from "./DOMMMM";



function addCard(el) {

    DOMselectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        <p>${el.name}</p>
        <img class= "theimage" src="${el.img}">
        <p>${el.artist}</p>
        </div>`
    );
 };

function remove () {
  document.querySelectorAll(".card").forEach((e)=> e.remove());
}

favSongs.forEach((el)=> addCard((el)));

document.getElementById("all").addEventListener("click", function () {
  remove();
  favSongs.forEach((el)=> addCard((el)));
});

document.getElementById("taylor swift").addEventListener("click", function()  {
  remove();
  favSongs.forEach((el) => {
    if(el.artist.includes("Taylor Swift")){
    addCard(el);
    }})});

    document.getElementById("hozier").addEventListener("click", function()  {
      remove();
      favSongs.forEach((el) => {
        if(el.artist.includes("Hozier")){
        addCard(el);
        }})});

        document.getElementById("arctic monkeys").addEventListener("click", function()  {
          remove();
          favSongs.forEach((el) => {
            if(el.artist.includes("Arctic Monkeys")){
            addCard(el);
            }})});