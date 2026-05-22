import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function PrivacyStrip() {
  const [ref, inView] = useInView()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        background: 'rgba(76,175,110,0.07)',
        borderTop: '1px solid rgba(76,175,110,0.15)',
        borderBottom: '1px solid rgba(76,175,110,0.15)',
        padding: '22px 5%',
        textAlign: 'center',
      }}
    >
      <p style={{ color: '#8BE8A8', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
        🔒 <strong style={{ color: '#6EE09A' }}>100% Private.</strong> Caffinity uses <strong style={{ color: '#6EE09A' }}>no third-party SDKs</strong> — no analytics, no ads, no tracking. All your data is stored only on your device and is <strong style={{ color: '#6EE09A' }}>never shared with anyone</strong>.
      </p>
    </motion.div>
  )
}
