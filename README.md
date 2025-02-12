PEO3
Input
The ToDo List app allows users to enter a task description in an input field. The user types in the task and clicks the “Add Task” button. Each task is stored in the app state using the useState hook. Users can also interact with the “Delete” button to remove tasks from the list.

Process
In processor we can say that when the user clicks the “Add Task” button, the app updates the state by adding the new task to the list. The .map() function dynamically renders all the tasks on the screen. If a user clicks the “Delete” button, the app removes that task from the state and updates the list. React automatically updates the UI to reflect these changes.

Output
The updated task list appears on the screen in real time. Users see their tasks displayed as a list, each with a “Delete” button. Clicking delete immediately removes the task from the UI.

