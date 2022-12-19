import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const FooterIntro = () => {
  const [state] = useState({
    logo: '/assets/footer/logo.png',
    intro:
      'Travel friends is a travelling agency, we arrange tours to the world famous and most beautiful countries, Since 2005 we provide high quality services to our values customer.',
  });
  return (
    <div className='footer__intro'>
      <div className='footer__intro__img'>
        <LazyLoadImage src={state.logo} alt='footer logo' />
      </div>
      <div className='footer__intro__msg'>{state.intro}</div>
    </div>
  );
};

export default FooterIntro;
