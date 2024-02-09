import React from "react";
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
import {toast} from "react-toastify"


const Navbar =(props) =>{

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return(
        <div className='flex justify-between item-center w-11/12  max-w-[1160px] py-4 mx-auto'>
           
           <Link to ='/'>
            <img src={logo}  width={160}  height={32} loading="lazy"></img>
           </Link>

           <nav className='flex '> 
              <ul className=" text-white flex gap-x-6 ">
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/">About</Link>
                </li>
                <li>
                    <Link to ="/">Contact</Link>
                </li>
              </ul>
           </nav>

        {/* Login - Signup - LogOut - Dashboard */}
              <div className='flex  item-center gap-x-4'>
                {
                    !isLoggedIn &&
                 <Link to="/login">
                    <button className="bg-gray text-white py-[8px] px-[12px] rounded-[4px] border border-grey">
                        LogIn
                    </button>
                 </Link>
                }
                 { !isLoggedIn &&
                 <Link to="/signup">
                    <button className="bg-gray text-white py-[8px] px-[12px] rounded-[4px] border border-grey">
                        SignUp
                    </button>
                 </Link>
                }
                 {  isLoggedIn &&
                 <Link to="/">
                    <button onClick={ () =>{
                        setIsLoggedIn(false);
                        toast.success("Logged out")
                    }}
                    className="bg-gray text-white py-[8px] px-[12px] rounded-[4px] border border-grey">
                       LogOut
                    </button>
                 </Link>
                }
                 {  isLoggedIn &&
                 <Link to="/Dashboard">
                    <button className="bg-gray text-white py-[8px] px-[12px] rounded-[4px] border border-grey">
                        Dashboard
                    </button>
                 </Link>
                }
              </div>
        </div>
    )
}

export default Navbar;
