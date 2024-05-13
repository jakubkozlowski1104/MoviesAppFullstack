import Layout from './Layout';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import LogIn from './templates/LogIn/LogIn';
import SignUp from './templates/SignUp/SignUp';
import AdminPanel from './pages/AdminPanel/AdminPanel';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          {/* Dodaj więcej tras */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
