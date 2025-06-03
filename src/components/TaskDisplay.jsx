import { useState, useLayoutEffect } from 'react';

const TaskDisplay = ({ currentTask, onTaskComplete }) => {
  const [feedback, setFeedback] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [taskSequence, setTaskSequence] = useState([]);

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
    {
      id: 3,
      image: '/media/Which shoe is untied   the left or the right (right).png',
      instruction: 'Which shoe is untied - the left or the right?',
      answer: "right"
    },
    {
      id: 4,
      image: '/media/Which side of the vase is the apple on (left).png',
      instruction: 'Which side of the vase is the apple on?',
      answer: "left"
    },
    {
      id: 5,
      image: '/media/Which side of the plate is the spoon on (right).png',
      instruction: 'Which side of the plate is the spoon on?',
      answer: "right"
    },
    {
      id: 6,
      image: '/media/Which side of the plate is the knife on (left).png',
      instruction: 'Which side of the plate is the knife on?',
      answer: "left"
    },
    // Add more tasks as needed
  ];

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize random task sequence
  useLayoutEffect(() => {
    setTaskSequence(
      shuffleArray(
        [...Array(tasks.length)].map((_, i) => i)
      )
    );
  }, [tasks.length]); 

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const currentTaskData = tasks[taskSequence[currentTask - 1]];
    const isCorrect = answer === currentTaskData.answer;
    setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
    
    setTimeout(() => {
      if (currentTask === tasks.length) {
        // If we're at the last task, generate new random sequence
        setTaskSequence(shuffleArray([...Array(tasks.length)].map((_, i) => i)));
      }
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
      const currentTaskData = tasks[taskSequence[currentTask - 1]];
      const isCorrect = buttonType === currentTaskData.answer;
      return isCorrect 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white';
    }

    return baseStyles;
  };

  // Get current task data based on shuffled sequence
  const currentTaskData = taskSequence.length > 0 ? tasks[taskSequence[currentTask - 1]] : tasks[0];

  return (
    <div className="flex flex-col items-center min-h-screen pt-0 pb-2 px-4 w-full">
      <div className="bg-gray-800/20 rounded-xl shadow-2xl p-8 max-w-10xl w-21/12 backdrop-blur-sm mt-20">
        {/* Task Instructions and Feedback Container with fixed height */}
        <div className="h-19 mb-6"> {/* Fixed height container */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">
              {currentTaskData?.instruction || 'Loading task...'}
            </h2>
            <div className="h-8"> {/* Fixed height for feedback */}
              {feedback && (
                <p className={`text-xl font-bold ${feedback === 'Correct!' ? 'text-green-300' : 'text-red-400'}`}>
                  {feedback}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Image Display */}
        <div className="flex justify-center items-center mb-4">
          <div className="w-[500px] h-[500px] relative overflow-hidden rounded-lg shadow-xl">
            <img
              src={currentTaskData?.image}
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
        <div className="flex justify-center gap-20 mt-4">
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