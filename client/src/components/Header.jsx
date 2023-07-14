import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useRef } from "react";
const Header = () => {
  const navRef = useRef(null);
  return (
    <header className="px-6 pt-1 flex justify-between shadow-lg items-center font-roboto  h-16 w-full relative z-10">
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
      </div>
      <ul className="hidden gap-20 items-center md:flex">
        <li className="text-white font-bold">
          <a href="#">Login</a>
        </li>
        <li className="relative flex ">
          <ShoppingCartIcon className="w-8 h-8 object-contain text-white" />
          <p className="absolute -right-2 -top-2 bg-red-500 rounded-full w-5 h-5 text-white  text-center flex items-center justify-center">
            0
          </p>
        </li>
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
              <li className="relative">
                <a
                  className=" h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] bg-primary outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                  !text-white motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 font-bold  text-center flex justify-center"
                  data-te-sidenav-link-ref
                >
                  Login
                </a>
              </li>
              <li className="relative mt-6">
                <a
                  className=" h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] bg-primary outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 font-bold text-3xl text-center flex justify-center"
                  data-te-sidenav-link-ref
                >
                  <div className="flex relative">
                    <ShoppingCartIcon className="w-8 h-8 object-contain text-white" />
                    <p className="absolute -right-2 -top-2 bg-red-500 rounded-full w-5 h-5 text-white  text-center flex items-center justify-center">
                      0
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        }
      </div>
    </header>
  );
};
export default Header;
