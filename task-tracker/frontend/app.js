const baseURL = "http://localhost:3000";

window.onload = () => {
  fetchTasks();
};

const taskForm = document.getElementById("taskForm");
const title = document.getElementById('title');
const description = document.getElementById('description');
const priority = document.getElementById('priority');
const due_date = document.getElementById('due_date');

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    title: title.value,
    description: description.value,
    priority: priority.value,
    due_date: due_date.value
  };

  const options = {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  }

  await fetch(`${baseURL}/tasks`, options);
  fetchTasks();
});

async function fetchTasks() {
  const filterStatus = document.getElementById("filterStatus").value;
  const filterPriority = document.getElementById("filterPriority").value;

  const response = await fetch(`${baseURL}/tasks?status=${filterStatus}&priority=${filterPriority}`);
  const tasks = await response.json();

  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const row = `
      <tr>
        <td>${task.title}</td>
        <td>${task.priority}</td>
        <td>${task.status}</td>
        <td>${task.due_date}</td>
        <td>
          <select onchange="updateTask(${task.id}, this.value)">
            <option value="">Change Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </td>
      </tr>
    `;
    taskList.innerHTML += row;
  });
}

async function updateTask(id, status) {
  const options =  {
    method: "PATCH",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({status : status})
  };
  await fetch(`${baseURL}/tasks/${id}`, options);

  fetchTasks();
}

