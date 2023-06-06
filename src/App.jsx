import { Route, Routes, Outlet } from 'react-router-dom'
import './App.css'
import GameCard2 from './components/game-card-db/game-card-db.component'
import Logo from './components/logo/logo.component'
import DiscordDocs from './components/discord-docs/discord-docs.component'

function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<GameCard2 />} />
          <Route path="/discord" element={<DiscordDocs />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App
