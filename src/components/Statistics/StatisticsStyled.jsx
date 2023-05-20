import styled from 'styled-components';

const StatisticsStyled = styled.ul`
  padding-left: 0;

  list-style: none;

  & li {
    font-size: 18px;
    font-weight: 600;

    &:first-letter {
      text-transform: uppercase;
    }

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

export default StatisticsStyled;
