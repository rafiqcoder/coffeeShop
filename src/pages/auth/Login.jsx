import React from "react";
import { Link, Links, useLocation, useNavigate } from "react-router";
import { auth } from "../../../firebase.config";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { DataContext } from "../../contextApi/contextApi";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitted = (data) => {
    setLoading(true);
    console.log("Form submitted with data:", data);

    const { email, password } = data;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User signed in:", user);

        alert("Login successful");
        setLoading(false);
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error during login:", errorCode, errorMessage);

        alert("Login failed");
        setLoading(false);
      });
  };
  const googleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);

        setLoading(false);
        // navigate("/");
        navigate(from, { replace: true });
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
            <form className="fieldset" onSubmit={handleSubmit(submitted)}>
              <label className="label">Email</label>
              <input {...register("email")} className="input" />

              <label className="label">Password</label>
              <input
                type="password"
                {...register("password")}
                className="input"
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
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
