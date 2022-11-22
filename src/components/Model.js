import { useContext } from 'react';
import ModelContext from '../context/ModelContext';

const Model = () => {
  const { state, dispatch } = useContext(ModelContext);
  const close = (e) => {
    if (e.target.getAttribute('class')) {
      dispatch({ type: 'CLOSE_MODEL' });
    }
  };
  return state.modelStatus ? (
    <div className='model' onClick={close}>
      <div className='model__body'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eius
        quas, dolores voluptates perspiciatis suscipit nam inventore sed autem
        assumenda. Nemo nulla tempore ex quae eveniet earum magni ducimus
        necessitatibus. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Quia eius quas, dolores voluptates perspiciatis suscipit nam
        inventore sed autem assumenda. Nemo nulla tempore ex quae eveniet earum
        magni ducimus necessitatibus.
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Model;
