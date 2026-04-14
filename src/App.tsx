import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import HelloWorld from "./pages/HelloWorld/HelloWorld";
import BirdInHand from "./pages/BirdInHand/BirdInHand";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/helloworld" element={<HelloWorld />} />
      <Route path="/birdinhand" element={<BirdInHand />} />
    </Routes>
  );
}

export default App;
