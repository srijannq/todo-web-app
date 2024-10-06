# Dark Mode To-Do List

This is a simple To-Do List application with a dark mode theme. It allows users to add, complete, and delete tasks. The tasks are saved in the browser's local storage, so they persist even after the page is refreshed.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persistent storage using local storage
- Dark mode theme

## Project Structure

```
todoJsProject/
├── index.html
├── styles.css
├── script.js
└── readme.md
```

## Getting Started

### Prerequisites

To run this project, you need a web browser (e.g., Chrome, Firefox, Edge).

### Installation

1. Clone the repository or download the project files.

   ```sh
   git clone https://github.com/your-username/todoJsProject.git
   ```

2. Navigate to the project directory.

   ```sh
   cd todoJsProject
   ```

3. Open `index.html` in your web browser.

   ```sh
   open index.html
   ```

   or simply double-click the `index.html` file.

## Usage

1. **Add a new task**: Type your task in the input field and click the "Add Task" button.
2. **Complete a task**: Click on a task to mark it as completed. Click again to unmark.
3. **Delete a task**: Click the "Delete" button next to a task to remove it from the list.

## Code Overview

### HTML

The `index.html` file contains the structure of the application, including the input field, the "Add Task" button, and the task list.

### CSS

The `styles.css` file contains the styles for the application, including the dark mode theme and responsive design.

### JavaScript

The `script.js` file contains the logic for adding, completing, and deleting tasks. It also handles saving and loading tasks from local storage.
