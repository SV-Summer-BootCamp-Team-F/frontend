import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import RelationPage from './pages/Relation/RelationPage';
import EnrollPage from "./pages/Card/EnrollPage";
import UserPage from "./pages/User/UserPage";
import RelationGraph from "./components/relation/RelationGraph.tsx";
import TestPage from "./pages/test/TestPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function App() {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/second" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/relation" element={<RelationPage />} />
        <Route path="/enrollPage" element={<EnrollPage />} />
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/relationGraph" element={<RelationGraph />} />
        <Route path="/Test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
