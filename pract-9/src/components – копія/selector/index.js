import { useContext } from 'react';
import './style.css';
import CalendarContext from '../../context/calendar.context';

/**
 * 
 * @param {Object} props 
 * @param {string} props.groupName
 * @param {string} props.title
 * @param {string} props.keyName
 */
const RadioComponent = (props) => {

 const { setSelectedPeriod, selectedPeriod } = useContext(CalendarContext);

 const onSelect = () => {
  setSelectedPeriod(props.keyName);
 };

 const checked = selectedPeriod === props.keyName;

 return (
  <div className='radio-wrapper'>
   <label>
    <input
     type='radio'
     name={props.groupName}
     onClick={onSelect}
     defaultChecked={checked || undefined}
    />{props.title}
   </label>
  </div>
 );
};

export default RadioComponent;