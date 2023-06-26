
import "./App.css"
import "react-toastify/dist/ReactToastify.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup-signin/Signup";
import Singnin from "./pages/signup-signin/Singnin";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/new-admin" element={ <Signup />} />
        <Route path="/login" element={ <Singnin />} />
      </Routes>
    </div>
  );
}

export default App;
