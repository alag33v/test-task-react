// Actions
const SET_TICKETS = 'SET_TICKETS';

// Reducer
const initialState = {
  tickets: []
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: [...state.tickets, action.payload] };
    default:
      return state;
  }
};

// Action Creators
export const setTickets = ticket => ({
  type: SET_TICKETS,
  payload: ticket
});
