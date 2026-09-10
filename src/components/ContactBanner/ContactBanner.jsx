import React, { useState } from 'react';
import {
  MessageSquare,
  User,
  Mail,
  Copy,
  Check,
  BookOpen,
  Ticket,
  ChevronRight,
} from 'lucide-react';
import styles from './ContactBanner.module.css';

/**
 * ContactBanner Component
 * 
 * Implements Banner 03 for VELOOP Rewards: "Need Help? We're Here."
 * Visualizes customer support and trust with:
 * - 3D support specialist with headset, microphone, and laptop
 * - Animated floating chat bubbles
 * - Official contact details (velooprewardsofficial@gmail.com) with copy button
 * - Quick links for Help Center and Submit a Ticket
 * - Responsive 3-column desktop to vertical mobile layout on #161827
 */
export const ContactBanner = ({
  stageNumber = '03',
  stageTitle = 'CONTACT US',
  titlePart1 = 'Need Help?',
  titlePart2 = "We're Here.",
  description = 'Have a question, concern, or need assistance? Get in touch with the VELOOP Rewards team.',
  ctaText = 'Contact Support',
  emailAddress = 'velooprewardsofficial@gmail.com',
  onCtaClick = () => {},
  onHelpCenterClick = () => {},
  onSubmitTicketClick = () => {},
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={styles.bannerWrapper}>
      <section className={styles.bannerCard} aria-label="Customer Support and Contact Information">
        {/* Ambient background glow */}
        <div className={styles.ambientGlow} />

        <div className={styles.bannerInner}>
          {/* ================= LEFT COLUMN: INTRO & CTA ================= */}
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
              <span className={styles.titleWhite}>{titlePart1}</span>
              <span className={styles.titleBlue}>{titlePart2}</span>
            </h2>

            {/* Subtitle / Description */}
            <p className={styles.description}>{description}</p>

            {/* CTA Button */}
            <button
              type="button"
              className={styles.ctaButton}
              onClick={onCtaClick}
              aria-label="Contact customer support"
            >
              <span>{ctaText}</span>
              <MessageSquare size={16} strokeWidth={2.2} />
            </button>
          </div>

          {/* ================= CENTER COLUMN: SUPPORT AGENT ILLUSTRATION ================= */}
          <div className={styles.centerIllustration} aria-hidden="true">
            <svg
              className={styles.sceneSvg}
              viewBox="0 0 360 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Glow Filter */}
                <filter id="softSupportGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Agent Skin Gradient */}
                <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fcd3b2" />
                  <stop offset="100%" stopColor="#f0a57e" />
                </linearGradient>

                {/* Hair Gradient */}
                <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2e2621" />
                  <stop offset="100%" stopColor="#14110e" />
                </linearGradient>

                {/* Blue Shirt Gradient */}
                <linearGradient id="shirtGrad" x1="120" y1="140" x2="220" y2="240" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="50%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>

                {/* Laptop Lid Gradient */}
                <linearGradient id="laptopGrad" x1="100" y1="170" x2="240" y2="250" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                {/* 3D Blue Chat Bubble Gradient */}
                <linearGradient id="blueBubbleGrad" x1="20" y1="70" x2="90" y2="140" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>

                {/* Grey Chat Bubble Gradient */}
                <linearGradient id="greyBubbleGrad" x1="270" y1="100" x2="330" y2="150" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
              </defs>

              {/* Ambient Spotlight behind character */}
              <circle cx="170" cy="130" r="70" fill="#3b82f6" opacity="0.12" filter="url(#softSupportGlow)" />

              {/* 3D FLOATING CHAT BUBBLE (LEFT) */}
              <g className={styles.floatingBubbleLeft} filter="url(#softSupportGlow)">
                <rect x="26" y="86" width="62" height="42" rx="14" fill="url(#blueBubbleGrad)" stroke="#93c5fd" strokeWidth="1" />
                {/* Tail */}
                <path d="M 68 128 L 76 138 L 74 128 Z" fill="#2563eb" />
                {/* 3 Message Dots */}
                <circle cx="43" cy="107" r="3.2" fill="#ffffff" />
                <circle cx="57" cy="107" r="3.2" fill="#ffffff" />
                <circle cx="71" cy="107" r="3.2" fill="#ffffff" />
              </g>

              {/* 3D FLOATING CHAT BUBBLE (RIGHT) */}
              <g className={styles.floatingBubbleRight}>
                <rect x="272" y="112" width="56" height="38" rx="10" fill="url(#greyBubbleGrad)" stroke="#64748b" strokeWidth="1" />
                {/* Tail */}
                <path d="M 284 150 L 278 158 L 288 150 Z" fill="#1e293b" />
                {/* Message Lines */}
                <rect x="282" y="123" width="36" height="3.5" rx="1.7" fill="#94a3b8" />
                <rect x="282" y="131" width="24" height="3.5" rx="1.7" fill="#64748b" />
              </g>

              {/* SUPPORT REPRESENTATIVE CHARACTER */}
              <g className={styles.agentCharacter}>
                {/* Torso & Arms */}
                <path
                  d="M 116 230 C 116 172, 134 150, 170 150 C 206 150, 224 172, 224 230 Z"
                  fill="url(#shirtGrad)"
                />

                {/* Small 'V' Logo on Chest */}
                <path
                  d="M 166 182 L 170 193 L 174 182"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />

                {/* Neck */}
                <rect x="162" y="132" width="16" height="24" rx="4" fill="url(#skinGrad)" />

                {/* Face & Head */}
                <ellipse cx="170" cy="108" rx="26" ry="30" fill="url(#skinGrad)" />

                {/* Hair */}
                <path
                  d="M 144 102 C 144 76, 158 66, 170 66 C 182 66, 196 76, 196 102 C 196 90, 188 78, 170 78 C 152 78, 146 90, 144 102 Z"
                  fill="url(#hairGrad)"
                />

                {/* Friendly Facial Features */}
                {/* Eyebrows */}
                <path d="M 154 94 Q 160 92 165 95" stroke="#2e2621" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M 175 95 Q 180 92 186 94" stroke="#2e2621" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                {/* Eyes */}
                <ellipse cx="160" cy="104" rx="2.8" ry="3.5" fill="#1e293b" />
                <circle cx="161" cy="103" r="1.1" fill="#ffffff" />
                <ellipse cx="180" cy="104" rx="2.8" ry="3.5" fill="#1e293b" />
                <circle cx="181" cy="103" r="1.1" fill="#ffffff" />
                {/* Warm Smile */}
                <path
                  d="M 161 118 Q 170 128 179 118"
                  stroke="#831843"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Cheeks */}
                <ellipse cx="152" cy="114" rx="4" ry="2" fill="#f43f5e" opacity="0.3" />
                <ellipse cx="188" cy="114" rx="4" ry="2" fill="#f43f5e" opacity="0.3" />

                {/* Professional Headset */}
                {/* Headband arch */}
                <path
                  d="M 142 108 C 142 70, 198 70, 198 108"
                  stroke="#1e293b"
                  strokeWidth="3.5"
                  fill="none"
                />
                {/* Left Earphone Cushion */}
                <ellipse cx="143" cy="108" rx="5" ry="11" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                {/* Right Earphone Cushion */}
                <ellipse cx="197" cy="108" rx="5" ry="11" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                {/* Microphone Arm extending to mouth */}
                <path
                  d="M 143 114 Q 148 128 162 126"
                  stroke="#334155"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Microphone tip */}
                <ellipse cx="164" cy="126" rx="3.5" ry="2.5" fill="#0284c7" />

                {/* Modern Laptop with 'V' Logo */}
                <g filter="url(#softSupportGlow)">
                  {/* Screen Lid (Facing Viewer) */}
                  <path
                    d="M 115 186 L 225 186 L 235 240 L 105 240 Z"
                    fill="url(#laptopGrad)"
                    stroke="#475569"
                    strokeWidth="1.2"
                  />
                  {/* Laptop Base Lip */}
                  <rect x="98" y="238" width="144" height="6" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="0.8" />

                  {/* Embossed 'V' on Laptop Lid */}
                  <path
                    d="M 164 204 L 170 216 L 176 204"
                    stroke="#94a3b8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.8"
                  />
                </g>
              </g>
            </svg>
          </div>

          {/* ================= RIGHT COLUMN: SUPPORT OPTIONS CARD ================= */}
          <div className={styles.rightContactCard}>
            {/* Status Header */}
            <div className={styles.cardHeader}>
              <User size={14} className={styles.headerIcon} />
              <span>We're here to help</span>
            </div>

            {/* Email Section */}
            <div className={styles.emailSection}>
              <div className={styles.emailLabelRow}>
                <Mail size={13} className={styles.mailIcon} />
                <span>Email Us</span>
              </div>
              <a
                href={`mailto:${emailAddress}`}
                className={styles.emailLink}
                title="Send email to VELOOP Rewards"
              >
                {emailAddress}
              </a>
            </div>

            {/* Copy Email Button */}
            <button
              type="button"
              className={`${styles.copyButton} ${copied ? styles.copySuccess : ''}`}
              onClick={handleCopyEmail}
              aria-label="Copy support email address to clipboard"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Email Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Support Quick Links */}
            <div className={styles.supportList}>
              <button
                type="button"
                className={styles.supportItem}
                onClick={onHelpCenterClick}
                aria-label="Visit Help Center"
              >
                <div className={styles.itemLeft}>
                  <BookOpen size={14} />
                  <span>Help Center</span>
                </div>
                <ChevronRight size={14} className={styles.itemChevron} />
              </button>

              <button
                type="button"
                className={styles.supportItem}
                onClick={onSubmitTicketClick}
                aria-label="Submit a support ticket"
              >
                <div className={styles.itemLeft}>
                  <Ticket size={14} />
                  <span>Submit a Ticket</span>
                </div>
                <ChevronRight size={14} className={styles.itemChevron} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactBanner;
