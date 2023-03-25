import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Gym/Home";
import MyAccount from "./Gym/MyAccount";
import ShoppingCart from "./Gym/ShoppingCart";
import SupplementsStore from "./Gym/SupplementsStore";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNev";


function App() {
  return (
    <BrowserRouter>
      <TopNav/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register" Component={Register} />
        <Route path="/MyAccount" Component={MyAccount} />
        <Route path="/ShoppingCart" Component={ShoppingCart} />
        <Route path="/SupplementsStore" Component={SupplementsStore} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
