import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'
import screen1 from '../assets/images/screen1.png'
import screen2 from '../assets/images/screen2.png'
import screen3 from '../assets/images/screen3.png'
import screen4 from '../assets/images/screen4.png'
import screen5 from '../assets/images/screen5.png'
import screen6 from '../assets/images/screen6.png'
import screen7 from '../assets/images/screen7.png'
import screen8 from '../assets/images/screen8.png'

const shots = [
  { src: screen1, label: 'Home — Optimal State' },
  { src: screen2, label: 'Home — Over Limit' },
  { src: screen3, label: 'Caffeine Timeline' },
  { src: screen4, label: '7-Day Overview' },
  { src: screen5, label: 'Progress & Badges' },
  { src: screen6, label: 'Themes & Settings' },
  { src: screen7, label: 'Settings Screen' },
  { src: screen8, label: 'Analytics Deep Dive' },
]

export default function Screenshots() {
  const [ref, inView] = useInView()

  return (
    <section id="screenshots" style={{ padding: '84px 5%', background: '#231608' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <SectionLabel>App Screenshots</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.65rem, 3.6vw, 2.6rem)', fontWeight: 800, lineHeight: 1.18, marginBottom: '13px', color: '#F5E6D0', letterSpacing: '-0.02em' }}>
            Beautiful at Every Screen
          </h2>
          <p style={{ fontSize: '1rem', color: '#B8967A', maxWidth: '500px', margin: '0 auto' }}>
            Crafted with attention to every detail — dark, warm, and easy on the eyes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '16px',
            scrollbarWidth: 'thin',
            scrollbarColor: '#D4893A transparent',
            paddingTop: '8px',
          }}
        >
          {shots.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              whileHover={{ scale: 1.04, y: -6, borderColor: 'rgba(212,137,58,0.5)' }}
              style={{
                flexShrink: 0,
                width: '200px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid rgba(212,137,58,0.15)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.55)',
                cursor: 'pointer',
                transition: 'border-color 0.3s',
                background: '#1A1007',
              }}
            >
              <img src={s.src} alt={s.label} style={{ width: '100%', display: 'block' }} loading="lazy" />
              <div style={{ background: '#1A1007', padding: '9px 12px', fontSize: '0.78rem', color: '#B8967A', textAlign: 'center', fontWeight: 500 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', color: '#7A6050', fontSize: '0.78rem', marginTop: '14px' }}
        >
          ← Scroll to see more →
        </motion.p>
      </div>
    </section>
  )
}
