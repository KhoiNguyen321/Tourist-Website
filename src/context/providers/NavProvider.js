import { useReducer } from 'react';
import NavReducer from '../reducers/NavReducer';
import NavContext from '../NavContext';

const NavProvider = (props) => {
  const [state, dispatch] = useReducer(NavReducer, false);
  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavProvider;
