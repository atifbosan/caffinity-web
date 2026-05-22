import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'

const reviews = [
  { stars: 5, text: '"Finally an app that shows exactly how much caffeine is in my body. The alertness score is spot on — I\'ve been sleeping so much better since I started using the cutoff reminder."', author: 'Sarah M.', platform: 'iOS User' },
  { stars: 5, text: '"The gamification makes it fun to stay on track. I\'m on a 12-day streak and cut back from 6 espressos to 3 a day. Love the Dark Coffee theme."', author: 'James K.', platform: 'Android User' },
  { stars: 5, text: '"As someone privacy-conscious, I love that all data stays on my device. No ads, no tracking, no account. Just a clean, beautiful app that works."', author: 'Priya L.', platform: 'iOS User' },
  { stars: 5, text: '"The sleep predictor is a game changer. I never realized how late-afternoon coffee was wrecking my sleep until Caffinity showed me exactly what was in my system at midnight."', author: 'Alex R.', platform: 'Android User' },
]

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section style={{ padding: '84px 5%', background: '#0F0A06' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <SectionLabel>User Love</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.65rem, 3.6vw, 2.6rem)', fontWeight: 800, lineHeight: 1.18, marginBottom: '13px', color: '#F5E6D0', letterSpacing: '-0.02em' }}>
            What People Are Saying
          </h2>
          <p style={{ fontSize: '1rem', color: '#B8967A', maxWidth: '400px', margin: '0 auto' }}>
            Join thousands who've transformed their caffeine habits.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {reviews.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(212,137,58,0.35)' }}
              style={{
                background: '#1A1007',
                border: '1px solid rgba(212,137,58,0.15)',
                borderRadius: '18px',
                padding: '22px 20px',
                transition: 'border-color 0.25s',
              }}
            >
              <div style={{ color: '#FFB800', fontSize: '0.95rem', marginBottom: '12px', letterSpacing: '1px' }}>
                {'★'.repeat(r.stars)}
              </div>
              <p style={{ color: '#B8967A', fontSize: '0.88rem', lineHeight: 1.74, marginBottom: '16px', fontStyle: 'italic' }}>
                {r.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D4893A, #E8A85A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.85rem', fontWeight: 700, color: '#0F0A06',
                }}>
                  {r.author[0]}
                </div>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#F5E6D0' }}>{r.author}</div>
                  <div style={{ fontSize: '0.74rem', color: '#7A6050' }}>{r.platform}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
