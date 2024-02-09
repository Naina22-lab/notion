import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom"
import {toast} from "react-toastify"




const LoginForm =({setIsLoggedIn})=>{

    const navigate =useNavigate();

    const[formData, setFormData]=useState({
        email:"",password:""
    })

    const[showPassword, setShowPassword]=useState(false)

    function changeHandler(event){
        setFormData((prevData)=>(
            {
            ...prevData,
            [event.target.name]:event.target.value,
           }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
         navigate("/dashboard")
    }

    return(
        
       
       <form className="flex flex-col"
       onSubmit={submitHandler}>

        <label className="block mb-4">
            <p className="text-sm text-white">
                Email Address <sup className="text-red-500">*</sup>
            </p>
        <input
        required
        type="email"
        value={formData.email}
        onChange={changeHandler} 
        placeholder="Enter E-mail id"
        name="email"
        className="block w-[400px] border-gray-300 rounded-md mt-1 px-3 py-2"/>
         </label>

         <label  className="block mb-4">
            <p className="text-sm text-white">
               Password <sup className="text-red-500">*</sup>
            </p>
        <input
        required
        type={showPassword ? ("text"):("password")}
        value={formData.password}
        onChange={changeHandler} 
        placeholder="Enter password "
        name="password"
        className="block w-full border-gray-300 rounded-md mt-1 px-3 py-2 w-[380px]"/>

        <span
        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={()=>setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>

        <Link to ="#">
            <p className="text-blue-500 text-sm mb-4">
                Forgot Password?
            </p>
         </Link>
         </label>

         <button className="bg-blue-500 text-white px-8 py-2 rounded-md shadow-md w-[400px] item-center justify-center hover:bg-blue-600 ">
            Signin
         </button>
       </form>
    )
}

export default LoginForm;