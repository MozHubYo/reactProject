import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/sidebar';
import Home from './Pages/home/home';
import UserList from './Pages/userlist/userlist';
import User from './Pages/user/user';
import Inventory from './Pages/inventory/inventory';
import ProductList from './Pages/productlist/productList';

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
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
