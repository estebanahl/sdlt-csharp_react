import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/home/home";
import Login from "./components/Form/Form"
import CrearCuenta from "./components/Form/CrearCuenta";
import RecuperarPassword from "./components/Form/RecuperarPassword";
import Details from "./views/details/details";
import Reservas from "./views/reservas/Reservas";
import MuiThemeProvider from "./theme";
import Dashboard from "./views/admin/dashboard/dashboard";
import AllMenu from "./views/admin/viewMenu/allMenu/allMenu";
import AllUsers from "./views/admin/viewUser/allUser/allUser"
import DetailUser from "./views/admin/viewUser/detailUser/detailUser"
import ModifyMenuForm from "./views/admin/viewEvents/modifyMenuForm/modifyMenuForm";
import DetailMenu from "./views/admin/viewMenu/detailMenu/detailMenu";
import ViewAllEvents from "./views/admin/viewEvents/viewAllEvents/viewAllEvents";
import EventForm from "./views/admin/eventForm/eventForm";
import CategoryForm from "./views/admin/categoyForm/categoryForm";
import MenuForm from "./views/admin/menuForm/menuForm";


function App() {
  return (
    <MuiThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/detalles-pedido" element={<Details />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/allMenu" element={<AllMenu />} />
        <Route path="/admin/allUsers" element={<AllUsers />} />
        <Route path="/admin/detailUser" element={<DetailUser />} />
        <Route path="/admin/modifyMenu" element={<ModifyMenuForm />} />
        <Route path="/admin/menu/:id" element={<DetailMenu />} />
        <Route path="/admin/allEvents" element={<ViewAllEvents />} />
        <Route path="/admin/eventForm" element={<EventForm />} />
        <Route path="admin/createCategory" element={<CategoryForm />} />
        <Route path="admin/createMenu" element={<MenuForm />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </MuiThemeProvider>
  );
}

export default App;