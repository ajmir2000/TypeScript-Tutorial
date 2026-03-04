enum Status {
  pending = "pending",
  InProgress = "InProgress",
  Done = "Done",
}

const tasks: Array<{ id: number; title: string; status: Status }> = [];

function addTask(title: string, status: Status = Status.pending): void {
  const newTask = {
    id: tasks.length + 1,
    title,
    status,
  };
  tasks.push(newTask);
}

function showTasks(): void {
  console.log("Todo List:");
  tasks.forEach((task) => {
    console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
  });
}

addTask("Learn TypeScript", Status.InProgress);
addTask("Build a Todo List App");
addTask("Review TypeScript Concepts", Status.Done);
showTasks();

function updateTaskStatus(id: number, newStatus: Status): void {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.status = newStatus;
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

updateTaskStatus(1, Status.Done);
showTasks();
