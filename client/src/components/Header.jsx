import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const navRef = useRef(null);
  const cartstate = useSelector(state => state.cart);
  function handleLogout() {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("token");
    window.location.replace("/");
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userstate = useSelector(state => state.setUserData);
  const user = userstate.userData;
  const token = localStorage.getItem("token");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  useEffect(() => {
    if (user.email) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user, isLoggedIn, setIsLoggedIn]);

  return (
    <header
      className={`px-6 transition-all duration-500 flex justify-between shadow-sm bg-primary/30 items-center font-roboto  h-20 w-full sticky ${
        visible ? "top-0 opacity-100" : "opacity-0"
      } z-10 `}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between  font-roboto   w-full ">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <img
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="object-contain "
            />
            <h1 className="font-raleway font-extrabold text-3xl text-primary">
              Pizza Delhivery
            </h1>
          </div>{" "}
        </Link>
        <ul className="hidden gap-20 items-center md:flex">
          {(!isLoggedIn || !user.email || !token) && (
            <Link to="/login">
              <li className="text-white font-bold">Login</li>
            </Link>
          )}
          <li className="text-white font-bold">
            <a href="#pizzas">Pizza&apos;s</a>
          </li>
          <li className="text-white font-bold">
            <a href="#about">About</a>
          </li>
          <li className="text-white font-bold">
            <a href="#contact">Contact</a>
          </li>
          {isLoggedIn && (
            <Link to="/cart">
              <li className="relative flex ">
                <ShoppingCartIcon className="w-8 h-8 object-contain text-white" />
                <p className="absolute -right-2 -top-2 bg-red-500 rounded-full w-5 h-5 text-white  text-center flex items-center justify-center">
                  {cartstate?.cartItems?.length || 0}
                </p>
              </li>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="myorders">
              <li className="relative flex text-white cursor-pointer">
                My Orders
              </li>{" "}
            </Link>
          )}
          {isLoggedIn && (
            <li
              onClick={handleLogout}
              className="relative flex text-white cursor-pointer"
            >
              Logout
            </li>
          )}
        </ul>
        <div className="md:hidden flex flex-col">
          <Bars3Icon
            onClick={() => {
              navRef.current.dataset.teSidenavHidden = false;
            }}
            className="text-white w-8 h-8 cursor-pointer transition duration-150 ease-in-out"
            data-te-sidenav-toggle-ref
            data-te-target="#sidenav-7"
            aria-controls="#sidenav-7"
            aria-haspopup="true"
          />
          {
            <nav
              ref={navRef}
              id="sidenav-7"
              className="fixed transition-all duration-500 right-0 top-0 z-[1035] h-screen w-60 translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:-translate-x-0 dark:bg-zinc-800"
              data-te-sidenav-init
              data-te-sidenav-hidden="true"
              data-te-sidenav-right="true"
            >
              <ul
                className="relative m-0 list-none px-[0.2rem]"
                data-te-sidenav-menu-ref
              >
                <li className="relative w-full h-8 my-5 ">
                  <Bars3Icon
                    onClick={() => {
                      navRef.current.dataset.teSidenavHidden = true;
                    }}
                    className="text-white w-8 h-8 cursor-pointer mx-6 absolute right-0 transition duration-150 ease-in-out"
                    data-te-sidenav-toggle-ref
                    data-te-target="#sidenav-7"
                    aria-controls="#sidenav-7"
                    aria-haspopup="true"
                  />
                </li>
                {!isLoggedIn ? (
                  <li className="relative">
                    <a
                      className=" h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] bg-primary outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                  !text-white motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 font-bold  text-center flex justify-center"
                      data-te-sidenav-link-ref
                    >
                      Login
                    </a>
                  </li>
                ) : (
                  <li
                    onClick={handleLogout}
                    className="cursor-pointer text-white text-center "
                  >
                    Logout
                  </li>
                )}
                <li className="relative mt-6">
                  <a
                    className=" h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] bg-primary outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 font-bold text-3xl text-center flex justify-center"
                    data-te-sidenav-link-ref
                  >
                    {isLoggedIn && (
                      <Link to="/cart">
                        <div className="flex relative">
                          <ShoppingCartIcon className="w-8 h-8 object-contain text-white" />
                          <p className="absolute -right-2 -top-2 bg-red-500 rounded-full w-5 h-5 text-white  text-center flex items-center justify-center">
                            {cartstate?.cartItems?.length || 0}
                          </p>
                        </div>{" "}
                      </Link>
                    )}
                  </a>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  );
};
export default Header;
