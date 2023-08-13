import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setUserData } from "./actions/userAction.js";
import "./App.css";

import Layout from "./components/Layout";

import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import Admin from "./components/Admin.jsx";
import Cart from "./components/Cart.jsx";
import EmailVerify from "./components/EmailVerify.jsx";
import Home from "./components/Home.jsx";
import Main from "./components/Main.jsx";
import OrderScreen from "./components/OrderScreen.jsx";
import MyoPizza from "./components/myoPizza.jsx";
import Addbases from "./components/Addbases.jsx";

import Toppingslist from "./components/Toppingslist.jsx";
import Userslist from "./components/Userslist.jsx";
import Orderslist from "./components/Orderslist.jsx";
import Pizzaslist from "./components/Pizzaslist.jsx";
import Baseslist from "./components/Baselist.jsx";
import Addpizza from "./components/Addpizza.jsx";
import Editpizza from "./components/Editpizza.jsx";
import Editbase from "./components/Editbase.jsx";
import Edittopping from "./components/Edittopping.jsx";
import Addtopping from "./components/Addtopping.jsx";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const userstate = useSelector(state => state.setUserData);
  const user = userstate.userData;

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const url =
        "https://pizza-delhivery-api.onrender.com/api/auth/jwt/verify";
      axios
        .get(url, {
          params: {
            token,
          },
        })
        .then(res => {
          if (res.data.success) {
            if (res?.data?.data?.role === "admin") {
              setIsAdmin(true);
            }
            if (res?.data?.userData) {
              dispatch(setUserData(res.data.userData));
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/password-reset/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          {user?.role && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/myoPizza" element={<MyoPizza />} />
              <Route path="/myorders" element={<OrderScreen />} />
            </>
          )}
          {isAdmin && (
            <>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/addpizzas" element={<Addpizza />} />
              <Route path="/admin/userslist" element={<Userslist />} />
              <Route path="/admin/orderslist" element={<Orderslist />} />
              <Route path="/admin/pizzaslist" element={<Pizzaslist />} />
              <Route path="/admin/editpizza/:pizzaid" element={<Editpizza />} />
              <Route path="/admin/baseslist" element={<Baseslist />} />
              <Route path="/admin/addbases" element={<Addbases />} />
              <Route path="/admin/editbase/:baseid" element={<Editbase />} />
              <Route path="/admin/toppingslist" element={<Toppingslist />} />
              <Route path="/admin/addtopping" element={<Addtopping />} />
              <Route
                path="/admin/edittopping/:toppingid"
                element={<Edittopping />}
              />
            </>
          )}
          <Route path="*" element={<Main />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
