import Layout from './Layout';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './templates/LogIn/LogIn';
import SignUp from './templates/SignUp/SignUp';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Movie from './pages/Movie/Movie';
import MyMovies from './pages/MyMovies/MyMovies';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<MyMovies />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/settings" element={<Settings />} />
          {/* Dodaj więcej tras */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
