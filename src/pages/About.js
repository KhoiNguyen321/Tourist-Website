import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import PageContainer from '../components/pages-parts/PageContainer';
import AboutImage from '../components/pages-parts/AboutImage';
const About = () => {
  const [state] = useState({
    heading: 'about us',
    pageHeading: 'world best travel agency company sine 2005',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl odio, aliquet eu arcu quis, consectetur luctus felis. Maecenas mi enim, efficitur malesuada elit sed, lobortis egestas lacus. Fusce augue enim, interdum non dolor et, viverra placerat enim. Cras sit amet lorem in metus tincidunt congue. Morbi efficitur ultrices nulla, nec congue justo malesuada et. Sed blandit finibus lacus a lobortis. Pellentesque felis quam, placerat vel quam eu, aliquam semper dui. Nam a laoreet dolor',
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name='description' content='travel friends about page' />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
};

export default About;
