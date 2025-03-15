import React, { useContext, useState } from 'react'
import LoginSignupHeader from '../../../components/LoginSignupHeader';
import { FolderPen, LockKeyhole, Mail, ShieldCheck, User, UserCheck, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton';
import DontHaveAccount from '../../../components/DontOrHaveAccount';
import InputField from '../../../components/InputField';
import SecondaryButton from '../../../components/SecondaryButton';
import DontOrHaveAccount from '../../../components/DontOrHaveAccount';
import axios from 'axios';
import { UserDataContext } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [username, setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');
  const [userData , setUserData] = useState({});
  const {user, setUser} = useContext(UserDataContext);

  const navigate = useNavigate();

  const formSubmit = async(e) =>{
    e.preventDefault();
    // console.log(username, password);
    setUserData({
      fullname : {
        firstname : firstName , 
        lastname : lastName,
      },
      email : username , 
      password : password,
    })

    const newUser = {
      fullname : {
        firstname  : firstName,
        lastname : lastName,
      },
      email : username,
      password : password,
    }

    try{

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
      if(response.status == 201){
        const data  = response.data ;
        setUser(data.user);
        localStorage.setItem("token",data.token);
        navigate("/");
      }
    }catch(error){
      console.log(error);
      
    }
    // console.log(userData)
    setUsername("")
    setPassword("")
    setFirstName("")
    setLastName("")
    setConfirmPassword("")
  }
  return (
    <>
      <div className='min-h-screen w-full bg-gray-200 flex justify-center items-center'>
        <div className='w-30 bg-white rounded'>
            <LoginSignupHeader header={"User Register"} Icon={UserPlus} description={"Welcome, Register new user Account"}/>
            <form className='w-full p-3 flex flex-col gap-3' onSubmit={(e)=>{
              formSubmit(e);
            }}>
              <div className="flex w-full">
                <div className='w-[50%] px-2'><InputField value={firstName} callback={setFirstName} type={"text"} label='First Name' Icon={User} required={true}/></div>
                <div className='w-[50%]'><InputField value={lastName} callback={setLastName} type={"text"} label='Last Name' Icon={UserCheck} required={true}/></div>
              </div>
              <InputField value={username} callback={setUsername} type={"email"} label='Email' Icon={Mail} required={true}/>
              <InputField value={password} callback={setPassword} type={"password"} label='Password' Icon={LockKeyhole}  required={true}/>
              <InputField value={confirmPassword} callback={setConfirmPassword} type={"password"} label='Confirm Password' Icon={ShieldCheck}  required={true}/>
              <div className='flex justify-between items-center'>
              
              </div>
              <PrimaryButton content={'Sign Up'}/>
              


            </form>
            <DontOrHaveAccount content={"Have an Account ? "} link={'/login'} heading={"login"}/>

              <SecondaryButton content={'Sign Up as Driver'} link={'/captain-signup'}/>
        </div>
      </div>
    </>
  )
}

export default Signup
