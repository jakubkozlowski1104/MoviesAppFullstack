import axios from 'axios';
import SignUp from './templates/SignUp/SignUp';
import LogIn from './templates/LogIn/LogIn';

function App() {
  const response = axios.get('api/users');
  console.log(response);

  return (
    <>
      <p>Hello world!</p>
      <SignUp />
      <LogIn />
    </>
  );
}

export default App;
