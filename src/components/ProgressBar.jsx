export default function ProgressBar({ current, total }) {
  const segments = Array.from({ length: total }, (_, i) => {
    if (i < current) return 'done'
    if (i === current) return 'active'
    return 'empty'
  })

  const riskLabels = [
    'Minimal',
    'Minimal',
    'Low',
    'Low',
    'Moderate',
    'Moderate',
    'Elevated',
    'Elevated',
    'High',
    'High',
    'Critical',
  ]

  const riskColours = {
    Minimal: '#1a5fb4',
    Low: '#1a5fb4',
    Moderate: '#c47d00',
    Elevated: '#c47d00',
    High: '#b91c1c',
    Critical: '#b91c1c',
  }

  const riskLabel = riskLabels[current]
  const riskColour = riskColours[riskLabel]

  return (
    <div style={{
      background: '#ffffff',
      borderBottom: '1px solid #d0d7e3',
      padding: '0 32px',
    }}>
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '10px 0 12px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}>
          <span style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            color: '#8a96a8',
          }}>
            Assessment Progress — Criterion {current + 1} of {total}
          </span>
          <span style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            color: riskColour,
            fontWeight: '600',
          }}>
            Risk Accumulation: {riskLabel}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '3px' }}>
          {segments.map((state, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '4px',
                borderRadius: '0',
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
