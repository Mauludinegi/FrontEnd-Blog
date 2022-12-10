import React, { useState } from 'react';
import './register.scss';
import { RegisterBG } from '../../assets';
import { Input,Gap, Link as LinkTitle } from '../../components';
import {Link, useNavigate} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const Register = () => {
  let fullNameData = '12345';
  let emailData = '12345';
  let passwordData = '12345';
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  

  const _Register = (e) => {
    e.preventDefault();
    if(name.length >= fullNameData.length && email.length >= emailData.length && pass.length >= passwordData.length) {
      navigate("/login")
      
    } else {
      confirmAlert({
        title: 'Data tidak valid',
        message: 'Pastikan semuanya terdapat lebih dari lima karakter',
        buttons: [
          {
            label: 'Yes',
            onClick: () => console.log('Click Yes')
          }
        ]
      });
    }
  } 
 
  return (
    <div className='main-page'>
      <div className='left'>
        <img src = {RegisterBG} className = 'bg-image' alt = 'imageBg'/>
      </div>

      <div className='right'>       
        <p className='tittle'>Form Register</p>
        <Input label = 'Full Name' placeholder = 'Full Name' type="text" valueData={name} onChangeData={(e) => setName(e.target.value)}/>
        <Gap height={18}/>
        <Input label = 'Email' placeholder = 'Email' type="email" valueData={email} onChangeData={(e) => setEmail(e.target.value)}/>
        <Gap height={18}/>
        <Input placeholder="Password" label="Password" type="text" valueData={pass} onChangeData={(e)=>setPass(e.target.value)}/>
        <Gap height = {50}/>
        {/* <Link to="/login">
        <Button tittle="Register"/>
        </Link> */}
        <Gap height = {50}/>
        <button onClick={_Register} className='button'> 
          Register
        </button>
        <Link to="/login">
        <LinkTitle tittle="kembali ke login"/>
        </Link>
        <Gap height={100}/>
      </div>
    </div>
  )
}

export default Register;