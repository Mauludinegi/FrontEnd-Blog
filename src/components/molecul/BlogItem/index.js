import React from 'react'
import { Button, Gap } from '../../atoms'
import './blogitem.scss'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const BlogItem = (props) => {
  const {image,title, name, date, body, _id, onDelete} = props;
  const navigate = useNavigate();
  const edit = () => {
    navigate(`/create-blog/${_id}`);
  }
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={image} alt='post'/>
        <div className='content-detail'>
          <div className='title-wrapper'>
            <p className='tittle' >{title}</p>
            <div className='edit-wrapper'>
              <p className='edit' onClick={edit}>Edit</p> | <p className='delete' onClick={() => onDelete(_id)}>Delete</p>
            </div>
          </div>
          <p className='author'>{name} - {date}</p>
          <p className='body'>{body}</p>
          <Gap height={20}/>
          <Link to={`/detail-blog/${_id}`}>
            <Button tittle='View Detail'/>
          </Link>
       </div>
    </div>
  )
}

export default BlogItem