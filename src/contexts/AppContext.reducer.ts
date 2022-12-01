import _set from 'lodash/set';
import { IAppContext as I } from './AppContext.interface';

export const INITIAL_STATE: I.State = {
  selectionOptions: {
    locations: [],
    flightSeats: [],
    bookingTitle: [
      {
        label: 'Mr.',
        value: 'Mr.',
      },
      {
        label: 'Ms.',
        value: 'Ms.',
      },
      {
        label: 'Mrs.',
        value: 'Mrs.',
      },
    ],
    bookingCountries: [],
    hotelDestinations: [],
    flightFrom: [],
    flightTo: [],
    flightPassengers: [],
  },
  search: {
    flights: {
      formData: {
        type: 'ONE_WAY',
        passengers: '',
        from: '',
        to: '',
        departure: '',
        return: '',
        seat: '',
      },
      loading: false,
      show: true,
    },
    hotels: {
      formData: {},
      show: true,
      loading: false,
    },
    trains: {
      formData: {},
      show: true,
      loading: false,
    },
  },
  searchResults: {
    flights: {
      data: [],
      loading: false,
    },
    hotels: {
      data: [],
      loading: false,
    },
    trains: {
      data: [],
      loading: false,
    },
  },
  bookings: {
    list: [],
  },
};

export function reducer(state: I.State, action: I.Action) {
  let newState = state;
  if (action.type === 'SET_LOADING_FORM') {
    if (action.key) {
      _set(newState, `search[${action.key}].loading`, action.value);
    }
  }
  if (action.type === 'SET_SELECTIONS') {
    const value: I.SelectionOptions = action.value;
    newState.selectionOptions = { ...state.selectionOptions, ...value };
  }
  if (action.type === 'SET_SEARCH_RESULTS') {
    if (action.key) {
      newState.searchResults[`${action.key}`].data = action.value;
      newState.search[`${action.key}`].show = false;
    }
  }
  if (action.type === 'TOGGLE_SEARCH_FORM') {
    if (action.key) {
      newState.search[`${action.key}`].show = !state.search[`${action.key}`].show;
    }
  }
  if (action.type === 'SET_SEARCH_FORM') {
    if (action.key) {
      newState.search[`${action.key}`].formData = action.value;
    }
  }
  if (action.type === 'PUSH_BOOKING_LIST') {
    newState.bookings.list.push(action.value);
  }
  return { ...newState };
}
