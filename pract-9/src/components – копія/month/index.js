import { useContext, useState } from 'react';
import { MONTHS } from '../shared/months';
import './style.css';
import CalendarContext from '../../context/calendar.context';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDaysInMonth (year, month) {
 return new Date(year, month + 1, 0).getDate();
}

const MonthComponent = () => {
 const { currentDate, setCurrentDate } = useContext(CalendarContext);

 const currentYear = currentDate.getFullYear();
 const currentMonth = currentDate.getMonth();

 const days = getDaysInMonth(currentYear, currentMonth);
 console.log('days:', days);
 const date = new Date();
 date.setFullYear(currentYear);
 date.setMonth(currentMonth);

 const onClick = (day) => {
  setCurrentDate((prevDate) => {
   const date = new Date(prevDate);
   date.setDate(day);
   return date;
  });
 };

 return (
  <div className='content-wrapper month-wrapper'>
   <div className='header'>{MONTHS[currentMonth]}</div>
   {WEEK_DAYS.map(day => (<div className='day-name'>{day}</div>))}
   {
    Array(days).fill(null).map((_, index) => {
     date.setDate(index + 1);
     const day = date.getDay() + 1;
     console.log('date', { date, day, d: date.getDay() });
     return (
      <div
       onClick={() => onClick(index + 1)}
       className='day content-item'
       style={{ "--day-col-start": day % 7, }}>
       {index + 1}</div>
     );
    })
   }
  </div>
 );
};

export default MonthComponent;