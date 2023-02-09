import { BrowserRouter,Route, Routes } from "react-router-dom"
import Signup from "./Components/signup/signup"
import Login from "./Components/login/login"
import { Provider } from "react-redux"
import myStore from "./store/store"
import Dashboard from "./Components/dashboard/dashboard"
import Home from "./Components/Home/Home"
import AdminDashboard from "./Components/admin/dashboard/AdminDashboard"
import AddProduct from "./Components/admin/AddProduct/AddProduct"
import ContactUs from "./Components/Contact us/ContactUs"
function App() {
  return <BrowserRouter>
    <Provider store={myStore}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:id" element={<Login />} />

        <Route path="/sign-up" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />}>
        </Route>
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/ContactUs" element={<ContactUs />} />



      </Routes>
    </Provider>
  </BrowserRouter>
}
export default App
