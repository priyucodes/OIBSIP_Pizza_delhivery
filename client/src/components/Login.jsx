import { useState } from "react";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);

  const { pathname } = useLocation();

  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast("Password do not match!", {
        icon: "❌",
        style: {
          fontSize: "1.3rem",
        },
      });
    } else if (password.trim() === "" || confirmPassword.trim() === "") {
      toast("Password cannot be empty!", {
        icon: "❌",
        style: {
          fontSize: "1.3rem",
        },
      });
    }
  };
  return (
    <div className="bg-login-bg h-screen bg-cover relative">
      <div className="bg-black/30 absolute w-full h-full z-10"></div>
      <div className=" relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 max-w-3xl z-50   bg-red-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
        <h4 className="py-3 text-center font-bold text-3xl text-white bg-primary">
          {isSignUp ? "Register" : "Login"}
        </h4>
        <form onSubmit={submitHandler} className="p-10 space-y-4">
          <div className="space-y-2 flex flex-col">
            <label htmlFor="email" className="font-medium text-lg">
              Email Address
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex flex-col ">
            <label htmlFor="password" className="font-medium text-lg">
              Password
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {!isSignUp && (
              <p className="text-black/80 text-sm">
                <a href="/reset-password">Forgot your password?</a>
              </p>
            )}
          </div>
          {isSignUp && (
            <div className="space-y-2 flex flex-col ">
              <label htmlFor="password" className="font-medium text-lg">
                Confirm Password
              </label>
              <input
                className="border border-gray-300 rounded-md p-2"
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <p className="text-black/80 text-sm">
                <a href="/reset-password">Forgot your password?</a>
              </p>
            </div>
          )}
          <button
            type="submit"
            className="bg-primary py-3 px-8 font-bold text-white rounded-md hover:bg-primary/90 transition duration-300 ease-in-out"
          >
            Submit
          </button>

          <p
            onClick={() => (isSignUp ? setIsSignUp(false) : setIsSignUp(true))}
            className="text-white cursor-pointer"
          >
            {isSignUp ? "Login here" : "Create a new account"}
          </p>
        </form>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};
export default Login;
