const ContactForm = () => {
  return (
    <form>
      <div className='group'>
        <h3 className='page__contact__heading'>Contact Form</h3>
      </div>
      <div className='group'>
        <input
          type='text'
          name=''
          className='group__control'
          placeholder='Your name eg. smith'
        />
      </div>
      <div className='group'>
        <input
          type='text'
          name=''
          className='group__control'
          placeholder='Your email eg. smith@gmail.com'
        />
      </div>
      <div className='group'>
        <textarea
          cols='12'
          rows='8'
          className='group__textarea'
          placeholder='Write your message eg. I have troubles'
        ></textarea>
      </div>
      <div className='group'>
        <input type='submit' value='send email &rarr;' className='btn-dark' />
      </div>
    </form>
  );
};

export default ContactForm;
