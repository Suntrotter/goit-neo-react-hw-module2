import Description from '../components/Description/Description';
import Options from "./Options/Options";
import Feedback from './Feedback/Feedback';
import Notification from './Notification';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem('feedback')) || {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const handleClick = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    const resetState = {
      good: 0,
      neutral: 0,
      bad: 0
    };
    setFeedback(resetState);
    localStorage.setItem('feedback', JSON.stringify(resetState));
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
