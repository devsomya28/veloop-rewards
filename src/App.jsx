import React from 'react'
import LeaderboardBanner from './components/LeaderboardBanner'
import WatchAdBanner from './components/WatchAdBanner'
import ContactBanner from './components/ContactBanner'
import FollowEarnBanner from './components/FollowEarnBanner'
import DailyBonusBanner from './components/DailyBonusBanner'
import { Info, Sparkles, ShieldCheck } from 'lucide-react'
import './App.css'

function App() {
  return (
    <main className="app-main">
      <div className="app-container">
        {/* Top Product Header Bar */}
        

        {/* Five Interactive Banner Mini-Products */}
        <LeaderboardBanner />
        <WatchAdBanner />
        <ContactBanner />
        <FollowEarnBanner />
        <DailyBonusBanner />

        {/* Reference Footer Note */}
        <footer className="app-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', maxWidth: '640px' }}>
            <Info size={15} style={{ flexShrink: 0, color: '#94a3b8' }} />
            <span>
              <strong>Demo / Placeholder Notice:</strong> Standings, ad credits, social campaigns, and streak values are simulated frontend product experiences for evaluation purposes.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '800', letterSpacing: '2px', color: '#818cf8', fontSize: '13px' }}>
            <span style={{ color: '#f59e0b' }}>VE</span>LOOP
            <span style={{ fontSize: '10px', color: '#94a3b8', letterSpacing: '3px', marginLeft: '6px' }}>REWARDS</span>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
