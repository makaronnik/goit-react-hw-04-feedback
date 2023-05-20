import PropTypes from 'prop-types';
import StatisticsStyled from './StatisticsStyled';

const Statistics = props => {
  return (
    <StatisticsStyled>
      {Object.keys(props).map(key => (
        <li key={key}>
          {key}: {props[key]}
        </li>
      ))}
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  props: PropTypes.objectOf(PropTypes.string),
};

export default Statistics;
