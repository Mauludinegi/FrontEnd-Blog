import React, { useEffect, useState } from 'react'
import { Footer, Gap, Header, Link as LinkTitle } from '../../components'
import './detailBlog.scss'
import axios from 'axios';
import {
  useNavigate,
  useParams,
  Link, 
} from "react-router-dom";

const withRouter = WrappedComponent => props => {
  const params = useParams();
  const navigate = useNavigate();

  return (
      <WrappedComponent
          {...props}
          params={params}
          navigate={navigate}
      />
  );
};

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//       <Component
//         {...props}
//         router={{ location, navigate, params }}
//       />
//     );
//   }

//   return ComponentWithRouterProp;
// }

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.params.id;
    axios.get(`http://localhost:4000/v1/blog/post/${id}`)
    .then(res => {
      setData(res.data.data)
    })
    .catch(err => {
      console.log('err: ', err);
    })
  }, [props])

  if(data.author) {
    return (
      <div className='detail-blog-wrapper'>
        <Header/>
          <img className='img-cover' src={`http://localhost:4000/${data.image}`} alt='thumb'/>
          <p className='blog-title'>{data.titile}</p>
          <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
          <p className='blog-body'>{data.body}</p>
          <Gap height={20}/>
          <Link to='/'>
            <LinkTitle tittle='Kembali ke Home'/>
          </Link>
          <Footer/>
      </div>
    )
  }
  return <p>loading data</p>
}

export default withRouter(DetailBlog);

