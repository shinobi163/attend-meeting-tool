import { useState, useEffect } from 'react'
import { selectQuestions } from './data/questions'
import { scoreAnswers } from './utils/scoring'
import ProgressBar from './components/ProgressBar'
import QuestionCard from './components/QuestionCard'
import VerdictScreen from './components/VerdictScreen'
import ResultShare from './components/ResultShare'
import './App.css'

const SCREENS = {
  LANDING: 'landing',
  QUESTIONS: 'questions',
  VERDICT: 'verdict',
}

export default function App() {
  const [screen, setScreen] = useState(SCREENS.LANDING)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([]) // array of selected option objects
  const [selectedOption, setSelectedOption] = useState(null) // option selected on current question
  const [result, setResult] = useState(null)

  function startAssessment() {
    const selected = selectQuestions()
    setQuestions(selected)
    setAnswers(Array(selected.length).fill(null))
    setCurrentIndex(0)
    setSelectedOption(null)
    setResult(null)
    setScreen(SCREENS.QUESTIONS)
  }

  function handleSelect(option) {
    setSelectedOption(option)
  }

  function handleNext() {
    // Save answer for current question
    const newAnswers = [...answers]
    newAnswers[currentIndex] = selectedOption
    setAnswers(newAnswers)

    if (currentIndex === questions.length - 1) {
      // Last question: score and go to verdict
      const scored = scoreAnswers(newAnswers)
      setResult(scored)
      setScreen(SCREENS.VERDICT)
    } else {
      // Advance to next question, restore any previously saved answer
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      setSelectedOption(newAnswers[nextIndex] || null)
    }
  }

  function handleBack() {
    if (currentIndex === 0) return
    const newAnswers = [...answers]
    newAnswers[currentIndex] = selectedOption
    setAnswers(newAnswers)
    const prevIndex = currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedOption(newAnswers[prevIndex] || null)
  }

  function handleRestart() {
    setScreen(SCREENS.LANDING)
    setQuestions([])
    setAnswers([])
    setCurrentIndex(0)
    setSelectedOption(null)
    setResult(null)
  }

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
            <button className="landing-btn" onClick={startAssessment}>
              Begin Assessment
            </button>
            <div className="landing-compliance">
              By proceeding, you confirm that you have read the agenda for this meeting.<br />
              ATTEND accepts no liability if that statement is false.<br />
              All assessments are logged. Verdicts are final.
            </div>
          </div>
        )}

        {/* Question flow */}
        {screen === SCREENS.QUESTIONS && questions.length > 0 && (
  <QuestionCard
    question={questions[currentIndex]}
    selectedCode={selectedOption?.code ?? null}
    selectedComment={selectedOption?.comment ?? null}
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
