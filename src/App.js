import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import 'react-toastify/dist/ReactToastify.css'
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Category from './pages/Category';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route path="/" element={<Explore />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/category/:categoryName" element={<Category/>}/>
            <Route path="/profile" element={<PrivateRoute />} >
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter >

      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
