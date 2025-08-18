import React from "react";
import { Link, Links, useNavigate } from "react-router";
import { auth } from "../../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { DataContext } from "../../contextApi/contextApi";

const Login = () => {
  const { setUserData } = React.useContext(DataContext);
  const [loading, setLoading] = React.useState(false);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const googleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setUserData(user);
        setLoading(false);
        navigate("/"); // Redirect to home page after successful login
      })
      .catch((error) => {
        // Handle Errors here.

        console.error("Error during Google login:", error);
        // ...
        setLoading(false);
      });

    // Implement Google login functionality here
    console.log("Google login clicked");
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="hero min-h-screen w-full">
      <div className="hero-content flex-col w-1/2">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-black">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md mt-5 shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div className="divider">OR</div>
            <button
              className="btn btn-outline btn-warning"
              onClick={googleLogin}
            >
              sign in with Google
            </button>
          </div>
          <div className="card-footer">
            <p className="text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="link link-hover text-blue-800 font-bold p-2 border"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
