import styled from "styled-components";

export const MainPhotoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 5%;
  align-items: center;
  width: 100%;
  img {
    width: 600px;
    border-radius: 5%;
  }
  .description {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    color: lightyellow;
  }
  p {
    font-size: 15px;
    font-style: italic;
    line-height: 40px;
    font-weight: 700;
    color: #f9f9f9;
  }
`
export const CardBasicStyle = styled.div`
  width: 300px;
  height: 400px;
  background-color: darkslategray;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  img {
    border-radius: 25px;
    height: 200px;
  }
  h2 {
    color: #f9f9f9;
  }
  .description {
    color: #f9f9f9;
    font-weight: 200;
  }
  
  .price-and-button {
    padding-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .price {
    color: #f9f9f9;
  }
`
