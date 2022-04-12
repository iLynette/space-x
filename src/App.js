import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rocket';
import MyProfile from './components/MyProfile/MyProfile';
import Dragons from './components/Dragons/Dragons';

const App = () => (
  <Provider store={store}>
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  </div>
  </Provider>
);

export default App;
