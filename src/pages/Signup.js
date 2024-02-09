import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/sign up.png";


const Signup=({setIsLoggedIn})=>{
    return(
        <Template
        
        title="Join a millions learning to code with Studynotion for free"
        desc1="Build skills for today , tomorrow, and beyond"
        desc2="Education to future-proof your carrer"
        image={signupImg}
        formtype="Signup"
        setIsLoggedIn={setIsLoggedIn}
    />
    )
}
 
export default Signup;