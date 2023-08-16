import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {

  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
      setErrMsg(error.message);
    }
  };

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">ChatterBox</span>
            <span className="title">Login</span>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" name="" id="" placeholder='Enter email'/>
                <input type="password" name="" id="" placeholder='Enter password'/>
                <button>Sign in</button>
            </form>
            {err && <span>{errMsg}</span>}
            <p>You do not have an account?<Link to="/register">Register</Link></p>
        </div>
    </div>
  );
}

export default Login;
