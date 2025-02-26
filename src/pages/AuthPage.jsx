import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation, useLoginUserMutation } from "../redux/authApi";
import { setUser } from "../redux/authSlice";
import "../css/Auth.css"; 
import { updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig"; 
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const AuthPage = ({colorPage}) => {
  const [isRegistering, setIsRegistering] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [registerUser, { isLoading: registering, error: registerError }] = useRegisterUserMutation();
  const [loginUser, { isLoading: loggingIn, error: loginError }] = useLoginUserMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username ? form.username.value : null;
    const email = form.email.value;
    const password = form.password.value;
  
    if (isRegistering) {
      const response = await registerUser({ email, password });
      if (response.data) {
        await updateProfile(auth.currentUser, { displayName: username }); 
        await auth.currentUser.reload(); 
        
        dispatch(setUser({
          uid: auth.currentUser.uid,
          email: auth.currentUser.email,
          displayName: auth.currentUser.displayName,
        }));
        setIsRegistering(false);
      }
    }
    else {
      const response = await loginUser({ email, password });
      if (response.data) {
        dispatch(setUser({
          uid: response.data.uid,
          email: response.data.email,
          displayName: response.data.displayName || "Anonymous",
        }));
        navigate("/"); 
      }
        }
    };

  return (
    <div className={`container ${isRegistering ? "active" : ""} shadow-md shadow-purple-500 bg-purple-100`}>
      {/* Login Form */}
      <div className="form-box login bg-purple-100">
        <form onSubmit={handleSubmit}>
          <h1 className="text-purple-950">Login</h1>
          <div className="input-box">
            <input className="bg-purple-200 text-purple-950" type="email" name="email" placeholder="Email" required />
            <i className="bx bxs-user text-purple-950"></i>
          </div>
          <div className="input-box">
            <input className="bg-purple-200 text-purple-950"  type="password" name="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt text-purple-950"></i>
          </div>
          <div className="forgot-link">
            <a className="text-purple-700" href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn bg-purple-700 transition-all duration-300 transform hover:scale-105" disabled={loggingIn}>
            {loggingIn ? "Logging in..." : "Login"}
          </button>
          {loginError && <p className="error-text">{loginError.data}</p>}
          <p className="text-purple-800">or login with social platforms</p>

          <div className="social-icons">
            <a className="border border-black bg-white text-red-600 hover:bg-red-600 hover:text-white transition-all ease-in-out duration-500" href="#"><FaGoogle /></a>
            <a className="border border-black bg-white text-blue-700 hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-500" href="#"><FaFacebook /></a>
            <a className="border border-black bg-white text-black hover:bg-black hover:text-white transition-all ease-in-out duration-500" href="#"><FaGithub /></a>
            <a className="border border-black bg-white text-blue-700 hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-500" href="#"><FaLinkedin /></a>
          </div>

        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register bg-purple-100">
        <form onSubmit={handleSubmit}>
          <h1 className="text-purple-950">Registration</h1>
          <div className="input-box">
            <input className="bg-purple-200 text-purple-950" type="text" name="username" placeholder="Username" required />
            <i className="bx bxs-user text-purple-950"></i>
          </div>
          <div className="input-box">
            <input className="bg-purple-200 text-purple-950" type="email" name="email" placeholder="Email" required />
            <i className="bx bxs-envelope text-purple-950"></i>
          </div>
          <div className="input-box">
            <input className="bg-purple-200 text-purple-950" type="password" name="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt text-purple-950"></i> 
          </div>
          <button type="submit" className="btn bg-purple-700 transition-all duration-300 transform hover:scale-105" disabled={registering}>
            {registering ? "Registering..." : "Register"}
          </button>
          {registerError && <p className="error-text">{registerError.data}</p>}
          <p className="text-purple-700">or register with social platforms</p>
          <div className="social-icons">
            <a className="border border-black bg-white text-red-600 hover:bg-red-600 hover:text-white transition-all ease-in-out duration-500" href="#"><FaGoogle /></a>
            <a className="border border-black bg-white text-blue-700 hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-500" href="#"><FaFacebook /></a>
            <a className="border border-black bg-white text-black hover:bg-black hover:text-white transition-all ease-in-out duration-500" href="#"><FaGithub /></a>
            <a className="border border-black bg-white text-blue-700 hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-500" href="#"><FaLinkedin /></a>
          </div>
        </form>
      </div>

      {/* Toggle Panel */}
      <div className="toggle-box before:bg-purple-700">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don`t have an account?</p>
          <button className="btn register-btn" onClick={() => setIsRegistering(true)}>
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={() => setIsRegistering(false)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
