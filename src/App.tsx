import './App.css';
import { SignUp } from './pages/sign-up';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee);

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
