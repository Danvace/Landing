import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChoiceButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${(props) => (props.selected ? '#007bff' : 'transparent')};
  color: ${(props) => (props.selected ? '#fff' : 'inherit')};

  &:hover {
    background-color: #f0f0f0;
  }
`;