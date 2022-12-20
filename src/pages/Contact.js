import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import PageContainer from '../components/pages-parts/PageContainer';
import ContactForm from '../components/pages-parts/ContactForm';
const Contact = () => {
  const [state] = useState({
    heading: 'contact us',
    pageHeading: 'leave your message in the contact form',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl odio, aliquet eu arcu quis, consectetur luctus felis. Maecenas mi enim, efficitur malesuada elit sed, lobortis egestas lacus. Fusce augue enim, interdum non dolor et, viverra placerat enim. Cras sit amet lorem in metus tincidunt congue. Morbi efficitur ultrices nulla, nec congue justo malesuada et. Sed blandit finibus lacus a lobortis. Pellentesque felis quam, placerat vel quam eu, aliquam semper dui. Nam a laoreet dolor',
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta name='description' content='travel friends contact page' />
      </Helmet>
      <PageContainer data={state}>
        <ContactForm />
      </PageContainer>
    </>
  );
};

export default Contact;
