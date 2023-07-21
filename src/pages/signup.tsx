import { useState } from "react";
import Link from "next/link";

import { Hero } from "@/components/Hero";

import { supabase } from "@/utils/supabase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log([email, password]);

    error ? setIsError(true) : setIsSuccess(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <Hero>
      <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <Link className="link" href="/login">
              Login
            </Link>
            !
          </p>
          {isError && (
            <p className="mt-4 text-xs text-red-500">
              There was an error signing up. Please try again.
            </p>
          )}
          {isSuccess && (
            <p className="mt-4 text-xs text-green-500">
              You have successfully signed up! Please check your email to
              confirm your account.
            </p>
          )}
        </div>
      </div>
    </Hero>
  );
};

export default SignUp;
