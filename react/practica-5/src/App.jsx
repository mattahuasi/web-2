import "./App.css"; //import "./styles.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}
export default App;
