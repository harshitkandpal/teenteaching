import './App.css';
import Navbar from './components/navbar/navbar.jsx'; // Corrected import statement
import Home from "./components/home/home";
import About from "./components/about/about";
import LoginForm from "./components/login/login.jsx";
import Chat from "./components/chat/chat";
import Live from "./components/live/live";
import ProfileUpdate from "./components/profile/profile";
import CourseDetails from "./components/aboutCourse/aboutCourse";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
          <Route path="/aboutCourse" element={<CourseDetails />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Live" element={<Live />} />
          <Route path="/ProfileUpdate" element={<ProfileUpdate />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

