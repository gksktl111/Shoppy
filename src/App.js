import './App.css';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
