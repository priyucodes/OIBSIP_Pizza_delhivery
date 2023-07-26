import { useEffect, useState } from "react";
import { data } from "../data/Menu.json";

const Menu = ({ isLoggedIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionSauce, setSelectedOptionSauce] = useState(null);
  const [selectedOptionCheese, setSelectedOptionCheese] = useState(null);
  const [selectedOptionVeggies, setSelectedOptionVeggies] = useState([]);
  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    const updateIngredients = () => {
      setIngredients({
        base: selectedOption,
        sauce: selectedOptionSauce,
        cheese: selectedOptionCheese,
        veggies: selectedOptionVeggies,
      });
    };
    updateIngredients();
  }, [
    selectedOption,
    selectedOptionSauce,
    selectedOptionCheese,
    selectedOptionVeggies,
  ]);

  console.log(ingredients);
  const handleCheckbox = option => {
    setSelectedOption(option);
  };
  const handleSauceCheckbox = option => {
    setSelectedOptionSauce(option);
  };
  const handleCheeseCheckbox = option => {
    setSelectedOptionCheese(option);
  };
  const handleVeggiesCheckbox = e => {
    // setSelectedOptionVeggies();
    // add new item to the state array but check if it alrdy exists if it does then remove it
    if (selectedOptionVeggies.includes(e.target.id)) {
      setSelectedOptionVeggies(prev =>
        prev.filter(item => item !== e.target.id)
      );
    } else {
      setSelectedOptionVeggies(prev => [...prev, e.target.id]);
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [isModalOpen]);
  return (
    <div className="grid md:grid-cols-2  lg:grid-cols-3 grid-flow-row justify-center items-center mx-auto max-w-screen-2xl my-12 gap-8">
      {data.map((item, index) => (
        <div
          key={item.id + index}
          className=" flex   w-full gap-8  md:gap-2 xl:gap-6 h-[150px] lg:h-[160px]"
        >
          <img
            src={item.img}
            alt="Pizza"
            className="object-cover w-[160px]   "
          />
          <div className="flex flex-col gap-[9.5px] md:gap-[0px] xl:gap-2 xl:justify-center">
            <h6 className="font-bold text-lg lg:text-xl xl:whitespace-nowrap">
              {item.name}
            </h6>
            <p
              onClick={() => (item.custom ? setIsModalOpen(true) : null)}
              className={`italic text-xs lg:text-sm font-light ${
                item.custom ? "cursor-pointer" : ""
              }`}
            >
              {item.ingrediants}
            </p>
            <p className="text-primary font-semibold">₹{item.price}</p>
            <button
              disabled={!isLoggedIn}
              className={`py-2 px-5 font-bold disabled:bg-gray-700 disabled:text-white bg-primary text-white w-fit`}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50  py-10 ">
          <div className="max-h-full w-full max-w-4xl overflow-y-auto sm:rounded-2xl bg-white">
            <div className="w-full px-2 lg:px-0 overflow-x-hidden">
              <div className="m-8 my-10 max-w-[750px] mx-auto">
                <div className="mb-4">
                  <h1 className="mb-4 text-3xl font-extrabold">
                    Add ingredients
                  </h1>
                  <p className="text-gray-600">
                    Add extra toppings according to your taste
                  </p>
                </div>
                <div className="mb-4 ">
                  <ul className="flex flex-col">
                    <li className="flex items-start flex-col lg:flex-row lg:items-center ">
                      <span className="mr-4 text-primary  ">Pizza Base:</span>
                      <div className="relative left-2">
                        <input
                          className="accent-primary"
                          type="checkbox"
                          id="base1"
                          value=""
                          checked={selectedOption === "base1"}
                          onChange={() => handleCheckbox("base1")}
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="base1"
                        >
                          Chef Special
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOption === "base2"}
                          onChange={() => handleCheckbox("base2")}
                          type="checkbox"
                          id="base2"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="base2"
                        >
                          Thin Crust
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOption === "base3"}
                          onChange={() => handleCheckbox("base3")}
                          type="checkbox"
                          id="base3"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="base3"
                        >
                          Thick Crust
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOption === "base4"}
                          onChange={() => handleCheckbox("base4")}
                          type="checkbox"
                          id="base4"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="base4"
                        >
                          Cheese Burst
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOption === "base5"}
                          onChange={() => handleCheckbox("base5")}
                          type="checkbox"
                          id="base5"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="base5"
                        >
                          Pan-made
                        </label>
                      </div>
                    </li>
                    <li className="flex items-start flex-col lg:flex-row lg:items-center mt-2 max-w-[700px]">
                      <span className="mr-4 text-primary  "> Pizza Sauce:</span>
                      <div className="relative left-2 lg:left-0 lg:static">
                        <input
                          className="accent-primary"
                          checked={selectedOptionSauce === "sauce1"}
                          onClick={() => handleSauceCheckbox("sauce1")}
                          type="checkbox"
                          id="sauce1"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="sauce1"
                        >
                          Chef Special
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOptionSauce === "sauce2"}
                          onClick={() => handleSauceCheckbox("sauce2")}
                          type="checkbox"
                          id="sauce2"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="sauce2"
                        >
                          Marinara
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOptionSauce === "sauce3"}
                          onClick={() => handleSauceCheckbox("sauce3")}
                          type="checkbox"
                          id="sauce3"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="sauce3"
                        >
                          Spicy Red
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOptionSauce === "sauce4"}
                          onClick={() => handleSauceCheckbox("sauce4")}
                          type="checkbox"
                          id="sauce4"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="sauce4"
                        >
                          BBQ
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOptionSauce === "sauce5"}
                          onClick={() => handleSauceCheckbox("sauce5")}
                          type="checkbox"
                          id="sauce5"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="sauce5"
                        >
                          Pesto
                        </label>
                      </div>
                    </li>
                    <li className="flex items-start flex-col lg:flex-row lg:items-center mt-2 max-w-[700px]">
                      <span className="mr-4 text-primary  ">Cheese Type:</span>
                      <div className="relative left-[9px] lg:-left-[3px]">
                        <input
                          className="accent-primary"
                          checked={selectedOptionCheese === "cheese1"}
                          onClick={() => handleCheeseCheckbox("cheese1")}
                          type="checkbox"
                          id="cheese1"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="cheese1"
                        >
                          Mozzarella
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOptionCheese === "cheese2"}
                          onClick={() => handleCheeseCheckbox("cheese2")}
                          type="checkbox"
                          id="cheese2"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="cheese2"
                        >
                          Cheddar
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOptionCheese === "cheese3"}
                          onClick={() => handleCheeseCheckbox("cheese3")}
                          type="checkbox"
                          id="cheese3"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="cheese3"
                        >
                          Parmesan
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOptionCheese === "cheese4"}
                          onClick={() => handleCheeseCheckbox("cheese4")}
                          type="checkbox"
                          id="cheese4"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="cheese4"
                        >
                          Ricotta
                        </label>
                        <input
                          className="accent-primary"
                          checked={selectedOptionCheese === "cheese5"}
                          onClick={() => handleCheeseCheckbox("cheese5")}
                          type="checkbox"
                          id="cheese5"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="cheese5"
                        >
                          Goat
                        </label>
                      </div>
                    </li>
                    <li className="flex items-start flex-col lg:flex-row lg:items-center mt-2 max-w-[700px]">
                      <span className="mr-4 text-primary  ">
                        Extra Veggies:
                      </span>
                      <div className="relative left-[10px] lg:-left-[9px]">
                        <input
                          className="accent-primary"
                          onChange={handleVeggiesCheckbox}
                          type="checkbox"
                          id="veggies1"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="veggies1"
                        >
                          Red Pepper
                        </label>
                        <input
                          className="accent-primary"
                          onChange={handleVeggiesCheckbox}
                          type="checkbox"
                          id="veggies2"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="veggies2"
                        >
                          Tomato
                        </label>
                        <input
                          className="accent-primary"
                          onChange={handleVeggiesCheckbox}
                          type="checkbox"
                          id="veggies3"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="veggies3"
                        >
                          Onion
                        </label>
                        <input
                          className="accent-primary"
                          onChange={handleVeggiesCheckbox}
                          type="checkbox"
                          id="veggies4"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="veggies4"
                        >
                          Garlic
                        </label>
                        <input
                          className="accent-primary"
                          onChange={handleVeggiesCheckbox}
                          type="checkbox"
                          id="veggies5"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="veggies5"
                        >
                          Black Olives
                        </label>
                        <input
                          className="accent-primary"
                          onChange={handleVeggiesCheckbox}
                          type="checkbox"
                          id="veggies6"
                          value=""
                        />{" "}
                        <label
                          className="inline-block pl-[0.35rem] hover:cursor-pointer mr-4 text-sm"
                          htmlFor="veggies6"
                        >
                          Pineapple
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4 mt-8">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                    className="p-3 bg-black rounded-full text-white w-full font-semibold"
                  >
                    Finish Customizing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Menu;
