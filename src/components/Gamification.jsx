import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'

const challenges = [
  { icon: '✅', title: 'Stay in the Green', desc: 'Keep caffeine under your daily limit', xp: '+30 XP', done: true },
  { icon: '🌙', title: 'Early Cutoff', desc: 'No caffeine after 6:00 PM', xp: '+40 XP', done: false },
  { icon: '💧', title: 'Hydration Champion', desc: 'Log a water break', xp: '+20 XP', done: false },
  { icon: '🎯', title: 'Precision Logger', desc: 'Log 3+ drinks today', xp: '+25 XP', done: false },
]

export default function Gamification() {
  const [ref, inView] = useInView()

  return (
    <section style={{ padding: '84px 5%', background: 'linear-gradient(135deg, #231608 0%, #0F0A06 100%)' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="game-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <SectionLabel>Gamification</SectionLabel>
            <h2 style={{ fontSize: 'clamp(1.65rem, 3.6vw, 2.5rem)', fontWeight: 800, lineHeight: 1.18, marginBottom: '16px', color: '#F5E6D0', letterSpacing: '-0.02em' }}>
              Healthy Habits<br />Feel Like a Game
            </h2>
            <p style={{ color: '#B8967A', fontSize: '0.97rem', lineHeight: 1.75, marginBottom: '28px' }}>
              Earn XP, level up your rank, complete challenges, and build streaks — all while building genuinely healthier caffeine habits.
            </p>

            {/* XP Card */}
            <div style={{ background: '#1A1007', border: '1px solid rgba(212,137,58,0.2)', borderRadius: '16px', padding: '22px 20px' }}>
              <p style={{ fontSize: '0.82rem', color: '#B8967A', marginBottom: '5px' }}>Your Progress</p>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#E8A85A', marginBottom: '12px' }}>Coffee Explorer → Brew Enthusiast</div>
              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '50px', height: '9px', marginBottom: '8px' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '66%' } : {}}
                  transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                  style={{ height: '100%', borderRadius: '50px', background: 'linear-gradient(90deg, #D4893A, #E8A85A)' }}
                />
              </div>
              <p style={{ fontSize: '0.78rem', color: '#7A6050' }}>200 / 300 XP &nbsp;·&nbsp; 2 day streak 🔥</p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5E6D0', marginBottom: '18px' }}>Daily Challenges</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {challenges.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: c.done ? 'rgba(76,175,110,0.07)' : '#1A1007',
                    border: `1px solid ${c.done ? 'rgba(76,175,110,0.2)' : 'rgba(212,137,58,0.15)'}`,
                    borderRadius: '12px', padding: '13px 15px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                    <div style={{ fontSize: '20px', width: '34px', textAlign: 'center' }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.87rem', fontWeight: 600, color: '#F5E6D0' }}>{c.title}</div>
                      <div style={{ fontSize: '0.74rem', color: '#7A6050' }}>{c.desc}</div>
                    </div>
                  </div>
                  <div style={{
                    background: 'rgba(212,137,58,0.17)', color: '#E8A85A',
                    padding: '3px 10px', borderRadius: '50px',
                    fontSize: '0.76rem', fontWeight: 700, whiteSpace: 'nowrap',
                  }}>
                    {c.xp}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .game-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
