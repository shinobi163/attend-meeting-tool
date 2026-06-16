import { useEffect, useRef, useState } from 'react'

const MOOD_CONFIG = {
  neutral: {
    color: '#1a5fb4',
    bodyFill: '#1a5fb4',
    bandFill: '#1a5fb4',
    mouth: 'M24 62 Q36 68 48 62',
    pupilOffsetY: 0,
    pupilSize: 3,
    brows: false,
    animation: 'iris-float 3s ease-in-out infinite',
    glow: 'drop-shadow(0 0 6px rgba(26,95,180,0.5))',
  },
  approval: {
    color: '#1a6b3a',
    bodyFill: '#1a6b3a',
    bandFill: '#1a6b3a',
    mouth: 'M22 60 Q36 72 50 60',
    pupilOffsetY: -2,
    pupilSize: 3.5,
    brows: false,
    animation: 'iris-float 2.5s ease-in-out infinite',
    glow: 'drop-shadow(0 0 8px rgba(26,107,58,0.65))',
  },
  concern: {
    color: '#c47d00',
    bodyFill: '#c47d00',
    bandFill: '#c47d00',
    mouth: 'flat',
    pupilOffsetY: 1,
    pupilSize: 3,
    brows: false,
    animation: 'iris-wobble 2s ease-in-out infinite',
    glow: 'drop-shadow(0 0 8px rgba(196,125,0,0.7))',
  },
  threat: {
    color: '#b91c1c',
    bodyFill: '#b91c1c',
    bandFill: '#b91c1c',
    mouth: 'M20 60 Q36 76 52 60',
    pupilOffsetY: 0,
    pupilSize: 4,
    brows: true,
    animation: 'iris-wobble 0.8s ease-in-out infinite',
    glow: 'drop-shadow(0 0 12px rgba(185,28,28,0.85))',
  },
  final: {
    color: '#5b21b6',
    bodyFill: '#5b21b6',
    bandFill: '#5b21b6',
    mouth: 'M22 61 Q36 73 50 61',
    pupilOffsetY: 0,
    pupilSize: 3.5,
    brows: true,
    animation: 'iris-pulse 1.2s ease-in-out infinite',
    glow: 'drop-shadow(0 0 12px rgba(91,33,182,0.85))',
  },
}

const TYPING_SPEED = 22

export default function IRISAvatar({
  mood = 'neutral',
  text = '',
  size = 'normal',
  onTypingComplete,
}) {
  const [displayed, setDisplayed] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const timerRef = useRef(null)
  const prevTextRef = useRef('')

  const config = MOOD_CONFIG[mood] || MOOD_CONFIG.neutral
  const { color } = config
  const avatarScale = size === 'large' ? 1 : 0.78
  const w = Math.round(72 * avatarScale)
  const h = Math.round(88 * avatarScale)

  const pupilLY = 49 + config.pupilOffsetY
  const pupilRY = 49 + config.pupilOffsetY

  useEffect(() => {
    if (text === prevTextRef.current) return
    prevTextRef.current = text

    if (timerRef.current) clearInterval(timerRef.current)
    setDisplayed('')
    setIsTyping(true)

    if (!text) {
      setIsTyping(false)
      onTypingComplete?.()
      return
    }

    let i = 0
    timerRef.current = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(timerRef.current)
        setIsTyping(false)
        onTypingComplete?.()
      }
    }, TYPING_SPEED)

    return () => clearInterval(timerRef.current)
  }, [text])

  return (
    <>
      <style>{`
        @keyframes iris-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes iris-wobble {
          0%,100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        @keyframes iris-pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes iris-cursor-blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .iris-cursor {
          display: inline-block;
          width: 2px;
          height: 11px;
          margin-left: 1px;
          vertical-align: middle;
          animation: iris-cursor-blink 1s step-end infinite;
        }
      `}</style>

      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '12px',
      }}>
        {/* Avatar */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}>
          <div style={{ animation: config.animation }}>
            <svg
              width={w}
              height={h}
              viewBox="0 0 72 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: config.glow,
                transition: 'filter 0.4s ease',
              }}
            >
              {/* Hat brim */}
              <rect x="10" y="30" width="52" height="5" rx="2" fill="#1a2a4a" />
              {/* Hat top */}
              <rect x="18" y="8" width="36" height="24" rx="3" fill="#1a2a4a" />
              {/* Hat band */}
              <rect x="18" y="26" width="36" height="5" fill={config.bandFill} />
              {/* Hat badge */}
              <rect x="28" y="28" width="16" height="3" rx="1" fill="#ffffff" fillOpacity="0.3" />
              {/* Body */}
              <rect x="12" y="35" width="48" height="42" rx="4" fill={config.bodyFill} />
              {/* Body shine */}
              <rect x="16" y="39" width="18" height="10" rx="2" fill="#ffffff" fillOpacity="0.08" />
              {/* Eye whites */}
              <rect x="20" y="44" width="12" height="10" rx="3" fill="#ffffff" />
              <rect x="40" y="44" width="12" height="10" rx="3" fill="#ffffff" />
              {/* Pupils */}
              <circle cx="26" cy={pupilLY} r={config.pupilSize} fill="#1a2a4a" />
              <circle cx="46" cy={pupilRY} r={config.pupilSize} fill="#1a2a4a" />
              {/* Pupil shines */}
              <circle cx="27.5" cy={pupilLY - 1.5} r="1" fill="#ffffff" />
              <circle cx="47.5" cy={pupilRY - 1.5} r="1" fill="#ffffff" />
              {/* Brows for threat/final */}
              {config.brows && (
                <>
                  <line x1="20" y1="41" x2="28" y2="44" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <line x1="52" y1="41" x2="44" y2="44" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </>
              )}
              {/* Mouth */}
              {config.mouth === 'flat'
                ? <line x1="22" y1="65" x2="50" y2="65" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                : <path d={config.mouth} stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
              }
              {/* Tie */}
              <path d="M34 77 L36 85 L38 77 L36 74 Z" fill="#ffffff" fillOpacity="0.15" />
            </svg>
          </div>
          <div style={{
            fontSize: '8px',
            fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: color,
            fontWeight: '600',
            transition: 'color 0.3s',
          }}>
            IRIS
          </div>
        </div>

        {/* Speech bubble */}
        {text && (
          <div style={{
            position: 'relative',
            background: '#ffffff',
            border: `1px solid ${color}44`,
            borderRadius: '8px 8px 8px 2px',
            padding: '12px 14px',
            flex: 1,
            boxShadow: `0 2px 12px ${color}18`,
            transition: 'border-color 0.3s, box-shadow 0.3s',
          }}>
            {/* Bubble tail */}
            <div style={{
              position: 'absolute',
              left: '-7px',
              bottom: '12px',
              width: 0,
              height: 0,
              borderTop: '5px solid transparent',
              borderBottom: '5px solid transparent',
              borderRight: `7px solid ${color}44`,
            }} />
            <div style={{
              position: 'absolute',
              left: '-5px',
              bottom: '13px',
              width: 0,
              height: 0,
              borderTop: '4px solid transparent',
              borderBottom: '4px solid transparent',
              borderRight: '6px solid #ffffff',
            }} />
            <div style={{
              fontSize: '9px',
              fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: color,
              marginBottom: '5px',
              transition: 'color 0.3s',
            }}>
              Internal Risk &amp; Integrity System
            </div>
            <div style={{
              fontSize: '12px',
              fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif',
              color: '#5a6a82',
              lineHeight: '1.65',
              fontStyle: 'italic',
            }}>
              {displayed}
              {isTyping && (
                <span
                  className="iris-cursor"
                  style={{ background: color }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
