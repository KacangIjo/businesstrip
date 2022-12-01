import React, { useEffect, useReducer, createContext } from 'react';
import actions from './AppContext.action';
import { INITIAL_STATE, reducer } from './AppContext.reducer';
import { ActionKeys, IAppContext } from './AppContext.interface';

export const AppContext = createContext({
  state: INITIAL_STATE,
  action: {
    toggleShowSearch: (key: typeof ActionKeys[number]) => {},
    searchFlights: (arg: IAppContext.IFormSearchFlight) => {},
    searchHotels: () => {},
    getLocations: () => {},
    bookFlight: (arg: any) => {},
  },
});

function AppProvider(props: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const action = actions(state, dispatch);
  useEffect(() => {}, []);
  console.log(state);
  return <AppContext.Provider value={{ state, action }}>{props.children}</AppContext.Provider>;
}

export default AppProvider;
