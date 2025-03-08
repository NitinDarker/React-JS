console.log("hello world");
const btn = document.getElementById("done-btn");
btn.onclick = function addTodo() {
  const task = document.getElementById("new-task").value;
  const desc = document.getElementById("desc").value;
  const cont = document.getElementsByClassName("task-container");
  cont.innerHTML = "Daba diya"
  console.log(task, desc);
};
