const textoTask = document.getElementById("textoTask");
const addTask = document.getElementById("addTask");
const taskVacias = document.getElementById("taskVacias");
const ul = document.querySelector("ul");
let i = localStorage.length;
//añado listener al boton de crear tarea, tenemos un 1 que definira que task estamos haciendo
addTask.addEventListener("click", (e) => {
  e.preventDefault();
 
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
    i++;

    textoTask.value = "";
    taskVacias.style.display = "none";
  }
});


window.addEventListener("load", (e) => {
  e.preventDefault();
  
  
  for (let i = 0; i <= localStorage.length; i++) {

  var text = (JSON.parse(window.localStorage.getItem("Task"+i)));

  const li = document.createElement("li");
  li.id=i
  const p = document.createElement("p");
  p.textContent = text.task;

  li.appendChild(p);
  li.appendChild(btnBorrar());
  ul.appendChild(li);
    
  }
  
});

 



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
