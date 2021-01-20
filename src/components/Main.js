import { useState, useEffect } from 'react';
import Choice from './Choice';
import Ticket from './Ticket';
import styled from 'styled-components';

const Main = () => {
  const [searchId, setSearchId] = useState();
  const [tickets, setTickets] = useState([]);
  const [stop, setStop] = useState(false);
  const [sortTickets, setSortTickets] = useState([]);
  // const [status, setStatus] = useState();

  useEffect(() => {
    if (stop === true) {
      // Leave only five tickets
      setSortTickets(tickets.slice(0, 5));
    }
  }, [stop, tickets]);

  useEffect(() => {
    // Get the searchId
    fetch('https://front-test.beta.aviasales.ru/search')
      .then(res => res.json())
      .then(res => setSearchId(res.searchId))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (searchId && stop === false) {
      function subscribe() {
        fetch(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
        )
          .then(data => {
            console.log('data', data);
            if (data.status === 500) {
              subscribe();
            } else {
              return data.json();
            }
          })
          .then(ticketsBundle => {
            console.log('ticketsBundle', ticketsBundle);
            if (ticketsBundle.stop) {
              setStop(true);
            }
            setTickets([...tickets, ...ticketsBundle.tickets]);
          })
          .catch(err => {
            console.log(err);
            // subscribe();
          });
      }

      // async function subscribe() {
      //   // Get unsorted ticket lists
      //   let response = await fetch(
      //     `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
      //   );
      //   // Handling the 500 error
      //   if (response.status === 500) {
      //     await subscribe();
      //     // Handling the 404 error
      //   } else if (response.status === 404) {
      //     // Processing if the response is not 200
      //   } else if (response.status !== 200) {
      //     console.error(response.statusText);
      //     await new Promise(resolve => setTimeout(resolve, 1000));
      //     await subscribe();
      //     // If response 200
      //   } else {
      //     let ticketsBundle = await response.json();
      //     if (ticketsBundle.stop) {
      //       setStop(true);
      //     }
      //     setTickets([...tickets, ...ticketsBundle.tickets]);
      //   }
      // }
      subscribe();
    }
  }, [searchId, tickets, stop]);

  return (
    <StyledMain>
      <Choice />
      {sortTickets.map((ticket, index) => (
        <Ticket ticket={ticket} key={index} />
      ))}
    </StyledMain>
  );
};

const StyledMain = styled.div`
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

export default Main;
