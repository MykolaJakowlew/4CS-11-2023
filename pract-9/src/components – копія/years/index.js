import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import CalendarContext from '../../context/calendar.context';

const YearsComponent = () => {
  const { setCurrentDate, currentDate } = useContext(CalendarContext);
  console.log(currentDate);
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const halfCount = 12;

  const selectYear = (year) => {
    setCurrentDate(prevDate => {
      const date = new Date(prevDate);
      date.setFullYear(year);
      return date;
    });
  };

  const nextPage = () => {
    setCurrentYear((prevYear) => prevYear + 25);
  };

  const prevPage = () => {
    setCurrentYear((prevYear) => prevYear - 25);
  };

  return (
    <div className='years-wrapper content-wrapper'>
      <div className='header'>
        <FontAwesomeIcon icon={faArrowLeft} className='arrow-left' onClick={prevPage} />
        {currentYear}
        <FontAwesomeIcon icon={faArrowRight} className='arrow-right' onClick={nextPage} />
      </div>
      {
        Array(halfCount)
          .fill(currentYear)
          .map((_el, i) => {
            const year = currentYear - halfCount + i;
            return (<div className='year content-item' onClick={() => selectYear(year)}>{year}</div>);
          })
      }
      <div className='year content-item'>{currentYear}</div>
      {
        Array(halfCount)
          .fill(currentYear)
          .map((_el, i) => {
            const year = currentYear + i;
            return (<div className='year content-item' onClick={() => selectYear(year)}>{year}</div>);
          })
      }

    </div>
  );
};

export default YearsComponent;