import './style.css';
import * as uuid from 'uuid';
/**
 * 
 * @param {Object} props 
 * @param {string} props.title
 * @param {string} props.imageSrc
 * @returns 
 */
const GalleryItemComponent = (props) => {

 const itemId = uuid.v1();

 return (<div className='gallery-item'>
  <img src={props.imageSrc} />
  <div className='gallery-item-title'>Title: {props.title}</div>
  <div className='gallery-item-feedback'>
   <input id={`like-${itemId}`} type='radio' name={`group-feedback-${itemId}`} /><label for={`like-${itemId}`}>Like</label>
   <input id={`dislike-${itemId}`} type='radio' name={`group-feedback-${itemId}`} /><label for={`dislike-${itemId}`}>Dislike</label>
  </div>
 </div>);
};

const GalleryComponent = () => {

 const dataSet = [
  { title: 'title 1', imageSrc: './images/colors-1383652.jpg' },
  { title: 'title 2', imageSrc: './images/forest-1400475.jpg' },
  { title: 'title 2', imageSrc: './images/forest-1400475.jpg' },
  { title: 'title 2', imageSrc: './images/forest-1400475.jpg' },
  { title: 'title 2', imageSrc: './images/forest-1400475.jpg' },
  { title: 'title 2', imageSrc: './images/forest-1400475.jpg' },
  { title: 'title 2', imageSrc: './images/forest-1400475.jpg' },
  { title: 'title 2', imageSrc: './images/forest-1400475.jpg' },
  { title: 'title 3', imageSrc: './images/smoky-mountains-at-sunset-north-carolina-2152413.jpg' },
 ];

 return (
  <div className='gallery'>
   {/* <GalleryItemComponent title='title 1' imageSrc='./images/colors-1383652.jpg' />
   <GalleryItemComponent title='title 2' imageSrc='./images/forest-1400475.jpg' />
   <GalleryItemComponent title='title 3' imageSrc='./images/smoky-mountains-at-sunset-north-carolina-2152413.jpg' />
   <GalleryItemComponent title='title 1' imageSrc='./images/colors-1383652.jpg' />
   <GalleryItemComponent title='title 3' imageSrc='./images/smoky-mountains-at-sunset-north-carolina-2152413.jpg' />
   <GalleryItemComponent title='title 1' imageSrc='./images/colors-1383652.jpg' />
   <GalleryItemComponent title='title 2' imageSrc='./images/forest-1400475.jpg' />
   <GalleryItemComponent title='title 3' imageSrc='./images/smoky-mountains-at-sunset-north-carolina-2152413.jpg' /> */}

   {
    dataSet.map(el => {
     return (<GalleryItemComponent title={el.title} imageSrc={el.imageSrc} />);
    })
   }
  </div>
 );
};

export default GalleryComponent;