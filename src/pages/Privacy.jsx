import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const sections = [
  {
    num: '1',
    title: 'Who We Are',
    content: (
      <p>Caffinity is an independent mobile application for iOS and Android. Questions? <a href="mailto:atifbosan63@gmail.com" style={{ color: '#E8A85A' }}>atifbosan63@gmail.com</a></p>
    ),
  },
  {
    num: '2',
    title: 'Information We Collect',
    content: (
      <>
        <div className="highlight-green">✅ <strong>The short answer: We collect no personal information whatsoever.</strong></div>
        <p style={{ marginTop: '14px' }}>The following data exists <strong>only on your local device</strong>:</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#B8967A', fontSize: '0.9rem', marginTop: '10px' }}>
          <li>Your name, daily caffeine limit and sensitivity preference</li>
          <li>Optional profile details — age, body weight, sex, bedtime and wake time — used only to personalise your caffeine estimates</li>
          <li>Water intake logs</li>
          <li>Drink logs, timestamps, and caffeine amounts</li>
          <li>XP points, streak counts, badges, and level progress</li>
          <li>Theme selection, custom drinks, and schedule settings</li>
        </ul>
        <div className="highlight-orange" style={{ marginTop: '12px' }}>⚠️ <strong>If you delete the app, all data is deleted with it.</strong></div>
      </>
    ),
  },
  {
    num: '3',
    title: 'No Third-Party SDKs',
    content: (
      <>
        <p>We do not use:</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#B8967A', fontSize: '0.9rem', marginTop: '10px' }}>
          <li>Advertising SDKs (AdMob, Meta Audience Network, Unity Ads)</li>
          <li>Analytics SDKs (Google Analytics, Firebase Analytics, Mixpanel)</li>
          <li>Crash-reporting SDKs (Crashlytics, Sentry, Bugsnag)</li>
          <li>Social media SDKs (Facebook SDK, Twitter SDK)</li>
          <li>Attribution SDKs (Adjust, AppsFlyer, Branch)</li>
        </ul>
      </>
    ),
  },
  {
    num: '4',
    title: 'Data Sharing',
    content: <div className="highlight-green">✅ <strong>We do not share your data with anyone, under any circumstances.</strong></div>,
  },
  {
    num: '5',
    title: 'Permissions We Request',
    content: (
      <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#B8967A', fontSize: '0.9rem' }}>
        <li><strong style={{ color: '#F5E6D0' }}>Local Storage</strong> — To save your logs, settings, and progress on-device.</li>
        <li><strong style={{ color: '#F5E6D0' }}>Local Notifications (optional)</strong> — Device-only reminders. No external push server.</li>
        <li><strong style={{ color: '#F5E6D0' }}>Apple Health / Health Connect (optional)</strong> — See section 6.</li>
      </ul>
    ),
  },
  {
    num: '6',
    title: 'Apple Health & Health Connect',
    content: (
      <>
        <p>Health integration is <strong style={{ color: '#F5E6D0' }}>optional</strong> and only works if you grant permission.</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#B8967A', fontSize: '0.9rem', marginTop: '10px' }}>
          <li><strong style={{ color: '#F5E6D0' }}>Written to Health:</strong> the caffeine and water intake you log, so it appears with your other nutrition data.</li>
          <li><strong style={{ color: '#F5E6D0' }}>Read from Health:</strong> your sleep data (asleep, awake and in-bed time), used only on your device to personalise your caffeine cutoff and wellness badges.</li>
        </ul>
        <div className="highlight-green" style={{ marginTop: '12px' }}>✅ <strong>Health data is never used for advertising, never sold, and never shared with third parties.</strong></div>
        <p style={{ marginTop: '12px' }}>You can change or revoke access at any time in the Health app (iOS) or Health Connect settings (Android). Caffinity provides informational estimates for general wellness only and is not a medical device.</p>
      </>
    ),
  },
  {
    num: '7',
    title: 'Widgets & Apple Watch',
    content: <p>Home Screen widgets and the Apple Watch app show your caffeine and water totals. These numbers are passed between the app, its widgets and your paired Apple Watch <strong style={{ color: '#F5E6D0' }}>on your own devices only</strong>, using Apple's on-device App Groups and Watch Connectivity. Nothing is sent to a server.</p>,
  },
  {
    num: '8',
    title: 'Sharing & Exporting',
    content: <p>When you choose to share a badge or weekly summary, or export your data as CSV or PDF, the file is created on your device and handed to your system share sheet. Where it goes next is entirely your choice — nothing is shared automatically.</p>,
  },
  {
    num: '9',
    title: 'In-App Purchases & Subscriptions',
    content: (
      <>
        <p>Caffinity offers optional auto-renewable subscriptions — <strong style={{ color: '#F5E6D0' }}>Caffinity Premium (Monthly)</strong> and <strong style={{ color: '#F5E6D0' }}>Caffinity Premium (Annual)</strong> — that unlock premium features. These are billed entirely through the Apple App Store on iOS, or Google Play on Android.</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#B8967A', fontSize: '0.9rem', marginTop: '12px' }}>
          <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
          <li>Subscriptions auto-renew unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
          <li>Your account will be charged for renewal within 24 hours prior to the end of the current period, at the price you agreed to.</li>
          <li>You can manage or cancel your subscription anytime in <strong style={{ color: '#F5E6D0' }}>Apple ID Account Settings</strong> (Settings → [Your Name] → Subscriptions on iOS) — cancellation isn't possible directly through Caffinity since billing is handled entirely by Apple.</li>
          <li>Any unused portion of a free trial period (if offered) is forfeited when you purchase a subscription.</li>
          <li>On Android, subscriptions are billed and managed by Google Play (Play Store → Payments &amp; subscriptions).</li>
        </ul>
        <div className="highlight-orange" style={{ marginTop: '14px' }}>
          📄 <strong>Full Terms of Use (End User License Agreement):</strong>{' '}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener" style={{ color: '#E8A85A', textDecoration: 'underline' }}>
            apple.com/legal/internet-services/itunes/dev/stdeula
          </a>
        </div>
        <p style={{ marginTop: '14px' }}>Purchases are subject to Apple's or Google's own terms and refund policies. Caffinity does not process payments, store payment details, or have access to your card or Apple ID information.</p>
        <div className="highlight-green" style={{ marginTop: '12px' }}>✅ <strong>No personal or financial data from the transaction is collected or stored by Caffinity itself</strong> — consistent with our no-data-collection approach described above.</div>
      </>
    ),
  },
  {
    num: '10',
    title: "Children's Privacy",
    content: <p>Caffinity is not directed at children under 13. We collect no personal information from any user. Contact <a href="mailto:atifbosan63@gmail.com" style={{ color: '#E8A85A' }}>atifbosan63@gmail.com</a> to request deletion of any contact form messages.</p>,
  },
  {
    num: '11',
    title: 'Contact Us',
    content: (
      <>
        <p><strong style={{ color: '#F5E6D0' }}>Email:</strong> <a href="mailto:atifbosan63@gmail.com" style={{ color: '#E8A85A' }}>atifbosan63@gmail.com</a></p>
        <p style={{ marginTop: '10px', color: '#E8A85A', cursor: 'pointer', fontSize: '0.9rem' }} onClick={() => window.location.assign(import.meta.env.BASE_URL + 'contact')}>→ Contact &amp; Support Page</p>
      </>
    ),
  },
]

