import airlines from '../assets/images/airlines.PNG';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Ticket = () => {
  return (
    <StyledTicket>
      <Card>
        <Card.Body>
          <div className='card__title'>
            <strong className='cost'>13 400P</strong>
            <img src={airlines} alt='' />
          </div>
          <div className='wrapper'>
            <div className='forward'>
              <div>
                <span className='up'>MOW - HKR</span>
                <span className='bottom'>10:45 - 08:00</span>
              </div>
              <div>
                <span className='up'>В пути</span>
                <span className='bottom'>21ч 15мин</span>
              </div>
              <div>
                <span className='up'>2 пересадки</span>
                <span className='bottom'>HKG, JNB</span>
              </div>
            </div>
            <div className='backward'>
              <div>
                <span className='up'>MOW - HKR</span>
                <span className='bottom'>11:20 - 00:50</span>
              </div>
              <div>
                <span className='up'>В пути</span>
                <span className='bottom'>13ч 30мин</span>
              </div>
              <div>
                <span className='up'> 2 пересадки</span>
                <span className='bottom'>HKG</span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </StyledTicket>
  );
};

const StyledTicket = styled.div`
  width: 100%;
  background-color: #fff;
  .card {
    width: 100%;
    margin: 20px 0;
    padding: 0 15px;
  }
  .card__title {
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
    width: 180px;
    max-width: 100%;
    object-fit: cover;
  }
  .wrapper {
    margin-right: 60px;
  }
  .forward,
  .backward {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
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
      padding: 0;
    }
    .wrapper {
      margin: 0;
    }
  }
  @media (max-width: 400px) {
    .cost {
      font-size: 26px;
    }
    img {
      width: 140px;
    }
    .up,
    .bottom {
      font-size: 14px;
    }
  }
`;

export default Ticket;
