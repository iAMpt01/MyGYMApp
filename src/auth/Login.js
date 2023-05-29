import { useState } from "react";
import {login} from '../actions/auth';
import LoginForm from "../components/LoginForm";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefaul();
        //
    };

    return(
        <>
        <div className="container-fluid bg-secondary h1 p-5 text-center">
<h1>Login </h1>
        </div>

    <div className="container">
        <div className="row">
<div className="col-md-6 offset-md-3">
    <LoginForm  handleSubmit={handleSubmit}
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

export default Login;