import { Input } from 'postcss'
import React, { useContext, useEffect, useState } from 'react'
import InputField from '../../../components/InputField'
import { User, LockKeyhole, ShieldUser } from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoginSignupHeader from '../../../components/LoginSignupHeader'
import PrimaryButton from '../../../components/PrimaryButton'
import DontOrHaveAccount from '../../../components/DontOrHaveAccount'
import SecondaryButton from '../../../components/SecondaryButton'
import { UserDataContext } from '../../../context/UserContext'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password , setPassword] = useState('');
  // const [userData , setUserData] = useState({});
  const {user,setUser} = useContext(UserDataContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if(token){
  //     navigate("/");
  //   }

  // }, [token])
  
  const formSubmit = async (e) =>{
    e.preventDefault();
    // console.log(username, password);
    const userData = {
      email : username , 
      password : password
    }

    try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
        if(response.status = 200){
          const data = await response.data;
          const token = await data.token;
          setUser(data.user);
          localStorage.setItem("token",token);
          navigate('/ride');
          console.log(data.user);
        }
    }catch(err){
      console.log(err);
    }
    setUsername("")
    setPassword("")
  }
  return (
    <>
      {/* <div className='min-h-screen w-full bg-gray-200 flex justify-center items-center'>
        <div className='w-30 bg-white rounded'>
            <LoginSignupHeader header={"User Login"} Icon={ShieldUser} description={"Welcome back, Login to user Account"}/>
            <form className='w-full p-3 flex flex-col gap-3' onSubmit={(e)=>{
              formSubmit(e);
            }}>
              <InputField value={username} callback={setUsername} type={"email"} label='Email' Icon={User} required={true}/>
              <InputField value={password} callback={setPassword} type={"password"} label='Password' Icon={LockKeyhole}  required={true}/>
              <div className='flex justify-between items-center'>
                <div>
                <input type="checkbox" name='remember me' className='mr-1 accent-primary-500' />
                <label htmlFor="remember me">Remember me</label>
                </div>
                <Link to='/forgot-password' className='text-primary-600'>Forgot Password?</Link>

              </div>
              <PrimaryButton content={'Login'}/>
              <DontOrHaveAccount content={"Don't have an Account ? "} link={'/signup'} heading={"Register"}/>


            </form>
              <SecondaryButton content={'Login as Driver'} link={'/captain-login'}/>
        </div>
      </div> */}
      <div className='min-h-screen w-full bg-gray-200 flex justify-center items-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-sm sm:max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8'>
        <LoginSignupHeader header={'User Login'} Icon={ShieldUser} description={'Welcome back, Login to user Account'} />
        <form className='w-full flex flex-col gap-4' onSubmit={formSubmit}>
          <InputField value={username} callback={setUsername} type={'email'} label='Email' Icon={User} required={true} />
          <InputField value={password} callback={setPassword} type={'password'} label='Password' Icon={LockKeyhole} required={true} />
          
          <div className='flex justify-between items-center text-sm'>
            <div className='flex items-center'>
              <input type='checkbox' name='remember me' className='mr-2 accent-primary-500' />
              <label htmlFor='remember me'>Remember me</label>
            </div>
            <Link to='/forgot-password' className='text-primary-600 hover:underline'>Forgot Password?</Link>
          </div>
          
          <PrimaryButton content={'Login'} />
          <DontOrHaveAccount content={"Don't have an Account ? "} link={'/signup'} heading={'Register'} />
        </form>
        <SecondaryButton content={'Login as Driver'} link={'/captain-login'} className='mt-4' />
      </div>
    </div>
    </>
  )
}

export default Login
