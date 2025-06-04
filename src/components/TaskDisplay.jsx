import { useState, useLayoutEffect } from 'react';

const TaskDisplay = ({ currentTask, onTaskComplete }) => {
  const [feedback, setFeedback] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [taskSequence, setTaskSequence] = useState([]);
  const [questionVariant, setQuestionVariant] = useState(Math.floor(Math.random() * 2));
  const [showWelcome, setShowWelcome] = useState(true);

  // Example task structure - you can modify this based on your actual tasks
  const tasks = [
    {
      id: 1,
      image: '/media/Which ear did the dog tilt   left or right (left).png', // You'll need to add actual images to your assets
      questions: [
        {
          instruction: 'Which ear did the dog tilt - the left or the right one?',
          answer: "left"
        },
        {
          instruction: 'Which ear did the dog raise - the left or the right one?',
          answer: "right"
        }
      ]
    },
    {
      id: 2,
      image: '/media/Is_the_light_switch_to_the_left_or_to_the_right_of_the_door_left.png',
      questions: [
        {
          instruction: 'Is the light switch to the left or right of the door?',
          answer: "left"
        },
        {
          instruction: 'Is the door to the left or right of the light switch?',
          answer: "right"
        }
      ]
    },
    {
      id: 3,
      image: '/media/Which shoe is untied   the left or the right (right).png',
      questions: [
        {
          instruction: 'Which shoe is untied, the left or the right?',
          answer: "right"
        },
        {
          instruction: 'Which shoe is tied - the left or the right?',
          answer: "left"
        }
      ]
    },
    {
      id: 4,
      image: '/media/Which side of the vase is the apple on (left).png',
      questions: [
        {
          instruction: 'Which side of the vase is the apple on - left or right?',
          answer: "left"
        },
        {
          instruction: 'Is the vase on the left or right side of the apple?',
          answer: "right"
        }
      ]
    },
    {
      id: 5,
      image: '/media/Which side of the plate is the spoon on (right).png',
      questions: [
        {
          instruction: 'Is the spoon on the left or right of the plate?',
          answer: "right"
        },
        {
          instruction: 'Is the plate to the left or right of the spoon?',
          answer: "left"
        }
      ]
    },
    {
      id: 6,
      image: '/media/Which side of the plate is the spoon on (left).png',
      questions: [
        {
          instruction: 'Is the spoon on the left or right of the plate?',
          answer: "left"
        },
        {
          instruction: 'Is the plate to the left or right of the spoon?',
          answer: "right"
        }
      ]
    },
    {
      id: 7,
      image: '/media/Is_the_light_switch_to_the_left_or_to_the_right_of_the_door_right.png',
      questions: [
        {
          instruction: 'Is the light switch to the left or right of the door?',
          answer: "right"
        },
        {
          instruction: 'Is the door to the left or right of the light switch?',
          answer: "left"
        }
      ]
    },
    {
      id: 8,
      image: '/media/Which side of the kitten is the yarn ball on (left).png',
      questions: [
        {
          instruction: 'On which side of the kitten is the yarn ball - left or right?',
          answer: "left"
        },
        {
          instruction: 'On which side of the yarn ball is the kitten - left or right?',
          answer: "right"
        }
      ]
    },
    {
      id: 9,
      image: '/media/Which shoe is untied   the left or the right (left).png',
      questions: [
        {
          instruction: 'Which shoe is untied, the left or the right?',
          answer: "left"
        },
        {
          instruction: 'Which shoe is tied - the left or the right?',
          answer: "right"
        }
      ]
    },
    {
      id: 10,
      image: '/media/Which side of the alarm clock is the phone on (right).png',
      questions: [
        {
          instruction: 'On which side of the alarm clock is the phone - left or right??',
          answer: "right"
        },
        {
          instruction: 'On which side of the phone is the alarm clock - left or right?',
          answer: "left"
        }
      ]
    },
    {
      id: 11,
      image: '/media/Which side of the chair is the backpack on (left).png',
      questions: [
        {
          instruction: 'On which side of the chair is the backpack - left or right?',
          answer: "left"
        },
        {
          instruction: 'On which side of the backpack is the chair - left or right?',
          answer: "right"
        }
      ]
    },
    {
      id: 12,
      image: '/media/Which side of the chair is the backpack on (right).png',
      questions: [
        {
          instruction: 'On which side of the chair is the backpack - left or right?',
          answer: "right"
        },
        {
          instruction: 'On which side of the backpack is the chair - left or right?',
          answer: "left"
        }
      ]
    },
    {
      id: 13,
      image: '/media/Which side of the kitten is the yarn ball on (right).png',
      questions: [
        {
          instruction: 'On which side of the kitten is the yarn ball - left or right?',
          answer: "right"
        },
        {
          instruction: 'On which side of the yarn ball is the kitten - left or right?',
          answer: "left"
        }
      ]
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

  useLayoutEffect(() => {
    setTaskSequence(
      shuffleArray(
        [...Array(tasks.length)].map((_, i) => i)
      )
    );
  }, [tasks.length]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const currentQuestion = getCurrentQuestion();
    const isCorrect = answer === currentQuestion.answer;
    setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
    
    setTimeout(() => {
      if (currentTask === tasks.length) {
        setTaskSequence(shuffleArray([...Array(tasks.length)].map((_, i) => i)));
      }
      const nextVariant = Math.floor(Math.random() * 2);
      setQuestionVariant(nextVariant);
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
      const isCorrect = buttonType === getCurrentQuestion().answer;
      return isCorrect 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white';
    }

    return baseStyles;
  };

  const getCurrentQuestion = () => {
    const currentTaskData = tasks[taskSequence[currentTask - 1]] || tasks[0];
    const qArr = currentTaskData.questions;
    return qArr[questionVariant] ?? qArr[0];
  };

  const currentTaskData = taskSequence.length > 0 ? tasks[taskSequence[currentTask - 1]] : tasks[0];

  const WelcomeContent = () => (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <h1 className="text-4xl font-bold text-gray-100 mb-6">
        Welcome to Left-Right Training!
      </h1>
      
      <div className="space-y-4 mb-8 text-gray-200 max-w-2xl">
        <p className="text-xl">
          This is a simple training simulator to help you practice distinguishing between left and right.
        </p>
        <p className="text-lg">
          You will be shown various images and asked to identify the position of different objects - whether they are on the left or right side.
        </p>
        <p className="text-lg text-yellow-300 font-semibold mt-4">
        The timer is ticking - show how fast you can think!
        </p>
      </div>

      <button
        onClick={() => setShowWelcome(false)}
        className="bg-yellow-500 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:bg-yellow-400 shadow-lg"
      >
        Start Training
      </button>
    </div>
  );

  const TaskContent = () => (
    <>
      {/* Task Instructions and Feedback Container with fixed height */}
      <div className="h-[60px] mb-6 flex-shrink-0">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-2">
            {getCurrentQuestion().instruction || 'Loading task...'}
          </h2>
          <div className="h-8">
            {feedback && (
              <p className={`text-xl font-bold ${feedback === 'Correct!' ? 'text-green-300' : 'text-red-400'}`}>
                {feedback}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Image Display */}
      <div className="flex justify-center items-center mb-4 flex-grow">
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
      <div className="flex justify-center gap-20 mt-0 flex-shrink-0 h-[60px]">
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
    </>
  );

  return (
    <div className="flex flex-col items-center min-h-screen pt-0 pb-2 px-4 w-full">
      <div className="bg-gray-800/20 rounded-xl shadow-2xl p-8 max-w-10xl w-[1000px] backdrop-blur-sm mt-14 h-[750px] flex flex-col">
        {showWelcome ? <WelcomeContent /> : <TaskContent />}
      </div>
    </div>
  );
};

export default TaskDisplay; 