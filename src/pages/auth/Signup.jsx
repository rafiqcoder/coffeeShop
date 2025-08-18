import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="hero min-h-screen w-full">
      <div className="hero-content flex-col w-1/2">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-black">Signup now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md mt-5 shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label  className="label">
                Name
              </label>
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Signup</button>
            </fieldset>
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
