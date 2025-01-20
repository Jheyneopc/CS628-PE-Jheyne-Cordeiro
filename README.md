# MyResume-

Analysis
The program takes two types of inputs:
-A list of movies (title, genre, release year) which is already written inside the code.
-The user's choice from a dropdown menu to select a genre. When the program starts, it shows all movies by default. The user selects a genre, the program takes that as input.

Process
The program processes the input by:
- Filtering movies based on the selected genre.
-Checking if the user selected 'All Genres', If yes, it shows all movies.
-Waiting for a user to click a movie. When clicked, it alerts the movie title.
This is done using React state to keep track of the selected genre.

Output
The program outputs the filtered movie list on the screen.
-If 'All Genres' is selected, it shows all movies.
-If a specific genre is selected, it shows only movies from that genre.
-If a user clicks a movie, a popup alert appears with the movie name.

