import { useCallback } from 'react';
import { StyledChoice } from '../styled/Choice';

const Choice = ({ sorterActive, setSorterActive }) => {
  const sorterHandler = useCallback(
    sortedButton => {
      // If true we exit
      if (sorterActive[sortedButton]) return;
      // Change buttons class
      setSorterActive({
        lowprice: !sorterActive['lowprice'],
        faster: !sorterActive['faster']
      });
    },
    [sorterActive, setSorterActive]
  );

  return (
    <StyledChoice>
      <button
        className={`button ${sorterActive.lowprice ? 'lowprice' : ''}`}
        onClick={() => sorterHandler('lowprice')}
      >
        Самый дешевый
      </button>
      <button
        className={`button ${sorterActive.faster ? 'faster' : ''}`}
        onClick={() => sorterHandler('faster')}
      >
        Самый быстрый
      </button>
    </StyledChoice>
  );
};

export default Choice;
