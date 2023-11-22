import { useContext } from 'react';
import './style.css';
import CalendarContext from '../../context/calendar.context';

const DayComponent = () => {

 return (
  <div className='content-wrapper day-wrapper '>
   {
    Array(24).fill(null)
     .map((_, index) => {
      return (
       <div className='hours-wrapper'>
        <div className='hours'>
         <span>{index}:00</span>
        </div>
        <div className='content'>
        </div>
       </div>
      );
     })
   }
   <div className='hours-wrapper'>
    <div className='hours'>
     <span>24:00</span>
    </div>
    <div className='content'>
    </div>
   </div>
  </div>
 );
};

export default DayComponent;