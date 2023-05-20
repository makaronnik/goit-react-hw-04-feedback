import { useReducer } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

const reducer = (state, { type }) => {
  switch (type) {
    case 'good':
      return { ...state, good: state.good + 1 };

    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };

    case 'bad':
      return { ...state, bad: state.bad + 1 };

    default:
      return state;
  }
};

const App = () => {
  const [{ good, neutral, bad }, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={option => dispatch({ type: option })}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={`${good}`}
            neutral={`${neutral}`}
            bad={`${bad}`}
            total={`${totalFeedback}`}
            positivePercentage={`${positiveFeedbackPercentage}%`}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
