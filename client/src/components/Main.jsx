import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HeroSection from "./HeroSection";
import PizzaSection from "./PizzaSection";
import WhatWeOfferSection from "./WhatWeOfferSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const Main = () => {
  const userstate = useSelector(state => state.setUserData);
  const user = userstate.userData;
  return (
    <>
      <HeroSection />
      <PizzaSection user={user} />
      <WhatWeOfferSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Main;
