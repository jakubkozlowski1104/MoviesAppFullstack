import axios from 'axios';
import SignUp from './templates/SignUp/SignUp';

function App() {
  const response = axios.get('api/users');
  console.log(response);

  return (
    <>
      <p>Hello world!</p>
      <SignUp />
    </>
  );
}

export default App;
