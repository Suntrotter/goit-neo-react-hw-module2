import Description from '../components/Description/Description';
import Options from "./Options/Options";
import Feedback from './Feedback/Feedback';
import Notification from './Notification';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    return {
      good: Number(localStorage.getItem('good')) || 0,
      neutral: Number(localStorage.getItem('neutral')) || 0,
      bad: Number(localStorage.getItem('bad')) || 0
    };
  });

  useEffect(() => {
    localStorage.setItem('good', feedback.good);
    localStorage.setItem('neutral', feedback.neutral);
    localStorage.setItem('bad', feedback.bad);
  }, [feedback]);

  const handleClick = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
    localStorage.clear();
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options 
        onGoodClick={() => handleClick('good')} 
        onBadClick={() => handleClick('bad')} 
        onNeutralClick={() => handleClick('neutral')} 
        onResetClick={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback 
          good={feedback.good}
          bad={feedback.bad}
          neutral={feedback.neutral}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};

export default App;
