import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import generateToken from '../helpers/generateToken';
import { setUserInfo } from '../Redux/features/userSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [loginBtn, setLoginBtn] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validLogin = () => {
    // regex from https://regexr.com/3e48o
    const reEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const minLength = 6;
    setLoginBtn(() => false);
    if (email.match(reEmail) && password.length >= minLength) {
      setLoginBtn(() => true);
    }
  };

  useEffect(() => {
    validLogin();
  }, [email, password]);

  const handleLogin = () => {
    const tokenSize = 7;
    const mealsToken = generateToken(tokenSize);
    const cocktailsToken = generateToken(tokenSize);
    dispatch(setUserInfo({email, mealsToken, cocktailsToken}));
    navigate('/foods');
  }

  return (
    <div 
      style={{backgroundImage: 'url("https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'}}
      className="bg-no-repeat bg-cover bg-center h-full flex justify-center items-center">
      <div className="card w-80 sm:w-96 bg-orange-100/75 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-2">Login</h2>
          <div className="form-control">
            <input
              onChange={({ target }) => setEmail(() => target.value)}
              value={email}
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs" />
          </div>
          <div className="form-control">
            <input
              onChange={({ target }) => setPassword(() => target.value)}
              value={password}
              type="password"
              placeholder="Senha"
              className="input input-bordered input-primary w-full max-w-xs" />
          </div>
          <div className="card-actions mt-2 justify-center">
            <button 
              className="btn btn-primary"
              disabled={!loginBtn}
              onClick={() => handleLogin()}
            >Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
