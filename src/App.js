
import "./App.css"
import "react-toastify/dist/ReactToastify.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup-signin/Signup";
import Singnin from "./pages/signup-signin/Singnin";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";
import {PrivateRoute} from "./components/private-route/PrivateRoute";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/login" element={ <Singnin />} />

        {/* // private routes? */}
        <Route path="/new-admin" element={ <PrivateRoute><Signup /></PrivateRoute> } />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute> } />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
