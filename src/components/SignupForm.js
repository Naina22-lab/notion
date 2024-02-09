import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpForm =({setIsLoggedIn})=>{

    const[formData , setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
})

const[showPassword, setShowPassword]=useState(false)
const navigate =useNavigate();

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
    if(formData.password!=formData.confirmPassword){
        toast.error("Password do not match")
        return;
    }
    setIsLoggedIn(true);
    toast.success("Account successfully created")
    navigate("/dashboard")
}

    return(
        <div className="flex flex-col items-center justify-center bg-black text-white bg-fit ">
           {/*student-Instructor tab */}
           <div className="text-white flex space-x-4 mb-4">
            <button className="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600">
                Student
            </button>
            <button className="bg-blue-500 text-white px-4  py-2 rounded-md hover:bg-blue-600">
                Instructor
            </button>
           </div>

           <form
            className="rounded-lg shadow-md p-8 w-full max-w-md"
           onSubmit={submitHandler}>
            <div  className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
             <div className="w-full">   
                <label className="block mb-2">
                    <p>First Name <sup className="text-red-500">*</sup></p>
                    <input
                     required
                     type="text"
                     name="firstName"
                     onChange={changeHandler}
                     placeholder="Enter First Name"
                     value={formData.firstName}
                     className="block w-full border-gray-300 rounded-md mt-1 px-3 py-2"/>
                </label>
                </div>
                <div className="w-full">
                <label className="block mb-2">
                    <p>Last Name <sup className="text-red-500">*</sup></p>
                    <input
                     required
                     type="text"
                     name="lastName"
                     onChange={changeHandler}
                     placeholder="Enter Last Name"
                     value={formData.lastName}
                     className="block w-full border-gray-300 rounded-md mt-1 px-3 py-2"/>
                </label>
                </div>
            </div>
                <label className="block mb-2">
                    <p>E-mail <sup className="text-red-500">*</sup></p>
                    <input
                     required
                     type="email"
                     name="email"
                     onChange={changeHandler}
                     placeholder="Enter E-mail Address"
                     value={formData.email}
                     className="block w-full border-gray-300 rounded-md mt-1 px-3 py-2"/>
                </label>
                <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="w-full">     
                <label className="block mb-2" >
                    <p>Create Password <sup className="text-red-500">*</sup></p>
                    <input
                     required
                     type={showPassword ? ("text"):("password")}
                     name="password"
                     onChange={changeHandler}
                     placeholder="Enter your password"
                     value={formData.password}
                     className="block w-full border-gray-300 rounded-md mt-1 px-3 py-2"/>

                    <span onClick={()=>setShowPassword((prev) => !prev)}>
                      {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                    </span>
                </label>
                </div>
                <div className="w-full">
                <label className="block mb-2">
                    <p>Confirm Password <sup className="text-red-500">*</sup></p>
                    <input
                     required
                     type={showPassword ? ("text"):("password")}
                     name="confirmPassword"
                     onChange={changeHandler}
                     placeholder="Confirm password"
                     value={formData.confirmPassword}
                     className="block w-full border-gray-300 rounded-md mt-1 px-3 py-2"/>

                    <span onClick={()=>setShowPassword((prev) => !prev)}>
                      {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                    </span>
                </label>
                </div>
                </div>
                </div>
                   <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 mt-4">
                    Create Account
                   </button>

                </div>
           </form>

        </div>
    )
}

export default SignUpForm; 