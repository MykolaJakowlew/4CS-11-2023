import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faClock } from '@fortawesome/free-solid-svg-icons';
import './style.css';

/**
 * 
 * @param {Object} props 
 * @param {Object} props.imageSrc 
 * @param {Date} props.date 
 * @param {string} props.category 
 * @param {string} props.title 
 * @param {string?} props.subTitle 
 * @param {string?} props.description 
 * @param {Object} props.publisher 
 * @param {string} props.publisher.name
 * @param {string} props.publisher.url 
 * @returns 
 */
const NewsItemComponent = (props) => {

 const imageSrc = props.imageSrc || 'https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=fae278c7b8eeffec370bda6e42f5a827';

 const date = props.date || new Date();
 const category = props.category || 'photos';
 const title = props.title || "India";
 const subTitle = props.subTitle;
 const description = props.description;

 const publisher = {
  name: props.publisher?.name || "publisher name",
  url: props.publisher?.url || "url",
 };

 return (
  <div class="post-card">
   <div class="date" >
    <div class="day">{date.getDate()}</div>
    <div class="month">{date.toLocaleString('default', { month: 'long' }).slice(0, 3)}</div>
   </div>
   <div class="post-img" style={{ backgroundImage: `url(${imageSrc})` }}></div>
   <div class="post-content">
    <div class="category">{category}</div>
    <div class="publisher" >
     <a href={publisher.url}>{publisher.name}</a>
    </div>
    <h1 class="title">{title}</h1>
    {subTitle && <h2 class="sub_title">{subTitle}</h2>}
    {description && <p class="description">{description}</p>}
    <div class="post-meta">
     <span class="timestamp">
      <FontAwesomeIcon icon={faClock} />
      <span>6 mins ago</span>
     </span>
     <span class="comments">
      <FontAwesomeIcon icon={faComment} />
      <a href="#"> 39 comments</a>
     </span>
    </div>
   </div>
  </div>
 );
};

export default NewsItemComponent;