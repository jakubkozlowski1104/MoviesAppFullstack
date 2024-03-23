// import { ThemeProvider } from 'styled-components';
// import { GlobalStyle } from '../../assets/styles/GlobalStyle';
// import { theme } from '../../assets/styles/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SignUp from '../../templates/SignUp/SignUp';
import LogIn from '../../templates/LogIn/LogIn';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="user/signup" element={<SignUp />} />
          <Route path="user/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
