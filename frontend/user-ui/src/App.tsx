import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;