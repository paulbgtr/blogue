import { useState } from "react";
import Link from "next/link";

import { Hero } from "@/components/Hero";

import { supabase } from "@/utils/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: "example@email.com",
      password: "example-password",
    });

    if (error) {
      setIsError(true);
    }
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
              <label className="label">
                <Link
                  href="/password_reset"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>
            New to blogue?{" "}
            <Link className="link" href="/sign_up">
              Create an account
            </Link>
            !
          </p>
          {isError && (
            <p className="text-error">
              There was an error signing in. Please try again.
            </p>
          )}
        </div>
      </div>
    </Hero>
  );
};

export default Login;
