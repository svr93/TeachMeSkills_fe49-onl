import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/sign-up';

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Link to="/sign-up">Go to sign up</Link>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/sign-up-confirmation"
            element={<div>confirmation</div>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default Root;
