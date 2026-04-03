'use client';

import { useState, useEffect, useRef } from 'react';
import VapiCallModal from '@/components/VapiCallModal';

export default function Home() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openWidget = (agentKey: string) => {
    setActiveAgent(agentKey);
    document.body.style.overflow = 'hidden';
  };

  const closeWidget = () => {
    setActiveAgent(null);
    document.body.style.overflow = '';
  };

  const tickerItems = [
    'Voice Reservation Agents',
    'Charter Booking Automation',
    'Real-Time Availability Checks',
    '24/7 Inbound Handling',
    'Upsell Automation',
    'Square Integration',
    'FareHarbor Sync',
    'SMS Confirmation',
    'Instant Call Transfer',
    'Custom AI Agents',
  ];

  return (
    <>
      <VapiCallModal agentKey={activeAgent} onClose={closeWidget} />

      {/* NAV */}
      <nav className={navScrolled ? 'scrolled' : ''}>
        <a href="#" className="logo">Unchained<span>.</span>AI</a>
        <ul>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#demos">Live Demos</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#process">How It Works</a></li>
          <li>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Book a Demo
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-tag">AI Solutions &amp; Automation</div>
        <h1 className="hero-title">
          Your Business,<br />
          <span className="outline">Fully</span><br />
          <span className="accent">Unchained.</span>
        </h1>
        <p className="hero-sub">
          We build intelligent AI voice agents that handle your calls, bookings, and customer interactions — 24/7, without missing a beat.
        </p>
        <div className="hero-actions">
          <a href="#demos" className="btn-primary">Hear Live Demos</a>
          <a href="#process" className="btn-ghost">How It Works →</a>
        </div>
        <div className="hero-stat-row">
          <div className="hero-stat"><h3>24/7</h3><p>Always On</p></div>
          <div className="hero-stat"><h3>&lt;1s</h3><p>Response Time</p></div>
          <div className="hero-stat"><h3>0</h3><p>Missed Calls</p></div>
          <div className="hero-stat"><h3>∞</h3><p>Scalable</p></div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="ticker-item">
              <div className="ticker-dot"></div>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* SOLUTIONS */}
      <section className="services" id="solutions">
        <div className="services-header reveal">
          <div>
            <div className="section-label">What We Build</div>
            <h2>AI That<br />Works While<br />You Sleep</h2>
          </div>
          <p>Unchained AI designs, builds, and deploys custom AI voice agents for businesses that want to move faster, serve better, and scale without hiring more staff.</p>
        </div>
        <div className="service-grid reveal">
          <div className="service-card">
            <div className="service-num">01</div>
            <div className="service-icon">🎙️</div>
            <h3>Voice Agents</h3>
            <p>AI-powered phone agents that pick up on the first ring, answer any question, take bookings, and upsell — all with a natural, human-like voice.</p>
          </div>
          <div className="service-card">
            <div className="service-num">02</div>
            <div className="service-icon">⚙️</div>
            <h3>Workflow Automation</h3>
            <p>Connect your tools, eliminate manual work, and automate complex multi-step business processes end-to-end using the latest AI models.</p>
          </div>
          <div className="service-card">
            <div className="service-num">03</div>
            <div className="service-icon">🔗</div>
            <h3>Systems Integration</h3>
            <p>We plug your AI agent directly into your existing stack — booking platforms, POS systems, CRMs, and anything else your business runs on.</p>
          </div>
        </div>
      </section>

      {/* LIVE DEMOS */}
      <section className="demos" id="demos">
        <div className="demos-header reveal">
          <div className="section-label center">Live Agents</div>
          <h2>Hear It<br /><span style={{ color: 'var(--orange)' }}>For Yourself</span></h2>
          <p>These aren&apos;t mockups. Click either demo to speak with a real AI agent we&apos;ve built and deployed — live, right in your browser.</p>
        </div>
        <div className="demo-grid reveal">
          {/* FREAKY TIKI */}
          <div className="demo-card">
            <div className="demo-card-header">
              <div className="demo-card-icon">🌺</div>
              <div className="demo-card-title">
                <h3>Freaky Tiki Charters</h3>
                <p>Party boat charter — Fort Lauderdale, FL</p>
              </div>
              <div className="demo-live-badge"><div className="live-dot"></div>Live</div>
            </div>
            <div className="demo-card-body">
              <div className="demo-phone-preview">
                <span className="line-agent">Connor:</span> &quot;Thanks for calling Freaky Tiki! I can answer questions, check availability, or text you a booking link.&quot;<br /><br />
                <span className="line-user">You:</span> &quot;Is Saturday open for a 4-hour charter?&quot;<br /><br />
                <span className="line-agent">Connor:</span> &quot;Let me check the calendar right now...&quot;
              </div>
              <div className="demo-features">
                <div className="demo-feature">Checks live FareHarbor calendar for real availability</div>
                <div className="demo-feature">Answers any question about pricing, location, policies</div>
                <div className="demo-feature">Texts booking link directly to your phone via SMS</div>
                <div className="demo-feature">Transfers to owner instantly if you ask for a human</div>
              </div>
              <div className="demo-tag-row">
                <span className="demo-tag">FareHarbor Sync</span>
                <span className="demo-tag">SMS Booking</span>
                <span className="demo-tag">Live Availability</span>
              </div>
              <button className="btn-demo" onClick={() => openWidget('tiki')}>
                🌺 &nbsp; Talk to Connor — Freaky Tiki AI
              </button>
            </div>
          </div>

          {/* VETRO */}
          <div className="demo-card">
            <div className="demo-card-header">
              <div className="demo-card-icon">🍷</div>
              <div className="demo-card-title">
                <h3>Vetro — Italian Restaurant</h3>
                <p>Upscale dining — Miami Beach, FL</p>
              </div>
              <div className="demo-live-badge"><div className="live-dot"></div>Live</div>
            </div>
            <div className="demo-card-body">
              <div className="demo-phone-preview">
                <span className="line-agent">Sofia:</span> &quot;Thank you for calling. This is Sofia — how can I help you tonight?&quot;<br /><br />
                <span className="line-user">You:</span> &quot;I&apos;d like a reservation for our anniversary.&quot;<br /><br />
                <span className="line-agent">Sofia:</span> &quot;How romantic! We&apos;re offering 20% off all wine when reserved in advance...&quot;
              </div>
              <div className="demo-features">
                <div className="demo-feature">Books reservations and saves to Square automatically</div>
                <div className="demo-feature">Detects the occasion and offers 20% off wine</div>
                <div className="demo-feature">Texts confirmation SMS to customer, notifies restaurant</div>
                <div className="demo-feature">Smart birthday logic — dessert for kids, wine for adults</div>
              </div>
              <div className="demo-tag-row">
                <span className="demo-tag">Square Integration</span>
                <span className="demo-tag">Upsell Engine</span>
                <span className="demo-tag">SMS Confirmation</span>
              </div>
              <button className="btn-demo btn-demo-outline" onClick={() => openWidget('vetro')}>
                🍷 &nbsp; Talk to Sofia — Vetro AI Host
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VOICE AGENT FEATURE */}
      <section className="feature" id="voice">
        <div className="feature-inner">
          <div className="feature-left reveal">
            <div className="section-label">How It Works</div>
            <h2>An Agent That<br /><span style={{ color: 'var(--orange)' }}>Knows Your</span><br />Business</h2>
            <p>Every Unchained AI agent is custom-built for your business. It knows your prices, your policies, your calendar, and your personality — and it never has a bad day.</p>
            <div className="feature-bullets">
              <div className="feature-bullet">Picks up on the first ring, every time — no hold music, no voicemail</div>
              <div className="feature-bullet">Checks live availability directly from your booking system</div>
              <div className="feature-bullet">Sends SMS confirmations and booking links in real time</div>
              <div className="feature-bullet">Upsells naturally based on the occasion — wine, packages, upgrades</div>
              <div className="feature-bullet">Transfers to a human instantly when needed — no friction</div>
              <div className="feature-bullet">Logs every call and flags unanswered questions for continuous training</div>
            </div>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Free Demo
            </a>
          </div>
          <div className="feature-right reveal">
            <div className="phone-mock">
              <div className="call-header">
                <div className="call-avatar">🍷</div>
                <div className="call-info">
                  <h4>Vetro — Sofia AI Host</h4>
                  <p>● Live Call in Progress</p>
                </div>
                <div className="call-live"><div className="live-dot"></div>Active</div>
              </div>
              <div className="transcript">
                <div className="msg agent">
                  <span className="msg-role agent">Sofia — AI Host</span>
                  <div className="msg-text">Thank you for calling. This is Sofia — how can I help you tonight?</div>
                </div>
                <div className="msg caller">
                  <span className="msg-role caller">Caller</span>
                  <div className="msg-text">Table for 4 this Saturday at 7 — it&apos;s our anniversary.</div>
                </div>
                <div className="msg agent">
                  <span className="msg-role agent">Sofia — AI Host</span>
                  <div className="msg-text">An anniversary — how romantic, congratulations! We&apos;re offering 20% off all wine tonight when reserved in advance. I&apos;d suggest our Prosecco — normally $65, just $52, waiting on your table when you arrive. Shall I add that?</div>
                </div>
                <div className="msg caller">
                  <span className="msg-role caller">Caller</span>
                  <div className="msg-text">Yes, let&apos;s do it.</div>
                </div>
                <div className="msg agent">
                  <span className="msg-role agent">Sofia — AI Host</span>
                  <div className="msg-text">Perfetto! Party of 4, Saturday at 7, Prosecco on the table. Confirmation heading to your phone now. We cannot wait to celebrate with you! 🍷</div>
                </div>
              </div>
              <div className="wave-bars">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bar"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries" id="industries">
        <div className="reveal">
          <div className="section-label">Industries We Serve</div>
          <h2>Built for the<br />Businesses That<br />Can&apos;t Slow Down</h2>
        </div>
        <div className="industry-grid reveal">
          <div className="industry-card">
            <div className="industry-icon">🍽️</div>
            <h3>Restaurants</h3>
            <p>Reservations, upsells, POS sync, and party bookings — all handled by AI, 24/7.</p>
            <span className="industry-tag">Live Now</span>
          </div>
          <div className="industry-card">
            <div className="industry-icon">⛵</div>
            <h3>Charters &amp; Tours</h3>
            <p>Real-time availability, SMS booking links, and instant call transfers to your crew.</p>
            <span className="industry-tag">Live Now</span>
          </div>
          <div className="industry-card">
            <div className="industry-icon">💅</div>
            <h3>Salons &amp; Spas</h3>
            <p>Appointment booking, service questions, and upsell packages — your front desk, automated.</p>
            <span className="industry-tag">Coming Soon</span>
          </div>
          <div className="industry-card">
            <div className="industry-icon">🏠</div>
            <h3>Real Estate</h3>
            <p>Lead qualification, showing bookings, and follow-up automation at scale.</p>
            <span className="industry-tag">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="process" id="process">
        <div className="process-header reveal">
          <div>
            <div className="section-label">The Process</div>
            <h2>Live in Days,<br />Not Months</h2>
          </div>
          <p>We move fast. From first conversation to a deployed, fully functional AI agent — most clients are live within a week.</p>
        </div>
        <div className="steps reveal">
          <div className="step">
            <div className="step-num">01</div>
            <h3>Discovery Call</h3>
            <p>We map your workflow, understand your customers, and identify exactly where AI will drive the most impact.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h3>Build &amp; Configure</h3>
            <p>We build your custom agent, connect it to your tools, and train it on your business — your voice, your rules.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h3>Test &amp; Refine</h3>
            <p>We stress-test every scenario, fine-tune the conversation flow, and handle edge cases gracefully.</p>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <h3>Go Live</h3>
            <p>Your agent goes live on your existing phone number. We monitor, support, and keep improving it.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <h2>Ready to Get<br />Unchained?</h2>
          <p>Book a free 30-minute demo and hear exactly what an AI agent would sound like for your business — live, on a real call, no slides required.</p>
          <div className="cta-buttons">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              Book a Free Demo
            </a>
            <a href="#demos" className="btn-outline-dark">Hear Live Agents First</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">Unchained<span style={{ color: 'var(--orange)' }}>.</span>AI</div>
            <p>Intelligent AI voice agents for businesses that move fast and want to stay ahead.</p>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#solutions">Voice Agents</a></li>
              <li><a href="#solutions">Workflow Automation</a></li>
              <li><a href="#solutions">Systems Integration</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Industries</h4>
            <ul>
              <li><a href="#industries">Restaurants</a></li>
              <li><a href="#industries">Charters &amp; Tours</a></li>
              <li><a href="#industries">Salons &amp; Spas</a></li>
              <li><a href="#industries">Real Estate</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </li>
              <li><a href="mailto:hello@tryunchained.ai">hello@tryunchained.ai</a></li>
              <li><a href="#demos">Live Agents</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Unchained AI. All rights reserved.</p>
          <p>Fort Lauderdale, FL</p>
        </div>
      </footer>
    </>
  );
}
