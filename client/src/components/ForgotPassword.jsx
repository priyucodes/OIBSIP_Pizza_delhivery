import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const url = `https://pizza-delhivery-api.onrender.com/api/password-reset`;
      const { data } = await axios.post(url, { email });
      setMsg(data.message);
      toast.success(data.message);
      setError("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
        setMsg("");
      }
    }
  };
  return (
    <div className="bg-login-bg h-screen bg-cover relative">
      <div className="bg-black/30 absolute w-full h-full z-10"></div>
      <div className=" relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 max-w-3xl z-50   bg-red-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
        <h4 className="py-3 text-center font-bold text-3xl text-white bg-primary">
          Forgot Password
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
            <p className="text-black/80 text-sm">
              <a href="/login">Go back to login</a>
            </p>
          </div>

          <button
            type="submit"
            className="bg-primary py-3 px-8 font-bold text-white rounded-md hover:bg-primary/90 transition duration-300 ease-in-out"
          >
            Reset
          </button>
        </form>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};
export default ResetPassword;
