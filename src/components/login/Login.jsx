import React, { Fragment, useState, useEffect } from "react";
import { BsHexagon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const  navigate = useNavigate();
  const {isLoginLoading, login, isLogged,loginError} = useUser();

  useEffect(()=>{
    if (isLogged) {
      navigate('/')
      window.location.reload()
    }
  },[isLogged,navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({username, password})
    setUsername("");
    setPassword("");
  };

  if (isLoginLoading) return

  return  (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" text-left bg-white shadow-lg mt-4 pb-24 pt-16">
        {loginError &&
              <div className="text-center w-10/12 mx-auto py-5 px-12 mb-8 -mt-4 border-red-200 border-2 text-sm text-red-700 bg-red-100 rounded dark:bg-red-200 dark:text-red-800" role="alert">
                <span className=" font-medium">Error! </span>Incorrect email or password.
              </div>
            }
          <div className="px-28">
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
                  placeholder="Enter your email address"
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
                  placeholder="Enter your password"
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
    </div>
  );
};

export default Login;
