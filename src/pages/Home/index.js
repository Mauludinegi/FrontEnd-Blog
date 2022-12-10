import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Footer, Gap, Header, } from '../../components'
import './home.scss'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { setDataBlog } from '../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';

export const Home = () => {
  const [counter, setCounter] = useState(1);
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setDataBlog(counter))
  }, [counter, dispatch])


  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
  }

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
  }

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Apakah Anda yakin akan menghapus',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
              console.log('success delete: ', res.data);
              dispatch(setDataBlog(counter));
            })
            .catch(err => {
              console.log('err: ', err)
            })
          }
        },
        {
          label: 'No',
          onClick: () => console.log('Tidak Setuju')
        }
      ]
    });
  }

  return (
    <div>
      <Header/>

    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Link to="/create-blog">
          <Button tittle="Buat Blog"/>
        </Link>
      </div>
      
      <Gap height={20}/>
      <div className='content-wrapper'>
        {dataBlog.map(blog => {
          return (
            <BlogItem 
                key={blog._id} 
                image= {`http://localhost:4000/${blog.image}`} 
                title={blog.title}
                body={blog.body}
                name={blog.author.name}
                date={blog.createdAt}
                _id={blog._id}
                onDelete={confirmDelete}
            />
        )})}
      </div>
      <div className='pagination'>
        <Button tittle='Previous' onClick={previous}/>
        <Gap width={20}/>
        <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
        <Gap width={20}/>
        <Button tittle='Next' onClick={next}/>
      </div>
      <Gap width={20}/>
    </div>
    <Footer/>
  </div>
  )
}

export default Home;