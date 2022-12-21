import DestinationDetails from './DestinationDetails';
const DestinationInfo = ({ details }) => {
  const greeting = 'hey hi';
  var times = 4;
  if (times > 3) {
    let greeting = 'say Hello instead';
    console.log(greeting);
  }

  console.log(greeting); //"say Hello instead"
  return (
    <div className='destinationInfo'>
      <div className='container'>
        <h2 className='heading'>Overview</h2>
        <div className='row'>
          <div className='col-8'>
            <p className='destinationInfo__p'>{details.details}</p>
          </div>
        </div>
        <h2 className='heading'>Good to know</h2>
        <div className='col-8'>
          <DestinationDetails title='Language' text={details.language} />
          <DestinationDetails title='Currency' text={details.currency} />
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;
