import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route path="/" element={<Explore />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
