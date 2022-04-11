import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';
import MyProfile from './components/MyProfile/MyProfile';
import Dragons from './components/Dragons/Dragons';

const App = () => {
  <div className="app">
    <Navbar />;
    <Routes>
      <Route path="/missions" element={<Missions />} />
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/dragons" element={<Dragons />} />
    </Routes>
  </div>;
};

export default App;
