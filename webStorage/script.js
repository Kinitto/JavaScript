window.addEventListener("load", function () {
  btnBorrar();


})
const textoTask = document.getElementById("textoTask");
const addTask = document.getElementById("addTask");
const taskVacias = document.getElementById("taskVacias");
const ul = document.querySelector("ul");
let i = 0;

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  i++;
  console.log(i);
  const text = textoTask.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(btnBorrar());
    ul.appendChild(li);

    const tarea={
      task:text,
      finished:false,
      key:'Task'+i
    }
    localStorage.setItem('Task'+i,JSON.stringify(tarea));

    textoTask.value = "";
    taskVacias.style.display = "none";
  }
});

function btnBorrar() {
  const btnBorrar = document.createElement("button");

  btnBorrar.textContent = "X";
  btnBorrar.className = "btnBorrar";
  btnBorrar.addEventListener("click", (e) => {

    e.preventDefault();
    
    var cositas = JSON.parse(localStorage.getItem("Task1")); // updated
    console.log(cositas)
    cositastexto = JSON.stringify(cositas)
    console.log(cositastexto)

    const item = e.target.parentElement;
    ul.removeChild(item);
    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      taskVacias.style.display = "block";
    }
    
  });
  
  return btnBorrar;
}
