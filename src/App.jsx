import { useState } from 'react';
import Navbar from './components/Navbar';
import ProgressTracker from './components/ProgressTracker';
import TaskDisplay from './components/TaskDisplay';
import './App.css';

function App() {
  const [currentTask, setCurrentTask] = useState(1);
  const totalTasks = 10; // ← поставьте своё число, если нужно

  // ОДНА (и только одна) функция-коллбэк
  const handleTaskComplete = () => {
    setCurrentTask(prev => {
      const next = prev < totalTasks ? prev + 1 : 1;
      console.log('[App] переключаемся на задание №', next);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-300">
      <Navbar />
      <ProgressTracker current={currentTask} total={totalTasks} />
      <TaskDisplay
        currentTask={currentTask}
        onTaskComplete={handleTaskComplete}
      />
    </div>
  );
}

export default App;
