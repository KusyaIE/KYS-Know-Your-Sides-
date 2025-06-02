import { useState } from 'react';

const TaskDisplay = ({ currentTask, onTaskComplete }) => {
  // Example task structure - you can modify this based on your actual tasks
  const tasks = [
    {
      id: 1,
      image: '/media/Which ear did the dog tilt   left or right (left).png', // You'll need to add actual images to your assets
      instruction: 'Which ear did the dog tilt - left or right?',
    },
    {
      id: 2,
      image: '/task2.jpg',
      instruction: 'Find the right side in this picture',
    },
    // Add more tasks as needed
  ];

  return (
    <div className="flex flex-col items-center min-h-screen pt-26 pb-20 px-4 w-full">
      <div className="bg-gray-800/20 rounded-xl shadow-2xl p-15 max-w-10xl w-21/12 backdrop-blur-sm mt-20">
        {/* Task Instructions */}
        <div className="text-center mb-13">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            {tasks[currentTask - 1]?.instruction || 'Loading task...'}
          </h2>
        </div>

        {/* Image Display */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-[500px] h-[500px] relative overflow-hidden rounded-lg shadow-xl">
            <img
              src={tasks[currentTask - 1]?.image}
              alt={`Task ${currentTask}`}
              className="w-full h-full object-contain"
              style={{
                maxWidth: '500px',
                maxHeight: '500px',
              }}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onTaskComplete}
            className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20"
          >
            Next Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDisplay; 