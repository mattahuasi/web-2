import { Route, Routes } from "react-router";
import About from "./pages/About";
import Destinies from "./pages/Destinies";
import Destiny from "./pages/Destiny";
import Flags from "./pages/Flags";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinies" element={<Destinies />} />
      <Route path="/destiny/:name" element={<Destiny />} />
      <Route path="/flags" element={<Flags />} />
      <Route path="/about" element={<About />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
