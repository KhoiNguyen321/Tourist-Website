import { useReducer } from 'react';
import ModelReducer from '../reducers/ModelReducer';
import ModelContext from '../ModelContext';

const ModelProvider = (props) => {
  const [state, dispatch] = useReducer(ModelReducer, {
    modelStatus: false,
    current: '',
  });

  return (
    <ModelContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ModelContext.Provider>
  );
};

export default ModelProvider;
