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
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3200)
  }, [])
  if (loading) {
    return <Loader />

  }
  return (
    <div className="App">


      <Router>
        <MainMenu />
        <Navbar />
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
