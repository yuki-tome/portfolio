import React from 'react' 
import './App.css';
import BlogPage from './componets/BlogPage';
import Header from './componets/Header';
import HomePage from './componets/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SkillListPage from './componets/SkillListPage';
import SnsPage from './componets/SnsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sns" element={<SnsPage/>} />
          <Route path="/skill-list" element={<SkillListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
