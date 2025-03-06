import { Input } from 'postcss'
import React from 'react'
import InputField from '../../../components/InputField'
import { User, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className='h-screen w-full bg-gray-200 flex justify-center items-center'>
        <div className='w-30 bg-white rounded'>
            <form className='w-full p-3 flex flex-col gap-3'>
              <InputField label='Email' Icon={User} required={true}/>
              <InputField label='Password' Icon={LockKeyhole}  required={true}/>
              <div className='flex justify-between items-center'>
                <div>
                <input type="checkbox" name='remember me' className='mr-1 accent-primary-500' />
                <label htmlFor="remember me">Remember me</label>
                </div>
                <Link to='/forgot-password' className='text-primary-600'>Forgot Password?</Link>

              </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login
