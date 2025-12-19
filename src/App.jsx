import Agenda from "./components/Agenda";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Overview from "./components/Overview";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div>
      <Hero />
      <Overview />
      <Highlights />
      <Agenda />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
