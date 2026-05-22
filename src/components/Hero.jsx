import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import screen1 from '../assets/images/screen2.png'
import screen2 from '../assets/images/screen3.png'
import screen3 from '../assets/images/screen4.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const stats = [
  { n: '150+', l: 'Drinks' },
  { n: '5', l: 'Themes' },
  { n: '100%', l: 'Private' },
  { n: 'Free', l: 'Forever' },
]

export default function Hero() {
  const navigate = useNavigate()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '72px 5% 60px',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(212,137,58,0.14) 0%, transparent 68%)',
    }}>
      {/* Orbs */}
      <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,137,58,0.12), transparent 70%)', filter: 'blur(80px)', top: '5%', left: '-10%', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,137,58,0.08), transparent 70%)', filter: 'blur(80px)', bottom: '5%', right: '-5%', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1140px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0)}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'rgba(212,137,58,0.12)', border: '1px solid rgba(212,137,58,0.3)',
              borderRadius: '50px', padding: '5px 14px', fontSize: '0.76rem', fontWeight: 700,
              color: '#E8A85A', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>
              ☕ Smart Caffeine Tracking
            </div>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{
            fontSize: 'clamp(2.1rem, 5.2vw, 3.8rem)', fontWeight: 900,
            lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '18px', color: '#F5E6D0',
          }}>
            Know Your <span style={{ color: '#E8A85A' }}>Caffeine.</span><br />
            Own Your <span style={{ color: '#E8A85A' }}>Day.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{ fontSize: '1.05rem', color: '#B8967A', maxWidth: '460px', marginBottom: '36px', lineHeight: 1.74 }}>
            Caffinity tracks your caffeine intake in real time, monitors alertness, predicts sleep impact, and rewards you with XP for healthy habits.
          </motion.p>

          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(212,137,58,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('download')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #D4893A, #E8A85A)',
                color: '#0F0A06', padding: '14px 26px', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.97rem', border: 'none',
                boxShadow: '0 5px 22px rgba(212,137,58,0.35)', cursor: 'pointer',
              }}
            >
              ⬇ Download Free
            </motion.button>
            <motion.button
              whileHover={{ y: -2, background: 'rgba(212,137,58,0.08)', borderColor: '#D4893A', color: '#E8A85A' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('screenshots')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'transparent', border: '1.5px solid rgba(212,137,58,0.4)',
                color: '#F5E6D0', padding: '14px 26px', borderRadius: '50px',
                fontWeight: 600, fontSize: '0.97rem', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              👀 See Screenshots
            </motion.button>
          </motion.div>

          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.l}>
                <span style={{ fontSize: '1.55rem', fontWeight: 900, color: '#E8A85A', display: 'block' }}>{s.n}</span>
                <span style={{ fontSize: '0.72rem', color: '#7A6050', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Phones */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', paddingBottom: '20px' }}
        >
          {/* Left phone */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{ position: 'absolute', left: '0%', bottom: '10px', zIndex: 1, opacity: 0.65, transform: 'scale(0.8) translateX(-10px)' }}
            className="phone-side"
          >
            <PhoneFrame src={screen2} alt="Caffinity Over Limit" />
          </motion.div>

          {/* Center phone */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <PhoneFrame src={screen1} alt="Caffinity Home Screen" large />
            <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '140px', height: '28px', borderRadius: '50%', background: 'rgba(212,137,58,0.2)', filter: 'blur(16px)' }} />
          </motion.div>

          {/* Right phone */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ position: 'absolute', right: '0%', bottom: '10px', zIndex: 1, opacity: 0.65, transform: 'scale(0.8) translateX(10px)' }}
            className="phone-side"
          >
            <PhoneFrame src={screen3} alt="Caffinity Analytics" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid p { margin: 0 auto 36px !important; }
          .hero-grid > div:first-child > div:nth-child(4) { justify-content: center; }
          .hero-grid > div:first-child > div:nth-child(5) { justify-content: center; }
          .phone-side { display: none !important; }
        }
      `}</style>
    </section>
  )
}

function PhoneFrame({ src, alt, large }) {
  return (
    <div style={{
      width: large ? '210px' : '180px',
      borderRadius: '36px',
      border: '2px solid rgba(255,255,255,0.08)',
      overflow: 'hidden',
      boxShadow: '0 28px 60px rgba(0,0,0,0.75), 0 0 0 1px rgba(0,0,0,0.5)',
      background: '#0F0A06',
    }}>
      <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} />
    </div>
  )
}
