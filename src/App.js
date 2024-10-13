// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CrudApp from './components/CrudApp';
import NewPage from './components/NewPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/NewPage">new page</Link></li>
            {/* 다른 링크들 */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CrudApp />} />
          <Route path="/NewPage" element={<NewPage />}></Route>
          {/* 다른 라우트들 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;