import React, { Fragment, useState, useEffect } from "react";
import { BsHexagon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const  navigate = useNavigate();
  const {isLoginLoading, login, isLogged} = useUser();

  useEffect(()=>{
    if (isLogged) {
      navigate('/')
      window.location.reload()
    }

  },[isLogged,navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({username, password})
  };

  if (isLoginLoading) return

  return  (
    <div className="flex items-center justify-center min-h-screen">
      <div className="px-24 py-14 mt-4 text-left bg-white shadow-lg">
        {isLoginLoading && <p>Checking </p>}
        {!isLoginLoading && 
        <Fragment>
        <div className="flex justify-center">
          <BsHexagon className="text-6xl text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" >
                Email
              </label>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={e=> setUsername(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={e=> setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"

              >
                Login
              </button>
            </div>
          </div>
        </form>
        </Fragment>
      }
      </div>
    </div>
  );
};

export default Login;
