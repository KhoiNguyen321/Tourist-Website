import FooterIntro from './FooterIntro';
import FooterLinks from './FooterLinks';
const Footer = () => {
  const footerStyles = {
    background: 'url(/assets/footer/footer.jpg)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };
  return (
    <footer className='footer' style={footerStyles}>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__container__block'>
            <div className='row ml-minus-15 mr-minus-15'>
              <div className='col-6 p-15'>
                <FooterIntro />
              </div>
              <div className='col-6 p-15'>
                <FooterLinks />
              </div>
            </div>
          </div>
          <div className='footer__bottom'>
            <p>&copy; copy right travel friend {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
