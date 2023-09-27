import { Route, Routes } from 'react-router-dom';
// import ChatPage from './components/ChatPage';
import RegistrationPage from './components/pages/RegistrationPage';
import LoginPage from './components/pages/LoginPage';
import MainPage from './components/pages/MainPage';
function App() {
  return (
    <Routes>
      <Route path="/Chat" element={<MainPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;
