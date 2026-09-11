import React, { useState } from 'react';
import { Trophy, ArrowRight, Sparkles, TrendingUp, ChevronUp, Users, Shield } from 'lucide-react';
import Modal from '../common/Modal';
import styles from './LeaderboardBanner.module.css';

/**
 * LeaderboardBanner Component
 * 
 * Recreates the VELOOP Rewards "Rank Higher. Earn More." competition banner.
 * Features:
 * - #161827 dark theme with gold/amber glowing accents
 * - Responsive 2-column to 1-column layout (Desktop, Tablet, Mobile)
 * - Ornate vector championship trophy with crown and sparkles
 * - Rising performance line chart and ascending bar chart backdrop
 * - Three-tier podium ranking cards (User A, User B, User C)
 * - Interactive ranking modal with real-time demo standings, rank movement (#4 -> #3),
 *   and progress toward the next rank.
 * - Micro-animations: trophy float, sparkle twinkling, live badge pulse, and interactive hover lifts
 */
export const LeaderboardBanner = ({
  stageNumber = '01',
  stageTitle = 'COMPETITION STAGE ACTIVE',
  titleLine1 = 'Rank Higher.',
  titleLine2 = 'Earn More.',
  description = 'Complete activities, earn rewards, gain XP, and compete with other users to climb the leaderboard.',
  poolAmount = '50,000 VEs',
  poolLabel = 'Current pool:',
  poolSuffix = 'in prizes',
  ctaText = 'Check Rankings',
  onCtaClick = () => {},
  rankings = [
    {
      id: '2',
      rankNumber: '02',
      name: 'User B',
      score: '11,820 VEs',
      type: 'second',
    },
    {
      id: '1',
      rankNumber: '01',
      name: 'User A',
      score: '12,450 VEs',
      type: 'first',
    },
    {
      id: '3',
      rankNumber: '03',
      name: 'User C',
      score: '10,970 VEs',
      type: 'third',
    },
  ],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('weekly');

  const fullStandings = [
    { rank: '01', name: 'User A', score: '12,450 VEs', isTop: true, badge: '🥇' },
    { rank: '02', name: 'User B', score: '11,820 VEs', isTop: true, badge: '🥈' },
    { rank: '03', name: 'User C', score: '10,970 VEs', isTop: true, badge: '🥉' },
    { rank: '04', name: 'You (User D)', score: '10,690 VEs', isCurrentUser: true },
    { rank: '05', name: 'Alex_Crypto', score: '9,840 VEs' },
    { rank: '06', name: 'Sarah_K', score: '9,210 VEs' },
    { rank: '07', name: 'DevSomya', score: '8,950 VEs' },
    { rank: '08', name: 'Elena_R', score: '8,420 VEs' },
  ];

  const handleOpenRankings = (e) => {
    setIsModalOpen(true);
    if (onCtaClick) onCtaClick(e);
  };

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        {/* Ambient background blur accent */}
        <div className={styles.ambientGlow} />

        <div className={styles.bannerInner}>
          {/* ================= LEFT CONTENT AREA ================= */}
          <div className={styles.leftContent}>
            {/* Badges row */}
            <div className={styles.badgeRow}>
              <span className={styles.indexBadge}>{stageNumber}</span>
              <div className={styles.stageBadge}>
                <span className={styles.stageIcon}>
                  <Trophy size={13} strokeWidth={2.4} />
                </span>
                <span>{stageTitle}</span>
              </div>
            </div>

            {/* Main title */}
            <h2 className={styles.mainTitle}>
              <span className={styles.titleWhite}>{titleLine1}</span>
              <span className={styles.titleGold}>{titleLine2}</span>
            </h2>

            {/* Subtitle / Description */}
            <p className={styles.description}>{description}</p>

            {/* Current User Standing Pill */}
            <div className={styles.userStandingPill}>
              <span>Your Standing: <strong>#4 • 10,690 VEs</strong></span>
              <span className={styles.momentumTag}>
                <TrendingUp size={11} strokeWidth={2.5} /> +1 this week
              </span>
            </div>

            {/* Current Pool Pill */}
            <div className={styles.poolBadge}>
              <Trophy size={16} className={styles.poolTrophy} strokeWidth={2.2} />
              <span className={styles.poolLabel}>{poolLabel}</span>
              <span className={styles.poolAmount}>{poolAmount}</span>
              <span className={styles.poolSuffix}>{poolSuffix}</span>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              className={styles.ctaButton}
              onClick={handleOpenRankings}
              aria-label="Check competitive leaderboard rankings"
            >
              <span>{ctaText}</span>
              <ArrowRight size={17} className={styles.ctaArrow} strokeWidth={2.4} />
            </button>
          </div>

          {/* ================= RIGHT ILLUSTRATION AREA ================= */}
          <div className={styles.rightIllustration}>
            {/* SVG Background Chart & Atmospheric Elements */}
            <div className={styles.chartBackdrop}>
              <svg
                className={styles.chartSvg}
                viewBox="0 0 540 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Golden line glow filter */}
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Area fill under curve */}
                  <linearGradient id="chartAreaGrad" x1="0" y1="50" x2="0" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
                    <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#161827" stopOpacity="0" />
                  </linearGradient>

                  {/* Line stroke gradient */}
                  <linearGradient id="chartLineGrad" x1="0" y1="180" x2="480" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                    <stop offset="35%" stopColor="#fcd34d" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#f59e0b" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Vertical bar chart gradients */}
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#b45309" stopOpacity="0.08" />
                  </linearGradient>
                </defs>

                {/* Right vertical bar chart steps */}
                <g opacity="0.75">
                  <rect x="442" y="152" width="7" height="85" rx="3.5" fill="url(#barGrad)" />
                  <rect x="456" y="132" width="7" height="105" rx="3.5" fill="url(#barGrad)" />
                  <rect x="470" y="108" width="7" height="129" rx="3.5" fill="url(#barGrad)" />
                  <rect x="484" y="86" width="7" height="151" rx="3.5" fill="url(#barGrad)" />
                  <rect x="498" y="62" width="7" height="175" rx="3.5" fill="url(#barGrad)" />
                  <rect x="512" y="40" width="7" height="197" rx="3.5" fill="url(#barGrad)" />
                </g>

                {/* Growth curve area under the line */}
                <path
                  d="M 40 220 C 110 200, 160 140, 220 130 C 270 120, 310 75, 360 85 C 410 95, 450 60, 510 40 L 510 240 L 40 240 Z"
                  fill="url(#chartAreaGrad)"
                />

                {/* Rising glowing line chart */}
                <path
                  d="M 40 220 C 110 200, 160 140, 220 130 C 270 120, 310 75, 360 85 C 410 95, 450 60, 510 40"
                  stroke="url(#chartLineGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#goldGlow)"
                />

                {/* Circular glowing data nodes */}
                <g filter="url(#goldGlow)">
                  <circle cx="120" cy="188" r="3.5" fill="#fcd34d" />
                  <circle cx="220" cy="130" r="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
                  <circle cx="360" cy="85" r="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
                  <circle cx="450" cy="62" r="3.5" fill="#fcd34d" />
                  <circle cx="510" cy="40" r="5" fill="#ffffff" stroke="#f59e0b" strokeWidth="2.5" />
                </g>
              </svg>
            </div>

            {/* Sparkles / Twinkles around trophy */}
            <div className={styles.sparklesLayer}>
              <Sparkles size={14} className={`${styles.sparkle} ${styles.sparkle1}`} />
              <Sparkles size={18} className={`${styles.sparkle} ${styles.sparkle2}`} />
              <Sparkles size={16} className={`${styles.sparkle} ${styles.sparkle3}`} />
              <Sparkles size={12} className={`${styles.sparkle} ${styles.sparkle4}`} />
            </div>

            {/* Championship Trophy Artwork */}
            <div className={styles.trophyContainer}>
              <svg
                className={styles.trophySvg}
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Gold metallic gradient for cup body */}
                  <linearGradient id="goldCup" x1="20" y1="30" x2="100" y2="90" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fff3b0" />
                    <stop offset="25%" stopColor="#fcd34d" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="75%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>

                  {/* Bright highlight */}
                  <linearGradient id="goldHighlight" x1="40" y1="30" x2="55" y2="85" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#fef08a" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </linearGradient>

                  {/* Rim gradient */}
                  <linearGradient id="rimGrad" x1="30" y1="32" x2="90" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#b45309" />
                    <stop offset="30%" stopColor="#fef08a" />
                    <stop offset="70%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#92400e" />
                  </linearGradient>

                  {/* Base gradient */}
                  <linearGradient id="baseGrad" x1="35" y1="95" x2="85" y2="112" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>

                  {/* Crown gradient */}
                  <linearGradient id="crownGrad" x1="45" y1="12" x2="75" y2="28" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>

                  <filter id="trophyGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="glow" />
                    <feComposite in="SourceGraphic" in2="glow" operator="over" />
                  </filter>
                </defs>

                {/* Back ambient trophy flare */}
                <circle cx="60" cy="55" r="38" fill="url(#goldAreaGlow)" opacity="0.25" />
                <radialGradient id="goldAreaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </radialGradient>

                {/* Floating Crown above the cup */}
                <g filter="url(#trophyGlow)">
                  <path
                    d="M 46 25 L 43 15 L 52 21 L 60 11 L 68 21 L 77 15 L 74 25 Z"
                    fill="url(#crownGrad)"
                    stroke="#fffbeb"
                    strokeWidth="0.75"
                  />
                  {/* Crown jewels */}
                  <circle cx="43" cy="14" r="1.5" fill="#ffffff" />
                  <circle cx="60" cy="10" r="1.8" fill="#ffffff" />
                  <circle cx="77" cy="14" r="1.5" fill="#ffffff" />
                </g>

                {/* Left Cup Handle */}
                <path
                  d="M 40 38 C 22 38, 20 62, 38 68 C 39 64, 39 60, 42 57 C 31 54, 31 43, 41 42 Z"
                  fill="url(#goldCup)"
                  stroke="#fbbf24"
                  strokeWidth="0.8"
                />

                {/* Right Cup Handle */}
                <path
                  d="M 80 38 C 98 38, 100 62, 82 68 C 81 64, 81 60, 78 57 C 89 54, 89 43, 79 42 Z"
                  fill="url(#goldCup)"
                  stroke="#fbbf24"
                  strokeWidth="0.8"
                />

                {/* Cup Body */}
                <path
                  d="M 36 34 L 84 34 C 84 56, 76 74, 60 76 C 44 74, 36 56, 36 34 Z"
                  fill="url(#goldCup)"
                />

                {/* Front Highlights and Sheen */}
                <path
                  d="M 41 36 C 40 48, 45 66, 56 73 C 50 70, 46 54, 46 36 Z"
                  fill="url(#goldHighlight)"
                />

                {/* Top Rim of Cup */}
                <ellipse cx="60" cy="34" rx="24" ry="4" fill="url(#rimGrad)" stroke="#fef08a" strokeWidth="0.5" />
                <ellipse cx="60" cy="34" rx="20" ry="2.5" fill="#78350f" opacity="0.6" />

                {/* Star emblem in center of cup */}
                <path
                  d="M 60 46 L 62 52 L 68 52 L 63 56 L 65 62 L 60 58 L 55 62 L 57 56 L 52 52 L 58 52 Z"
                  fill="#ffffff"
                  opacity="0.85"
                />

                {/* Stem / Neck */}
                <path
                  d="M 55 76 L 65 76 L 63 88 L 57 88 Z"
                  fill="url(#goldCup)"
                />
                <ellipse cx="60" cy="88" rx="8" ry="2.5" fill="#fcd34d" />

                {/* Base */}
                <path
                  d="M 52 90 L 68 90 L 74 100 L 46 100 Z"
                  fill="url(#baseGrad)"
                />
                <ellipse cx="60" cy="100" rx="15" ry="3.5" fill="#d97706" stroke="#fde68a" strokeWidth="0.75" />
                <rect x="42" y="100" width="36" height="5" rx="1.5" fill="#451a03" stroke="#b45309" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Subtle base glow on the floor */}
            <div className={styles.podiumBaseRing} />

            {/* Three Ranking Cards Podium (User B, User A, User C) */}
            <div className={styles.podiumCards}>
              {rankings.map((card) => {
                const isFirst = card.type === 'first' || card.rankNumber === '01';
                const isSecond = card.type === 'second' || card.rankNumber === '02';
                const isThird = card.type === 'third' || card.rankNumber === '03';

                const cardClass = [
                  styles.rankCard,
                  isFirst && styles.rankCardFirst,
                  isSecond && styles.rankCardSecond,
                  isThird && styles.rankCardThird,
                ]
                  .filter(Boolean)
                  .join(' ');

                const badgeClass = [
                  styles.badgeCircle,
                  isFirst && styles.badgeFirst,
                  isSecond && styles.badgeSecond,
                  isThird && styles.badgeThird,
                ]
                  .filter(Boolean)
                  .join(' ');

                const scoreClass = [
                  styles.userScore,
                  isFirst && styles.scoreFirst,
                  isSecond && styles.scoreSecond,
                  isThird && styles.scoreThird,
                ]
                  .filter(Boolean)
                  .join(' ');

                return (
                  <div key={card.id || card.rankNumber} className={cardClass}>
                    {/* Floating Rank Circle Badge */}
                    <div className={badgeClass}>{card.rankNumber}</div>

                    {/* User Name */}
                    <div className={styles.userName}>{card.name}</div>

                    {/* Score / VE value */}
                    <div className={scoreClass}>{card.score}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Leaderboard Rankings Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          <>
            <Trophy size={20} color="#f59e0b" />
            <span>Leaderboard Standings</span>
          </>
        }
        subtitle="Stage 01: Active Competition • Season 1 (Demo Snapshot)"
        maxWidth="560px"
      >
        {/* User Standing Highlight Card */}
        <div className={styles.modalUserHighlight}>
          <div className={styles.highlightTop}>
            <div className={styles.highlightUser}>
              <div className={styles.userAvatarCircle}>U</div>
              <div>
                <div className={styles.highlightName}>You (User D)</div>
                <div className={styles.highlightScore}>10,690 VEs Earned</div>
              </div>
            </div>

            {/* Rank Movement Indicator */}
            <div className={styles.rankMovementBadge}>
              <TrendingUp size={14} />
              <span>Rank Movement: #4 → #3</span>
            </div>
          </div>

          {/* Progress to Next Rank */}
          <div className={styles.progressSection}>
            <div className={styles.progressMeta}>
              <span>Target: Rank #3 (User C • 10,970 VEs)</span>
              <span className={styles.progressNeeded}>280 VEs needed</span>
            </div>
            <div className={styles.progressBarTrack} role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
              <div className={styles.progressBarFill} style={{ width: '85%' }} />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={styles.tabRow} role="tablist">
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'weekly' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('weekly')}
            role="tab"
            aria-selected={activeTab === 'weekly'}
          >
            Weekly Sprint
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'alltime' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('alltime')}
            role="tab"
            aria-selected={activeTab === 'alltime'}
          >
            All-Time
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'league' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('league')}
            role="tab"
            aria-selected={activeTab === 'league'}
          >
            Diamond League
          </button>
        </div>

        {/* Full Leaderboard List */}
        <div className={styles.rowsContainer}>
          {fullStandings.map((user) => {
            const isUser = user.isCurrentUser;
            return (
              <div
                key={user.rank}
                className={`${styles.standingRow} ${isUser ? styles.standingRowCurrent : ''}`}
              >
                <div className={styles.rowLeft}>
                  <span className={`${styles.rowRank} ${user.isTop ? styles.rowRankTop : ''}`}>
                    {user.badge ? user.badge : `#${user.rank}`}
                  </span>
                  <span className={styles.rowUser}>
                    {user.name}
                    {isUser && <span className={styles.youTag}>YOU</span>}
                  </span>
                </div>
                <div className={`${styles.rowScore} ${isUser ? styles.rowScoreCurrent : ''}`}>
                  {user.score}
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

export default LeaderboardBanner;
