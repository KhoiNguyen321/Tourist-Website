import { useReducer } from 'react';
import DestinationsContext from '../DestinationsContext';
import DestinationsReducer from '../reducers/DestinationsReducer';
import { destinations } from '../../data/destinations';

export const DestinationsProvider = (props) => {
  const [destinationData, dispatch] = useReducer(DestinationsReducer, {
    destinations,
  });
  return (
    <>
      <DestinationsContext.Provider value={{ destinationData, dispatch }}>
        {props.children}
      </DestinationsContext.Provider>
    </>
  );
};

export default DestinationsProvider;
