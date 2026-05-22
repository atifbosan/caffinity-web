import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'

const features = [
  { icon: '⚡', color: 'rgba(212,137,58,0.14)', title: 'Real-Time Caffeine Body Level', desc: 'See exactly how much caffeine is active in your body right now with live half-life decay calculations. Never guess again.' },
  { icon: '🎯', color: 'rgba(76,175,110,0.14)', title: 'Alertness Score', desc: 'Converts your caffeine level into an intuitive percentage — from Low Stimulation to Peak Focus. Know your mental state at a glance.' },
  { icon: '🌙', color: 'rgba(107,159,228,0.14)', title: 'Sleep Impact Predictor', desc: 'Real-time sleep forecast. Know how much caffeine stays in your system at bedtime and get a smart cutoff recommendation.' },
  { icon: '📊', color: 'rgba(212,137,58,0.14)', title: '7-Day Analytics', desc: 'Review weekly patterns with bar charts, spot over-limit days in red, and see your total weekly intake and daily averages.' },
  { icon: '🏆', color: 'rgba(76,175,110,0.14)', title: 'Gamification & XP', desc: 'Earn XP for healthy habits, complete daily challenges, build streaks, and level up from Coffee Explorer to Brew Master.' },
  { icon: '☕', color: 'rgba(107,159,228,0.14)', title: '150+ Drink Library', desc: 'Log espresso, cold brew, matcha, energy drinks, supplements and more — from Starbucks to Bang. Add custom drinks.' },
  { icon: '🎨', color: 'rgba(224,82,82,0.14)', title: '5 Beautiful Themes', desc: 'Dark Coffee, Cream Latte, Neon Energy, Midnight Blue, AMOLED Black. Each transforms the entire app with a unique identity.' },
  { icon: '🔒', color: 'rgba(212,137,58,0.14)', title: '100% Private & Offline', desc: 'All data stays on your device. No third-party analytics, no ad SDKs, never shared. Your health data is yours, period.' },
  { icon: '⏱', color: 'rgba(76,175,110,0.14)', title: 'Caffeine Timeline', desc: 'Visualize your caffeine curve throughout the day. See your peak, when you cross your limit, and when it is safe again.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" style={{ padding: '84px 5%', background: 'linear-gradient(180deg, #0F0A06 0%, #231608 100%)' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          style={{ marginBottom: '52px' }}
        >
          <SectionLabel>Why Caffinity</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.65rem, 3.6vw, 2.6rem)', fontWeight: 800, lineHeight: 1.18, marginBottom: '13px', color: '#F5E6D0', letterSpacing: '-0.02em' }}>
            Everything You Need to<br />Master Your Caffeine
          </h2>
          <p style={{ fontSize: '1rem', color: '#B8967A', maxWidth: '520px' }}>
            A complete caffeine intelligence system built for modern, health-conscious people.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={card}
              whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.55)', borderColor: 'rgba(212,137,58,0.45)' }}
              style={{
                background: '#1A1007',
                border: '1px solid rgba(212,137,58,0.15)',
                borderRadius: '18px',
                padding: '26px 22px',
                cursor: 'default',
                transition: 'border-color 0.25s',
              }}
            >
              <div style={{
                width: '50px', height: '50px', borderRadius: '13px',
                background: f.color, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '22px', marginBottom: '15px',
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: '#F5E6D0', lineHeight: 1.3 }}>{f.title}</h3>
              <p style={{ color: '#B8967A', fontSize: '0.88rem', lineHeight: 1.7 }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
