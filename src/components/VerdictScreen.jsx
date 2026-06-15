import { useState, useEffect } from 'react'

const PROCESSING_LINES = [
  'Initialising ATTEND v4.2.1 assessment engine...',
  'Loading risk coefficient table ATT-REF-9901...',
  'Evaluating 10 criteria against 847 compliance vectors...',
  'Cross-referencing attendee necessity matrix...',
  'Consulting Directive MCS-07 subsection 4(b)...',
  'Applying temporal displacement penalties...',
  'Auditing organiser authority credentials...',
  'Calculating existential necessity quotient...',
  'Finalising risk classification...',
  'Verdict ready. Preparing secure transmission...',
]

export default function VerdictScreen({ result, onRestart }) {
  const [phase, setPhase] = useState('processing') // processing | reveal
  const [progress, setProgress] = useState(0)
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    // Progress bar: goes to 100 over 6.5 seconds
    const progressInterval = setInterval(() => {
  setProgress((p) => {
    if (p >= 100) {
      clearInterval(progressInterval)
      return 100
    }
    return p + 1
  })
}, 60)

// Terminal lines: one every 550ms
const lineInterval = setInterval(() => {
  setVisibleLines((v) => {
    if (v >= PROCESSING_LINES.length) {
      clearInterval(lineInterval)
      return v
    }
    return v + 1
  })
}, 550)

// Reveal verdict after 6.5 seconds
const revealTimer = setTimeout(() => {
  setPhase('reveal')
}, 6500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(lineInterval)
      clearTimeout(revealTimer)
    }
  }, [])

  const isYes = result.verdict === 'YES'
  const verdictColour = isYes ? '#1a6b3a' : '#b91c1c'
  const verdictBorder = isYes ? '#1a6b3a' : '#b91c1c'

  if (phase === 'processing') {
    return (
      <div style={{
        background: '#ffffff',
        border: '1px solid #d0d7e3',
        borderRadius: '4px',
        padding: '32px 28px',
      }}>
        {/* Progress bar */}
        <div style={{
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#8a96a8',
          marginBottom: '8px',
        }}>
          Analysing response matrix
        </div>
        <div style={{
          height: '4px',
          background: '#e4e8f0',
          borderRadius: '0',
          marginBottom: '6px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '4px',
            background: '#1a5fb4',
            width: `${progress}%`,
            transition: 'width 0.06s linear',
          }} />
        </div>
        <div style={{
          fontSize: '10px',
          color: '#1a5fb4',
          letterSpacing: '0.06em',
          marginBottom: '20px',
        }}>
          {progress}% — {progress < 30
            ? 'Loading compliance database...'
            : progress < 60
            ? 'Cross-referencing risk vectors...'
            : progress < 90
            ? 'Calculating verdict...'
            : 'Finalising assessment...'}
        </div>

        {/* Terminal */}
        <div style={{
          background: '#f8f9fb',
          border: '1px solid #e4e8f0',
          borderRadius: '3px',
          padding: '14px 16px',
        }}>
          {PROCESSING_LINES.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: '11px',
                fontFamily: "'Courier New', monospace",
                letterSpacing: '0.02em',
                lineHeight: '1.9',
                color: i === visibleLines - 1 ? '#1a5fb4' : '#8a96a8',
              }}
            >
              <span style={{ color: '#d0d7e3' }}>›&nbsp;&nbsp;</span>
              {line}
            </div>
          ))}
          {visibleLines < PROCESSING_LINES.length && (
            <div style={{
              fontSize: '11px',
              fontFamily: "'Courier New', monospace",
              color: '#d0d7e3',
              lineHeight: '1.9',
            }}>
              <span>›&nbsp;&nbsp;</span>
              <span style={{
                display: 'inline-block',
                width: '6px',
                height: '12px',
                background: '#1a5fb4',
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            </div>
          )}
        </div>

        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    )
  }

  // Verdict reveal
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #d0d7e3',
      borderTop: `4px solid ${verdictBorder}`,
      borderRadius: '4px',
      padding: '32px 28px',
    }}>
      {/* Label */}
      <div style={{
        fontSize: '10px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#8a96a8',
        marginBottom: '8px',
      }}>
        Final Assessment Verdict — Case Ref: {result.caseRef}
      </div>

      {/* Verdict word */}
      <div style={{
        fontSize: '72px',
        fontWeight: '700',
        color: verdictColour,
        lineHeight: '1',
        letterSpacing: '-0.02em',
        marginBottom: '10px',
      }}>
        {result.verdict}.
      </div>

      {/* Verdict line */}
      <div style={{
        fontSize: '14px',
        color: '#5a6a82',
        lineHeight: '1.6',
        marginBottom: '28px',
        maxWidth: '500px',
      }}>
        {result.verdictLine}
      </div>

      {/* Score grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        marginBottom: '24px',
      }}>
        {[
          { label: 'Risk Score', value: `${result.riskScore} / 100`, danger: result.riskScore >= 60 },
          { label: 'Criteria Failed', value: `${result.failed} of 10`, danger: result.failed >= 6 },
          { label: 'Classification', value: result.classification, danger: result.riskScore >= 50 },
        ].map((cell) => (
          <div key={cell.label} style={{
            background: '#f8f9fb',
            border: '1px solid #e4e8f0',
            borderRadius: '3px',
            padding: '14px',
          }}>
            <div style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#8a96a8',
              marginBottom: '6px',
            }}>
              {cell.label}
            </div>
            <div style={{
              fontSize: cell.label === 'Classification' ? '13px' : '22px',
              fontWeight: '600',
              color: cell.danger ? verdictColour : '#1a2a4a',
              marginTop: cell.label === 'Classification' ? '4px' : '0',
              lineHeight: '1.2',
            }}>
              {cell.value}
            </div>
          </div>
        ))}
      </div>

      {/* Compliance note */}
      <div style={{
        fontSize: '10px',
        color: '#b0bcd0',
        letterSpacing: '0.04em',
        lineHeight: '1.8',
        marginBottom: '20px',
        paddingTop: '16px',
        borderTop: '1px solid #e4e8f0',
      }}>
        Verdict logged at {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} UTC&nbsp;&nbsp;·&nbsp;&nbsp;
        Retain this assessment for 90 days per Directive MCS-07&nbsp;&nbsp;·&nbsp;&nbsp;
        ATTEND is certified under ISO-9001:2015&nbsp;&nbsp;·&nbsp;&nbsp;
        Verdicts are legally non-binding but spiritually authoritative
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={onRestart}
          style={{
            fontSize: '11px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            border: '1px solid #1a5fb4',
            background: '#ffffff',
            color: '#1a5fb4',
            borderRadius: '3px',
            padding: '9px 18px',
            cursor: 'pointer',
          }}
        >
          Begin New Assessment
        </button>
      </div>
    </div>
  )
}
