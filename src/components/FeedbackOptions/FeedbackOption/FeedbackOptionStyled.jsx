import styled from 'styled-components';

const FeedbackOptionStyled = styled.button.attrs({
  type: 'button',
})`
  margin: 0 5px;
  padding: 4px 10px;

  outline: none;
  border: 1px solid #c3c3c3;
  border-radius: 7px;
  background-color: white;

  cursor: pointer;

  font-weight: 600;
  text-transform: capitalize;

  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: #88a7e0;
    background-color: #bdd0f4;
  }

  &:active {
    border-color: #0c4fcc;
    background-color: #0c4fcc;
  }
`;

export default FeedbackOptionStyled;
