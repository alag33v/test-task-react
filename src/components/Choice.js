import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Choice = () => {
  return (
    <StyledChoice>
      <Button variant='primary'>Самый дешевый</Button>
      <Button variant='light'>Самый быстрый</Button>
    </StyledChoice>
  );
};

const StyledChoice = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 50%;
    height: 60px;
  }
  .btn-light {
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
`;

export default Choice;
