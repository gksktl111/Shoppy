import './App.css';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './Components/Context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
