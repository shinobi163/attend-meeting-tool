import IRISAvatar from './IRISAvatar'

export default function QuestionCard({
  question,
  selectedCode,
  selectedComment,
  selectedMood,
  onSelect,
  onNext,
  onBack,
  questionIndex,
  total,
}) {
  const canProceed = selectedCode !== null

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #d0d7e3',
      borderRadius: '4px',
      overflow: 'hidden',
    }}>
      {/* Card header */}
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
          color: '#1a5fb4',
          fontWeight: '600',
          minWidth: '72px',
        }}>
          Criterion {question.criterion}
        </span>
        <span style={{
          fontSize: '9px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#8a96a8',
        }}>
          {question.category}
        </span>
      </div>

      {/* Question body */}
      <div style={{ padding: '24px 20px 20px' }}>
        <div style={{
          fontSize: '15px',
          fontWeight: '500',
          color: '#1a2a4a',
          lineHeight: '1.5',
          marginBottom: '8px',
        }}>
          {question.text}
        </div>
        <div style={{
          fontSize: '11px',
          color: '#8a96a8',
          letterSpacing: '0.02em',
          marginBottom: '20px',
        }}>
          Select one response. Your selection is logged and cannot be amended.
        </div>

        {/* Options */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '20px',
        }}>
          {question.options.map((option) => {
            const isSelected = selectedCode === option.code
            return (
              <div
                key={option.code}
                onClick={() => onSelect(option)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '12px 14px',
                  border: `1px solid ${isSelected ? '#1a5fb4' : '#d0d7e3'}`,
                  borderRadius: '3px',
                  background: isSelected ? '#eef3fc' : '#ffffff',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s, background 0.15s',
                }}
              >
                {/* Radio */}
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: `2px solid ${isSelected ? '#1a5fb4' : '#b0bcd0'}`,
                  background: isSelected ? '#1a5fb4' : '#ffffff',
                  flexShrink: 0,
                  marginTop: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.15s, background 0.15s',
                }}>
                  {isSelected && (
                    <div style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#ffffff',
                    }} />
                  )}
                </div>

                {/* Text */}
                <div>
                  <div style={{
                    fontSize: '9px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#b0bcd0',
                    marginBottom: '3px',
                  }}>
                    Code {option.code}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: isSelected ? '#1a3a6a' : '#2c3e5a',
                    lineHeight: '1.55',
                  }}>
                    {option.text}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* IRIS commentary */}
        <div style={{
          padding: '14px 16px',
          borderRadius: '3px',
          background: selectedComment ? '#f8f9fb' : 'transparent',
          border: `1px solid ${selectedComment ? '#e4e8f0' : 'transparent'}`,
          marginBottom: '20px',
          minHeight: '56px',
          transition: 'background 0.2s, border-color 0.2s',
        }}>
          {selectedComment && (
            <IRISAvatar
              mood={selectedMood || 'neutral'}
              text={selectedComment}
            />
          )}
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #e4e8f0',
          paddingTop: '18px',
        }}>
          <button
            onClick={onBack}
            disabled={questionIndex === 0}
            style={{
              fontSize: '11px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: questionIndex === 0 ? '#d0d7e3' : '#8a96a8',
              background: 'none',
              border: 'none',
              cursor: questionIndex === 0 ? 'default' : 'pointer',
              padding: '8px 0',
            }}
          >
            Previous Criterion
          </button>
          <button
            onClick={onNext}
            disabled={!canProceed}
            style={{
              background: canProceed ? '#1a5fb4' : '#e4e8f0',
              color: canProceed ? '#ffffff' : '#b0bcd0',
              border: 'none',
              borderRadius: '3px',
              padding: '10px 28px',
              fontSize: '11px',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              fontWeight: '600',
              cursor: canProceed ? 'pointer' : 'default',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            {questionIndex === total - 1 ? 'Submit Assessment' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}
