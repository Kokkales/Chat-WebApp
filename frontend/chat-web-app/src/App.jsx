import { Route, Routes } from 'react-router-dom';
// import ChatPage from './components/ChatPage';
import RegistrationPage from './components/pages/RegistrationPage';
import LoginPage from './components/pages/LoginPage';
import MainPage from './components/pages/MainPage';
import AddFriendPage from './components/pages/AddFriendPage';
import ProfilePage from './components/pages/ProfilePage';
import InfoPage from './components/pages/InfoPage';
function App() {
  return (
    <Routes>
      <Route path="/Chat" element={<MainPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path='/addfriend' element={<AddFriendPage />}/>
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/info' element={<InfoPage/> } />

    </Routes>
  );
}

export default App;
