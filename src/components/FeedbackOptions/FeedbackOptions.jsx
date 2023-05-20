import PropTypes from 'prop-types';
import FeedbackOptionsStyled from './FeedbackOptionsStyled';
import FeedbackOption from './FeedbackOption/FeedbackOption';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map(option => (
        <li key={option}>
          <FeedbackOption
            option={option}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOption>
        </li>
      ))}
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
