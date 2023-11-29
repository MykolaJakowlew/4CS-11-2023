import { useContext, useEffect } from 'react';
import './style.css';
import CalendarContext from '../../context/calendar.context';
import EventComponent from './event';
import { useNavigate, useParams } from 'react-router-dom';
import { getDaysInMonth } from '../shared/months';

const DayComponent = () => {

  const navigate = useNavigate();
  const { day, month, year } = useParams();

  useEffect(() => {
    if (!day) {
      return;
    }

    const dayNumber = +day;

    const totalDays = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

    if (
      day.includes('.')
      || isNaN(dayNumber)
      || dayNumber > totalDays
      || dayNumber < 1
    ) {
      navigate('/not-found-page');
      return;
    }

    const changes = [{ value: dayNumber, type: 'day' }];

    if (month) {
      const monthNumber = +month;
      if (month.includes('.') || isNaN(monthNumber) || monthNumber < 0 || monthNumber > 11) {
        navigate('/not-found-page');
        return;
      }

      changes.push({
        value: monthNumber, type: 'month'
      });
    }

    if (year) {
      const yearNumber = +year;
      if (month.includes('.') || isNaN(yearNumber)) {
        navigate('/not-found-page');
        return;
      }

      changes.push({
        value: yearNumber, type: 'year'
      });
    }

    setCurrentDate(changes);
  }, []);

  const { setCreateEvent, currentDate, events, setCurrentDate } = useContext(CalendarContext);

  const click = (hour, x, y) => {
    const date = new Date(currentDate);
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);
    setCreateEvent({
      date: date,
      clientX: x,
      clientY: y
    });
  };

  const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
  /**
   * eventsToday => [] || undefined
   */
  const eventsToday = events[key] || [];

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
                <div
                  className='content'
                  onClick={(event) => click(index, event.clientX, event.clientY)}>
                  {
                    eventsToday.map(event => {
                      const date = new Date(event.date);
                      const hour = date.getHours();
                      if (hour === index) {
                        return (<EventComponent event={event} />);
                      }
                      return null;
                    })
                  }
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