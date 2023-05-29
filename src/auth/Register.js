import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import axios from 'axios';
import {register} from '../actions/auth'
//import {toast} from "react-toastify";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
   e.preventDefaul();
try {
    const res = await axios.post('${process.env.REACT_APP_API}/register', {
        name,
         email,
         password,
       })
        console.log('REGISTER USER ==>', res);
       // Toast.success("Register success. Please login");
       // history.pushState("/login");
} catch(err) {
    console.log(err);
    //if (err.response.status === 400) toast.error(err.response.data);
}
};


    return(
        <>
        <div className="container-fluid bg-secoundary p-5 text-center">
           <h1>Register</h1>
         </div>
         
         <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                   <RegisterForm
                   handleSubmit={handleSubmit}
                   name={name}
                   setName={setName}
                   email={email}
                   setEmail={setEmail}
                   password={password}
                   setPassword={setPassword}
                   />  
                </div>
            </div>
         </div>
        </>
    );
};

export default Register;