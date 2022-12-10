import React, { useState } from 'react';
import { LoginBG } from '../../assets';
import { Input,Gap, Link as LinkTitle } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 


const Login = () => {
let emailData = "egi@gmail.com";
let passData = "12345"
const navigate = useNavigate()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const _Login = (e) =>{
  e.preventDefault()
  if(email === emailData && password === passData){
      navigate("/")
    }else{
      confirmAlert({
        title: 'Data tidak valid',
        message: 'Pastikan semuanya benar atau belum punya akun, silahkan daftar!',
        buttons: [
          {
            label: 'Yes',
            onClick: () => console.log('')
          }
        ]
      });
    }
  }


  return (
    <div className='main-page'>
    <div className='left'>
      <img src = {LoginBG} className = 'bg-image' alt = 'imageBg'/> 
    </div>
    <div className='right'>       
      <p className='tittle'>Login</p> 
      <Input placeholder="Email" label="email" type="text" valueData={email} onChangeData={(e)=>setEmail(e.target.value)}/>
      <Gap height={18}/>
      <Input placeholder="Password" label="Password" type="text" valueData={password} onChangeData={(e)=>setPassword(e.target.value)}/>
      <Gap height = {50}/>
      <button onClick={_Login} className='button'>Login</button>
      <Gap height={100}/>
      <Link to="/register">
        <LinkTitle tittle='Belum punya akun? silahkan daftar!'/>
      </Link>
    </div>
  </div>
  )
}

export default Login;