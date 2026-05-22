import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'

const themes = [
  { icon: '☕', name: 'Dark Coffee', bg: 'linear-gradient(160deg,#1A1007,#0F0A06)', color: '#E8A85A', border: '#D4893A' },
  { icon: '🧁', name: 'Cream Latte', bg: 'linear-gradient(160deg,#F5EDD8,#E8D8B8)', color: '#3A2010', border: '#B8784A' },
  { icon: '⚡', name: 'Neon Energy', bg: 'linear-gradient(160deg,#0A0A1A,#161630)', color: '#8B9FFF', border: '#4A5AE8' },
  { icon: '🌙', name: 'Midnight Blue', bg: 'linear-gradient(160deg,#0A0F1E,#121828)', color: '#8BADFF', border: '#3A60C8' },
  { icon: '🖤', name: 'AMOLED Black', bg: 'linear-gradient(160deg,#090909,#000)', color: '#aaa', border: '#333' },
]

export default function Themes() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()

  return (
    <section style={{ padding: '84px 5%', background: '#231608' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <SectionLabel>Appearance</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.65rem, 3.6vw, 2.6rem)', fontWeight: 800, lineHeight: 1.18, marginBottom: '13px', color: '#F5E6D0', letterSpacing: '-0.02em' }}>
            5 Themes, One Perfect Fit
          </h2>
          <p style={{ fontSize: '1rem', color: '#B8967A', maxWidth: '500px', margin: '0 auto' }}>
            Switch themes in seconds from Settings. Each transforms the entire look and feel of the app.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }} className="theme-grid">
          {themes.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -5 }}
              onClick={() => setActive(i)}
              style={{
                background: t.bg,
                borderRadius: '20px',
                padding: '22px 14px',
                textAlign: 'center',
                border: `1.5px solid ${active === i ? t.border : 'transparent'}`,
                cursor: 'pointer',
                boxShadow: active === i ? `0 0 20px ${t.border}40` : 'none',
                transition: 'all 0.25s',
              }}
            >
              <span style={{ fontSize: '1.9rem', display: 'block', marginBottom: '9px' }}>{t.icon}</span>
              <span style={{ fontSize: '0.83rem', fontWeight: 700, color: t.color }}>{t.name}</span>
              {active === i && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{ marginTop: '8px', fontSize: '0.7rem', color: t.border }}
                >
                  ✓ Selected
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .theme-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 480px) { .theme-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}
