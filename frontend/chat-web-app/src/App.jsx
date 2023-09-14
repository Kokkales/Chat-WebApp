import { Route, Routes } from 'react-router-dom';
import ChatPage from './components/ChatPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
