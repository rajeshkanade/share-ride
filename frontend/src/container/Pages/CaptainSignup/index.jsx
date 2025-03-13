import React, { use, useContext, useState } from 'react'
import LoginSignupHeader from '../../../components/LoginSignupHeader';
import { LockKeyhole, Mail, ShieldCheck, User, UserCheck, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton';
import DontHaveAccount from '../../../components/DontOrHaveAccount';
import InputField from '../../../components/InputField';
import SecondaryButton from '../../../components/SecondaryButton';
import DontOrHaveAccount from '../../../components/DontOrHaveAccount';
import { CaptainDataContext } from '../../../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {
   const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [username, setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleModel,setVehicleModel] = useState("");
    const [confirmPassword , setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const {captain, setCaptain} = useContext(CaptainDataContext);


    const formSubmit = async(e) =>{
      e.preventDefault();
      // console.log(username, password);
      const captainData = {
       fullname : {
        firstname : firstName , 
        lastname : lastName,
       },
        email : username , 
        password : password ,
        vehicle : {
          color : vehicleColor,
          capacity : vehicleCapacity,
          model : vehicleModel,
          plate : vehiclePlate,
          type : vehicleType,
        }
      }

      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);
        if(response.status == 201){
          const data = response.data;
          console.log("captain : " , data.captain);
          setCaptain(data.captain)
          localStorage.setItem("token",data.token);
          // console.log("captain" ,captain);
          navigate("/captain-home");
        }
      } catch (error) {
        console.log("error in api : ", error);
      }
      // console.log(captainData)
      setUsername("")
      setPassword("")
      setFirstName("")
      setLastName("")
      setConfirmPassword("")
      setVehicleColor("")
      setVehicleType("")
      setVehicleCapacity("")
      setVehiclePlate("")
      setVehicleModel("")
    }
  return (
    <>
    <div className='min-h-screen w-full bg-gray-200 flex justify-center items-center'>
      <div className='w-30 bg-white rounded'>
          <LoginSignupHeader header={"Driver Register"} Icon={UserPlus} description={"Welcome, Register new Driver Account"}/>
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
            <div className='w-full'>
            <h3 className="text-xl font-semibold mb-6 mt-5">Vehicle Information</h3>

            <div className="flex w-full">
              <div className='w-[50%] px-2'><InputField value={vehicleColor} callback={setVehicleColor} type={"text"} label='Vehicle Color' Icon={User} required={true}/></div>
              <div className='w-[50%]'><InputField value={vehiclePlate} callback={setVehiclePlate} type={"text"} label='Plate Number' Icon={UserCheck} required={true}/></div>
            </div>
            <div className="flex w-full">
              <div className='w-[50%] px-2'><InputField value={vehicleModel} callback={setVehicleModel} type={"text"} label='Vehicle Model' Icon={User} required={true}/></div>
              <div className='w-[50%]'><InputField value={vehicleType} callback={setVehicleType} type={"text"} label='Vehicle Type' Icon={UserCheck} required={true}/></div>
            </div>
          <div className="mb-8">
          <InputField value={vehicleCapacity} callback={setVehicleCapacity} type={"number"} label='Seat Capacity' Icon={LockKeyhole}  required={true}/>
            
          </div>

         
            </div>
            <PrimaryButton content={'Sign Up'}/>
            


          </form>
          <DontOrHaveAccount content={"Have an Account ? "} link={'/captain-login'} heading={'Login here'}/>

            <SecondaryButton content={'Sign Up as User'} link={'/signup'}/>
      </div>
    </div>
  </>
  )
}

export default CaptainSignup
