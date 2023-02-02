import loader from '../../assets/loader.svg';
import './index.scss'

function Loader() {
  return (
    <div className='loader'>
      <img src={loader} alt='loading...' />
    </div>
  )
}

export default Loader