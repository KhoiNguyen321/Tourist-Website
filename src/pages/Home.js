import { useState, useContext } from 'react';
import Header from '../components/Header';
import Model from '../components/Model';
import ModelContext from '../context/ModelContext';
import { OPEN_MODEL } from '../context/types/ModelTypes';
import Register from '../auth/Register';
import Login from '../auth/Login';

const Home = () => {
  const { dispatch } = useContext(ModelContext);
  const [state] = useState({
    heading: 'We are travel friend',
    paragraph:
      'Come and join us we travel the most famous and beautiful places in the world',
  });
  const [registerMode] = useState('registerMode');
  const [loginMode] = useState('loginModel');
  return (
    <>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          className='btn-default'
          onClick={() => dispatch({ type: OPEN_MODEL, payload: registerMode })}
        >
          Get Started
        </button>
      </Header>
      <Model current={registerMode}>
        <Register currentMode={loginMode} />
      </Model>
      <Model current={loginMode}>
        <Login currentMode={registerMode} />
      </Model>
    </>
  );
};
export default Home;
