import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';
import MyProfile from './components/MyProfile/MyProfile';
import Dragons from './components/Dragons/Dragons';

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  </div>
);

export default App;
