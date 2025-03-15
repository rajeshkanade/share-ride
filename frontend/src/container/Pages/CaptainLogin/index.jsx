import React, { useContext, useState } from 'react'
import InputField from '../../../components/InputField'
import { User, LockKeyhole, ShieldUser } from 'lucide-react'
import { Link } from 'react-router-dom'
import LoginSignupHeader from '../../../components/LoginSignupHeader'
import PrimaryButton from '../../../components/PrimaryButton'
import DontOrHaveAccount from '../../../components/DontOrHaveAccount'
import SecondaryButton from '../../../components/SecondaryButton'
import { UserDataContext } from '../../../context/UserContext'
import axios from 'axios'
import { CaptainDataContext } from '../../../context/CaptainContext'
import { useNavigate } from 'react-router-dom'

const CaptainLogin = () => {
   const [username, setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [data , setData] = useState({});
    const navigate = useNavigate();

  const {captain, setCaptain} = useContext(CaptainDataContext);

    // const [user,SetUser] = useContext(UserDataContext);
    // console.log(user);
  
    const formSubmit = async (e) =>{
      e.preventDefault();
      // console.log(username, password);
      const captainData = {
        email : username , 
        password : password
      }
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData)
        if(response.status == 200){
          const data = response.data;
          console.log(data);
          setCaptain(data.captain);
          const token = data.token;
          localStorage.setItem("token",token);
          navigate("/captain-home");
        }
      } catch (error) {
        console.log(error);
      }
      // console.log(data)
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
