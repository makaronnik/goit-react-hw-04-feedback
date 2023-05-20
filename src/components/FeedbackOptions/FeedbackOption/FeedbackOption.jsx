import PropTypes from 'prop-types';
import FeedbackOptionStyled from './FeedbackOptionStyled';

const FeedbackOption = ({ option, onLeaveFeedback }) => {
  return (
    <FeedbackOptionStyled onClick={() => onLeaveFeedback(option)}>
      {option}
    </FeedbackOptionStyled>
  );
};

FeedbackOption.propTypes = {
  option: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOption;
