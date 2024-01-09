import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Support from "./components/Support";
import Feature from "./components/Feature";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Support />
      <Feature />
      <Feedback />
      <Contact />
      <Footer />

      <TopButton />
    </>
  );
}

export default App;
