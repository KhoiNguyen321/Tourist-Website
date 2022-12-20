import { useContext, useEffect } from 'react';
import DestinationsContext from '../context/DestinationsContext';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DETAILS, CITIES } from '../context/types/DestinationTypes';
import Header from '../components/Header';
import Cities from '../components/cities/Cities';
import DestinationInfo from '../components/DestinationInfo';
import Footer from '../components/footer/Footer';

const Details = () => {
  const { destinationsData, dispatch } = useContext(DestinationsContext);
  const { details, fiteredCities } = destinationsData;
  const { id } = useParams();
  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    dispatch({ type: CITIES, payload: id });
    window.scrollTo(0, 0);
  }, [dispatch, id]);
  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage} />
      <DestinationInfo details={details} />
      <Cities cities={fiteredCities} name={details.name} />
      <Footer />
    </>
  );
};
export default Details;
