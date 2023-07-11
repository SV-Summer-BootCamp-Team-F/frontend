import {Routes, Route} from 'react-router-dom';
import RelationPage from "./pages/Relation/RelationPage.tsx";
import FirstPage from './pages/FirstPage';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import Second from './pages/SecondPage';
import Main from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/second" element={<Second/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path='/relationPage' element={<RelationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
