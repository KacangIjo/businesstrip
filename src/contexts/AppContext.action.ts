import { IAppContext as I } from './AppContext.interface';
import axios from 'axios';

export default function actions(state: I.State, dispatch: (args: I.Action) => void) {
  return {
    toggleShowSearch: function(key: any) {
      dispatch({ type: 'TOGGLE_SEARCH_FORM', key });
    },
    bookFlight: function(flight: any) {
      dispatch({ type: 'PUSH_BOOKING_LIST', value: flight });
    },
    searchFlights: function(formData: I.IFormSearchFlight) {
      dispatch({ type: 'SET_LOADING_FORM', key: 'flights', value: true });
      // TODO: PROMISE GET FLIGHTS
      const flightsResults: any = [{}, {}, {}];
      dispatch({ type: 'SET_SEARCH_RESULTS', key: 'flights', value: flightsResults });
      dispatch({ type: 'SET_SEARCH_FORM', key: 'flights', value: formData });
      dispatch({ type: 'SET_LOADING_FORM', key: 'flights', value: false });
    },
    searchHotels: function() {
      dispatch({ type: 'SET_LOADING_FORM', key: 'hotels', value: true });
      // TODO: PROMISE GET LOCATIONS
      const hotels = [
        {
          option: {
            label: 'Jakarta, Indonesia',
            description: 'JKTA - All Airports in Jakarta',
          },
          selectedLabel: 'Jakarta (JKTA)',
          value: 'JKTA',
        },
        {
          option: {
            label: 'Surabaya, Indonesia',
            description: 'SUB - Juanda',
          },
          selectedLabel: 'Juanda (SUB)',
          value: 'SUB',
        },
        {
          option: {
            label: 'Bali / Denpasar, Indonesia',
            description: 'BALI - BALI',
          },
          selectedLabel: 'Bali / Denpasar (BALI)',
          value: 'BALI',
        },
      ];
      dispatch({ type: 'SET_SEARCH_RESULTS', key: 'hotels', value: hotels });
      dispatch({ type: 'SET_LOADING_FORM', key: 'hotels', value: false });
    },
    getLocations: async function() {
      // TODO: PROMISE GET LOCATIONS
      axios.post(
        'http://localhost:3001/oauth/accesstoken',
        {
          client_id: 'Ok6frQa6hOHteG3y0HqIgjFc2g2Lerpw',
          client_secret: 'GYWAmy0Si15aSrGN',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const locations = [
        {
          option: {
            label: 'Jakarta, Indonesia',
            description: 'JKTA - All Airports in Jakarta',
          },
          selectedLabel: 'Jakarta (JKTA)',
          value: 'JKTA',
        },
        {
          option: {
            label: 'Surabaya, Indonesia',
            description: 'SUB - Juanda',
          },
          selectedLabel: 'Juanda (SUB)',
          value: 'SUB',
        },
        {
          option: {
            label: 'Bali / Denpasar, Indonesia',
            description: 'BALI - BALI',
          },
          selectedLabel: 'Bali / Denpasar (BALI)',
          value: 'BALI',
        },
      ];
      dispatch({ type: 'SET_SELECTIONS', value: { locations } });
    },
  };
}
