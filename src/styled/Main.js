import styled from 'styled-components';

export const StyledMain = styled.div`
  width: 73%;
  margin-left: 2%;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: 600px) {
    width: 95%;
    max-width: 100%;
    margin: 0 auto;
  }
`;
