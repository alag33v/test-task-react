import { Card } from 'react-bootstrap';
import { StyledTicket } from '../styled/Ticket';
import {
  priceConverter,
  duration,
  departureArrivalTime,
  stopsText
} from './TicketHelper';

const Ticket = ({ ticket }) => {
  return (
    <StyledTicket>
      <Card>
        <Card.Body>
          <div className='card-title'>
            <strong className='cost'>{priceConverter(ticket.price)}</strong>
            <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt='' />
          </div>
          <div className='wrapper'>
            <div className='ticket-info'>
              <div>
                <span className='up'>{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</span>
                <span className='bottom'>
                  {departureArrivalTime(
                    ticket.segments[0].date,
                    ticket.segments[0].duration
                  )}
                </span>
              </div>
              <div>
                <span className='up'>В пути</span>
                <span className='bottom'>
                  {duration(ticket.segments[0].duration)}
                </span>
              </div>
              <div className='ticket-info__last'>
                <span className='up'>
                  {stopsText(ticket.segments[0].stops)}
                </span>
                <span className='bottom'>
                  {[...ticket.segments[0].stops].join(', ')}
                </span>
              </div>
            </div>
            <div className='ticket-info'>
              <div>
                <span className='up'>{`${ticket.segments[1].origin} - ${ticket.segments[1].destination}`}</span>
                <span className='bottom'>
                  {departureArrivalTime(
                    ticket.segments[1].date,
                    ticket.segments[1].duration
                  )}
                </span>
              </div>
              <div>
                <span className='up'>В пути</span>
                <span className='bottom'>
                  {duration(ticket.segments[1].duration)}
                </span>
              </div>
              <div className='ticket-info__last'>
                <span className='up'>
                  {stopsText(ticket.segments[1].stops)}
                </span>
                <span className='bottom'>
                  {[...ticket.segments[1].stops].join(', ')}
                </span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </StyledTicket>
  );
};

export default Ticket;
