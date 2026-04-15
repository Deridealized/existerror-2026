import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import HelloWorld from "./pages/HelloWorld/HelloWorld";
import BirdInHand from "./pages/BirdInHand/BirdInHand";
import Deana from "./pages/Deana/Deana";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/helloworld" element={<HelloWorld />} />
      <Route path="/birdinhand" element={<BirdInHand />} />
      <Route path="/deana" element={<Deana />} />
    </Routes>
  );
}

export default App;
