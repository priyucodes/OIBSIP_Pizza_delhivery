import axios from "axios";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const param = useParams();
  const url = `http://localhost:3000/api/password-reset/${param.id}/${param.token}`;
  console.log(param.id);
  useEffect(() => {
    const verifyUrl = async () => {
      console.log(await axios.get(url));
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param, url]);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, { password });
      setMsg(data.message);
      setError("");
      window.location = "/login";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };
  return (
    <>
      {validUrl ? (
        <div className="bg-login-bg h-screen bg-cover relative">
          <div className="bg-black/30 absolute w-full h-full z-10"></div>
          <div className=" relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 max-w-3xl z-50   bg-red-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
            <h4 className="py-3 text-center font-bold text-3xl text-white bg-primary">
              Forgot Password
            </h4>
            <form onSubmit={handleSubmit} className="p-10 space-y-4">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="email" className="font-medium text-lg">
                  Enter New Password
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
              </div>

              <button
                type="submit"
                className="bg-primary py-3 px-8 font-bold text-white rounded-md hover:bg-primary/90 transition duration-300 ease-in-out"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
      <Toaster position="bottom-center" />
    </>
  );
};
export default ResetPassword;