const summaryPoints = [
  { icon: '📵', title: 'No Third-Party SDKs', desc: 'Zero analytics, ads, or tracking' },
  { icon: '📱', title: 'On-Device Only', desc: 'All data stored locally' },
  { icon: '🚫', title: 'No Data Sharing', desc: 'Never shared with anyone' },
  { icon: '🌐', title: 'Works Offline', desc: 'No account needed' },
  { icon: '🎯', title: 'No Ads. Ever.', desc: 'Free, zero advertisements' },
  { icon: '🔒', title: 'Secure Payments', desc: 'Handled by Apple or Google, no card data touches our app' },
]

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Caffinity</title>
        <meta name="description" content="Caffinity's privacy policy. We use no third-party SDKs, collect no personal data, and never share your information. Your health data stays on your device." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://caffinity.app/privacy" />
      </Helmet>

      <main>
        {/* Header */}
        <div style={{ padding: '60px 5% 52px', textAlign: 'center', background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(76,175,110,0.08) 0%, transparent 68%)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(76,175,110,0.10)', border: '1px solid rgba(76,175,110,0.3)', borderRadius: '50px', padding: '5px 14px', fontSize: '0.76rem', fontWeight: 700, color: '#4CAF6E', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              🔒 Privacy First
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4.2vw, 2.9rem)', fontWeight: 800, marginBottom: '12px', lineHeight: 1.18, color: '#F5E6D0', letterSpacing: '-0.02em' }}>
              Privacy Policy
            </h1>
            <p style={{ color: '#7A6050', fontSize: '0.85rem', marginBottom: '12px' }}>
              Effective: January 1, 2025 &nbsp;·&nbsp; Last Updated: November 26, 2026
            </p>
            <p style={{ color: '#B8967A', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
              Caffinity is built on a simple principle: <strong style={{ color: '#F5E6D0' }}>your health data is yours.</strong> We do not collect it, store it in the cloud, or share it with anyone.
            </p>
          </motion.div>
        </div>

        {/* Core commitment banner */}
        <div style={{ padding: '0 5%', marginBottom: '0' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ maxWidth: '820px', margin: '0 auto 32px', background: 'rgba(76,175,110,0.08)', border: '1.5px solid rgba(76,175,110,0.2)', borderRadius: '16px', padding: '22px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}
          >
            <span style={{ fontSize: '1.8rem', flexShrink: 0, marginTop: '2px' }}>🛡️</span>
            <div>
              <h3 style={{ fontSize: '0.97rem', color: '#4CAF6E', marginBottom: '8px', fontWeight: 700 }}>Our Core Privacy Commitment</h3>
              <p style={{ color: '#B8967A', fontSize: '0.87rem', lineHeight: 1.72 }}>
                <strong style={{ color: '#F5E6D0' }}>Caffinity does not use any third-party SDKs.</strong> No advertising, analytics, crash-reporting, or social media SDKs. Every byte of data you enter is stored <strong style={{ color: '#F5E6D0' }}>only on your device</strong> and is never transmitted to any server, shared with any company, or sold to any third party.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div style={{ padding: '0 5% 76px' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {/* Summary grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '48px' }}
            >
              {summaryPoints.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  style={{ background: '#1A1007', border: '1px solid rgba(212,137,58,0.15)', borderRadius: '16px', padding: '16px 12px', textAlign: 'center' }}
                >
                  <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '8px' }}>{p.icon}</span>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#E8A85A', marginBottom: '4px' }}>{p.title}</div>
                  <div style={{ fontSize: '0.74rem', color: '#7A6050', lineHeight: 1.5 }}>{p.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Sections */}
            {sections.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.22rem', fontWeight: 800, marginBottom: '14px', color: '#E8A85A', lineHeight: 1.3 }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '7px', background: 'rgba(212,137,58,0.13)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.83rem', fontWeight: 700, color: '#D4893A', flexShrink: 0 }}>{s.num}</span>
                    {s.title}
                  </h2>
                  <div style={{ color: '#B8967A', fontSize: '0.9rem', lineHeight: 1.72 }}>
                    {s.content}
                  </div>
                </div>
                {i < sections.length - 1 && <div style={{ height: '1px', background: 'rgba(212,137,58,0.1)', marginBottom: '32px' }} />}
              </motion.div>
            ))}

            {/* Promise banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ background: 'rgba(76,175,110,0.07)', border: '1.5px solid rgba(76,175,110,0.18)', borderRadius: '16px', padding: '22px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start', marginTop: '12px' }}
            >
              <span style={{ fontSize: '1.7rem', flexShrink: 0 }}>☕</span>
              <div>
                <h3 style={{ fontSize: '0.97rem', color: '#E8A85A', marginBottom: '7px', fontWeight: 700 }}>Our Promise</h3>
                <p style={{ color: '#B8967A', fontSize: '0.87rem', lineHeight: 1.72 }}>
                  Caffinity was built to serve you, not to monetize your data. Your coffee habits are yours. We just help you track them.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <style>{`
        .highlight-green {
          background: rgba(76,175,110,0.08);
          border-left: 3px solid #4CAF6E;
          border-radius: 6px;
          padding: 12px 15px;
          color: #8BE8A8;
          font-size: 0.88rem;
          line-height: 1.6;
        }
        .highlight-orange {
          background: rgba(212,137,58,0.08);
          border-left: 3px solid #D4893A;
          border-radius: 6px;
          padding: 12px 15px;
          color: #E8A85A;
          font-size: 0.88rem;
          line-height: 1.6;
        }
      `}</style>
    </>
  )
}
