import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Ticket = ({ ticket }) => {
  return (
    <StyledTicket>
      <Card>
        <Card.Body>
          <div className='card-title'>
            <strong className='cost'>
              {ticket.price
                .toString()
                .split('')
                .reverse()
                .reduce((accum, item, i) => {
                  if (i % 3 === 0) {
                    return item + ' ' + accum;
                  }
                  return item + accum;
                }, 'P ')
                .split('')
                .join('')}
            </strong>
            <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt='' />
          </div>
          <div className='wrapper'>
            {ticket.segments.map((segment, index) => (
              <div className='ticket-info' key={index}>
                <div>
                  <span className='up'>{`${segment.destination} - ${segment.origin}`}</span>
                  <span className='bottom'>
                    {new Date(segment.date).getHours() +
                      ':' +
                      new Date(segment.date).getMinutes() +
                      ' - ' +
                      new Date(
                        new Date(segment.date).setHours(
                          new Date(segment.date).getHours() +
                            Math.ceil(segment.duration / 60)
                        )
                      ).getHours() +
                      ':' +
                      new Date(
                        new Date(segment.date).setMinutes(
                          new Date(segment.date).getMinutes() + segment.duration
                        )
                      ).getMinutes()}
                  </span>
                </div>
                <div>
                  <span className='up'>В пути</span>
                  <span className='bottom'>
                    {Math.ceil(segment.duration / 60) +
                      ':' +
                      (segment.duration % 60)}
                  </span>
                </div>
                <div>
                  <span className='up'>
                    {segment.stops.length === 0
                      ? 'Без пересадок'
                      : segment.stops.length === 1
                      ? '1 пересадка'
                      : segment.stops.length >= 2
                      ? `${segment.stops.length} пересадки`
                      : ''}
                  </span>
                  <span className='bottom'>{segment.stops.join(', ')}</span>
                </div>
              </div>
            ))}
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
  }
  @media (max-width: 400px) {
    .cost {
      font-size: 26px;
    }
    img {
      width: 140px;
    }
    .ticket-info {
      font-size: 14px;
    }
  }
`;

export default Ticket;
