"use client";

import Link from "next/link";

export default function SMSConsentPage() {
  return (
    <div className="sms-consent-page">
      {/* Navigation */}
      <nav className="sms-nav">
        <Link href="/" className="logo">
          UNCHAINED<span>.</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="sms-main">
        <div className="sms-container">
          {/* Header */}
          <div className="sms-header">
            <span className="section-label">Compliance</span>
            <h1>SMS Consent Policy</h1>
            <p className="sms-subtitle">
              Unchained AI is committed to transparency and compliance with SMS messaging regulations.
            </p>
          </div>

          {/* Verbal Consent Script */}
          <section className="sms-section">
            <h2>Verbal Consent Script</h2>
            <p className="sms-description">
              Our AI voice agents use the following script to obtain verbal consent before sending any SMS messages:
            </p>
            <blockquote className="consent-script">
              &ldquo;Would you like me to text you a link right now? I just need your phone number — standard message rates may apply, and you can reply STOP at any time to opt out.&rdquo;
            </blockquote>
          </section>

          {/* Key Points */}
          <section className="sms-section">
            <h2>Key Points</h2>
            <div className="sms-grid">
              <div className="sms-card">
                <div className="sms-card-icon">&#x1F4F1;</div>
                <h3>Consent Required</h3>
                <p>
                  No SMS message is ever sent until explicit verbal consent is given by the caller during the phone conversation.
                </p>
              </div>

              <div className="sms-card">
                <div className="sms-card-icon">&#x1F4CA;</div>
                <h3>Message Frequency</h3>
                <p>
                  Message frequency varies based on caller request. You will only receive messages that you specifically ask for.
                </p>
              </div>

              <div className="sms-card">
                <div className="sms-card-icon">&#x2753;</div>
                <h3>Need Help?</h3>
                <p>
                  Reply <strong>HELP</strong> to any message for assistance or contact information.
                </p>
              </div>

              <div className="sms-card">
                <div className="sms-card-icon">&#x1F6D1;</div>
                <h3>Opt Out Anytime</h3>
                <p>
                  Reply <strong>STOP</strong> to any message to immediately opt out of all future SMS communications.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="sms-section">
            <h2>Additional Information</h2>
            <ul className="sms-list">
              <li>Standard message and data rates may apply based on your carrier and plan.</li>
              <li>We do not sell or share your phone number with third parties for marketing purposes.</li>
              <li>SMS messages are sent only in response to your specific requests during calls with our AI agents.</li>
              <li>For questions about our SMS practices, contact us at <a href="mailto:hello@unchained.ai">hello@unchained.ai</a></li>
            </ul>
          </section>

          {/* Back to Home */}
          <div className="sms-footer">
            <Link href="/" className="btn-back">
              <span>&larr;</span> Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="sms-page-footer">
        <div className="footer-content">
          <Link href="/" className="logo">
            UNCHAINED<span>.</span>
          </Link>
          <p>&copy; {new Date().getFullYear()} Unchained AI. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .sms-consent-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .sms-nav {
          padding: 24px 48px;
          border-bottom: 1px solid var(--border);
        }

        .logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.05em;
          color: var(--white);
          text-decoration: none;
        }

        .logo span {
          color: var(--orange);
        }

        .sms-main {
          flex: 1;
          padding: 80px 48px;
        }

        .sms-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .sms-header {
          margin-bottom: 64px;
        }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--orange);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .section-label::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--orange);
        }

        .sms-header h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 8vw, 80px);
          line-height: 0.95;
          letter-spacing: 0.02em;
          margin-bottom: 24px;
        }

        .sms-subtitle {
          font-size: 18px;
          color: var(--muted);
          line-height: 1.6;
          max-width: 600px;
        }

        .sms-section {
          margin-bottom: 56px;
        }

        .sms-section h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 0.03em;
          margin-bottom: 20px;
          color: var(--white);
        }

        .sms-description {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .consent-script {
          background: var(--card);
          border: 1px solid var(--border);
          border-left: 3px solid var(--orange);
          padding: 28px 32px;
          font-size: 18px;
          line-height: 1.7;
          color: var(--white);
          font-style: italic;
          margin: 0;
        }

        .sms-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .sms-card {
          background: var(--card);
          border: 1px solid var(--border);
          padding: 32px;
          transition: border-color 0.3s;
        }

        .sms-card:hover {
          border-color: var(--orange);
        }

        .sms-card-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .sms-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.03em;
          margin-bottom: 12px;
        }

        .sms-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .sms-card p strong {
          color: var(--orange);
          font-weight: 500;
        }

        .sms-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sms-list li {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          font-size: 15px;
          color: var(--muted);
          line-height: 1.6;
        }

        .sms-list li::before {
          content: '→';
          color: var(--orange);
          flex-shrink: 0;
        }

        .sms-list a {
          color: var(--orange);
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .sms-list a:hover {
          opacity: 0.8;
        }

        .sms-footer {
          margin-top: 64px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 14px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s;
        }

        .btn-back:hover {
          color: var(--orange);
        }

        .sms-page-footer {
          background: var(--off-black);
          border-top: 1px solid var(--border);
          padding: 32px 48px;
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-content p {
          color: var(--muted2);
          font-size: 12px;
          font-family: 'DM Mono', monospace;
        }

        @media (max-width: 768px) {
          .sms-nav {
            padding: 20px 24px;
          }

          .sms-main {
            padding: 60px 24px;
          }

          .sms-grid {
            grid-template-columns: 1fr;
          }

          .sms-page-footer {
            padding: 24px;
          }

          .footer-content {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
