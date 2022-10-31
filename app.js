const url = `https://jsonplaceholder.typicode.com/todos`;

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const { userId, id, title, completed } = data;
    data.forEach((task) => {
      const userCard = document.querySelector("#userCard");
      const taskInList = document.createElement("h3");
      const status = document.createElement("p");
      taskInList.innerText = `Task: ${task.title}`;
      status.innerText = `Completion Status: ${task.completed}`;
      userCard.append(taskInList);
      userCard.append(status);

      console.log(task);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();