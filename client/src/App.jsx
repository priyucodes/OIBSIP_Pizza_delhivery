import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import PizzaSection from "./components/PizzaSection";
import WhatWeOfferSection from "./components/WhatWeOfferSection";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <PizzaSection />
        <WhatWeOfferSection />
        <AboutSection />
        <ContactSection />
      </Layout>
    </>
  );
}

export default App;
