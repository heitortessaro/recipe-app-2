import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div 
      style={{backgroundImage: 'url("https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'}}
      className="bg-no-repeat bg-cover bg-center h-full flex justify-center items-center">
      <div className="card w-80 sm:w-96 bg-orange-100/75 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-2">Page Not Found!</h2>
          <div className="card-actions mt-2 justify-center">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/')}
            >Login Page</button>
          </div>
        </div>
      </div>
    </div>
  );
}