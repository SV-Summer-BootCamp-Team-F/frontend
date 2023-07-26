import { Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Login/SignupPage";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import RelationPage from "./pages/Relation/RelationPage";
import EnrollPage from "./pages/Card/EnrollPage";
import UserPage from "./pages/User/UserPage";
import TestPage from "./pages/test/TestPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {

return (
    <div>
      <Link to="/">
      <div style={{ position: 'fixed', top: '3%', left: '7%', transform: 'translate(-50%, -50%)',
       color: 'black', fontWeight: 'bolder', fontSize: '1rem', cursor: 'pointer' }}>
        Remember <span style={{ color: 'skyblue' }}>Plus+</span></div>
      </Link>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/relation" element={<RelationPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/Test" element={<TestPage />} />
          </Routes>
    </div>
  );
}

export default App;
