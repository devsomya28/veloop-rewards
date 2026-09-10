import React from 'react'
import LeaderboardBanner from './components/LeaderboardBanner'
import WatchAdBanner from './components/WatchAdBanner'
import ContactBanner from './components/ContactBanner'
import FollowEarnBanner from './components/FollowEarnBanner'
import DailyBonusBanner from './components/DailyBonusBanner'
import { Info } from 'lucide-react'
import './App.css'

function App() {
  return (
    <main
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#0c0d14',
        padding: '36px 20px 48px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <LeaderboardBanner />
        <WatchAdBanner />
        <ContactBanner />
        <FollowEarnBanner />
        <DailyBonusBanner />

        {/* Reference Footer Note */}
        <footer
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 10px',
            color: '#64748b',
            fontSize: '12px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', maxWidth: '640px' }}>
            <Info size={15} style={{ flexShrink: 0, color: '#94a3b8' }} />
            <span>
              <strong>Demo / Placeholder Notice:</strong> Ranking, reward, and streak values are development placeholders for presentation purposes only and may change in the final product.
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

