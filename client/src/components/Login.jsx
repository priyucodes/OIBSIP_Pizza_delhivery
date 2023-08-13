import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSignUpChange = ({ currentTarget: input }) => {
    setSignUpData({ ...signUpData, [input.name]: input.value });
  };
  const handleSignUpSubmit = async e => {
    e.preventDefault();
    if (signUpData.password !== confirmPassword) {
      toast("Email or password is incorrect!", {
        icon: "❌",
        style: {
          fontSize: "1.3rem",
        },
      });
    } else if (
      signUpData.password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      toast("Password cannot be empty!", {
        icon: "❌",
        style: {
          fontSize: "1.3rem",
        },
      });
    }
    try {
      const url = "http://localhost:3000/api/users";
      const { data: res } = await axios.post(url, signUpData);

      setMsg(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  const submitHandler = async e => {
    e.preventDefault();

    try {
      const url = "http://localhost:3000/api/auth";
      const res = await axios.post(url, data);
      console.log(res);
      localStorage.setItem("token", res?.data?.data);
      if (res?.data?.user?.role === "admin") {
        // window.location.href = "/admin";
        navigate("/admin");
      } else {
        // window.location.href = "/";
        navigate("/");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    if (data.password.trim() === "") {
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
        <form
          onSubmit={isSignUp ? handleSignUpSubmit : submitHandler}
          className="p-10 space-y-4"
        >
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
              value={isSignUp ? signUpData.email : data.email}
              onChange={isSignUp ? handleSignUpChange : handleChange}
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
              value={isSignUp ? signUpData.password : data.password}
              onChange={isSignUp ? handleSignUpChange : handleChange}
            />
            {!isSignUp && (
              <Link to="/forgot-password">
                <p className="text-black/80 text-sm">
                  <a href="/forgot-password">Forgot your password?</a>
                </p>
              </Link>
            )}
            {/* {error && <div>{toast.error({ error })}</div>} */}
          </div>
          {isSignUp && (
            <>
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
              </div>
              <div className="space-y-2 space-x-8  ">
                <label htmlFor="firstName" className="font-medium text-lg">
                  First Name
                </label>
                <input
                  className="border border-gray-300 rounded-md p-2"
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={signUpData.firstName}
                  onChange={handleSignUpChange}
                />
                <label htmlFor="lastName" className="font-medium text-lg">
                  Last Name
                </label>
                <input
                  className="border border-gray-300 rounded-md p-2"
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={signUpData.lastName}
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="space-y-2 flex flex-col ">
                <label htmlFor="address" className="font-medium text-lg">
                  Address
                </label>
                <input
                  className="border border-gray-300 rounded-md p-2"
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={signUpData.address}
                  onChange={handleSignUpChange}
                />
                <p className="text-black/80 text-sm">
                  <a href="/forgot-password">Forgot your password?</a>
                </p>
              </div>
            </>
          )}
          {error && <div>{error}</div>}
          {msg && <div>{msg}</div>}
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
