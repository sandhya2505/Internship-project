import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UpdateSoon from "./components/updatesoon/UpdateSoon";
import Products from "./components/products/Products";
import Analytics from "./components/analytics/Analytics";
import SignOut from "./components/Signout/SignOut";
import Orders from "./components/orders/Orders";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          {/* <MainDash />
          <RightSide /> */}
          <Routes>
            {/* <Route path="/sideBar" element={<Sidebar />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/updatesoon" element={<UpdateSoon />} />
            <Route path="/products" element={<Products />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/signOut" element={<SignOut />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
