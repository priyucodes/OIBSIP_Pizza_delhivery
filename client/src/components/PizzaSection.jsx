import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Menu from "./Menu";
const PizzaSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <section
      id="pizzas"
      className="max-w-screen-2xl mx-auto bg-white my-4 px-6"
    >
      <div className="flex lg:flex-row gap-6 mb-6 lg:mb-0 lg:gap-0 flex-col justify-between items-center">
        <div className="">
          <h4 className="text-[80px] md:text-[100px]  text-primary font-satisfy font-bold">
            Pizza Specials
          </h4>
          <p className="uppercase text-slate-600 font-bold mt-4">
            Semizza Cheese Pizza With a Drink ₹399 <br />
            <span className="lowercase text-slate-400">
              + ₹50 for Extra Toppings
            </span>
          </p>
          <p className="uppercase text-slate-600 font-bold">
            Black Olive Pizza With a Chocolate Mud Cake ₹549 <br />
            <span className="lowercase text-slate-400">
              + ₹50 for Extra Toppings
            </span>
          </p>
          <p className="uppercase text-slate-600 font-bold text-klg my-4">
            Available MONDAY-FRIDAY 9AM-1PM DINE IN OR TAKEAWAY ORDERS ONLY
          </p>
          <p className="text-[50px] md:text-[70px]  text-primary font-satisfy font-bold ">
            Limited time offer
          </p>
          <button
            onClick={() =>
              isLoggedIn ? (
                <Menu />
              ) : (
                toast.success("Look at my styles.", {
                  style: {
                    border: "1px solid #713200",
                    padding: "16px",
                    color: "#713200",
                  },
                  iconTheme: {
                    primary: "#713200",
                    secondary: "#FFFAEE",
                  },
                })
              )
            }
            className="bg-primary py-3 px-6 uppercase text-white font-bold text-lg mb-4"
          >
            View Our Menu
          </button>
          <p className="text-black font-bold text-sm">
            <span className="text-primary">NOTE:</span> Kindly Login in to order
            from our Menu
          </p>
        </div>
        <div className="w-96 h-96">
          <img
            src="/src/assets/heroBg.jpg"
            alt="pizza"
            className="rounded-full h-full  object-cover "
          />
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </section>
  );
};
export default PizzaSection;
