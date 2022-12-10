import React, { useEffect, useState } from "react";
import {Button, Gap, Input, TextArea, Upload, Link as LinkTitle, } from "../../components/atoms";
import "./createBlog.scss";
import { NavLink } from "react-router-dom";
import { Footer, Header } from "../../components";
import { useSelector, useDispatch} from "react-redux";
import { postToApi, setForm, setImgPreview, updateToAPI} from '../../config/redux/action';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

const CreateBlog = (props) => {
  const {form, imgPreview} = useSelector(state => state.createBlogReducer);
  const {title, body} = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('params: ', props)
    const id = props.params.id;
    if(props.params.id) {
      setIsUpdate(true)
      axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then(res => {
        const data = res.data.data;
        dispatch(setForm('title', data.title))
        dispatch(setForm('body', data.body))
        dispatch(setImgPreview(`http://localhost:4000/${data.image}`)) 
      })
      .catch(err => {
        console.log('err: ', err)
      })
    }
  }, [dispatch, props])

  const onSubmit = () => {
    const id = props.params.id
    if(isUpdate) {
      updateToAPI(form, id)
      navigate('/')
    }
    else {
      postToApi(form);
      navigate('/')
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image',file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  return (
    <div>
      <Header />
      <div className="blog-post">
        <NavLink to="/">
          <LinkTitle tittle="Kembali ke home" />
        </NavLink>
        <p className="title">{isUpdate ? 'Update' : 'Create New Blog'}</p>
        <Input placeholder="Post Title" type="text" valueData={title} onChangeData={(e)=>dispatch(setForm('title',e.target.value))}/>
        <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
        <TextArea value={body} onChange={(e) => dispatch(setForm('body',e.target.value))} />
        <Gap height={20} />
        <div className="button-action">
          <Button tittle={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
        </div>
      </div>
      <Gap height={20} />
      <Footer />
    </div>
  );
};

export default withRouter(CreateBlog);
