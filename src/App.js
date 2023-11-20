import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { Admin } from './components/Admin/Admin';
import { Shop } from './components/Shop/Shop';
import { Order } from './components/Orders/Order';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/corsine' element={<Order />} />
        <Route path='/wine/italy' element={<Shop marketName='italy'/>}/>
        <Route path='/wine/spain' element={<Shop marketName='spain'/>}/>
        <Route path='/wine/france' element={<Shop marketName='france'/>}/>
      </Routes>
    </Router>
  );
}

export default App;
