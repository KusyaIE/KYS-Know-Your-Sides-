import { useState } from 'react';

const TaskDisplay = ({ currentTask, onTaskComplete }) => {
  const [feedback, setFeedback] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Example task structure - you can modify this based on your actual tasks
  const tasks = [
    {
      id: 1,
      image: '/media/Which ear did the dog tilt   left or right (left).png', // You'll need to add actual images to your assets
      instruction: 'Which ear did the dog tilt - left or right?',
      answer: "left"
    },
    {
      id: 2,
      image: '/media/Is_the_light_switch_to_the_left_or_to_the_right_of_the_door_left.png',
      instruction: 'Is the light switch to the left or to the right of the door?',
      answer: "left"
    },
    // Add more tasks as needed
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === tasks[currentTask - 1].answer;
    setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
    
    // Wait for 1.5 seconds before moving to next task
    setTimeout(() => {
      onTaskComplete();
      setFeedback('');
      setSelectedAnswer(null);
    }, 1500);
  };

  const getButtonStyles = (buttonType) => {
    const baseStyles = buttonType === 'left' 
      ? 'bg-gray-700 text-white' 
      : 'bg-gray-300 text-white';

    if (selectedAnswer === buttonType) {
      const isCorrect = buttonType === tasks[currentTask - 1].answer;
      return isCorrect 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white';
    }

    return baseStyles;
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-0 pb-2 px-4 w-full">
      <div className="bg-gray-800/20 rounded-xl shadow-2xl p-8 max-w-10xl w-21/12 backdrop-blur-sm mt-20">
        {/* Task Instructions */}
        <div className="text-center mb-9">
          <h2 className="text-2xl font-bold text-gray-100 mb-2">
            {tasks[currentTask - 1]?.instruction || 'Loading task...'}
          </h2>
          {feedback && (
            <p className={`text-xl font-bold ${feedback === 'Correct!' ? 'text-green-300' : 'text-red-400'}`}>
              {feedback}
            </p>
          )}
        </div>

        {/* Image Display */}
        <div className="flex justify-center items-center mb-4">
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

        {/* Answer Buttons */}
        <div className="flex justify-center gap-20">
          <button
            onClick={() => handleAnswer('left')}
            disabled={!!selectedAnswer}
            className={`${getButtonStyles('left')} px-20 py-6 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-52`}
          >
            Left
          </button>
          <button
            onClick={() => handleAnswer('right')}
            disabled={!!selectedAnswer}
            className={`${getButtonStyles('right')} px-20 py-6 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-52`}
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDisplay; 