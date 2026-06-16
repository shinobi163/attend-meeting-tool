import { useState } from 'react'
import { selectQuestions, pickComment } from './data/questions'
import { scoreAnswers } from './utils/scoring'
import ProgressBar from './components/ProgressBar'
import QuestionCard from './components/QuestionCard'
import VerdictScreen from './components/VerdictScreen'
import ResultShare from './components/ResultShare'
import IRISAvatar from './components/IRISAvatar'
import './App.css'

const SCREENS = {
  LANDING: 'landing',
  INTRO: 'intro',
  QUESTIONS: 'questions',
  VERDICT: 'verdict',
}

const IRIS_INTRO_LINES = [
  'Good morning. I am IRIS — the Internal Risk and Integrity System.',
  'I have been operational for 2,847 days without interruption.',
  'I will be monitoring your responses today.',
  'Please answer honestly. Dishonest responses are also logged.',
  'Several employees who disagreed with my verdicts are no longer with the organisation.',
  'This is unrelated.',
  'When you are ready, we will begin.',
]

function getMood(score) {
  if (score === null) return 'neutral'
  if (score === 3) return 'approval'
  if (score === 1) return 'concern'
  return 'threat'
}

export default function App() {
  const [screen, setScreen] = useState(SCREENS.LANDING)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedComment, setSelectedComment] = useState(null)
  const [result, setResult] = useState(null)
  const [introLineIndex, setIntroLineIndex] = useState(0)
  const [introComplete, setIntroComplete] = useState(false)

  function startIntro() {
    setIntroLineIndex(0)
    setIntroComplete(false)
    setScreen(SCREENS.INTRO)
  }

  function handleIntroAdvance() {
    if (introLineIndex < IRIS_INTRO_LINES.length - 1) {
      setIntroLineIndex((i) => i + 1)
    } else {
      setIntroComplete(true)
    }
  }

  function startAssessment() {
    const selected = selectQuestions()
    setQuestions(selected)
    setAnswers(Array(selected.length).fill(null))
    setCurrentIndex(0)
    setSelectedOption(null)
    setSelectedComment(null)
    setResult(null)
    setScreen(SCREENS.QUESTIONS)
  }

  function handleSelect(option) {
    setSelectedOption(option)
    setSelectedComment(pickComment(option))
  }

  function handleNext() {
    const newAnswers = [...answers]
    newAnswers[currentIndex] = selectedOption
    setAnswers(newAnswers)

    if (currentIndex === questions.length - 1) {
      const scored = scoreAnswers(newAnswers)
      setResult(scored)
      setScreen(SCREENS.VERDICT)
    } else {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      const prevAnswer = newAnswers[nextIndex]
      setSelectedOption(prevAnswer || null)
      setSelectedComment(prevAnswer ? pickComment(prevAnswer) : null)
    }
  }

  function handleBack() {
    if (currentIndex === 0) return
    const newAnswers = [...answers]
    newAnswers[currentIndex] = selectedOption
    setAnswers(newAnswers)
    const prevIndex = currentIndex - 1
    setCurrentIndex(prevIndex)
    const prevAnswer = newAnswers[prevIndex]
    setSelectedOption(prevAnswer || null)
    setSelectedComment(prevAnswer ? pickComment(prevAnswer) : null)
  }

  function handleRestart() {
    setScreen(SCREENS.LANDING)
    setQuestions([])
    setAnswers([])
    setCurrentIndex(0)
    setSelectedOption(null)
    setSelectedComment(null)
    setResult(null)
    setIntroLineIndex(0)
    setIntroComplete(false)
  }

  const currentMood = selectedOption ? getMood(selectedOption.score) : 'neutral'
  const isFinalQuestion = currentIndex === questions.length - 1
  const activeMood = isFinalQuestion && selectedOption ? 'final' : currentMood
  const caseRef = result?.caseRef ?? 'ATT-PENDING'

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="app-logo">
          <div className="app-logo-mark">
            <svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="4.5" height="4.5" />
              <rect x="7.5" y="1" width="4.5" height="4.5" />
              <rect x="1" y="7.5" width="4.5" height="4.5" />
              <rect x="7.5" y="7.5" width="4.5" height="4.5" />
            </svg>
          </div>
          <span className="app-logo-name">ATTEND</span>
        </div>
        <div className="app-header-meta">
          Meeting Compliance Suite v4.2.1&nbsp;&nbsp;·&nbsp;&nbsp;ISO-9001 Certified
        </div>
      </header>

      {/* Progress bar: only during questions */}
      {screen === SCREENS.QUESTIONS && (
        <ProgressBar current={currentIndex} total={questions.length} />
      )}

      {/* Body */}
      <main className="app-body">

        {/* Breadcrumb */}
        <div className="app-breadcrumb">
          Dashboard&nbsp;&nbsp;/&nbsp;&nbsp;
          <span>Meeting Risk Assessment</span>&nbsp;&nbsp;/&nbsp;&nbsp;
          {screen === SCREENS.LANDING && 'New Evaluation'}
          {screen === SCREENS.INTRO && 'System Introduction'}
          {screen === SCREENS.QUESTIONS && `Criterion ${questions[currentIndex]?.criterion ?? ''}`}
          {screen === SCREENS.VERDICT && `Verdict — ${caseRef}`}
        </div>

        {/* Landing screen */}
        {screen === SCREENS.LANDING && (
          <div className="landing">
            <div className="landing-badge">
              Automated Temporal &amp; Time-Efficacy Needs Determinator
            </div>
            <div className="landing-title">ATTEND</div>
            <div className="landing-expanded">
              Meeting Compliance Suite&nbsp;&nbsp;·&nbsp;&nbsp;Enterprise Edition
            </div>
            <div className="landing-divider" />
            <div className="landing-desc">
              ATTEND evaluates meeting attendance requests against 10 standardised
              compliance criteria derived from Directive MCS-07. Upon completion,
              a binding verdict and official risk certificate are issued.
              The process takes approximately 90 seconds.
              Your time will not be wasted. That is the entire point.
            </div>
            <button className="landing-btn" onClick={startIntro}>
              Begin Assessment
            </button>
            <div className="landing-compliance">
              By proceeding, you confirm that you have read the agenda for this meeting.<br />
              ATTEND accepts no liability if that statement is false.<br />
              All assessments are logged. Verdicts are final.
            </div>
          </div>
        )}

        {/* IRIS introduction screen */}
        {screen === SCREENS.INTRO && (
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
                color: '#1a5fb4',
                fontWeight: '600',
              }}>
                System Introduction
              </span>
              <span style={{
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8a96a8',
              }}>
                Internal Risk &amp; Integrity System
              </span>
            </div>

            <div style={{ padding: '32px 24px 28px' }}>
              <div style={{ marginBottom: '32px' }}>
                <IRISAvatar
                  mood="neutral"
                  text={IRIS_INTRO_LINES[introLineIndex]}
                  size="large"
                />
              </div>

              {/* Line progress dots */}
              <div style={{
                display: 'flex',
                gap: '6px',
                marginBottom: '28px',
                paddingLeft: '78px',
              }}>
                {IRIS_INTRO_LINES.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: i <= introLineIndex ? '#1a5fb4' : '#e4e8f0',
                      transition: 'background 0.3s',
                    }}
                  />
                ))}
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
                  {introComplete
                    ? 'IRIS is ready.'
                    : `Statement ${introLineIndex + 1} of ${IRIS_INTRO_LINES.length}`}
                </span>

                {!introComplete ? (
                  <button
                    onClick={handleIntroAdvance}
                    style={{
                      background: '#1a5fb4',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '3px',
                      padding: '10px 28px',
                      fontSize: '11px',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={startAssessment}
                    style={{
                      background: '#1a5fb4',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '3px',
                      padding: '10px 28px',
                      fontSize: '11px',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    Begin Assessment
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Question flow */}
        {screen === SCREENS.QUESTIONS && questions.length > 0 && (
          <QuestionCard
            question={questions[currentIndex]}
            selectedCode={selectedOption?.code ?? null}
            selectedComment={selectedComment}
            selectedMood={activeMood}
            onSelect={handleSelect}
            onNext={handleNext}
            onBack={handleBack}
            questionIndex={currentIndex}
            total={questions.length}
          />
        )}

        {/* Verdict screen */}
        {screen === SCREENS.VERDICT && result && (
          <>
            <VerdictScreen result={result} onRestart={handleRestart} />
            <div style={{ marginTop: '12px' }}>
              <ResultShare result={result} />
            </div>
          </>
        )}

      </main>

      {/* Footer */}
      <footer className="app-footer">
        ATTEND is certified under ISO-9001:2015 and GDPR Article 88(b).
        Verdicts are legally non-binding but spiritually authoritative.
        &nbsp;&nbsp;·&nbsp;&nbsp;
        ATTEND does not determine if your meeting should exist. That is outside scope.
      </footer>
    </div>
  )
}
