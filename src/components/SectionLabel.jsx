export default function SectionLabel({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '0.72rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.13em',
      color: '#D4893A',
      marginBottom: '9px',
    }}>
      {children}
    </span>
  )
}
