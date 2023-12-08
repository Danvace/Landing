import styled from 'styled-components';

const StyledCartPage = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  width: 80%;
  min-height: 400px;

  h2 {
    color: #333;
    text-align: center;
  }

  p {
    color: #555;
  }

  .cart-item {
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  img {
    max-width: 100px;
    border-radius: 4px;
    margin-right: 10px;
  }

  .cart-item-details {
    display: flex;
    align-items: center;

    a {
      color: #333;
      text-decoration: none;
      font-weight: bold;
      margin-right: 10px;
    }

    p {
      margin: 0;
    }

    .quantity-buttons {
      display: flex;
      align-items: center;
      margin-top: 10px;

      button {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 4px;
        margin: 0 5px;

        &:hover {
          background-color: #0056b3;
        }
      }
    }

    .remove-button {
      background-color: #dc3545;
      color: #fff;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4px;
      margin-top: 10px;

      &:hover {
        background-color: #bd2130;
      }
    }
  }

  .total-price {
    text-align: right;
    font-size: 18px;
    margin-top: 20px;
    color: #333;
    font-weight: bold;
  }
`;

const BackToCatalog = styled.div`
  text-align: center;
  margin-top: 20px;

  a {
    text-decoration: none;
    background-color: #28a745;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #218838;
    }
  }
`;

export { StyledCartPage, BackToCatalog };
