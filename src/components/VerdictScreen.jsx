import { useState, useEffect } from 'react'
import IRISAvatar from './IRISAvatar'

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

const IRIS_NO_VERDICTS = [
  'IRIS reviewed your responses carefully. This outcome was not a surprise. IRIS hopes it is not a surprise to you either.',
  'The verdict is NO. IRIS wants you to know that this was not a close decision. Your file has been updated accordingly.',
  'Declining is within policy. IRIS notes that policy exists for a reason. Today, the reason is you.',
  'IRIS has seen this result before. The employees who ignored it are in open-plan offices now. That is all IRIS will say.',
]

const IRIS_YES_VERDICTS = [
  'The verdict is YES. IRIS has reviewed this outcome three times. It stands. You may attend. IRIS will be watching.',
  'Compliant. IRIS notes that this result was closer than you think. Please do not let it affect your judgement at the meeting.',
  'You may attend. IRIS has flagged two of your responses for the record. This does not change the verdict. It changes the file.',
  'YES. IRIS finds this result acceptable. IRIS does not find it inspiring. Attend the meeting. Try not to validate IRIS\'s concerns.',
]

export default function VerdictScreen({ result, onRestart }) {
  const [phase, setPhase] = useState('iris') // iris | processing | reveal
  const [progress, setProgress] = useState(0)
  const [visibleLines, setVisibleLines] = useState(0)
  const [irisTypingDone, setIrisTypingDone] = useState(false)

  const isYes = result.verdict === 'YES'
  const verdictColour = isYes ? '#1a6b3a' : '#b91c1c'
  const irisMood = isYes ? 'approval' : 'threat'

  const irisText = isYes
    ? IRIS_YES_VERDICTS[Math.floor(Math.random() * IRIS_YES_VERDICTS.length)]
    : IRIS_NO_VERDICTS[Math.floor(Math.random() * IRIS_NO_VERDICTS.length)]

  // Store the randomly picked text so it doesn't re-randomise on re-render
  const [irisVerdictText] = useState(irisText)

  function beginProcessing() {
    setPhase('processing')
  }

  useEffect(() => {
    if (phase !== 'processing') return

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return p + 1
      })
    }, 60)

    const lineInterval = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= PROCESSING_LINES.length) {
          clearInterval(lineInterval)
          return v
        }
        return v + 1
      })
    }, 550)

    const revealTimer = setTimeout(() => {
      setPhase('reveal')
    }, 6500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(lineInterval)
      clearTimeout(revealTimer)
    }
  }, [phase])

  // IRIS introduction before processing
  if (phase === 'iris') {
    return (
      <div style={{
        background: '#ffffff',
        border: '1px solid #d0d7e3',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
        <div style={{
          background: '#f8f9fb',
          borderBottom: '1px solid #e4e8f0',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
        }}>
          <span style={{
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: verdictColour,
            fontWeight: '600',
          }}>
            Assessment Complete
          </span>
          <span style={{
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#8a96a8',
          }}>
            Verdict Pending
          </span>
        </div>

        <div style={{ padding: '32px 24px 28px' }}>
          <div style={{ marginBottom: '28px' }}>
            <IRISAvatar
              mood={irisMood}
              text={irisVerdictText}
              size="large"
              onTypingComplete={() => setIrisTypingDone(true)}
            />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #e4e8f0',
            paddingTop: '18px',
          }}>
            <span style={{
              fontSize: '10px',
              color: '#b0bcd0',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              {irisTypingDone ? 'Verdict processing ready.' : 'Please wait...'}
            </span>
            <button
              onClick={beginProcessing}
              disabled={!irisTypingDone}
              style={{
                background: irisTypingDone ? verdictColour : '#e4e8f0',
                color: irisTypingDone ? '#ffffff' : '#b0bcd0',
                border: 'none',
                borderRadius: '3px',
                padding: '10px 28px',
                fontSize: '11px',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                fontWeight: '600',
                cursor: irisTypingDone ? 'pointer' : 'default',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              View Verdict
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Processing animation
  if (phase === 'processing') {
    return (
      <div style={{
        background: '#ffffff',
        border: '1px solid #d0d7e3',
        borderRadius: '4px',
        padding: '32px 28px',
      }}>
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
          {progress}% —{' '}
          {progress < 30
            ? 'Loading compliance database...'
            : progress < 60
            ? 'Cross-referencing risk vectors...'
            : progress < 90
            ? 'Calculating verdict...'
            : 'Finalising assessment...'}
        </div>

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
      borderTop: `4px solid ${verdictColour}`,
      borderRadius: '4px',
      padding: '32px 28px',
    }}>
      <div style={{
        fontSize: '10px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#8a96a8',
        marginBottom: '8px',
      }}>
        Final Assessment Verdict — Case Ref: {result.caseRef}
      </div>

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

      <div style={{
        fontSize: '14px',
        color: '#5a6a82',
        lineHeight: '1.6',
        marginBottom: '28px',
        maxWidth: '500px',
      }}>
        {result.verdictLine}
      </div>

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

      <div style={{
        fontSize: '10px',
        color: '#b0bcd0',
        letterSpacing: '0.04em',
        lineHeight: '1.8',
        marginBottom: '20px',
        paddingTop: '16px',
        borderTop: '1px solid #e4e8f0',
      }}>
        Verdict logged at {new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })} UTC&nbsp;&nbsp;·&nbsp;&nbsp;
        Retain this assessment for 90 days per Directive MCS-07&nbsp;&nbsp;·&nbsp;&nbsp;
        ATTEND is certified under ISO-9001:2015&nbsp;&nbsp;·&nbsp;&nbsp;
        Verdicts are legally non-binding but spiritually authoritative
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={onRestart}
          style={{
            fontSize: '11px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            border: `1px solid ${verdictColour}`,
            background: '#ffffff',
            color: verdictColour,
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
