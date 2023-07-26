import { data } from "../data/WhatWeOffer.json";
const WhatWeOfferSection = () => {
  return (
    <section id="about" className=" bg-primary px-6 py-8">
      <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center gap-8">
        <h4 className="text-[60px] md:text-[80px] font-satisfy text-white font-bold">
          What We Offer
        </h4>
        <div className="flex flex-wrap justify-between gap-12 ">
          {data.map(item => (
            <div
              key={item.id}
              id={item.id}
              className="flex justify-center gap-2  items-center  p-6  border rounded-lg shadow-xl cursor-pointer transition-all duration-200 ease-out  bg-white/20 border-gray-700 hover:border-white hover:bg-gray-700 flex-1 md:min-w-[200px] max-w-full"
            >
              <img src={item.icon} className="w-12 h-12 object-contain" />

              <p className="font-bold font-roboto text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhatWeOfferSection;
