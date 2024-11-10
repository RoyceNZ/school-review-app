import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SchoolsListPage from './SchoolsListPage/SchoolsListPage';
import SchoolDetailPage from './SchoolDetailPage/SchoolDetailPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/schools" element={<SchoolsListPage />} />
          <Route path="/schools/:id" element={<SchoolDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
  );
}

export default App;
