import React, { useContext, useState } from 'react'
import InputField from '../../../components/InputField'
import { User, LockKeyhole, ShieldUser } from 'lucide-react'
import { Link } from 'react-router-dom'
import LoginSignupHeader from '../../../components/LoginSignupHeader'
import PrimaryButton from '../../../components/PrimaryButton'
import DontOrHaveAccount from '../../../components/DontOrHaveAccount'
import SecondaryButton from '../../../components/SecondaryButton'
import { UserDataContext } from '../../../context/UserContext'

const CaptainLogin = () => {
   const [username, setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [data , setData] = useState({});

    // const [user,SetUser] = useContext(UserDataContext);
    // console.log(user);
  
    const formSubmit = (e) =>{
      e.preventDefault();
      // console.log(username, password);
      setData({
        username : username , 
        password : password
      })
      console.log(data)
      setUsername("")
      setPassword("")
    }
  return (
    <>
      <div className='min-h-screen w-full bg-gray-200 flex justify-center items-center'>
        <div className='w-30 bg-white rounded'>
            <LoginSignupHeader header={"Driver Login"} Icon={ShieldUser} description={"Welcome back, Login to Driver Account"}/>
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
              <DontOrHaveAccount content={"Don't have an Account ? "} link={'/captain-signup'} heading={'Register'}/>


            </form>
              <SecondaryButton content={'Login as User'} link={'/login'} />
        </div>
      </div>
    </>
  )
}

export default CaptainLogin
