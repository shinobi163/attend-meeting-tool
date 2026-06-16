export default function ProgressBar({ current, total }) {
  const segments = Array.from({ length: total }, (_, i) => {
    if (i < current) return 'done'
    if (i === current) return 'active'
    return 'empty'
  })

  return (
    <div style={{
      background: '#ffffff',
      borderBottom: '1px solid #d0d7e3',
      padding: '0 32px',
    }}>
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '10px 0',
      }}>
        <div style={{ display: 'flex', gap: '3px' }}>
          {segments.map((state, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '4px',
                background:
                  state === 'done'
                    ? '#1a5fb4'
                    : state === 'active'
                    ? '#5b8dd9'
                    : '#e4e8f0',
                transition: 'background 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
