const DOMselectors = {
    btn: document.querySelector(".btn"),
    hozier: document.querySelector("#hozier"),
    taylorswift: document.querySelector("#taylor swift"),
    arcticmonkeys: document.querySelector("#arctic monkeys"),
    allbutton: document.querySelector("#all"),
    box: document.querySelector(".box"),
    mode: document.querySelector("#mode"),
  };
  

  export { DOMselectors };

  DOMselectors.mode.addEventListener("click", function(){
    if (document.body.classList.contains("light")){
      
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else{
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });



