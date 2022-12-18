import { useReducer } from 'react';
import SharedContext from '../SharedContext';
import SharedReducers from '../reducers/SharedReducers';
import services from '../../data/services';
import reviews from '../../data/reviews';
const SharedProvider = (props) => {
  const [sharedData, dispatch] = useReducer(SharedReducers, {
    servicesData: services,
    reviews: reviews,
  });
  return (
    <SharedContext.Provider value={{ sharedData, dispatch }}>
      {props.children}
    </SharedContext.Provider>
  );
};

export default SharedProvider;
