export const tuple = <T extends string[]>(...args: T) => args;

export const ActionTypes = tuple(
  'SET_LOADING_FORM',
  'SET_LOADING_RESULT',
  'SET_FORM',
  'SET_SEARCH_RESULTS',
  'SET_SELECTIONS',
  'TOGGLE_SEARCH_FORM',
  'SET_SEARCH_FORM',
  'PUSH_BOOKING_LIST',
);
export const ActionKeys = tuple('flights', 'hotels', 'trains');

export interface ISelectOption {
  value: string;
  selectedLabel: string;
  option: {
    label: string | React.ReactNode;
    description?: string | React.ReactNode;
  };
}

export interface options {
  label: string;
  value: string;
}

export declare namespace IAppContext {
  interface SelectionOptions {
    locations?: ISelectOption[];
    flightSeats?: ISelectOption[];
    bookingTitle: options[];
    bookingCountries: options[];
    hotelDestinations: options[];
    flightFrom: ISelectOption[];
    flightTo: ISelectOption[];
    flightPassengers: ISelectOption[];
  }

  interface IFormSearchFlight {
    type: 'ONE_WAY' | 'ROUND_TRIP' | string;
    passengers: string;
    from: string;
    to: string;
    departure: string;
    return: string;
    seat: string;
  }

  interface State {
    selectionOptions: SelectionOptions;
    search: {
      flights: {
        formData: IFormSearchFlight;
        show: boolean;
        loading: boolean;
      };
      hotels: {
        formData: object;
        show: boolean;
        loading: boolean;
      };
      trains: {
        formData: object;
        show: boolean;
        loading: boolean;
      };
      [key: string]: {
        formData: object;
        show: boolean;
        loading: boolean;
      };
    };
    searchResults: {
      flights: {
        data: object[];
        loading: boolean;
      };
      hotels: {
        data: object[];
        loading: boolean;
      };
      trains: {
        data: object[];
        loading: boolean;
      };
      [key: string]: {
        data: object[];
        loading: boolean;
      };
    };
    bookings: {
      list: any[];
    };
  }

  interface Action {
    type: typeof ActionTypes[number];
    value?: any;
    key?: typeof ActionKeys[number];
  }
}
