import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'

const steps = [
  { n: '1', icon: '👤', title: 'Set Your Profile', desc: 'Enter your name, set your daily caffeine limit (default 400mg), and choose your sensitivity level.' },
  { n: '2', icon: '☕', title: 'Log Your Drinks', desc: 'Tap Quick Add or browse the full library. Espresso, cold brew, energy drinks — it\'s all there.' },
  { n: '3', icon: '📈', title: 'Watch Your Level', desc: 'Real-time active caffeine, alertness score, and sleep impact — color-coded for instant clarity.' },
  { n: '4', icon: '🏅', title: 'Earn Rewards', desc: 'Complete daily challenges, build streaks, and level up as you build healthier habits day by day.' },
]

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" style={{ padding: '84px 5%', background: '#0F0A06' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <SectionLabel>How It Works</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.65rem, 3.6vw, 2.6rem)', fontWeight: 800, lineHeight: 1.18, marginBottom: '13px', color: '#F5E6D0', letterSpacing: '-0.02em' }}>
            Up and Running in Minutes
          </h2>
          <p style={{ fontSize: '1rem', color: '#B8967A', maxWidth: '500px', margin: '0 auto' }}>
            No account needed. No cloud sync. Just open and track.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '32px', position: 'relative' }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              style={{ textAlign: 'center', padding: '0 12px' }}
            >
              {/* Connector line (not on last) */}
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: '#1A1007',
                  border: '2px solid #D4893A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', fontWeight: 900, color: '#D4893A',
                  margin: '0 auto',
                  boxShadow: '0 0 24px rgba(212,137,58,0.2)',
                }}>
                  {s.icon}
                </div>
                <div style={{
                  position: 'absolute', top: '-8px', right: '-8px',
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D4893A, #E8A85A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.72rem', fontWeight: 800, color: '#0F0A06',
                }}>
                  {s.n}
                </div>
              </div>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, marginBottom: '9px', color: '#F5E6D0' }}>{s.title}</h3>
              <p style={{ color: '#B8967A', fontSize: '0.87rem', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
