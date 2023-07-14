const HeroSection = () => {
  return (
    <section className="h-[93vh] ">
      {/* // -top-[64px] pt-24 */}
      <div className="bg-hero-bg  bg-cover bg-no-repeat absolute w-screen h-screen top-0 -z-10"></div>
      <div className="bg-black/30 bg-cover bg-no-repeat absolute w-screen h-screen top-0 -z-10"></div>
      <div className="relative flex flex-col gap-4 justify-center items-center h-full">
        <h2 className=" text-[100px] md:text-[120px]  text-white font-satisfy font-bold">
          Pizza
        </h2>

        <p className="text-[50px] sm:text-[80px] md:text-[100px] text-primary uppercase relative -top-10 font-raleway font-bold ">
          DONE RIGHT
        </p>
      </div>
      {/* <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-0 left-1/2 -translate-x-1/2 " /> */}
    </section>
  );
};
export default HeroSection;
