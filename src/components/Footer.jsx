import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import caffinityLogo from '../assets/images/caffinity-logo.png'

const AppleLogo = () => (
  <svg width="15" height="15" viewBox="0 0 170 170" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.906 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71 0.12 1.053 0.17 2.107 0.17 3.239z"/>
  </svg>
)

const GooglePlayLogo = () => (
  <svg width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="gpf1" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stopColor="#00C3FF"/><stop offset="100%" stopColor="#1BE0FF"/>
    </linearGradient>
    <linearGradient id="gpf2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FFD800"/><stop offset="100%" stopColor="#FF8A00"/>
    </linearGradient>
    <linearGradient id="gpf3" x1="0%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stopColor="#FF3A44"/><stop offset="100%" stopColor="#C31162"/>
    </linearGradient>
    <linearGradient id="gpf4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#32A071"/><stop offset="100%" stopColor="#2DA771"/>
    </linearGradient>
    <path d="M27.3 0C19.7 0 13 6.5 13 15.7v480.6c0 9.2 6.7 15.7 14.3 15.7 3.4 0 6.8-1.2 9.8-3.7L303 260 37.1 3.7C34.1 1.2 30.7 0 27.3 0z" fill="url(#gpf1)"/>
    <path d="M397 197L303 260l94 63 119.5-63.5c9.3-5.2 13.5-12.2 13.5-19.5s-4.2-14.3-13.5-19.5L397 197z" fill="url(#gpf2)"/>
    <path d="M303 260L37.1 508.3c3 2.5 6.4 3.7 9.8 3.7 3.4 0 6.9-1.2 9.8-3.7L397 323l-94-63z" fill="url(#gpf3)"/>
    <path d="M303 260l94-63L56.7 3.7C53.8 1.2 50.3 0 46.9 0c-3.4 0-6.8 1.2-9.8 3.7L303 260z" fill="url(#gpf4)"/>
  </svg>
)

const CaffinityLogo = () => (
  <img src={caffinityLogo} alt="Caffinity" width="32" height="32" style={{ borderRadius: '8px', display: 'block' }} />
)

export default function Footer() {
  const navigate = useNavigate()

  const scrollTo = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer style={{ background: '#080503', borderTop: '1px solid rgba(212,137,58,0.12)', padding: '48px 5% 28px' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        {/* Top */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', marginBottom: '40px' }}>
          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 12px rgba(212,137,58,0.2)' }}>
                <CaffinityLogo />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#E8A85A' }}>Caffinity</span>
            </div>
            <p style={{ color: '#7A6050', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '16px' }}>
              Know your caffeine. Own your day. Smart caffeine tracking with real-time analytics and gamification.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <StoreBtn logo={<AppleLogo />} logoBg="transparent" sub="Download on the" name="App Store" />
              <StoreBtn logo={<GooglePlayLogo />} logoBg="transparent" sub="Get it on" name="Google Play" />
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <FooterCol title="App">
              <FooterLink onClick={() => navigate('/')}>Home</FooterLink>
              <FooterLink onClick={() => scrollTo('features')}>Features</FooterLink>
              <FooterLink onClick={() => scrollTo('screenshots')}>Screenshots</FooterLink>
              <FooterLink onClick={() => scrollTo('how-it-works')}>How It Works</FooterLink>
              <FooterLink onClick={() => scrollTo('download')}>Download</FooterLink>
            </FooterCol>
            <FooterCol title="Support">
              <FooterLink onClick={() => navigate('/contact')}>Contact Us</FooterLink>
              <FooterLink onClick={() => navigate('/contact#faq')}>FAQ</FooterLink>
              <FooterLink href="mailto:atifbosan63@gmail.com">Email Support</FooterLink>
            </FooterCol>
            <FooterCol title="Legal">
              <FooterLink onClick={() => navigate('/privacy')}>Privacy Policy</FooterLink>
              <FooterLink onClick={() => navigate('/contact')}>Terms of Use</FooterLink>
            </FooterCol>
          </div>
        </div>

        {/* Privacy strip */}
        <div style={{
          background: 'rgba(76,175,110,0.08)',
          border: '1px solid rgba(76,175,110,0.15)',
          borderRadius: '12px',
          padding: '14px 20px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '1.1rem' }}>🔒</span>
          <p style={{ color: '#8BE8A8', fontSize: '0.84rem', lineHeight: 1.6 }}>
            <strong style={{ color: '#6EE09A' }}>100% Private.</strong> Caffinity uses <strong style={{ color: '#6EE09A' }}>no third-party SDKs</strong> — no analytics, no ads, no tracking. All your data stays on your device and is <strong style={{ color: '#6EE09A' }}>never shared with anyone</strong>.
          </p>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid rgba(212,137,58,0.08)', paddingTop: '20px' }}>
          <p style={{ color: '#7A6050', fontSize: '0.78rem' }}>© 2025 Caffinity. All rights reserved.</p>
          <p style={{ color: '#7A6050', fontSize: '0.78rem' }}>Made with ☕ for caffeine enthusiasts worldwide.</p>
        </div>
      </div>
    </footer>
  )
}

function StoreBtn({ logo, logoBg = 'transparent', sub, name }) {
  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(212,137,58,0.2)', borderColor: '#D4893A' }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        background: '#1A1007',
        border: '1.5px solid rgba(212,137,58,0.3)',
        color: '#F5E6D0',
        padding: '8px 14px',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        flexShrink: 0,
      }}
    >
      <div style={{ width: '24px', height: '24px', borderRadius: '5px', background: logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {logo}
      </div>
      <div style={{ textAlign: 'left' }}>
        <span style={{ display: 'block', fontSize: '0.62rem', color: '#7A6050' }}>{sub}</span>
        <span style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700 }}>{name}</span>
      </div>
    </motion.button>
  )
}

function FooterCol({ title, children }) {
  return (
    <div>
      <p style={{ color: '#E8A85A', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>{title}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {children}
      </div>
    </div>
  )
}

function FooterLink({ children, onClick, href }) {
  const style = {
    color: '#7A6050',
    fontSize: '0.85rem',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    textAlign: 'left',
    transition: 'color 0.2s',
    fontFamily: 'inherit',
  }
  const hover = { color: '#E8A85A' }
  if (href) {
    return <a href={href} style={style} onMouseEnter={e => e.currentTarget.style.color = '#E8A85A'} onMouseLeave={e => e.currentTarget.style.color = '#7A6050'}>{children}</a>
  }
  return <button onClick={onClick} style={style} onMouseEnter={e => e.currentTarget.style.color = '#E8A85A'} onMouseLeave={e => e.currentTarget.style.color = '#7A6050'}>{children}</button>
}
