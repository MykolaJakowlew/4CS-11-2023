import { Link } from 'react-router-dom';
import './style.css';

const groupName = 'period-selector';

/**
 * 
 * @param {Object} props 
 * @param {string} props.title 
 * @param {string} props.keyName 
 * @returns 
 */
const RadioComponent = (props) => {

 return (
  <div className='radio-wrapper'>
   <Link to={props.keyName}>
    <label>
     <input
      type='radio'
      name={groupName}
     />
     {props.title}
    </label>
   </Link>
  </div>
 );
};

export default RadioComponent;