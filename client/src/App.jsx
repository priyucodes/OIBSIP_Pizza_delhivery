import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import PizzaSection from "./components/PizzaSection";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <PizzaSection />
        <AboutSection />
        <ContactSection />
      </Layout>
    </>
  );
}

export default App;
