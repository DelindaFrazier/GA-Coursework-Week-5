# GA-Coursework-Week-5
Assignment for 5th class. jQuery

Goal: Build a web-app that will take a user's input and update the background image of the page based on that input. CSS and HTML code was provided. I wrote the .js file.

Requirements:

Call ```$.val()``` on inputs to get the string value of your user's input
- Store user input in ```var cityName```
- Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button
- Create ```if / else if / else``` conditionals to control the flow of your application
- Write at least six different lines of pseudocode and display them inline as JavaScript comments
- Prevent a form submission using the ```event.preventDefault()``` function
- Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
- Get the first element from an attribute name using ```$.attr()```
- Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
- If a user submits:

  - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
  - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
  - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
  - "Austin" or "ATX" make the background of the page austin.jpg
  - "Sydney" or "SYD" make the background of the page sydney.jpg
