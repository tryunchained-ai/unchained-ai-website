"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      {/* Navigation */}
      <nav className="legal-nav">
        <Link href="/" className="logo">
          UNCHAINED<span>.</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="legal-main">
        <div className="legal-container">
          {/* Header */}
          <div className="legal-header">
            <span className="section-label">Legal</span>
            <h1>Privacy Policy</h1>
            <p className="legal-subtitle">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              Unchained AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI voice agent services and visit our website at tryunchained.ai.
            </p>
          </section>

          <section className="legal-section">
            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information when you inquire about our services</li>
              <li>Communications and correspondence with us</li>
              <li>Information provided during phone calls with our AI agents</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3>Voice and Call Data</h3>
            <ul>
              <li>Call recordings and transcripts (with consent)</li>
              <li>Phone numbers for SMS communications (with verbal consent)</li>
              <li>Booking and reservation information</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide and maintain our AI voice agent services</li>
              <li>To process bookings, reservations, and customer requests</li>
              <li>To send SMS messages when you request them (with your consent)</li>
              <li>To improve and optimize our services</li>
              <li>To communicate with you about our services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Our business clients whose AI agents you interact with</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Opt out of SMS messages by replying STOP</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>SMS Communications</h2>
            <p>
              We only send SMS messages after obtaining verbal consent during phone calls. Message frequency varies based on your requests. Standard message and data rates may apply. Reply HELP for assistance or STOP to opt out. See our <Link href="/sms-consent">SMS Consent Policy</Link> for more details.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="contact-info">
              <strong>Email:</strong> <a href="mailto:hello@unchained.ai">hello@unchained.ai</a><br />
              <strong>Location:</strong> Fort Lauderdale, FL
            </p>
          </section>

          {/* Back to Home */}
          <div className="legal-footer">
            <Link href="/" className="btn-back">
              <span>&larr;</span> Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="legal-page-footer">
        <div className="footer-content">
          <Link href="/" className="logo">
            UNCHAINED<span>.</span>
          </Link>
          <p>&copy; {new Date().getFullYear()} Unchained AI. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .legal-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .legal-nav {
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

        .legal-main {
          flex: 1;
          padding: 120px 48px 80px;
        }

        .legal-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .legal-header {
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

        .legal-header h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 8vw, 80px);
          line-height: 0.95;
          letter-spacing: 0.02em;
          margin-bottom: 16px;
        }

        .legal-subtitle {
          font-size: 14px;
          color: var(--muted);
          font-family: 'DM Mono', monospace;
        }

        .legal-section {
          margin-bottom: 48px;
        }

        .legal-section h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.03em;
          margin-bottom: 16px;
          color: var(--white);
        }

        .legal-section h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 500;
          margin: 24px 0 12px;
          color: var(--orange);
        }

        .legal-section p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .legal-section ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .legal-section li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          color: var(--muted);
          line-height: 1.6;
        }

        .legal-section li::before {
          content: '→';
          color: var(--orange);
          flex-shrink: 0;
        }

        .legal-section a {
          color: var(--orange);
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .legal-section a:hover {
          opacity: 0.8;
        }

        .contact-info {
          background: var(--card);
          border: 1px solid var(--border);
          padding: 20px 24px;
          margin-top: 16px;
        }

        .contact-info strong {
          color: var(--white);
        }

        .legal-footer {
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

        .legal-page-footer {
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
          .legal-nav {
            padding: 20px 24px;
          }

          .legal-main {
            padding: 80px 24px 60px;
          }

          .legal-page-footer {
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
