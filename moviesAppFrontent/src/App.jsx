import Layout from './Layout';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import LogIn from './templates/LogIn/LogIn';
import SignUp from './templates/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile" component={LogIn} />
          <Route path="/profile" component={SignUp} />
          {/* Dodaj więcej tras */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
