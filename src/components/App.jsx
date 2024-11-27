import Description from '../components/Description/Description';
import Options from "./Options/Options";
import Feedback from './Feedback/Feedback';
import Notification from './Notification';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [good, setGood] = useState(() => {
    return Number(localStorage.getItem('good')) || 0;
  });
  const [bad, setBad] = useState(() => {
    return Number(localStorage.getItem('bad')) || 0;
  });
  const [neutral, setNeutral] = useState(() => {
    return Number(localStorage.getItem('neutral')) || 0;
  });

 useEffect(() => {
    localStorage.setItem('good', good);
    localStorage.setItem('bad', bad);
    localStorage.setItem('neutral', neutral);
  }, [good, bad, neutral]);

  const goodHandleClick = () => {
    setGood(good + 1);
  };

  const badHandleClick = () => {
    setBad(bad + 1);
  };

  const neutralHandleClick = () => {
    setNeutral(neutral + 1);
  };

  const resetFeedback = () => {
    setGood(0);
    setBad(0);
    setNeutral(0);
    localStorage.clear();
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options 
        onGoodClick={goodHandleClick} 
        onBadClick={badHandleClick} 
        onNeutralClick={neutralHandleClick} 
        onResetClick={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback 
          good={good}
          bad={bad}
          neutral={neutral}
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
