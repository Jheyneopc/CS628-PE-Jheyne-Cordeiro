PE05
Input:
The Recipe Finder is a great app that allows users to input recipe details such as name, ingredients, and cooking instructions, as well as the ability to update or delete recipes. Information is collected through forms on the frontend, built with React.js.

Process:
When adding a new recipe, the React frontend sends the data to an Express.js backend that stores the recipe in MongoDB Atlas. React Router helps users navigate between different pages, such as Recipe List, Recipe Details, Add Recipe, and Update/Delete pages. The useParams hook fetches individual recipe details, and the backend uses the MongoDB Node.js driver to handle CRUD (Create, Read, Update, Delete) operations.

Output: 
When recipes are added, the app displays a list of recipes, detailed pages, and confirmation messages when updated or deleted.


PE04

Input:
The program gets information from the user through the console (the text-based screen where we type). The user gives the necessary information, which could be numbers, words, or choices. The program checks the information because it can't have no errors, like the wrong type of data or missing details.

Process: 
When the program has the information, it processes it according to the given instructions. This might include doing calculations, making decisions based on conditions, repeating actions (loops), or calling functions (smaller sets of instructions). The program systematically turns the input into useful results, handling the data carefully and accurately.

Output:
After processing the data, the program shows the result on the console. This result could be calculated numbers, neatly formatted text, or helpful messages based on what the user input. The program makes sure the output is clear and easy to understand.



PE03

Input:
The ToDo List app allows users to enter a task description in an input field. The user types in the task and clicks the “Add Task” button. Each task is stored in the app state using the useState hook. Users can also interact with the “Delete” button to remove tasks from the list.

Process:
In processor we can say that when the user clicks the “Add Task” button, the app updates the state by adding the new task to the list. The .map() function dynamically renders all the tasks on the screen. If a user clicks the “Delete” button, the app removes that task from the state and updates the list. React automatically updates the UI to reflect these changes.

Output:
The updated task list appears on the screen in real time. Users see their tasks displayed as a list, each with a “Delete” button. Clicking delete immediately removes the task from the UI.

