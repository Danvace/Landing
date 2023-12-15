import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
  font-size: calc(10px + 2vmin);

  h1 {
    font-size: 36px;
    color: #282c34;
    text-align: center;
    padding: 20px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  }

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    width: 25%;
    margin-left: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  Button {
    background-color: whitesmoke;
    color: black;
    width: 100px;
  }
`;

