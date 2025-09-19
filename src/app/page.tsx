'use client';

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/screens/Home';
import Artists from '@/screens/Artists';
import ArtistDetail from '@/screens/ArtistDetail';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<ArtistDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
