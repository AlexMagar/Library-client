
import "./App.css"
import "react-toastify/dist/ReactToastify.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup-signin/Signup";
import Singnin from "./pages/signup-signin/Singnin";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";
import {PrivateRoute} from "./components/private-route/PrivateRoute";
import { BurrowHistory } from "./pages/burrow-history/BurrowHistory";
import { Books } from "./pages/books/Books";
import { Profile } from "./pages/profile/Profile";
import { Students } from "./pages/students/Students";
import { NewBookForm } from "./components/book-com/NewBookForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBookAction } from "./pages/books/bookAction";
import { EditBookForm } from "./components/book-com/EditBookForm";

function App() {

  const dispatch = useDispatch();

  //fetch the book
  useEffect(() => {
    dispatch(fetchBookAction());
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/login" element={ <Singnin />} />

        {/* // private routes? */}
        <Route path="/new-admin" element={<Signup /> } />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute> } />
        <Route path="/students" element={<PrivateRoute><Students />  </PrivateRoute> } />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute> } />
        <Route path="/books" element={<PrivateRoute><Books /></PrivateRoute> } />
        <Route path="/books/new" element={<PrivateRoute> <NewBookForm /> </PrivateRoute> } />
        <Route path="/books/edit/:_id" element={<PrivateRoute> <EditBookForm /> </PrivateRoute> } />
        <Route path="/burrow-history" element={<PrivateRoute><BurrowHistory /></PrivateRoute> } />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
