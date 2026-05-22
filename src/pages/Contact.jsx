import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const faqs = [
  { q: 'Is Caffinity free to use?', a: 'Yes! All core features — real-time tracking, alertness scores, sleep predictions, gamification, and all 5 themes — are completely free.' },
  { q: 'Does Caffinity require an account or internet?', a: 'No account and no internet required. Caffinity works fully offline. All data stays on your device and is never transmitted anywhere.' },
  { q: 'How accurate are the caffeine calculations?', a: 'Caffinity uses scientifically validated pharmacokinetic models based on caffeine\'s average 5–6 hour half-life. Individual metabolism varies but our models give a reliable estimate for most people.' },
  { q: 'Can I add custom drinks not in the library?', a: 'Yes! Create custom drinks by entering a name and caffeine amount in mg. Perfect for niche energy drinks or homemade cold brew.' },
  { q: 'How do I change my daily caffeine limit?', a: 'Go to Settings → Daily Limit under Caffeine Settings. You can set it from 50mg to 800mg. The default is 400mg per day.' },
  { q: 'My data disappeared — how do I recover it?', a: 'Caffinity stores data locally on your device. Uninstalling the app clears all data permanently. Use iCloud/Google Backup to preserve data.' },
  { q: 'Is Caffinity on both iOS and Android?', a: 'Yes! Caffinity is available on both the App Store (iOS) and Google Play (Android). Search "Caffinity" to find it.' },
]

