import { useState, useEffect, useCallback } from 'react';
import { Choice } from './index';
import { Ticket } from './index';
import { StyledMain } from '../styled/Main';

const Main = ({ filter }) => {
  // Here we store id from API
  const [searchId, setSearchId] = useState();
  // Here we store all tickets
  const [tickets, setTickets] = useState([]);
  // Checking the response from the server, if true we stop
  const [stop, setStop] = useState(false);
  // Here we sort 5 tickets
  const [sortTickets, setSortTickets] = useState([]);
  // Sort tickets depending on the conditions
  const [sorterActive, setSorterActive] = useState({
    lowprice: true,
    faster: false
  });

  const allSorter = useCallback(
    tickets => {
      // Sorting tickets by price
      if (sorterActive.lowprice) {
        return tickets.sort((a, b) => a.price - b.price);
      }
      // Sorting tickets by duration
      if (sorterActive.faster) {
        return tickets.sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration)
        );
      }
      return tickets;
    },
    [sorterActive]
  );

  // Sort according to the selected checkbox
  const filterTickets = useCallback(
    ticketArr => {
      if (
        Object.keys(filter).every(key => {
          return filter[key] === false;
        })
      ) {
        return ticketArr;
      }
      return ticketArr.filter(current => {
        if (filter.all) return current;
        if (
          filter.without &&
          current.segments[0].stops.length === 0 &&
          current.segments[1].stops.length === 0
        )
          return true;
        if (
          filter.one &&
          current.segments[0].stops.length === 1 &&
          current.segments[1].stops.length === 1
        )
          return true;
        if (
          filter.two &&
          current.segments[0].stops.length === 2 &&
          current.segments[1].stops.length === 2
        )
          return true;
        if (
          filter.three &&
          current.segments[0].stops.length === 3 &&
          current.segments[1].stops.length === 3
        )
          return true;
        return false;
      });
    },
    [filter]
  );

  useEffect(() => {
    if (stop === true) {
      // Leave only five tickets and we sort depending on conditions
      setSortTickets(allSorter(filterTickets(tickets)).slice(0, 5));
    }
  }, [stop, tickets, sorterActive, allSorter, filterTickets]);

  useEffect(() => {
    // Get the searchId
    fetch('https://front-test.beta.aviasales.ru/search')
      .then(res => res.json())
      .then(res => setSearchId(res.searchId))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (searchId && stop === false) {
      async function subscribe() {
        // Get unsorted ticket lists
        let response = await fetch(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
        );
        // Handling the 500 error
        if (response.status === 500) {
          await subscribe();
          // Handling the 404 error
        } else if (response.status === 404) {
          // Processing if the response is not 200
        } else if (response.status !== 200) {
          console.error(response.statusText);
          await new Promise(resolve => setTimeout(resolve, 1000));
          await subscribe();
          // If response 200
        } else {
          let ticketsBundle = await response.json();
          if (ticketsBundle.stop) {
            setStop(true);
          }
          // We collect all tickets in a bunch
          setTickets([...tickets, ...ticketsBundle.tickets]);
        }
      }
      subscribe();
    }
  }, [searchId, tickets, stop]);

  return (
    <StyledMain>
      <Choice sorterActive={sorterActive} setSorterActive={setSorterActive} />
      {sortTickets.map((ticket, index) => (
        <Ticket ticket={ticket} key={index} />
      ))}
    </StyledMain>
  );
};

export default Main;
