import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'
import HowItWorks from '../components/HowItWorks'
import Gamification from '../components/Gamification'
import Themes from '../components/Themes'
import Reviews from '../components/Reviews'
import PrivacyStrip from '../components/PrivacyStrip'
import Download from '../components/Download'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Caffinity — Smart Caffeine Tracking App | Know Your Caffeine, Own Your Day</title>
        <meta name="description" content="Caffinity is the smartest caffeine tracker for iOS and Android. Real-time body level, alertness score, sleep predictor, 150+ drinks, gamification, and 5 themes. 100% private and free." />
        <meta name="keywords" content="caffeine tracker, caffeine app, sleep predictor, alertness score, caffeine intake, coffee tracker, energy drink tracker, caffeine half-life, caffinity" />
        <meta property="og:title" content="Caffinity — Smart Caffeine Tracking App" />
        <meta property="og:description" content="Track your caffeine intake in real time. Monitor alertness, predict sleep impact, and build healthy habits with gamification. Free, private, offline." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caffinity.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Caffinity — Smart Caffeine Tracking App" />
        <meta name="twitter:description" content="Track your caffeine intake in real time. 150+ drinks, alertness score, sleep predictor, XP gamification. Free & private." />
        <link rel="canonical" href="https://caffinity.app" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": "Caffinity",
          "description": "Smart caffeine tracking app with real-time body level, alertness score, sleep impact predictor, gamification and 150+ drinks library.",
          "operatingSystem": "iOS, Android",
          "applicationCategory": "HealthApplication",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": "150" },
        })}</script>
      </Helmet>

      <main>
        <Hero />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Gamification />
        <Themes />
        <Reviews />
        <PrivacyStrip />
        <Download />
      </main>
    </>
  )
}
