import React, { useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';
import styles from './Modal.module.css';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  maxWidth = '580px',
  showDemoNotice = true,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={styles.modal}
        style={{ maxWidth }}
        ref={modalRef}
      >
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <h3 id="modal-title" className={styles.title}>
              {title}
            </h3>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className={styles.content}>
          {children}
        </div>

        {footer ? (
          <div className={styles.footer}>
            {footer}
          </div>
        ) : showDemoNotice ? (
          <div className={styles.footer}>
            <span className={styles.demoTag}>
              <Sparkles size={12} />
              Interactive Demo Simulation
            </span>
            <button
              type="button"
              className={styles.closeBtn}
              style={{ width: 'auto', padding: '6px 14px', fontSize: '13px' }}
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
