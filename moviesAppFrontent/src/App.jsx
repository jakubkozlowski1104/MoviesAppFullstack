import axios from 'axios';
import SignUp from './templates/SignUp/SignUp';

function App() {
  const response = axios.get('http://localhost:8080/users');
  console.log(response);

  return (
    <>
      <p>Hello world!</p>
      <SignUp />
    </>
  );
}

export default App;
