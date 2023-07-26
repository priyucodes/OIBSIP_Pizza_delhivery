const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-about-bg bg-cover bg-no-repeat py-8 min-h-[51vh]  flex justify-center items-center relative overflow-hidden bg-bottom  bg-fixed"
    >
      <div className="absolute w-full h-full bg-black/50 z-0" />
      <div className="max-w-screen-2xl mx-auto flex flex-col justify-between  items-center gap-12 px-6 relative z-50">
        <h4 className="text-white font-bold font-satisfy text-[60px] md:text-[80px] ">
          About us
        </h4>
        <p className="text-white text-lg mb-4">
          Welcome to Pizza Delhivery, where taste and convenience meet! We are a
          premier pizza delivery service, dedicated to serving the freshest and
          most delicious pizzas right to your doorstep. With our wide range of
          mouthwatering toppings and signature sauces, we guarantee a delightful
          culinary experience. Our team of passionate chefs and dedicated
          delivery experts work together to bring you the perfect pizza, made
          with love and delivered with care. Trust Pizza Delhivery for a slice
          of happiness, every time!
        </p>
      </div>
    </section>
  );
};
export default AboutSection;
