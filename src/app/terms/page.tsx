"use client";

import Link from "next/link";

export default function TermsPage() {
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
            <h1>Terms of Service</h1>
            <p className="legal-subtitle">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <section className="legal-section">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Unchained AI&apos;s services, website (tryunchained.ai), or AI voice agents, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Description of Services</h2>
            <p>
              Unchained AI provides intelligent AI voice agent solutions for businesses, including:
            </p>
            <ul>
              <li>AI-powered phone answering and call handling</li>
              <li>Automated booking and reservation systems</li>
              <li>Customer service and inquiry management</li>
              <li>SMS messaging services (with user consent)</li>
              <li>Integration with business systems and calendars</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>User Responsibilities</h2>
            <p>When using our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Use the services only for lawful purposes</li>
              <li>Not attempt to interfere with or disrupt our services</li>
              <li>Not use our services to harass, abuse, or harm others</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>AI Voice Agent Interactions</h2>
            <p>
              When interacting with our AI voice agents, please be aware that:
            </p>
            <ul>
              <li>Calls may be recorded for quality assurance and service improvement</li>
              <li>Our AI agents will identify themselves as AI assistants</li>
              <li>SMS messages are only sent with your explicit verbal consent</li>
              <li>Information provided during calls may be shared with the business you are contacting</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>SMS Terms</h2>
            <p>
              By providing verbal consent for SMS communications:
            </p>
            <ul>
              <li>You agree to receive text messages at the phone number provided</li>
              <li>Message frequency varies based on your requests</li>
              <li>Standard message and data rates may apply</li>
              <li>You can opt out at any time by replying STOP</li>
              <li>Reply HELP for assistance</li>
            </ul>
            <p>
              See our <Link href="/sms-consent">SMS Consent Policy</Link> for complete details.
            </p>
          </section>

          <section className="legal-section">
            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by Unchained AI and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>Disclaimer of Warranties</h2>
            <p>
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or completely secure.
            </p>
          </section>

          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Unchained AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Unchained AI, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will notify users of material changes by updating the &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
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
