import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {


  return (
    <div className="App">
      <Router>
        <div className="navbar">
        <Link to="/">Home A Page</Link>
        <Link to="/createposts">Create Post</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/createposts" element={<CreatePost />}  />
          <Route path="/post" element={<CreatePost />}  />
          <Route path="/posts/:id" element={<Post />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
