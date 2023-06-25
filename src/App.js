
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from 'react-router-dom';
import { Signin } from './components/pages/singnup-signin/Signin';
import { Signup } from './components/pages/singnup-signin/Signup';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/new-admin' element={<Signup />}/>
        <Route path='/login' element={<Signin />}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
