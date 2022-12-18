import { useReducer } from 'react';
import DestinationsContext from '../DestinationsContext';
import DestinationsReducer from '../reducers/DestinationsReducer';
import Cities from '../../data/cities';
import { destinations } from '../../data/destinations';

export const DestinationsProvider = (props) => {
  const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
    destinations,
    details: {},
    cities: Cities,
    fiteredCities: [],
  });
  return (
    <>
      <DestinationsContext.Provider value={{ destinationsData, dispatch }}>
        {props.children}
      </DestinationsContext.Provider>
    </>
  );
};

export default DestinationsProvider;
