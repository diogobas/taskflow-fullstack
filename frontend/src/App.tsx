import React from 'react';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  // TODO: Replace with actual user authentication
  const userId = 'demo-user';

  return (
    <div className="App">
      <header className="App-header">
        <h1>TaskFlow</h1>
        <p>Fullstack Task Management Application</p>
      </header>
      <main>
        <TaskList userId={userId} />
      </main>
    </div>
  );
}

export default App;