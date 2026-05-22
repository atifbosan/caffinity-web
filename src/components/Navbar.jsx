import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import caffinityLogo from '../assets/images/caffinity-logo.png'

const CaffinityLogo = () => (
  <img
    src={caffinityLogo}
    alt="Caffinity"
    width="36"
    height="36"
    style={{ borderRadius: '10px', display: 'block', objectFit: 'cover' }}
  />
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const scrollTo = (id) => {
    setMobileOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const isHome = location.pathname === '/'
  const isContact = location.pathname === '/contact'
  const isPrivacy = location.pathname === '/privacy'

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        background: scrolled ? 'rgba(15,10,6,0.97)' : 'rgba(15,10,6,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(212,137,58,0.15)',
        padding: '0 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        transition: 'background 0.3s ease',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 16px rgba(212,137,58,0.3)', flexShrink: 0 }}>
          <CaffinityLogo />
        </div>
        <span style={{ fontSize: '1.22rem', fontWeight: 800, color: '#E8A85A', letterSpacing: '-0.02em' }}>Caffinity</span>
      </Link>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="nav-desktop">
        <NavLink active={isHome} onClick={() => navigate('/')}>Home</NavLink>
        <NavLink onClick={() => scrollTo('features')}>Features</NavLink>
        <NavLink onClick={() => scrollTo('screenshots')}>Screenshots</NavLink>
        <NavLink onClick={() => scrollTo('how-it-works')}>How It Works</NavLink>
        <NavLink active={isContact} onClick={() => navigate('/contact')}>Support</NavLink>
        <NavLink active={isPrivacy} onClick={() => navigate('/privacy')}>Privacy</NavLink>
      </div>

      {/* CTA */}
      <button
        onClick={() => scrollTo('download')}
        style={{
          background: 'linear-gradient(135deg, #D4893A, #E8A85A)',
          color: '#0F0A06',
          padding: '9px 20px',
          borderRadius: '50px',
          fontWeight: 700,
          fontSize: '0.85rem',
          border: 'none',
          boxShadow: '0 4px 18px rgba(212,137,58,0.35)',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(212,137,58,0.5)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(212,137,58,0.35)' }}
        className="nav-cta"
      >
        Download Free
      </button>

      {/* Hamburger */}
      <button
        onClick={() => setMobileOpen(o => !o)}
        style={{ background: 'none', border: 'none', color: '#E8A85A', fontSize: '1.4rem', padding: '4px', display: 'none' }}
        className="nav-hamburger"
        aria-label="Toggle menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '64px',
              left: 0,
              right: 0,
              background: 'rgba(15,10,6,0.98)',
              borderBottom: '1px solid rgba(212,137,58,0.15)',
              padding: '16px 5%',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              zIndex: 199,
            }}
          >
            {[
              { label: 'Home', action: () => navigate('/') },
              { label: 'Features', action: () => scrollTo('features') },
              { label: 'Screenshots', action: () => scrollTo('screenshots') },
              { label: 'How It Works', action: () => scrollTo('how-it-works') },
              { label: 'Download', action: () => scrollTo('download') },
              { label: 'Support', action: () => navigate('/contact') },
              { label: 'Privacy', action: () => navigate('/privacy') },
            ].map(item => (
              <button
                key={item.label}
                onClick={item.action}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#B8967A',
                  padding: '12px 8px',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  borderBottom: '1px solid rgba(212,137,58,0.08)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8A85A'}
                onMouseLeave={e => e.currentTarget.style.color = '#B8967A'}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}

function NavLink({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        color: active ? '#E8A85A' : '#B8967A',
        fontSize: '0.88rem',
        fontWeight: 500,
        cursor: 'pointer',
        padding: '4px 0',
        position: 'relative',
        transition: 'color 0.2s',
        borderBottom: active ? '2px solid #E8A85A' : '2px solid transparent',
        paddingBottom: '2px',
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#E8A85A' }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#B8967A' }}
    >
      {children}
    </button>
  )
}
