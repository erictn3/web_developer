import { useState, useEffect } from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo,]

  return (
    <div className="App">
      <h1>Welcome, Eric</h1>
      <h4>Your Tasks</h4>
      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>
          <div className="text">Get the bread</div>
          <div class="delete-todo">x</div>
        </div>
        <div className="todo is-complete">
          <div className="checkbox"></div>
          <div className="text">Get the milk</div>
          <div class="delete-todo">x</div>
        </div>

      </div>
    </div>
  );
}

export default App;
