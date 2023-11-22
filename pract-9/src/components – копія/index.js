import { useEffect, useState } from 'react';
import LoaderComponent from './loader';
import './style.css';
import RadioComponent from './selector';
import CurrentDateComponent from './currentDate';
import CalendarContext from '../context/calendar.context';
import YearsComponent from './years';
import MonthsComponent from './months';
import MonthComponent from './month';
import DayComponent from './day';

function App () {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDate, _setCurrentDate] = useState(new Date());
  const setCurrentDate = (callbackFunction) => {
    _setCurrentDate(callbackFunction);
  };
  const [selectedPeriod, _setSelectedPeriod] = useState('day');
  const setSelectedPeriod = (value) => {
    _setSelectedPeriod(value);
  };
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  console.log('currentDate', currentDate);
  let content = null;
  switch (selectedPeriod) {
    case 'years': {
      content = <YearsComponent />;
      break;
    }

    case 'months': {
      content = <MonthsComponent />;
      break;
    }

    case 'month': {
      content = <MonthComponent />;
      break;
    }

    case 'day': {
      content = <DayComponent />;
      break;
    }
    default: {
      content = null;
    }
  }

  return (
    <div className="App">
      <CalendarContext.Provider value={{
        currentDate,
        setCurrentDate,
        setSelectedPeriod,
      }}>
        <header>
          <CurrentDateComponent currentDate={currentDate} />
          {/* Render years grid */}
          <RadioComponent title='years' groupName='period-selector' keyName='years' />
          {/* Render months grid */}
          <RadioComponent title='months' groupName='period-selector' keyName='months' />
          {/* Render month grid */}
          <RadioComponent title='month' groupName='period-selector' keyName='month' />
          {/* Render day grid */}
          <RadioComponent title='day' groupName='period-selector' keyName='day' />
        </header>
        {content}
      </CalendarContext.Provider>
    </div>
  );
}

export default App;
