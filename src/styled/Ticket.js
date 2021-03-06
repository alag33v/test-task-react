import styled from 'styled-components';

export const StyledTicket = styled.div`
  width: 100%;
  background-color: #fff;
  .card {
    width: 100%;
    margin: 20px 0;
    padding: 0 10px;
  }
  .card-body {
    padding-bottom: 10px;
  }
  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cost {
    font-size: 30px;
    color: #2196f3;
  }
  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
  }
  .ticket-info {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    &__last {
      width: 110px;
    }
  }
  .up {
    color: #aebcc3;
  }
  .bottom {
    color: #707070;
  }
  span {
    display: block;
  }
  @media (max-width: 500px) {
    .card-body {
      padding: 10px 0;
    }
    .cost {
      font-size: 26px;
    }
  }
  @media (max-width: 400px) {
    .cost {
      font-size: 26px;
    }
    .ticket-info {
      font-size: 14px;
    }
  }
`;
