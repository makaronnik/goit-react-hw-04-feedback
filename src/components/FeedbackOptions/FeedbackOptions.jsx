import PropTypes from 'prop-types';
import FeedbackOptionsStyled from './FeedbackOptionsStyled';
import FeedbackOption from './FeedbackOption/FeedbackOption';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      {Object.keys(options).map(key => (
        <li key={key}>
          <FeedbackOption
            option={key}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOption>
        </li>
      ))}
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
