import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import HelloWorld from "./pages/HelloWorld/HelloWorld";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/helloworld" element={<HelloWorld />} />
    </Routes>
  );
}

export default App;
