import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const { id, token } = useParams();

  useEffect(() => {
    return async () => {
      if (id && token) {
        const url = `https://pizza-delhivery-api.onrender.com/api/users/${id}/verify/${token}`;
        const { data } = await axios.get(url);
        if (data?.success) {
          alert(data?.message);
          setValidUrl(true);
        } else {
          setValidUrl(false);
        }
      }
    };
  }, [id, token]);

  return (
    <>
      {validUrl ? (
        <div className=" h-screen flex justify-center items-center flex-col relative">
          <h1 className="text-4xl text-green-400">
            Email verified successfully
          </h1>
          <Link to="/login">
            <button className="text-orange-500 px-3 py-2">Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </>
  );
};

export default EmailVerify;
