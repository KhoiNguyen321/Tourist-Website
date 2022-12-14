import { useState, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Model from '../components/Model';
import ModelContext from '../context/ModelContext';
import { OPEN_MODEL } from '../context/types/ModelTypes';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Destinations from '../components/Destinations';
import Services from '../components/services/Services';
import Reviews from '../components/reviews/Reviews';
import Footer from '../components/footer/Footer';
const Home = () => {
  const { dispatch } = useContext(ModelContext);
  const [state] = useState({
    heading: 'We are travel friend',
    paragraph:
      'Come and join us we travel the most famous and beautiful places in the world',
  });
  const [registerMode] = useState('registerMode');
  const [loginMode] = useState('loginModel');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Travel Friends</title>
        <meta name='description' content='Travel to the world with friend' />
        <meta name='keywords' content='travel, travel tours, airline' />
      </Helmet>
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
      <Destinations />
      <Services />
      <Reviews />
      <Footer />
    </>
  );
};
export default Home;
