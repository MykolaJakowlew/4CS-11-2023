import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import CalendarContext from '../../context/calendar.context';

const PopupComponent = () => {

 const { createEvent, setCreateEvent } = useContext(CalendarContext);

 if (createEvent == null) {
  return null;
 }

 const top = createEvent.clientY;
 const left = createEvent.clientX;
 const date = createEvent.date;

 const close = () => {
  setCreateEvent(null);
 };

 return (
  <div
   style={{ top: top, left: left }}
   className='popup-wrapper'>
   <FontAwesomeIcon icon={faClose} id='popup-close' onClick={close} />
   <div>
    <div>Date: {date.toLocaleString()}</div>
    <div className='popup-title'>Title:<input /></div>
    <div className='popup-description'>
     Description:
     <textarea></textarea>
    </div>
   </div>
   <button>save</button>
  </div>
 );


};

export default PopupComponent;