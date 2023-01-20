function add() {
    const ul = document.getElementById("lista")
    const input = document.getElementById("input")
    const tarefa = input.value
    const li = document.createElement("li")
    li.innerText = tarefa
    ul.appendChild(li)
    input.value= ""
    
        
}