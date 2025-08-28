import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { auth } from "../../../firebase.config";

const Signup = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitData = (data) => {
    console.log("Form submitted with data:", data);
    const { fullName, email, password } = data;
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User signed up:", user);

        if (user && user.uid) {
          updateProfile(auth.currentUser, {
            displayName: fullName,
          })
            .then(() => {
              // Profile updated!
              // ...
              alert("Profile updated successfully");
              setLoading(false);
              navigate("/");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setLoading(false);
            });
        }

        // Redirect to home or another page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during signup:", errorCode, errorMessage);
        setLoading(false);
        // ..
      });
    // Here you would typically handle the signup logic, e.g., calling an API
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="hero min-h-screen w-full">
      <div className="hero-content flex-col w-1/2">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-black">Signup now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md mt-5 shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={handleSubmit(submitData)}>
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                {...register("fullName")}
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                {...register("email")}
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                {...register("password")}
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4" type="submit">
                Signup
              </button>
            </form>
            <div className="divider">OR</div>
            <button className="btn btn-outline btn-warning">
              Sign in with Google
            </button>
          </div>
          <div className="card-footer">
            <p className="text-center">
              have an account?{" "}
              <Link
                to="/login"
                className="link link-hover text-blue-800 font-bold p-2 border"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
