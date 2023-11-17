import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const ChoiceButton = styled.div`
  padding: 10px 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${(props) => (props.selected ? '#007bff' : 'transparent')};
  color: ${(props) => (props.selected ? '#fff' : 'inherit')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: #f0f0f0;
  }
  
  option {
    font-size: 40px;
  }
  
`;

export const SelectWrapper = styled.div`
  width: 150px;
  height: 30px;
  
  select {
    font-size: 20px;
  }
`
