import { Card } from 'react-bootstrap';
import { StyledTicket } from '../styled/Ticket';

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

export default Ticket;
