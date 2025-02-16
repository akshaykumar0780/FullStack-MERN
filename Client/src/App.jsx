import { Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserDetail from "./components/UserDetails";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser"; 
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/user-detail/:id" element={<UserDetail />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/edit-user/:id" element={<EditUser />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
