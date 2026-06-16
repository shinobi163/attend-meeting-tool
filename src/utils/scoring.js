const YES_THRESHOLD = 20

const YES_VERDICTS = [
  'Attendance is justified. You may proceed. We are sorry.',
  'Compliance confirmed. Your presence is operationally necessary. Godspeed.',
  'Assessment complete. This meeting clears minimum justification thresholds. Attend.',
]

const NO_VERDICTS = [
  'Declining is within policy.',
  'This meeting does not meet minimum attendance justification thresholds under Directive MCS-07.',
  'Your time has been assessed. It is worth more than this.',
  'ATTEND recommends non-attendance. This finding is not subject to appeal.',
  'Insufficient justification detected. Protect your calendar accordingly.',
]

const CLASSIFICATIONS = {
  high: 'HIGH RISK',
  elevated: 'ELEVATED RISK',
  moderate: 'MODERATE RISK',
  low: 'LOW RISK',
}

export function scoreAnswers(answers) {
  const total = answers.reduce((sum, a) => sum + (a?.score ?? 0), 0)
  const failed = answers.filter((a) => (a?.score ?? 0) === 0).length
  const verdict = total >= YES_THRESHOLD ? 'YES' : 'NO'
  const riskScore = Math.round(((30 - total) / 30) * 100)

  let classification
  if (riskScore >= 75) classification = CLASSIFICATIONS.high
  else if (riskScore >= 50) classification = CLASSIFICATIONS.elevated
  else if (riskScore >= 25) classification = CLASSIFICATIONS.moderate
  else classification = CLASSIFICATIONS.low

  const verdictLine =
    verdict === 'YES'
      ? YES_VERDICTS[Math.floor(Math.random() * YES_VERDICTS.length)]
      : NO_VERDICTS[Math.floor(Math.random() * NO_VERDICTS.length)]

  const caseRef = generateCaseRef()

  return {
    verdict,
    total,
    riskScore,
    failed,
    classification,
    verdictLine,
    caseRef,
  }
}

function generateCaseRef() {
  const year = new Date().getFullYear()
  const a = String(Math.floor(Math.random() * 9000) + 1000)
  const b = String(Math.floor(Math.random() * 9000) + 1000)
  return `ATT-${year}-${a}-${b}`
}
