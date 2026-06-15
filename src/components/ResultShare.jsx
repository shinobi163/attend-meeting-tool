export default function ResultShare({ result }) {
  const handleCopyLink = () => {
    const text = `ATTEND Assessment Complete\n\nVerdict: ${result.verdict}.\n${result.verdictLine}\n\nRisk Score: ${result.riskScore}/100 | Criteria Failed: ${result.failed}/10 | Classification: ${result.classification}\nCase Ref: ${result.caseRef}\n\nhttps://attend-meeting-tool.vercel.app`
    navigator.clipboard.writeText(text).catch(() => {})
    alert('Assessment summary copied to clipboard.')
  }

  const handleDownloadCertificate = () => {
    const isYes = result.verdict === 'YES'
    const verdictColour = isYes ? '#1a6b3a' : '#b91c1c'
    const date = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
    const time = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ATTEND Certificate — ${result.caseRef}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Georgia', serif;
      background: #f4f6f9;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 40px 20px;
    }
    .cert {
      background: #ffffff;
      border: 1px solid #d0d7e3;
      border-top: 6px solid ${verdictColour};
      max-width: 680px;
      width: 100%;
      padding: 48px 52px;
    }
    .cert-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 36px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e4e8f0;
    }
    .cert-logo {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #1a2a4a;
    }
    .cert-iso {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #8a96a8;
      text-align: right;
    }
    .cert-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #8a96a8;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      margin-bottom: 12px;
    }
    .cert-heading {
      font-size: 22px;
      color: #1a2a4a;
      font-weight: normal;
      line-height: 1.4;
      margin-bottom: 32px;
    }
    .cert-verdict-label {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #8a96a8;
      margin-bottom: 8px;
    }
    .cert-verdict {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 64px;
      font-weight: 700;
      color: ${verdictColour};
      letter-spacing: -0.02em;
      line-height: 1;
      margin-bottom: 10px;
    }
    .cert-verdict-line {
      font-size: 15px;
      color: #5a6a82;
      line-height: 1.6;
      margin-bottom: 36px;
      font-style: italic;
    }
    .cert-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 36px;
    }
    .cert-cell {
      background: #f8f9fb;
      border: 1px solid #e4e8f0;
      padding: 14px;
    }
    .cert-cell-label {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #8a96a8;
      margin-bottom: 6px;
    }
    .cert-cell-value {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: #1a2a4a;
    }
    .cert-cell-value.danger {
      color: ${verdictColour};
    }
    .cert-footer {
      border-top: 1px solid #e4e8f0;
      padding-top: 20px;
    }
    .cert-footer-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
    }
    .cert-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 10px;
      color: #b0bcd0;
      letter-spacing: 0.04em;
      line-height: 1.9;
    }
    .cert-seal {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 2px solid #d0d7e3;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .cert-seal-inner {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 7px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      text-align: center;
      color: #8a96a8;
      line-height: 1.6;
    }
    .cert-disclaimer {
      margin-top: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 9px;
      color: #d0d7e3;
      letter-spacing: 0.03em;
      line-height: 1.7;
    }
  </style>
</head>
<body>
  <div class="cert">
    <div class="cert-header">
      <div class="cert-logo">ATTEND</div>
      <div class="cert-iso">
        ISO-9001:2015 Certified<br />
        Meeting Compliance Suite v4.2.1
      </div>
    </div>

    <div class="cert-title">Official Compliance Certificate</div>
    <div class="cert-heading">
      This document certifies that a formal meeting attendance assessment<br />
      was completed in full accordance with Directive MCS-07.
    </div>

    <div class="cert-verdict-label">Assessment Verdict</div>
    <div class="cert-verdict">${result.verdict}.</div>
    <div class="cert-verdict-line">"${result.verdictLine}"</div>

    <div class="cert-grid">
      <div class="cert-cell">
        <div class="cert-cell-label">Risk Score</div>
        <div class="cert-cell-value ${result.riskScore >= 60 ? 'danger' : ''}">${result.riskScore} / 100</div>
      </div>
      <div class="cert-cell">
        <div class="cert-cell-label">Criteria Failed</div>
        <div class="cert-cell-value ${result.failed >= 6 ? 'danger' : ''}">${result.failed} of 10</div>
      </div>
      <div class="cert-cell">
        <div class="cert-cell-label">Classification</div>
        <div class="cert-cell-value ${result.riskScore >= 50 ? 'danger' : ''}" style="font-size:13px; margin-top:4px;">${result.classification}</div>
      </div>
    </div>

    <div class="cert-footer">
      <div class="cert-footer-row">
        <div class="cert-meta">
          Case Reference: ${result.caseRef}<br />
          Assessment Date: ${date}<br />
          Assessment Time: ${time} UTC<br />
          Issued by: ATTEND Automated Compliance Engine<br />
          Retain for 90 days per Directive MCS-07
        </div>
        <div class="cert-seal">
          <div class="cert-seal-inner">
            ATTEND<br />CERTIFIED<br />MCS-07
          </div>
        </div>
      </div>
      <div class="cert-disclaimer">
        ATTEND (Automated Temporal &amp; Time-Efficacy Needs Determinator) is not responsible for professional,
        interpersonal, or existential consequences arising from this assessment. Verdicts are legally non-binding
        but spiritually authoritative. This certificate was generated automatically and has not been reviewed
        by a human being. No human being was available.
      </div>
    </div>
  </div>
</body>
</html>`

    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ATTEND-Certificate-${result.caseRef}.html`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
      <button
        onClick={handleDownloadCertificate}
        style={{
          fontSize: '11px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          border: '1px solid #d0d7e3',
          background: '#ffffff',
          color: '#5a6a82',
          borderRadius: '3px',
          padding: '9px 18px',
          cursor: 'pointer',
        }}
      >
        Download Certificate
      </button>
      <button
        onClick={handleCopyLink}
        style={{
          fontSize: '11px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          border: '1px solid #d0d7e3',
          background: '#ffffff',
          color: '#5a6a82',
          borderRadius: '3px',
          padding: '9px 18px',
          cursor: 'pointer',
        }}
      >
        Copy Summary
      </button>
    </div>
  )
}
