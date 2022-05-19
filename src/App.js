import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/topBar/topBar';
import Sidebar from './components/sidebar/sidebar';
import Home from './Pages/home/home';
import UserList from './Pages/userList/userList';
import User from './Pages/user/user';
import Inventory from './Pages/inventory/inventory';
import ProductList from './Pages/productList/productList';
import Product from './Pages/product/product';

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
          <Route path="/productList" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
