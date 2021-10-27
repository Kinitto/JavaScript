const textoTask = document.getElementById("textoTask");
const addTask = document.getElementById("addTask");
const taskVacias = document.getElementById("taskVacias");
const ul = document.querySelector("ul");

addTask.addEventListener("click", (e) => {
  e.preventDefault();

  const text = textoTask.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(btnBorrar());
    ul.appendChild(li);

    textoTask.value = "";
    taskVacias.style.display = "none";
  }
});

function btnBorrar() {
  const btnBorrar = document.createElement("button");

  btnBorrar.textContent = "X";
  btnBorrar.className = "btnBorrar";

  btnBorrar.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      taskVacias.style.display = "block";
    }
  });

  return btnBorrar;
}
