import { useContext, useState } from 'react';
import './style.css';
import CalendarContext from '../../context/calendar.context';
import { MONTHS } from '../shared/months';

/**
 * 
 * @param {Object} props
 * @param {number} props.currentMonth 
 * @returns 
 */
const MonthsComponent = (props) => {

 const { setCurrentDate, currentDate } = useContext(CalendarContext);

 const currentMonth = currentDate.getMonth();

 const selectMonth = (month) => {
  setCurrentDate(prevDate => {
   const date = new Date(prevDate);
   date.setMonth(month);
   return date;
  });
 };

 return (
  <div className='months-wrapper content-wrapper'>
   <div className='header'>{MONTHS[currentMonth]}</div>
   {
    MONTHS.map((month, i) => (<div
     className='month content-item'
     onClick={() => selectMonth(i)}
    >{month}
    </div>))
   }
  </div >
 );
};

export default MonthsComponent;