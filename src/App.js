import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home.js'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Profile from './Profile.js'
import About from './About.js'
import Services from './Services.js'
import Samples from './Samples.js'
import Blog from './Blog.js'
import Contact from './Contact.js'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
