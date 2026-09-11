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
    <main
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#161827',
        padding: '24px 20px 48px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Top Product Header Bar */}
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            backgroundColor: 'rgba(26, 29, 48, 0.75)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            border: '1px solid rgba(148, 163, 184, 0.15)',
            boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.4)',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: '900',
                letterSpacing: '1.5px',
                color: '#818cf8',
                fontSize: '16px',
              }}
            >
              <span style={{ color: '#f59e0b' }}>VE</span>LOOP
              <span
                style={{
                  fontSize: '10px',
                  color: '#94a3b8',
                  letterSpacing: '2.5px',
                  marginLeft: '4px',
                  fontWeight: '700',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                REWARDS
              </span>
            </div>
            <span
              style={{
                fontSize: '11px',
                color: '#34d399',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(52, 211, 153, 0.25)',
                padding: '3px 9px',
                borderRadius: '9999px',
                fontWeight: '600',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399' }} />
              Active Product Stage
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#e2e8f0',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                padding: '5px 12px',
                borderRadius: '8px',
                fontFamily: 'ui-monospace, monospace',
                fontWeight: '600',
              }}
            >
              <ShieldCheck size={14} color="#38bdf8" />
              <span>Demo Sandbox</span>
            </div>
          </div>
        </header>

        {/* Five Interactive Banner Mini-Products */}
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
            padding: '16px 12px',
            color: '#64748b',
            fontSize: '12px',
            flexWrap: 'wrap',
            gap: '12px',
            borderTop: '1px solid rgba(148, 163, 184, 0.12)',
            marginTop: '8px',
          }}
        >
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
