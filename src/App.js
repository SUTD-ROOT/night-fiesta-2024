import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Main from './pages/Main';
import Team from './pages/Team';
import MainMenu from './components/MainMenu';
import Navbar from './components/Navbar';
import EventMap from './pages/EventMap';
import Schedule from './pages/Schedule';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Navbar />

      <Router>
        <Routes>
          <Route
            path="/"
            element={<Main />} />
          <Route
            path="/team"
            element={<Team />} />
          <Route
            path="/event-map"
            element={<EventMap />} />
          <Route
            path="/schedule"
            element={<Schedule />} />
          <Route
            path="/quiz"
            element={<Quiz />} />
          <Route
            path="/leaderboard"
            element={<Leaderboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
