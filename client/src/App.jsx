import "./App.css";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import PizzaSection from "./components/PizzaSection";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <PizzaSection />
      </Layout>
    </>
  );
}

export default App;
