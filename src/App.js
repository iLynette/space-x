import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rocket';
import MyProfile from './components/MyProfile/MyProfile';
import Dragons from './components/Dragons/Dragons';
import configureStore from './redux/configureStore';

const App = () => (
  <div className="app">
    <Navbar />
    <Provider store={configureStore}>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Provider>
  </div>
);

export default App;
