import styled from 'styled-components';

export const StyledChoice = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 50%;
    height: 60px;
  }
  .button {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    color: #000;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    display: inline-block;
    padding: 0.375rem 0.75rem;
    transition: 0.3s linear;
    outline: none;
    &:hover {
      background-color: rgb(228, 228, 228);
    }
    &:active {
      background-color: rgb(207, 207, 207);
    }
  }
  .btn-light {
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .lowprice,
  .faster {
    color: #fff;
    background-color: #007bff;
    &:hover {
      background-color: #025bc2;
    }
    &:active {
      background-color: #004aa0;
    }
  }
`;
