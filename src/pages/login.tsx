import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Hero } from "@/components/Hero";

import { supabase } from "@/utils/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setIsError(true);

    if (data) {
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <Hero>
      {isSuccess ? (
        <>
          <h1 className="text-3xl font-bold">Success!</h1>
          <p className="mt-4">You have been signed in.</p>
          <p>You are going to be redirected to the dashboard in a moment.</p>
        </>
      ) : (
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
              <Link className="link" href="/signup">
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
      )}
    </Hero>
  );
};

export default Login;
