import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const AppleLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 170 170" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.906 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71 0.12 1.053 0.17 2.107 0.17 3.239z"/>
  </svg>
)

const GooglePlayLogo = () => (
  <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gp1" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#00C3FF"/><stop offset="100%" stopColor="#1BE0FF"/>
      </linearGradient>
      <linearGradient id="gp2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD800"/><stop offset="100%" stopColor="#FF8A00"/>
      </linearGradient>
      <linearGradient id="gp3" x1="0%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FF3A44"/><stop offset="100%" stopColor="#C31162"/>
      </linearGradient>
      <linearGradient id="gp4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#32A071"/><stop offset="100%" stopColor="#2DA771"/>
      </linearGradient>
    </defs>
    <path d="M27.3 0C19.7 0 13 6.5 13 15.7v480.6c0 9.2 6.7 15.7 14.3 15.7 3.4 0 6.8-1.2 9.8-3.7L303 260 37.1 3.7C34.1 1.2 30.7 0 27.3 0z" fill="url(#gp1)"/>
    <path d="M397 197L303 260l94 63 119.5-63.5c9.3-5.2 13.5-12.2 13.5-19.5s-4.2-14.3-13.5-19.5L397 197z" fill="url(#gp2)"/>
    <path d="M303 260L37.1 508.3c3 2.5 6.4 3.7 9.8 3.7 3.4 0 6.9-1.2 9.8-3.7L397 323l-94-63z" fill="url(#gp3)"/>
    <path d="M303 260l94-63L56.7 3.7C53.8 1.2 50.3 0 46.9 0c-3.4 0-6.8 1.2-9.8 3.7L303 260z" fill="url(#gp4)"/>
  </svg>
)

export default function Download() {
  const [ref, inView] = useInView()

  return (
    <section id="download" style={{
      padding: '100px 5%',
      textAlign: 'center',
      background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(212,137,58,0.13) 0%, transparent 70%), #231608',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '500px', height: '500px', borderRadius: '50%', border: '1px solid rgba(212,137,58,0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', borderRadius: '50%', border: '1px solid rgba(212,137,58,0.03)', pointerEvents: 'none' }} />

      <div ref={ref} style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <span style={{ display: 'block', fontSize: '3.5rem', marginBottom: '20px' }}>☕</span>
          <div style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.13em', color: '#D4893A', marginBottom: '12px' }}>
            Download Today
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.14, letterSpacing: '-0.03em', color: '#F5E6D0', marginBottom: '16px' }}>
            Start Tracking Smarter.<br />Sleep Better Tonight.
          </h2>
          <p style={{ color: '#B8967A', fontSize: '1.02rem', marginBottom: '36px', lineHeight: 1.7 }}>
            Free forever. No account. No ads. Your data, your device.
          </p>

          {/* Store buttons — always same row, no wrap */}
          <div style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
            marginBottom: '32px',
          }}>
            <StoreButton
              logo={<AppleLogo size={28} />}
              logoBg="transparent"
              sub="Download on the"
              name="App Store"
            />
            <StoreButton
              logo={<GooglePlayLogo />}
              logoBg="transparent"
              sub="Get it on"
              name="Google Play"
            />
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Free Forever', 'No Account', 'No Ads', '100% Private'].map(b => (
              <div key={b} style={{
                background: 'rgba(212,137,58,0.1)', border: '1px solid rgba(212,137,58,0.2)',
                borderRadius: '50px', padding: '5px 14px',
                fontSize: '0.76rem', fontWeight: 600, color: '#B8967A',
              }}>
                ✓ {b}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StoreButton({ logo, logoBg, sub, name }) {
  return (
    <motion.button
      whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(212,137,58,0.3)', borderColor: '#D4893A' }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        background: '#1A1007',
        border: '1.5px solid rgba(212,137,58,0.3)',
        color: '#F5E6D0',
        padding: '13px 22px',
        borderRadius: '14px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
        width: '190px',        /* fixed width keeps both buttons same size */
        flexShrink: 0,
      }}
    >
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        background: logoBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {logo}
      </div>
      <div style={{ textAlign: 'left', lineHeight: 1 }}>
        <span style={{ display: 'block', fontSize: '0.64rem', color: '#7A6050', marginBottom: '3px' }}>{sub}</span>
        <span style={{ display: 'block', fontSize: '0.97rem', fontWeight: 700, color: '#F5E6D0' }}>{name}</span>
      </div>
    </motion.button>
  )
}
