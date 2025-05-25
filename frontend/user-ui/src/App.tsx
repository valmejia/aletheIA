import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;