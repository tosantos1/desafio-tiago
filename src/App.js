import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Contato } from './pages/Contato'

import { Routes, Route, Link } from 'react-router-dom';
import './styles/global.scss'
import { HomeContent } from './components/Home';

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  )
}