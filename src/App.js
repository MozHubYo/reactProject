import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/sidebar';
import Home from './Pages/home/home';
import UserList from './Pages/userlist/userlist';
import User from './Pages/user/user';

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
