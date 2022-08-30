import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact"
import UserLogin from "./component/user_login";
import AdminLogin from "./component/a_login";
import Item from "./component/item";
import Cart from "./component/cart";
import Pay from "./component/pay";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes className="linksRoute">
            <Route exact path='/' element={< Home/>}></Route>
            <Route exact path='/item/:ID' element={< Item/>}></Route>
            <Route exact path='/cart' element={< Cart/>}></Route>
            <Route exact path='/pay' element={< Pay/>}></Route>
            <Route exact path='/about' element={< About/>}></Route>
            <Route exact path='/contact' element={< Contact/>}></Route>
            <Route exact path='/login' element={<UserLogin/>}></Route>
            <Route exact path='/admin/login' element={<AdminLogin/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
