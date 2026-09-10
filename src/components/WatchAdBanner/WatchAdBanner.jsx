import React from 'react';
import { Play, Shield, Zap, ArrowRight } from 'lucide-react';
import styles from './WatchAdBanner.module.css';

/**
 * WatchAdBanner Component
 * 
 * Implements Banner 02 for VELOOP Rewards: "Watch Ads. Earn VEs."
 * Visualizes the Watch → Complete → Earn reward flow with:
 * - Sleek video player screen with interactive play button
 * - Premium digital VE wallet container
 * - Staggered floating 3D VE coins
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

            {/* CTA Button */}
            <button
              type="button"
              className={styles.ctaButton}
              onClick={onCtaClick}
              aria-label="Start watching ads to earn VEs"
            >
              <span>{ctaText}</span>
              <ArrowRight size={17} className={styles.ctaArrow} strokeWidth={2.4} />
            </button>
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
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#1e40af" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
                  </linearGradient>

                  {/* Inner screen display gradient */}
                  <linearGradient id="displayScreen" x1="40" y1="60" x2="270" y2="220" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0a192f" />
                    <stop offset="50%" stopColor="#0c1628" />
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
                <g className={styles.videoScreenGroup}>
                  {/* Screen Frame with drop-shadow and bevel */}
                  <rect
                    x="24"
                    y="50"
                    width="264"
                    height="172"
                    rx="18"
                    fill="url(#screenGlass)"
                    stroke="url(#screenBorder)"
                    strokeWidth="1.5"
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
                  <circle cx="160" cy="132" r="55" fill="#2563eb" opacity="0.18" filter="url(#cyanGlow)" />

                  {/* Centered Glowing Play Button */}
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
                    {/* White Play Icon Triangle */}
                    <polygon
                      points="155,122 170,132 155,142"
                      fill="#ffffff"
                    />
                  </g>

                  {/* Bottom Video Controls / Timeline Bar */}
                  <g opacity="0.85">
                    {/* Controls background strip */}
                    <rect x="36" y="186" width="240" height="24" rx="6" fill="#0b1120" opacity="0.75" />

                    {/* Mini Play/Pause button */}
                    <polygon points="46,194 52,198 46,202" fill="#93c5fd" />
                    <rect x="55" y="194" width="2" height="8" rx="0.5" fill="#93c5fd" />
                    <polygon points="59,194 65,198 59,202" fill="#93c5fd" />

                    {/* Progress Track Background */}
                    <rect x="74" y="196" width="150" height="4" rx="2" fill="#1e293b" />
                    {/* Filled Progress Bar */}
                    <rect x="74" y="196" width="68" height="4" rx="2" fill="#38bdf8" />
                    {/* Active Scrubber Knob */}
                    <circle cx="142" cy="198" r="4.5" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />

                    {/* Time / Volume indicator dots on right */}
                    <circle cx="236" cy="198" r="2" fill="#64748b" />
                    <circle cx="243" cy="198" r="2" fill="#64748b" />
                    <rect x="250" y="194" width="8" height="8" rx="1.5" fill="none" stroke="#64748b" strokeWidth="1.2" />
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

                  {/* Prominent Embossed VE Logo on Wallet */}
                  <text
                    x="380"
                    y="196"
                    textAnchor="middle"
                    fill="#38bdf8"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fontSize="36"
                    fontWeight="900"
                    letterSpacing="1.5"
                    opacity="0.9"
                    filter="url(#cyanGlow)"
                  >
                    VE
                  </text>

                  {/* Wallet Metallic Clasp / Button on Right */}
                  <g filter="url(#cyanGlow)">
                    <rect x="444" y="162" width="22" height="24" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                    <circle cx="455" cy="174" r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                  </g>
                </g>

                {/* ================= 3. FLOATING VE COINS (Watch → Complete → Earn) ================= */}
                {/* Coin 1: Hovering above wallet slot */}
                <g className={styles.floatingCoin1}>
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
                <g className={styles.floatingCoin2}>
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
                <g className={styles.floatingCoin3}>
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
                <g className={styles.floatingCoin4}>
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
                <g className={styles.floatingCoin5}>
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
