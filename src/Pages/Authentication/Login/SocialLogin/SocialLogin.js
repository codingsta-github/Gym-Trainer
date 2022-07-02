import React from "react";
import "./SocialLogin.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorMessage;
  if (error) {
    errorMessage = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div className="social-login-container">
      <div className="social-login">
        <div className="div"></div>
        <div>or</div>
        <div className="div"></div>
      </div>
      <div>
        <p>{errorMessage}</p>
        <button onClick={() => signInWithGoogle()}>continue with google</button>
      </div>
    </div>
  );
};

export default SocialLogin;
