import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Portfolio from './pages/Portfolio';
import WorkDetail from './pages/WorkDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:projectSlug" element={<WorkDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