export default function Contact() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.firstName.value
    const email = form.email.value
    const category = form.category.value
    const message = form.message.value
    const device = form.device?.value || ''
    const subject = encodeURIComponent(`[${category}] Message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCategory: ${category}\nDevice: ${device}\n\nMessage:\n${message}`)
    window.location.href = `mailto:atifbosan63@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact & Support — Caffinity</title>
        <meta name="description" content="Contact Caffinity support. We respond to every message within 24-48 hours. Bug reports, feature requests, and general questions welcome." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://caffinity.app/contact" />
      </Helmet>

      <main>
        {/* Header */}
        <div style={{
          padding: '60px 5% 52px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,137,58,0.10) 0%, transparent 68%)',
        }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(212,137,58,0.12)', border: '1px solid rgba(212,137,58,0.3)', borderRadius: '50px', padding: '5px 14px', fontSize: '0.76rem', fontWeight: 700, color: '#E8A85A', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              💬 We're Here to Help
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4.2vw, 2.9rem)', fontWeight: 800, marginBottom: '12px', lineHeight: 1.18, color: '#F5E6D0', letterSpacing: '-0.02em' }}>
              Contact & Support
            </h1>
            <p style={{ color: '#B8967A', fontSize: '1rem', maxWidth: '460px', margin: '0 auto' }}>
              Have a question, feedback, or found a bug? We respond to every message.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div style={{ maxWidth: '1060px', margin: '0 auto', padding: '8px 5% 76px', display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: '40px', alignItems: 'start' }} className="contact-grid">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {[
              { icon: '✉️', title: 'Email Support', body: <><p style={{ color: '#B8967A', fontSize: '0.85rem', lineHeight: 1.66 }}>We get back to you within 24–48 hours.</p><p style={{ marginTop: '8px' }}><a href="mailto:atifbosan63@gmail.com" style={{ color: '#E8A85A', fontSize: '0.85rem' }}>atifbosan63@gmail.com</a></p></> },
              { icon: '🐛', title: 'Bug Reports', body: <p style={{ color: '#B8967A', fontSize: '0.85rem', lineHeight: 1.66 }}>Select "Bug Report" in the form. Include your device model and app version for faster help.</p> },
              { icon: '💡', title: 'Feature Requests', body: <p style={{ color: '#B8967A', fontSize: '0.85rem', lineHeight: 1.66 }}>Tell us what drink to add or what feature would make Caffinity better for you.</p> },
              { icon: '⏱', title: 'Response Time', body: <p style={{ color: '#B8967A', fontSize: '0.85rem', lineHeight: 1.66 }}>Typically <strong style={{ color: '#E8A85A' }}>24–48 hours</strong> on weekdays.</p> },
              { icon: '🔒', title: 'Your Privacy', body: <p style={{ color: '#B8967A', fontSize: '0.85rem', lineHeight: 1.66 }}>We only use your email to reply. Never sold or shared. <button onClick={() => navigate('/privacy')} style={{ color: '#E8A85A', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', padding: 0, fontFamily: 'inherit' }}>Privacy Policy →</button></p> },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                whileHover={{ y: -2, borderColor: 'rgba(212,137,58,0.4)' }}
                style={{ background: '#1A1007', border: '1px solid rgba(212,137,58,0.15)', borderRadius: '16px', padding: '18px 16px', transition: 'all 0.2s' }}
              >
                <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '8px' }}>{c.icon}</span>
                <h3 style={{ fontSize: '0.94rem', fontWeight: 700, marginBottom: '6px', color: '#F5E6D0' }}>{c.title}</h3>
                {c.body}
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ background: '#1A1007', border: '1px solid rgba(212,137,58,0.15)', borderRadius: '20px', padding: '36px 30px' }}
          >
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '5px', color: '#F5E6D0' }}>Send Us a Message</h2>
            <p style={{ color: '#B8967A', fontSize: '0.88rem', marginBottom: '28px' }}>Fill out the form and we'll get back to you as soon as possible.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 20px' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#E8A85A', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>Message Sent!</h3>
                <p style={{ color: '#B8967A', fontSize: '0.9rem' }}>Your email client should have opened. We'll get back to you within 24–48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                  <FormField label="First Name *">
                    <input name="firstName" type="text" placeholder="Your first name" required style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                  </FormField>
                  <FormField label="Last Name">
                    <input name="lastName" type="text" placeholder="Your last name" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                  </FormField>
                </div>
                <FormField label="Email Address *" style={{ marginBottom: '16px' }}>
                  <input name="email" type="email" placeholder="your@email.com" required style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </FormField>
                <FormField label="Category *" style={{ marginBottom: '16px' }}>
                  <select name="category" required style={{ ...inputStyle, appearance: 'none' }} onFocus={focusStyle} onBlur={blurStyle}>
                    <option value="" disabled>Select a category…</option>
                    <option>General Question</option>
                    <option>Bug Report</option>
                    <option>Feature Request</option>
                    <option>Account & Data</option>
                    <option>Other</option>
                  </select>
                </FormField>
                <FormField label="Device & App Version (optional)" style={{ marginBottom: '16px' }}>
                  <input name="device" type="text" placeholder="e.g. iPhone 15 Pro, Caffinity v1.2" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </FormField>
                <FormField label="Message *" style={{ marginBottom: '22px' }}>
                  <textarea name="message" placeholder="Describe your question or issue in detail…" required rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }} onFocus={focusStyle} onBlur={blurStyle} />
                </FormField>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(212,137,58,0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%', padding: '14px',
                    background: 'linear-gradient(135deg, #D4893A, #E8A85A)',
                    color: '#0F0A06', border: 'none', borderRadius: '50px',
                    fontSize: '0.97rem', fontWeight: 700,
                    boxShadow: '0 5px 22px rgba(212,137,58,0.3)',
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Send Message →
                </motion.button>
                <p style={{ marginTop: '12px', fontSize: '0.76rem', color: '#7A6050', textAlign: 'center' }}>
                  By submitting you agree to our{' '}
                  <button onClick={() => navigate('/privacy')} style={{ color: '#E8A85A', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.76rem', padding: 0, fontFamily: 'inherit' }}>
                    Privacy Policy
                  </button>.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* FAQ */}
        <div id="faq" style={{ background: '#231608', padding: '56px 5% 76px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.13em', color: '#D4893A', marginBottom: '9px' }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.45rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '32px', color: '#F5E6D0' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 760px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}

function FormField({ label, children, style }) {
  return (
    <div style={{ marginBottom: '0', ...style }}>
      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#B8967A', marginBottom: '6px' }}>{label}</label>
      {children}
    </div>
  )
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div style={{ background: '#1A1007', border: '1px solid rgba(212,137,58,0.15)', borderRadius: '12px', overflow: 'hidden' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', color: '#F5E6D0',
          padding: '16px 18px', fontSize: '0.92rem', fontWeight: 600,
          textAlign: 'left', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', cursor: 'pointer', fontFamily: 'inherit',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#E8A85A'}
        onMouseLeave={e => e.currentTarget.style.color = '#F5E6D0'}
      >
        {q}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: '#D4893A', fontSize: '0.85rem', flexShrink: 0, marginLeft: '10px' }}
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ padding: '0 18px 16px', color: '#B8967A', fontSize: '0.87rem', lineHeight: 1.72 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  background: '#231608',
  border: '1.5px solid rgba(212,137,58,0.18)',
  borderRadius: '10px',
  padding: '10px 14px',
  color: '#F5E6D0',
  fontSize: '0.91rem',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  display: 'block',
}

function focusStyle(e) {
  e.target.style.borderColor = '#D4893A'
  e.target.style.boxShadow = '0 0 0 3px rgba(212,137,58,0.13)'
}

function blurStyle(e) {
  e.target.style.borderColor = 'rgba(212,137,58,0.18)'
  e.target.style.boxShadow = 'none'
}
