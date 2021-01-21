import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Choice = ({ sorterActive, setSorterActive }) => {
  const sorterHandler = useCallback(
    sortedButton => {
      // If true we exit
      if (sorterActive[sortedButton]) return;
      setSorterActive({
        lowprice: !sorterActive['lowprice'],
        faster: !sorterActive['faster']
      });
    },
    [sorterActive]
  );

  return (
    <StyledChoice>
      <Button
        variant='primary'
        className={`${sorterActive.lowprice ? 'lowprice' : ''}`}
        onClick={() => sorterHandler('lowprice')}
      >
        Самый дешевый
      </Button>
      <Button
        variant='light'
        className={`${sorterActive.faster ? 'faster' : ''}`}
        onClick={() => sorterHandler('faster')}
      >
        Самый быстрый
      </Button>
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
  .lowprice {
    background-color: lightgreen;
  }
  .faster {
    background-color: blue;
  }
`;

export default Choice;
