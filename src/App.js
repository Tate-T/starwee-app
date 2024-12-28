import './App.css';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { OwnerPage } from './pages/OwnerPage/OwnerPage.jsx';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/owner" element={<OwnerPage />} />
      </Routes>
    </div>
  )
}

