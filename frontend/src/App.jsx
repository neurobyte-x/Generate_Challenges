import './App.css'
import ClerkProviderWithRoutes  from './auth/ClerkProviderWithRoutes'
import { Routes, Route } from 'react-router-dom'
import {ChallengeGenerator} from './challenge/ChallengeGenerator'
import {AuthenticationPage} from './auth/AuthenticationPage'
import {HistoryPanel} from './history/HistoryPanel'
import {Layout} from './layout/Layout'


function App() {
  return <ClerkProviderWithRoutes>
    <Routes>
      <Route path="/sign-in/*" element={<AuthenticationPage />} />
      <Route path="/sign-up/*" element={<AuthenticationPage />} />
      <Route element={<Layout />}>
        <Route path="/" element={<ChallengeGenerator />} />
        <Route path="/history" element={<HistoryPanel />} />
        </Route>
    </Routes>
  </ClerkProviderWithRoutes>
}

export default App
