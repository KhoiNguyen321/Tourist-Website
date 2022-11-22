import { useState, useContext } from 'react';
import Header from '../components/Header';
import Model from '../components/Model';
import ModelContext from '../context/ModelContext';

const Home = () => {
  const { dispatch } = useContext(ModelContext);
  const [state] = useState({
    heading: 'We are travel friend',
    paragraph:
      'Come and join us we travel the most famous and beautiful places in the world',
  });
  return (
    <>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          className='btn-default'
          onClick={() => dispatch({ type: 'OPEN_MODEL' })}
        >
          Get Started
        </button>
      </Header>
      <Model />
    </>
  );
};
export default Home;
