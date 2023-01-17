import loader from '../../assets/icons/loader.svg';

function Loader() {
  return (
    <div className='loader'>
      <img src={loader} alt='loading...' />
    </div>
  )
}

export default Loader