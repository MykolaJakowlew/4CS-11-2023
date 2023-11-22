import './style.css';


/**
 * 
 * @param {Object} props 
 * @param {Date} props.currentDate 
 * @returns 
 */
const CurrentDateComponent = (props) => {

 const year = props.currentDate.getFullYear();
 const month = props.currentDate.toLocaleString('default', { month: 'long' });
 const day = props.currentDate.getDate();

 return (<div className='current-date-wrapper'>{month} {day}, {year}</div>);
};

export default CurrentDateComponent;