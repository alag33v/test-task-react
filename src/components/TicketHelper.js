// Price
export const priceConverter = price =>
  (price = `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`);

// On the way
export const duration = duration => {
  const num = duration;
  const hours = num / 60;
  let rhours = Math.floor(hours);
  rhours = rhours > 9 ? rhours : `0${rhours}`;
  const minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  rminutes = rminutes > 9 ? rminutes : `0${rminutes}`;
  return `${rhours}ч ${rminutes}м`;
};

// Departure time and Arrival time
export const departureArrivalTime = (dateFromProps, durat) => {
  const date = new Date(dateFromProps);
  date.setTime(date.getTime() + 3 * 60 * 60 * 1000);
  const datePlusDuration = date.getTime() + durat * 60000;

  let departureTimeHours =
    date.getUTCHours() > 9 ? date.getUTCHours() : `0${date.getUTCHours()}`;
  let departureTimeMinutes =
    date.getUTCMinutes() > 9
      ? date.getUTCMinutes()
      : `0${date.getUTCMinutes()}`;
  const departureTime = `${departureTimeHours}:${departureTimeMinutes}`;

  let ArrivalTimeHours =
    new Date(datePlusDuration).getUTCHours() > 9
      ? new Date(datePlusDuration).getUTCHours()
      : `0${new Date(datePlusDuration).getUTCHours()}`;
  let ArrivalTimeMinutes =
    new Date(datePlusDuration).getUTCMinutes() > 9
      ? new Date(datePlusDuration).getUTCMinutes()
      : `0${new Date(datePlusDuration).getUTCMinutes()}`;
  const ArrivalTime = `${ArrivalTimeHours}:${ArrivalTimeMinutes}`;

  const result = `${departureTime} – ${ArrivalTime}`;

  return result;
};

// Number of stops
export const stopsText = props => {
  if (props.length === 0) {
    return '0 пересадок';
  } else if (props.length === 1) {
    return '1 пересадка';
  }
  return `${props.length} пересадки`;
};
