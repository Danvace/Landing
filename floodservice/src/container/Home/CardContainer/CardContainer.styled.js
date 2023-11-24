import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;

  ul {
    min-height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

  .card {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }

  ul li {
    padding-top: 10px;
    list-style: none;
  }

  div > input {
    font-size: 20px;
  }

`

export const NoItemsMessage = styled.div`
  font-size: 30px;
  color: #ffffff; /* You can customize the color */
  margin-top: 60px;
`
