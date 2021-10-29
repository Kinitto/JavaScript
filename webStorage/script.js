const textoTask = document.getElementById("textoTask");
const addTask = document.getElementById("addTask");
const taskVacias = document.getElementById("taskVacias");
const ul = document.querySelector("ul");
let i = 0;
//añado listener al boton de crear tarea, tenemos un 1 que definira que task estamos haciendo
addTask.addEventListener("click", (e) => {
  e.preventDefault();
  i++;
  const text = textoTask.value;
//si el contenido es distinto a null, se forma el parrafo en la lista con el texto introducido
  if (text !== "") {
    const li = document.createElement("li");
    li.id=i
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(btnBorrar());
    ul.appendChild(li);
//creamos el objeto tarea que tiene el texto introducido y el parametro finished
    const tarea={
      task:text,
      finished:false
    }
    //pasamos el objeto a string y lo metemos al localstorage.
    localStorage.setItem('Task'+i,JSON.stringify(tarea));

    textoTask.value = "";
    taskVacias.style.display = "none";
  }
});

window.onload = function(e) {

  e.preventDefault();
  const item = e.target.parentElement;

  let objetos = localStorage.getItem("Task"+1);

console.log(objetos);
};

function btnBorrar() {
  const btnBorrar = document.createElement("button");

  btnBorrar.textContent = "X";
  btnBorrar.className = "btnBorrar";
  btnBorrar.addEventListener("click", (e) => {
    e.preventDefault();
    const item = e.target.parentElement;
    ul.removeChild(item);

    localStorage.removeItem("Task"+item.id);

    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      taskVacias.style.display = "block";
    }
    
  });
  
  return btnBorrar;
}
