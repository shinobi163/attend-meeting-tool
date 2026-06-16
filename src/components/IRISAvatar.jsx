import { useEffect, useRef, useState } from 'react'

const MOOD_CONFIG = {
  neutral: {
    color: '#1a5fb4',
    animation: 'pulse-blue 2.4s ease-in-out infinite',
    shadow: '0 0 0 4px rgba(26,95,180,0.12), 0 0 18px rgba(26,95,180,0.22)',
  },
  approval: {
    color: '#1a6b3a',
    animation: 'pulse-green 2.4s ease-in-out infinite',
    shadow: '0 0 0 4px rgba(26,107,58,0.12), 0 0 18px rgba(26,107,58,0.22)',
  },
  concern: {
    color: '#c47d00',
    animation: 'pulse-amber 1.8s ease-in-out infinite',
    shadow: '0 0 0 4px rgba(196,125,0,0.14), 0 0 20px rgba(196,125,0,0.3)',
  },
  threat: {
    color: '#b91c1c',
    animation: 'pulse-red 1.4s ease-in-out infinite',
    shadow: '0 0 0 5px rgba(185,28,28,0.16), 0 0 24px rgba(185,28,28,0.38)',
  },
  final: {
    color: '#5b21b6',
    animation: 'pulse-purple 1.2s ease-in-out infinite',
    shadow: '0 0 0 5px rgba(91,33,182,0.16), 0 0 24px rgba(91,33,182,0.38)',
  },
}

const TYPING_SPEED = 22 // ms per character

export default function IRISAvatar({ mood = 'neutral', text = '', size = 'normal' }) {
  const [displayed, setDisplayed] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const timerRef = useRef(null)
  const prevTextRef = useRef('')

  const config = MOOD_CONFIG[mood] || MOOD_CONFIG.neutral
  const color = config.color

  const avatarSize = size === 'large' ? 64 : 44

  useEffect(() => {
    if (text === prevTextRef.current) return
    prevTextRef.current = text

    if (timerRef.current) clearInterval(timerRef.current)
    setDisplayed('')
    setIsTyping(true)

    if (!text) {
      setIsTyping(false)
      return
    }

    let i = 0
    timerRef.current = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(timerRef.current)
        setIsTyping(false)
      }
    }, TYPING_SPEED)

    return () => clearInterval(timerRef.current)
  }, [text])

  return (
    <>
      <style>{`
        @keyframes pulse-blue {
          0%,100% { box-shadow: 0 0 0 3px rgba(26,95,180,0.1), 0 0 10px rgba(26,95,180,0.15); }
          50% { box-shadow: 0 0 0 6px rgba(26,95,180,0.2), 0 0 22px rgba(26,95,180,0.3); }
        }
        @keyframes pulse-green {
          0%,100% { box-shadow: 0 0 0 3px rgba(26,107,58,0.1), 0 0 10px rgba(26,107,58,0.15); }
          50% { box-shadow: 0 0 0 6px rgba(26,107,58,0.2), 0 0 22px rgba(26,107,58,0.3); }
        }
        @keyframes pulse-amber {
          0%,100% { box-shadow: 0 0 0 3px rgba(196,125,0,0.1), 0 0 12px rgba(196,125,0,0.18); }
          50% { box-shadow: 0 0 0 7px rgba(196,125,0,0.24), 0 0 26px rgba(196,125,0,0.38); }
        }
        @keyframes pulse-red {
          0%,100% { box-shadow: 0 0 0 3px rgba(185,28,28,0.1), 0 0 12px rgba(185,28,28,0.18); }
          50% { box-shadow: 0 0 0 8px rgba(185,28,28,0.26), 0 0 28px rgba(185,28,28,0.42); }
        }
        @keyframes pulse-purple {
          0%,100% { box-shadow: 0 0 0 3px rgba(91,33,182,0.1), 0 0 12px rgba(91,33,182,0.18); }
          50% { box-shadow: 0 0 0 8px rgba(91,33,182,0.26), 0 0 28px rgba(91,33,182,0.42); }
        }
        @keyframes iris-blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .iris-cursor {
          display: inline-block;
          width: 2px;
          height: 12px;
          background: currentColor;
          margin-left: 1px;
          vertical-align: middle;
          animation: iris-blink 1s step-end infinite;
        }
      `}</style>

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
      }}>
        {/* Avatar eye */}
        <div style={{
          width: `${avatarSize}px`,
          height: `${avatarSize}px`,
          borderRadius: '50%',
          background: '#ffffff',
          border: `1px solid ${color}22`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          animation: config.animation,
          transition: 'box-shadow 0.4s ease',
        }}>
          <svg
            width={avatarSize * 0.58}
            height={avatarSize * 0.58}
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="15" stroke={color} strokeWidth="1.5" />
            <circle cx="19" cy="19" r="8" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1" />
            <circle cx="19" cy="19" r="3.5" fill={color} />
            <line x1="19" y1="4" x2="19" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="19" y1="30" x2="19" y2="34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4" y1="19" x2="8" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="30" y1="19" x2="34" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Speech area */}
        <div style={{ flex: 1, paddingTop: '2px' }}>
          <div style={{
            fontSize: '9px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: color,
            marginBottom: '5px',
            transition: 'color 0.3s ease',
          }}>
            IRIS &nbsp;·&nbsp; Internal Risk &amp; Integrity System
          </div>
          <div style={{
            fontSize: '13px',
            color: '#5a6a82',
            lineHeight: '1.65',
            fontStyle: 'italic',
            minHeight: '20px',
          }}>
            {displayed}
            {isTyping && (
              <span
                className="iris-cursor"
                style={{ color: color }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
