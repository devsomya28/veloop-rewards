import React, { useState, useEffect } from 'react';
import { Play, Shield, Zap, ArrowRight, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import styles from './WatchAdBanner.module.css';

/**
 * WatchAdBanner Component
 * 
 * Implements Banner 02 for VELOOP Rewards: "Watch Ads. Earn VEs."
 * Visualizes the Watch → Complete → Earn reward flow with:
 * - Sleek video player screen with interactive play button
 * - Lightweight simulated ad state with 5s countdown
 * - Real-time progress bar scrubber in the video player
 * - Disabled reward state while watching
 * - Animated reward completion: "+38 VEs earned"
 * - Dynamic VE wallet balance incrementing in real time
 * - "Watch Another" and "Reset Demo" actions
 * - Refined fintech dark navy/blue aesthetics on #161827
 * - Responsive 2-column to 1-column layouts
 */
export const WatchAdBanner = ({
  stageNumber = '02',
  stageTitle = 'ON-DEMAND REWARDS',
  titlePart1 = 'Watch Ads.',
  titlePart2 = 'Earn VEs.',
  description = 'Watch eligible advertisements and earn VEs for completing available ad activities.',
  chip1Text = 'No Daily Cap',
  chip2Text = 'Instant Credits',
  ctaText = 'Watch & Earn',
  onCtaClick = () => {},
}) => {
  const [adState, setAdState] = useState('idle'); // 'idle' | 'watching' | 'completed'
  const [countdown, setCountdown] = useState(5);
  const [progress, setProgress] = useState(0);
  const [walletBalance, setWalletBalance] = useState(120);
  const [earnedVes, setEarnedVes] = useState(0);

  useEffect(() => {
    let interval = null;
    if (adState === 'watching') {
      const duration = 5000;
      const stepTime = 50;
      const totalSteps = duration / stepTime;
      let currentStep = 0;

      interval = setInterval(() => {
        currentStep++;
        const pct = Math.min(100, Math.round((currentStep / totalSteps) * 100));
        setProgress(pct);
        const remaining = Math.max(0, Math.ceil((duration - currentStep * stepTime) / 1000));
        setCountdown(remaining);

        if (currentStep >= totalSteps) {
          clearInterval(interval);
          setAdState('completed');
          setEarnedVes((prev) => prev + 38);
          setWalletBalance((prev) => prev + 38);
        }
      }, stepTime);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [adState]);

  const handleStartWatch = (e) => {
    if (adState === 'watching') return;
    setAdState('watching');
    setProgress(0);
    setCountdown(5);
    if (onCtaClick) onCtaClick(e);
  };

  const handleReset = () => {
    setAdState('idle');
    setProgress(0);
    setCountdown(5);
    setWalletBalance(120);
    setEarnedVes(0);
  };

  const scrubberWidth = Math.max(4, Math.round((progress / 100) * 150));
  const scrubberKnobX = 74 + scrubberWidth;

  return (
    <div className={styles.bannerWrapper}>
      <section className={styles.bannerCard} aria-label="Watch Ads and Earn Rewards">
        {/* Ambient background blur accent */}
        <div className={styles.ambientGlow} />

        <div className={styles.bannerInner}>
          {/* ================= LEFT COLUMN: CONTENT ================= */}
          <div className={styles.leftContent}>
            {/* Badges */}
            <div className={styles.badgeRow}>
              <span className={styles.indexBadge}>{stageNumber}</span>
              <div className={styles.stageBadge}>
                <span className={styles.stageIcon}>
                  <Play size={11} fill="currentColor" strokeWidth={2} />
                </span>
                <span>{stageTitle}</span>
              </div>
            </div>

            {/* Main Title */}
            <h2 className={styles.mainTitle}>
              <span className={styles.titleWhite}>{titlePart1}</span>
              <span className={styles.titleBlue}>{titlePart2}</span>
            </h2>

            {/* Subtitle / Description */}
            <p className={styles.description}>{description}</p>

            {/* Simulated Live Alert / Completion Status */}
            {adState === 'watching' && (
              <div className={styles.liveBadge} role="status">
                <span className={styles.pulseDot} />
                <span>Simulating Partner Ad (0:0{countdown}s remaining)</span>
              </div>
            )}

            {adState === 'completed' && (
              <div className={styles.rewardAlert} role="status">
                <div className={styles.rewardLeft}>
                  <CheckCircle2 size={18} color="#34d399" />
                  <span>
                    Ad Completed! <strong className={styles.rewardHighlight}>+38 VEs Earned</strong>
                  </span>
                </div>
                <span className={styles.balancePill}>Balance: {walletBalance} VEs</span>
              </div>
            )}

            {/* Information Chips */}
            <div className={styles.chipsRow}>
              <div className={styles.infoChip}>
                <span className={styles.chipIcon}>
                  <Shield size={14} strokeWidth={2.2} />
                </span>
                <span>{chip1Text}</span>
              </div>

              <div className={styles.infoChip}>
                <span className={styles.chipIcon}>
                  <Zap size={14} strokeWidth={2.2} />
                </span>
                <span>{chip2Text}</span>
              </div>
            </div>

            {/* CTA Buttons based on ad flow state */}
            {adState === 'watching' ? (
              <button
                type="button"
                className={`${styles.ctaButton} ${styles.ctaButtonDisabled}`}
                disabled
                aria-disabled="true"
                aria-label="Ad is currently playing, reward action disabled"
              >
                <span className={styles.pulseDot} style={{ background: '#ffffff' }} />
                <span>Playing Ad (0:0{countdown})...</span>
              </button>
            ) : adState === 'completed' ? (
              <div className={styles.ctaGroup}>
                <button
                  type="button"
                  className={styles.ctaButton}
                  onClick={handleStartWatch}
                  aria-label="Watch another advertisement to earn more VEs"
                >
                  <span>Watch Another (+38 VEs)</span>
                  <ArrowRight size={17} className={styles.ctaArrow} strokeWidth={2.4} />
                </button>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={handleReset}
                  aria-label="Reset ad demo flow"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                className={styles.ctaButton}
                onClick={handleStartWatch}
                aria-label="Start watching ads to earn VEs"
              >
                <span>{ctaText}</span>
                <ArrowRight size={17} className={styles.ctaArrow} strokeWidth={2.4} />
              </button>
            )}
          </div>

          {/* ================= RIGHT COLUMN: VISUAL FLOW ================= */}
          <div className={styles.rightIllustration} aria-hidden="true">
            <div className={styles.visualContainer}>
              {/* Floor ambient glow ellipse */}
              <div className={styles.floorGlow} />

              <svg
                className={styles.sceneSvg}
                viewBox="0 0 520 310"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Outer screen glass gradient */}
                  <linearGradient id="screenGlass" x1="20" y1="40" x2="280" y2="260" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="40%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#090d16" />
                  </linearGradient>

                  {/* Screen border gradient */}
                  <linearGradient id="screenBorder" x1="20" y1="40" x2="290" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={adState === 'watching' ? '#38bdf8' : '#38bdf8'} stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#1e40af" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
                  </linearGradient>

                  {/* Inner screen display gradient */}
                  <linearGradient id="displayScreen" x1="40" y1="60" x2="270" y2="220" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={adState === 'watching' ? '#07162c' : '#0a192f'} />
                    <stop offset="50%" stopColor={adState === 'watching' ? '#0c1d38' : '#0c1628'} />
                    <stop offset="100%" stopColor="#070d18" />
                  </linearGradient>

                  {/* Play button circular gradient */}
                  <linearGradient id="playBtnGrad" x1="140" y1="105" x2="196" y2="159" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>

                  {/* Wallet front leather/metal gradient */}
                  <linearGradient id="walletGrad" x1="290" y1="90" x2="480" y2="260" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1e2d4a" />
                    <stop offset="45%" stopColor="#111c33" />
                    <stop offset="100%" stopColor="#0a1120" />
                  </linearGradient>

                  {/* Wallet border highlight */}
                  <linearGradient id="walletStroke" x1="290" y1="90" x2="480" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
                  </linearGradient>

                  {/* VE Coin Front Gradient */}
                  <linearGradient id="coinGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="35%" stopColor="#38bdf8" />
                    <stop offset="70%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </linearGradient>

                  {/* Coin Rim highlight */}
                  <linearGradient id="coinRimGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#bae6fd" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>

                  {/* Soft Glow Filter */}
                  <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* ================= 1. VIDEO PLAYER SCREEN ================= */}
                <g
                  className={`${styles.videoScreenGroup} ${styles.screenInteractive}`}
                  onClick={handleStartWatch}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleStartWatch(e);
                    }
                  }}
                >
                  {/* Screen Frame with drop-shadow and bevel */}
                  <rect
                    x="24"
                    y="50"
                    width="264"
                    height="172"
                    rx="18"
                    fill="url(#screenGlass)"
                    stroke="url(#screenBorder)"
                    strokeWidth={adState === 'watching' ? '2' : '1.5'}
                  />

                  {/* Screen Inner Display Area */}
                  <rect
                    x="32"
                    y="58"
                    width="248"
                    height="156"
                    rx="12"
                    fill="url(#displayScreen)"
                  />

                  {/* Ambient inner screen light beam */}
                  <circle
                    cx="160"
                    cy="132"
                    r={adState === 'watching' ? '70' : '55'}
                    fill="#2563eb"
                    opacity={adState === 'watching' ? '0.3' : '0.18'}
                    filter="url(#cyanGlow)"
                  />

                  {/* STATE A: IDLE - Play Button */}
                  {adState === 'idle' && (
                    <g className={styles.playBtnGlow}>
                      <circle
                        cx="160"
                        cy="132"
                        r="26"
                        fill="url(#playBtnGrad)"
                        stroke="#bae6fd"
                        strokeWidth="1.2"
                        filter="url(#cyanGlow)"
                      />
                      <polygon points="155,122 170,132 155,142" fill="#ffffff" />
                    </g>
                  )}

                  {/* STATE B: WATCHING - Animated Equalizer Waves & Countdown */}
                  {adState === 'watching' && (
                    <g filter="url(#cyanGlow)">
                      {/* Sponsor Pill in Video */}
                      <rect x="70" y="72" width="172" height="18" rx="9" fill="rgba(15, 23, 42, 0.85)" stroke="#38bdf8" strokeWidth="0.8" />
                      <text x="156" y="84" textAnchor="middle" fill="#bae6fd" fontSize="9" fontWeight="700" letterSpacing="0.4">
                        DEMO AD: EcoRide EV (0:0{countdown})
                      </text>

                      {/* Equalizer Bars Simulation */}
                      <g fill="#38bdf8">
                        <rect x="120" y="122" width="4" height="24" rx="2">
                          <animate attributeName="height" values="12;32;16;28;12" dur="0.8s" repeatCount="indefinite" />
                          <animate attributeName="y" values="128;118;126;120;128" dur="0.8s" repeatCount="indefinite" />
                        </rect>
                        <rect x="132" y="114" width="4" height="40" rx="2">
                          <animate attributeName="height" values="40;18;35;22;40" dur="0.7s" repeatCount="indefinite" />
                          <animate attributeName="y" values="114;125;116;123;114" dur="0.7s" repeatCount="indefinite" />
                        </rect>
                        <rect x="144" y="110" width="4" height="48" rx="2">
                          <animate attributeName="height" values="48;28;42;16;48" dur="0.9s" repeatCount="indefinite" />
                          <animate attributeName="y" values="110;120;113;126;110" dur="0.9s" repeatCount="indefinite" />
                        </rect>
                        <rect x="156" y="118" width="4" height="32" rx="2">
                          <animate attributeName="height" values="32;44;20;36;32" dur="0.65s" repeatCount="indefinite" />
                          <animate attributeName="y" values="118;112;124;116;118" dur="0.65s" repeatCount="indefinite" />
                        </rect>
                        <rect x="168" y="112" width="4" height="44" rx="2">
                          <animate attributeName="height" values="44;24;38;14;44" dur="0.85s" repeatCount="indefinite" />
                          <animate attributeName="y" values="112;122;115;127;112" dur="0.85s" repeatCount="indefinite" />
                        </rect>
                        <rect x="180" y="120" width="4" height="28" rx="2">
                          <animate attributeName="height" values="28;42;18;32;28" dur="0.75s" repeatCount="indefinite" />
                          <animate attributeName="y" values="120;113;125;118;120" dur="0.75s" repeatCount="indefinite" />
                        </rect>
                        <rect x="192" y="126" width="4" height="16" rx="2">
                          <animate attributeName="height" values="16;30;12;26;16" dur="0.8s" repeatCount="indefinite" />
                          <animate attributeName="y" values="126;119;128;121;126" dur="0.8s" repeatCount="indefinite" />
                        </rect>
                      </g>

                      {/* Small Live Tag */}
                      <text x="156" y="174" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="600">
                        Streaming Ad Activity...
                      </text>
                    </g>
                  )}

                  {/* STATE C: COMPLETED - Glowing Checkmark & Reward Credited */}
                  {adState === 'completed' && (
                    <g filter="url(#cyanGlow)">
                      <circle cx="156" cy="116" r="24" fill="#047857" stroke="#34d399" strokeWidth="2" />
                      {/* Checkmark */}
                      <path d="M 146 116 L 153 123 L 167 109" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <text x="156" y="156" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">
                        Ad Completed!
                      </text>
                      <text x="156" y="172" textAnchor="middle" fill="#fcd34d" fontSize="11.5" fontWeight="700">
                        +38 VEs Credited
                      </text>
                    </g>
                  )}

                  {/* Bottom Video Controls / Timeline Bar */}
                  <g opacity="0.95">
                    {/* Controls background strip */}
                    <rect x="36" y="186" width="240" height="24" rx="6" fill="#0b1120" opacity="0.85" />

                    {/* Mini Play/Pause button */}
                    {adState === 'watching' ? (
                      <>
                        <rect x="47" y="193" width="3" height="10" rx="1" fill="#38bdf8" />
                        <rect x="54" y="193" width="3" height="10" rx="1" fill="#38bdf8" />
                      </>
                    ) : (
                      <>
                        <polygon points="46,194 52,198 46,202" fill="#93c5fd" />
                        <rect x="55" y="194" width="2" height="8" rx="0.5" fill="#93c5fd" />
                        <polygon points="59,194 65,198 59,202" fill="#93c5fd" />
                      </>
                    )}

                    {/* Progress Track Background */}
                    <rect x="74" y="196" width="150" height="4" rx="2" fill="#1e293b" />
                    {/* Filled Progress Bar dynamically advancing */}
                    <rect
                      x="74"
                      y="196"
                      width={adState === 'completed' ? 150 : scrubberWidth}
                      height="4"
                      rx="2"
                      fill="#38bdf8"
                    />
                    {/* Active Scrubber Knob */}
                    <circle
                      cx={adState === 'completed' ? 224 : scrubberKnobX}
                      cy="198"
                      r="4.5"
                      fill="#ffffff"
                      stroke="#2563eb"
                      strokeWidth="1.5"
                    />

                    {/* Time indicator */}
                    <text x="248" y="200" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">
                      {adState === 'watching' ? `0:0${5 - countdown}` : adState === 'completed' ? '0:05' : '0:00'}
                    </text>
                  </g>
                </g>

                {/* ================= 2. VE REWARD WALLET ================= */}
                <g className={styles.walletGroup}>
                  {/* Wallet Back Compartment (top opening) */}
                  <rect
                    x="302"
                    y="102"
                    width="156"
                    height="45"
                    rx="10"
                    fill="#0f172a"
                    stroke="#1e3a8a"
                    strokeWidth="1"
                  />

                  {/* Wallet Main Body */}
                  <rect
                    x="292"
                    y="114"
                    width="176"
                    height="120"
                    rx="16"
                    fill="url(#walletGrad)"
                    stroke="url(#walletStroke)"
                    strokeWidth="1.5"
                  />

                  {/* Decorative stitching lines */}
                  <rect
                    x="298"
                    y="120"
                    width="164"
                    height="108"
                    rx="12"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                    opacity="0.5"
                  />

                  {/* Wallet Inner Flap / Pocket Line */}
                  <path
                    d="M 292 152 Q 380 168 468 152"
                    stroke="#1e3a8a"
                    strokeWidth="1.5"
                    fill="none"
                  />

                  {/* Dynamic Wallet Balance / Logo */}
                  <text
                    x="380"
                    y="196"
                    textAnchor="middle"
                    fill="#38bdf8"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fontSize="28"
                    fontWeight="900"
                    letterSpacing="1.5"
                    opacity="0.95"
                    filter="url(#cyanGlow)"
                  >
                    {walletBalance} VE
                  </text>

                  {/* Wallet Metallic Clasp / Button on Right */}
                  <g filter="url(#cyanGlow)">
                    <rect x="444" y="162" width="22" height="24" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                    <circle cx="455" cy="174" r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                  </g>
                </g>

                {/* ================= 3. FLOATING VE COINS (Watch → Complete → Earn) ================= */}
                {/* Coin 1: Hovering above wallet slot */}
                <g className={`${styles.floatingCoin1} ${adState === 'completed' ? styles.coinCelebrate : ''}`}>
                  <circle cx="395" cy="68" r="19" fill="url(#coinGrad)" stroke="url(#coinRimGrad)" strokeWidth="1.5" filter="url(#cyanGlow)" />
                  <circle cx="395" cy="68" r="14" fill="none" stroke="#bae6fd" strokeWidth="0.8" opacity="0.6" />
                  <text
                    x="395"
                    y="74"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fontSize="13"
                    fontWeight="800"
                    letterSpacing="0.5"
                  >
                    VE
                  </text>
                </g>

                {/* Coin 2: Emerging between screen & wallet */}
                <g className={`${styles.floatingCoin2} ${adState === 'completed' ? styles.coinCelebrate : ''}`}>
                  <circle cx="352" cy="96" r="16" fill="url(#coinGrad)" stroke="url(#coinRimGrad)" strokeWidth="1.4" filter="url(#cyanGlow)" />
                  <circle cx="352" cy="96" r="12" fill="none" stroke="#bae6fd" strokeWidth="0.7" opacity="0.6" />
                  <text
                    x="352"
                    y="101"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fontSize="11"
                    fontWeight="800"
                  >
                    VE
                  </text>
                </g>

                {/* Coin 3: Top near screen top-right */}
                <g className={`${styles.floatingCoin3} ${adState === 'completed' ? styles.coinCelebrate : ''}`}>
                  <circle cx="410" cy="108" r="14.5" fill="url(#coinGrad)" stroke="url(#coinRimGrad)" strokeWidth="1.2" filter="url(#cyanGlow)" />
                  <circle cx="410" cy="108" r="10.5" fill="none" stroke="#bae6fd" strokeWidth="0.6" opacity="0.6" />
                  <text
                    x="410"
                    y="113"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fontSize="10"
                    fontWeight="800"
                  >
                    VE
                  </text>
                </g>

                {/* Coin 4: Floating Top-Right */}
                <g className={`${styles.floatingCoin4} ${adState === 'completed' ? styles.coinCelebrate : ''}`}>
                  <circle cx="452" cy="84" r="15" fill="url(#coinGrad)" stroke="url(#coinRimGrad)" strokeWidth="1.2" filter="url(#cyanGlow)" />
                  <text
                    x="452"
                    y="89"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fontSize="10.5"
                    fontWeight="800"
                  >
                    VE
                  </text>
                </g>

                {/* Coin 5: Resting in wallet top slot */}
                <g className={`${styles.floatingCoin5} ${adState === 'completed' ? styles.coinCelebrate : ''}`}>
                  <circle cx="478" cy="172" r="15.5" fill="url(#coinGrad)" stroke="url(#coinRimGrad)" strokeWidth="1.4" filter="url(#cyanGlow)" />
                  <text
                    x="478"
                    y="177"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fontSize="11"
                    fontWeight="800"
                  >
                    VE
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WatchAdBanner;
