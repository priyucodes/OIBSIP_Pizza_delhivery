import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store";

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/forgot-password",
//     element: <ForgotPassword />,
//   },
//   {
//     path: "/password-reset/:id/:token",
//     element: <ResetPassword />,
//   },
//   {
//     path: "/admin",
//     element: <Admin />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
