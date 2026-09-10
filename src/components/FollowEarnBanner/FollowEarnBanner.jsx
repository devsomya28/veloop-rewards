import React from 'react';
import {
  ArrowRight,
  Gift,
  Users,
  Star,
  Megaphone,
  Heart,
  Bell,
} from 'lucide-react';
import styles from './FollowEarnBanner.module.css';

/**
 * FollowEarnBanner Component
 * 
 * Implements Banner 04 for VELOOP Rewards: "Follow & Earn"
 * Features:
 * - Royal purple/violet identity on #161827
 * - Center smartphone mockup showcasing @velooprewards profile
 * - Orbiting floating social element orbs (Community, Star, Megaphone, Heart)
 * - Campaign reward unlock card (+500 SVEs)
 * - Responsive 3-column desktop to mobile layout
 */
export const FollowEarnBanner = ({
  stageNumber = '04',
  stageTitle = 'FOLLOW & EARN',
  title = 'Follow & Earn',
  description = 'Follow VELOOP Rewards on our official channels and participate in eligible social campaigns to unlock rewards.',
  ctaText = 'Explore Our Channels',
  rewardAmount = '+500 SVEs',
  rewardCampaign = 'Demo Campaign',
  onCtaClick = () => {},
}) => {
  return (
    <div className={styles.bannerWrapper}>
      <section className={styles.bannerCard} aria-label="Follow VELOOP Rewards and Earn">
        {/* Ambient glow accent */}
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
            <h2 className={styles.mainTitle}>{title}</h2>

            {/* Subtitle / Description */}
            <p className={styles.description}>{description}</p>

            {/* CTA Button */}
            <button
              type="button"
              className={styles.ctaButton}
              onClick={onCtaClick}
              aria-label="Explore our official social channels"
            >
              <span>{ctaText}</span>
              <ArrowRight size={17} className={styles.ctaArrow} strokeWidth={2.4} />
            </button>
          </div>

          {/* ================= CENTER COLUMN: SMARTPHONE & ORBITING ORBS ================= */}
          <div className={styles.centerIllustration} aria-hidden="true">
            {/* Floor Glow */}
            <div className={styles.floorGlow} />

            <svg
              className={styles.sceneSvg}
              viewBox="0 0 370 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Phone Glass Gradient */}
                <linearGradient id="phoneGlass" x1="100" y1="20" x2="250" y2="280" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1e1833" />
                  <stop offset="50%" stopColor="#131024" />
                  <stop offset="100%" stopColor="#0a0814" />
                </linearGradient>

                {/* Phone Border Highlight */}
                <linearGradient id="phoneBorder" x1="100" y1="20" x2="250" y2="280" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
                </linearGradient>

                {/* Screen Display Gradient */}
                <linearGradient id="phoneScreen" x1="110" y1="35" x2="240" y2="265" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0f0c1c" />
                  <stop offset="100%" stopColor="#080612" />
                </linearGradient>

                {/* Social Orb Gradient */}
                <linearGradient id="orbGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#4c1d95" />
                </linearGradient>

                {/* Glow Filter */}
                <filter id="purpleGlow" x="-25%" y="-25%" width="150%" height="150%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* SMARTPHONE DEVICE */}
              <g className={styles.phoneGroup}>
                {/* Phone Outer Chassis */}
                <rect
                  x="106"
                  y="24"
                  width="142"
                  height="252"
                  rx="26"
                  fill="url(#phoneGlass)"
                  stroke="url(#phoneBorder)"
                  strokeWidth="1.5"
                />

                {/* Phone Inner Screen */}
                <rect
                  x="114"
                  y="32"
                  width="126"
                  height="236"
                  rx="20"
                  fill="url(#phoneScreen)"
                />

                {/* Dynamic Island / Speaker Notch */}
                <rect x="156" y="38" width="42" height="6" rx="3" fill="#000000" />
                <circle cx="190" cy="41" r="1.5" fill="#1e1b4b" />

                {/* Screen Header row (Back arrow & dots) */}
                <path d="M 124 56 L 128 52 M 124 56 L 128 60" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="226" cy="56" r="1.2" fill="#64748b" />
                <circle cx="230" cy="56" r="1.2" fill="#64748b" />

                {/* Avatar: Purple Circle with white "V" */}
                <circle cx="177" cy="86" r="18" fill="url(#orbGrad)" stroke="#c084fc" strokeWidth="1" filter="url(#purpleGlow)" />
                <text
                  x="177"
                  y="92"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  fontSize="16"
                  fontWeight="900"
                >
                  V
                </text>

                {/* Profile Name & Handle */}
                <text
                  x="177"
                  y="118"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  fontSize="10.5"
                  fontWeight="700"
                >
                  VELOOP Rewards
                </text>
                <text
                  x="177"
                  y="129"
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  fontSize="8.5"
                  fontWeight="500"
                >
                  @velooprewards
                </text>

                {/* "Following" Pill Button & Bell Icon */}
                <rect x="138" y="137" width="58" height="18" rx="9" fill="#2563eb" />
                <text
                  x="167"
                  y="149.5"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  fontSize="8"
                  fontWeight="700"
                >
                  Following
                </text>

                <circle cx="206" cy="146" r="9" fill="#1e1b4b" stroke="#3730a3" strokeWidth="0.8" />
                <path
                  d="M 206 142 C 204.5 142, 203.5 143.5, 203.5 146 L 202.5 148 L 209.5 148 L 208.5 146 C 208.5 143.5, 207.5 142, 206 142 Z"
                  fill="#c7d2fe"
                />
                <circle cx="206" cy="149.5" r="0.8" fill="#c7d2fe" />

                {/* Profile Stats Row (Posts | Followers | Following) */}
                <line x1="126" y1="168" x2="228" y2="168" stroke="#1e1838" strokeWidth="0.8" />

                <text x="140" y="180" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700">128</text>
                <text x="140" y="188" textAnchor="middle" fill="#64748b" fontSize="6.5">Posts</text>

                <text x="177" y="180" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700">24.5K</text>
                <text x="177" y="188" textAnchor="middle" fill="#64748b" fontSize="6.5">Followers</text>

                <text x="214" y="180" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700">8</text>
                <text x="214" y="188" textAnchor="middle" fill="#64748b" fontSize="6.5">Following</text>

                {/* Grid placeholder for campaign posts */}
                <rect x="124" y="196" width="31" height="31" rx="4" fill="#1e1838" />
                <rect x="161" y="196" width="31" height="31" rx="4" fill="#1e1838" />
                <rect x="198" y="196" width="31" height="31" rx="4" fill="#1e1838" />

                <rect x="124" y="231" width="31" height="24" rx="4" fill="#151226" />
                <rect x="161" y="231" width="31" height="24" rx="4" fill="#151226" />
                <rect x="198" y="231" width="31" height="24" rx="4" fill="#151226" />
              </g>

              {/* ================= ORBITING 3D SOCIAL ICONS ================= */}
              {/* Left: Community / Users Orb */}
              <g className={styles.orbUsers} filter="url(#purpleGlow)">
                <circle cx="64" cy="145" r="22" fill="url(#orbGrad)" stroke="#d8b4fe" strokeWidth="1.2" />
                {/* Users icon representation */}
                <circle cx="64" cy="140" r="5" fill="#ffffff" />
                <path d="M 54 154 C 54 149, 58 147, 64 147 C 70 147, 74 149, 74 154 Z" fill="#ffffff" />
              </g>

              {/* Top-Right: Star / Achievement Orb */}
              <g className={styles.orbStar} filter="url(#purpleGlow)">
                <circle cx="284" cy="105" r="18" fill="url(#orbGrad)" stroke="#e9d5ff" strokeWidth="1" />
                {/* Star icon */}
                <polygon
                  points="284,97 286.5,103 293,103.5 288,107.5 289.5,114 284,110 278.5,114 280,107.5 275,103.5 281.5,103"
                  fill="#ffffff"
                />
              </g>

              {/* Middle-Right: Megaphone Orb */}
              <g className={styles.orbHorn} filter="url(#purpleGlow)">
                <circle cx="270" cy="172" r="17" fill="url(#orbGrad)" stroke="#d8b4fe" strokeWidth="1" />
                {/* Megaphone icon */}
                <path d="M 264 170 L 273 166 L 274 178 L 264 174 Z" fill="#ffffff" />
                <rect x="262" y="169" width="3" height="6" rx="1" fill="#ffffff" />
                <path d="M 267 175 L 269 180" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* Bottom-Right: Heart Orb */}
              <g className={styles.orbHeart} filter="url(#purpleGlow)">
                <circle cx="295" cy="226" r="16" fill="url(#orbGrad)" stroke="#f472b6" strokeWidth="1" />
                {/* Heart icon */}
                <path
                  d="M 295 233 L 289 227 C 286 224, 287 220, 291 220 C 293 220, 294.5 221.5, 295 222.5 C 295.5 221.5, 297 220, 299 220 C 303 220, 304 224, 301 227 Z"
                  fill="#ffffff"
                />
              </g>
            </svg>
          </div>

          {/* ================= RIGHT COLUMN: REWARD NOTICE CARD ================= */}
          <div className={styles.rightRewardCard}>
            <div className={styles.rewardHeader}>
              <div className={styles.giftIconBadge}>
                <Gift size={20} strokeWidth={2.2} />
              </div>
              <p className={styles.rewardNotice}>
                Participate in eligible social campaigns and unlock rewards.
              </p>
            </div>

            <div className={styles.rewardAmountContainer}>
              <div className={styles.rewardAmount}>{rewardAmount}</div>
              <div className={styles.rewardSubtext}>{rewardCampaign}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FollowEarnBanner;
