const tarefas = ["estudar HTML"];

function add() {
  const input = document.querySelector("input");
  const tarefa = input.value;
  tarefas.push(tarefa)
  input.value = "";
  render()
}

function render() {
  ul.
  const ul = document.querySelector("ul");

  tarefas.forEach(function(tarefa){
    const li = document.createElement("li");
    li.innerText = tarefa;
    ul.appendChild(li);
    console.log(tarefa);
  });
}
render();
