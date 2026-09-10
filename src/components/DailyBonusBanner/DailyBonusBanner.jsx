import React from 'react';
import { Gift, Check } from 'lucide-react';
import styles from './DailyBonusBanner.module.css';

/**
 * DailyBonusBanner Component
 * 
 * Implements Banner 05 for VELOOP Rewards: "Your Daily Bonus Is Waiting"
 * Features:
 * - Premium dark navy & gold aesthetic on #161827
 * - Large 3D gift box with glowing VE coins and ambient light rays
 * - "Today's Bonus" reward card (+25 GEMS, Available Now)
 * - 7-Day streak visualization with 6 days completed checkmarks
 * - Responsive 3-column desktop to mobile layout
 */
export const DailyBonusBanner = ({
  stageNumber = '05',
  stageTitle = 'DAILY BONUS',
  titleLine1 = 'Your Daily Bonus',
  titleLine2 = 'Is Waiting',
  description = 'Check in regularly and claim your available daily bonus before the opportunity resets.',
  ctaText = 'Claim Bonus',
  bonusAmount = '+25 GEMS',
  bonusStatus = 'Available Now',
  completedDays = 6,
  totalDays = 7,
  streakMessage = 'Come back tomorrow!',
  onCtaClick = () => {},
}) => {
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className={styles.bannerWrapper}>
      <section className={styles.bannerCard} aria-label="Daily Bonus and Streak Progress">
        {/* Ambient subtle gold illumination */}
        <div className={styles.ambientGlow} />

        <div className={styles.bannerInner}>
          {/* ================= LEFT COLUMN: CONTENT ================= */}
          <div className={styles.leftContent}>
            {/* Badges */}
            <div className={styles.badgeRow}>
              <span className={styles.indexBadge}>{stageNumber}</span>
              <div className={styles.stageBadge}>
                <span>{stageTitle}</span>
              </div>
            </div>

            {/* Main Title */}
            <h2 className={styles.mainTitle}>
              <span>{titleLine1}</span>
              <span>{titleLine2}</span>
            </h2>

            {/* Subtitle / Description */}
            <p className={styles.description}>{description}</p>

            {/* CTA Button */}
            <button
              type="button"
              className={styles.ctaButton}
              onClick={onCtaClick}
              aria-label="Claim your daily bonus"
            >
              <span>{ctaText}</span>
              <Gift size={18} strokeWidth={2.4} />
            </button>
          </div>

          {/* ================= CENTER COLUMN: 3D GIFT BOX & VE COINS ================= */}
          <div className={styles.centerIllustration} aria-hidden="true">
            {/* Floor Glow */}
            <div className={styles.floorGlow} />

            <svg
              className={styles.sceneSvg}
              viewBox="0 0 360 290"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Gold Gift Box Front Gradient */}
                <linearGradient id="boxFront" x1="100" y1="120" x2="260" y2="250" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="45%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#92400e" />
                </linearGradient>

                {/* Box Rim Highlight */}
                <linearGradient id="boxRim" x1="100" y1="120" x2="260" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>

                {/* Ribbon Gradient */}
                <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fffbeb" />
                  <stop offset="35%" stopColor="#fde68a" />
                  <stop offset="70%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>

                {/* VE Coin Gradient */}
                <linearGradient id="goldCoin" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#f59e0b" />
                  <stop offset="80%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>

                {/* Light Rays Beam Gradient */}
                <linearGradient id="lightRayGrad" x1="180" y1="50" x2="180" y2="140" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>

                {/* Glow Filter */}
                <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Radiant Light Beam Emitting from Box */}
              <polygon
                points="180,60 135,130 225,130"
                fill="url(#lightRayGrad)"
                opacity="0.85"
                filter="url(#goldGlowFilter)"
              />

              {/* 3D GIFT BOX GROUP */}
              <g className={styles.giftBoxGroup}>
                {/* Box Base Chassis */}
                <rect
                  x="116"
                  y="130"
                  width="128"
                  height="102"
                  rx="16"
                  fill="url(#boxFront)"
                  stroke="url(#boxRim)"
                  strokeWidth="1.2"
                />

                {/* Vertical Gold Ribbon Band on Box */}
                <rect
                  x="166"
                  y="130"
                  width="28"
                  height="102"
                  fill="url(#ribbonGrad)"
                  stroke="#fde68a"
                  strokeWidth="0.8"
                />

                {/* Horizontal Ribbon Band */}
                <rect
                  x="116"
                  y="168"
                  width="128"
                  height="22"
                  fill="url(#ribbonGrad)"
                  stroke="#fde68a"
                  strokeWidth="0.8"
                />

                {/* Box Lid (Tilted Open) */}
                <path
                  d="M 108 126 L 252 118 L 250 134 L 106 142 Z"
                  fill="url(#boxFront)"
                  stroke="url(#boxRim)"
                  strokeWidth="1.2"
                  filter="url(#goldGlowFilter)"
                />

                {/* Golden Bow Ribbons on Top */}
                {/* Left Bow Loop */}
                <path
                  d="M 170 108 C 142 88, 140 120, 172 116 Z"
                  fill="url(#ribbonGrad)"
                  stroke="#fef08a"
                  strokeWidth="0.8"
                />
                {/* Right Bow Loop */}
                <path
                  d="M 188 108 C 218 88, 220 120, 186 116 Z"
                  fill="url(#ribbonGrad)"
                  stroke="#fef08a"
                  strokeWidth="0.8"
                />
                {/* Center Bow Knot */}
                <circle cx="179" cy="112" r="7" fill="url(#ribbonGrad)" stroke="#ffffff" strokeWidth="0.8" />

                {/* Central Embossed "VE" Emblem on Gift Box */}
                <circle
                  cx="180"
                  cy="179"
                  r="20"
                  fill="url(#goldCoin)"
                  stroke="#fde68a"
                  strokeWidth="1.5"
                  filter="url(#goldGlowFilter)"
                />
                <circle cx="180" cy="179" r="16" fill="none" stroke="#fef08a" strokeWidth="0.8" opacity="0.6" />
                <text
                  x="180"
                  y="185.5"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  fontSize="13"
                  fontWeight="900"
                  letterSpacing="0.8"
                >
                  VE
                </text>
              </g>

              {/* ================= FLOATING GOLDEN VE COINS ================= */}
              {/* Coin Left */}
              <g className={styles.coinLeft} filter="url(#goldGlowFilter)">
                <ellipse cx="78" cy="226" rx="19" ry="17" fill="url(#goldCoin)" stroke="#fef08a" strokeWidth="1.2" />
                <ellipse cx="78" cy="226" rx="14" ry="12" fill="none" stroke="#fde68a" strokeWidth="0.7" opacity="0.6" />
                <text
                  x="78"
                  y="231"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  fontSize="11"
                  fontWeight="800"
                >
                  VE
                </text>
              </g>

              {/* Coin Center Base */}
              <g className={styles.coinCenter} filter="url(#goldGlowFilter)">
                <ellipse cx="140" cy="246" rx="17" ry="15" fill="url(#goldCoin)" stroke="#fef08a" strokeWidth="1.2" />
                <text
                  x="140"
                  y="250.5"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  fontSize="10"
                  fontWeight="800"
                >
                  VE
                </text>
              </g>

              {/* Coin Right Base */}
              <g className={styles.coinRight} filter="url(#goldGlowFilter)">
                <ellipse cx="282" cy="228" rx="19" ry="17" fill="url(#goldCoin)" stroke="#fef08a" strokeWidth="1.2" />
                <ellipse cx="282" cy="228" rx="14" ry="12" fill="none" stroke="#fde68a" strokeWidth="0.7" opacity="0.6" />
                <text
                  x="282"
                  y="233"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  fontSize="11"
                  fontWeight="800"
                >
                  VE
                </text>
              </g>

              {/* Sparkles / Twinkles */}
              <g fill="#fef08a" opacity="0.8">
                <circle cx="110" cy="80" r="2.5" className={styles.sparkleStar} />
                <circle cx="245" cy="74" r="2.2" className={styles.sparkleStar} />
                <circle cx="160" cy="50" r="3" className={styles.sparkleStar} />
              </g>
            </svg>
          </div>

          {/* ================= RIGHT COLUMN: REWARDS & 7-DAY STREAK ================= */}
          <div className={styles.rightRewardSection}>
            {/* Today's Bonus Card */}
            <div className={styles.bonusCard}>
              <div className={styles.bonusLabel}>TODAY'S BONUS</div>
              <div className={styles.bonusAmount}>{bonusAmount}</div>
              <div className={styles.bonusStatus}>
                <span>{bonusStatus}</span>
                <span className={styles.statusDot} />
              </div>
            </div>

            {/* 7-Day Streak Card */}
            <div className={styles.streakCard}>
              <div className={styles.streakHeader}>
                <span>7-DAY STREAK</span>
              </div>

              {/* Streak Track */}
              <div className={styles.streakTrack}>
                {daysArray.map((day) => {
                  const isCompleted = day <= completedDays;

                  return (
                    <div key={day} className={styles.streakDay}>
                      <span className={styles.dayNumber}>{day}</span>
                      <div
                        className={`${styles.dayBubble} ${
                          isCompleted ? styles.dayCompleted : styles.dayPending
                        }`}
                      >
                        {isCompleted ? (
                          <Check size={13} strokeWidth={3} />
                        ) : (
                          <span>{day}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer text */}
              <div className={styles.streakFooter}>
                <span className={styles.streakCompletedText}>
                  {completedDays} Days Completed
                </span>
                <span className={styles.streakPromptText}>{streakMessage}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyBonusBanner;
