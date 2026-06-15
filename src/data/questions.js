// Each criterion has 3 question variants. One is picked randomly at runtime.
// Scoring: each answer has a `score` from 0–3. Higher = more justification to attend.
// A total score of 20+ = YES. Below 20 = NO.

export const questionBank = [
  // ── Criterion 1: Agenda Integrity ──
  [
    {
      id: 'q1a',
      criterion: '1.1',
      category: 'Agenda Integrity Assessment',
      text: 'Does this meeting have a written agenda that was distributed before the day of the meeting?',
      options: [
        { code: 'A', text: 'Yes. A documented agenda with time allocations was shared at least 24 hours in advance.', score: 3, comment: 'Criterion satisfied. No flag raised. You may proceed.' },
        { code: 'B', text: 'There is an agenda. It says "updates" and "AOB." That is the full agenda.', score: 1, comment: 'Partial compliance detected. "AOB" has been flagged 1,847 times in this system. It has never referred to anything actionable.' },
        { code: 'C', text: 'No agenda was shared. The invite description reads "let\'s connect."', score: 0, comment: 'Response logged. "Let\'s connect" has been escalated to the risk matrix. This is not the first time.' },
        { code: 'D', text: 'The organiser has verbally committed to "sending something over" for three consecutive weeks.', score: 0, comment: 'Three weeks noted. This response will be retained as evidence.' },
      ],
    },
    {
      id: 'q1b',
      criterion: '1.1',
      category: 'Agenda Integrity Assessment',
      text: 'The meeting invite was sent with a description field. Characterise the contents of that field.',
      options: [
        { code: 'A', text: 'A structured agenda with named sections, owners, and a stated objective.', score: 3, comment: 'Compliant. This response is statistically uncommon. It has been noted with cautious optimism.' },
        { code: 'B', text: '"Per our conversation." There was no prior conversation.', score: 0, comment: 'Fictitious prior conversation detected. This has been logged under Directive MCS-07 subsection 2(a): Phantom Context.' },
        { code: 'C', text: 'A link to a Notion page that requires access to be requested.', score: 1, comment: 'Access-gated agenda detected. The information exists. It has been made structurally inaccessible. Risk score adjusted.' },
        { code: 'D', text: 'A single sentence ending in "etc."', score: 0, comment: '"Etc." has been flagged. ATTEND defines "etc." as: content the organiser could not be bothered to specify. Escalating.' },
      ],
    },
    {
      id: 'q1c',
      criterion: '1.1',
      category: 'Agenda Integrity Assessment',
      text: 'Indicate the number of times the agenda for this meeting has been revised since the original invite was sent.',
      options: [
        { code: 'A', text: 'Zero. The agenda was correct the first time because it was written by someone who knew what they wanted.', score: 3, comment: 'Acknowledged. A person who knew what they wanted scheduled a meeting. ATTEND has recorded this rare event.' },
        { code: 'B', text: 'Twice. The meeting purpose changed but the title did not.', score: 1, comment: 'Scope drift confirmed. The title remains. The purpose does not. A flag has been raised against the title.' },
        { code: 'C', text: 'The agenda has not been revised. It has also not been written.', score: 0, comment: 'Absence of revision confirmed. Absence of agenda confirmed. These facts are related.' },
        { code: 'D', text: 'The concept of revision implies a version exists. It does not.', score: 0, comment: 'Version zero does not exist. This response has been forwarded to the Existential Risk sub-committee.' },
      ],
    },
  ],

  // ── Criterion 2: Attendee Necessity ──
  [
    {
      id: 'q2a',
      criterion: '2.1',
      category: 'Attendee Necessity Validation',
      text: 'Select the statement that most accurately describes your functional necessity at this meeting.',
      options: [
        { code: 'A', text: 'I am the subject matter expert. My input is required to complete a documented deliverable.', score: 3, comment: 'Necessity confirmed. Your attendance is operationally justified. This is the correct outcome.' },
        { code: 'B', text: 'I was added without a stated reason. My presence appears to be ornamental.', score: 0, comment: 'Ornamental attendance flagged. ATTEND notes that ornamental attendees account for 34% of all meeting hours lost globally. You are part of a statistic.' },
        { code: 'C', text: 'My manager forwarded this invite. There was no accompanying message.', score: 0, comment: 'Silent forwarding detected. The absence of a message is itself a message. ATTEND is unable to decode it. Risk elevated.' },
        { code: 'D', text: 'I organised this meeting, so I am obligated to attend it. This is my burden.', score: 1, comment: 'Organiser obligation acknowledged. You have created the conditions of your own attendance. ATTEND offers no comfort.' },
      ],
    },
    {
      id: 'q2b',
      criterion: '2.1',
      category: 'Attendee Necessity Validation',
      text: 'How were you added to this meeting?',
      options: [
        { code: 'A', text: 'I was specifically requested by name with a documented rationale.', score: 3, comment: 'Named and justified. Your presence has been formally requested. Proceed with confidence, if such a thing is possible.' },
        { code: 'B', text: 'I was CC\'d on an email chain that was then converted into a calendar invite.', score: 0, comment: 'CC-to-invite pipeline detected. This is one of the leading causes of unnecessary attendance. You are a victim of infrastructure.' },
        { code: 'C', text: 'I am on a distribution list. The distribution list was invited.', score: 0, comment: 'Distribution list attendance confirmed. You were not invited. A list was invited. You happened to be on it. This distinction matters.' },
        { code: 'D', text: 'I don\'t know. I noticed it on my calendar this morning.', score: 0, comment: 'Origin of invite unknown. This response has been escalated. Meetings of unknown origin are classified as Unsolicited Temporal Incidents under MCS-07.' },
      ],
    },
    {
      id: 'q2c',
      criterion: '2.1',
      category: 'Attendee Necessity Validation',
      text: 'Of the total attendees on this invite, estimate the proportion whose attendance is operationally necessary.',
      options: [
        { code: 'A', text: 'All of them. Each person has a defined role in the stated outcome.', score: 3, comment: 'Full necessity confirmed. Every attendee is justified. ATTEND acknowledges this outcome while remaining professionally sceptical.' },
        { code: 'B', text: 'Approximately half. The remainder appear to be there for awareness.', score: 1, comment: '"Awareness" attendance flagged. Awareness can be achieved via a written summary. It does not require a calendar block. Risk score adjusted.' },
        { code: 'C', text: 'One person. That person is not me.', score: 0, comment: 'Single necessary attendee identified. That attendee is not you. This response requires no further analysis.' },
        { code: 'D', text: 'This question assumes the meeting has an operationally necessary purpose. Please revisit Criterion 1.', score: 0, comment: 'Meta-response detected. ATTEND agrees with your framing. It has been logged as a self-referential risk event.' },
      ],
    },
  ],

  // ── Criterion 3: Outcome Traceability ──
  [
    {
      id: 'q3a',
      criterion: '3.1',
      category: 'Outcome Traceability Index',
      text: 'Based on prior meetings with this organiser, what is the most likely documented outcome of this meeting?',
      options: [
        { code: 'A', text: 'A written decision, assigned owner, and deadline. Published within 24 hours.', score: 3, comment: 'Outcome traceability confirmed. Decisions will be made. Owners will be assigned. ATTEND is satisfied. For now.' },
        { code: 'B', text: 'A follow-up meeting to discuss what was discussed in this meeting.', score: 0, comment: 'Recursive meeting structure detected. A meeting to discuss a meeting is not an outcome. It is a symptom. Flagged accordingly.' },
        { code: 'C', text: 'A Confluence page that will be created, linked to Slack, and never opened again.', score: 1, comment: 'Confluence mortality confirmed. ATTEND estimates the page will receive 2.3 views before entering permanent dormancy. Risk noted.' },
        { code: 'D', text: 'Unclear. Previous meetings with this person have ended with the phrase "let\'s take this offline."', score: 0, comment: '"Let\'s take this offline" logged. ATTEND defines "offline" as: a second meeting that also produces no outcome. Pattern identified.' },
      ],
    },
    {
      id: 'q3b',
      criterion: '3.1',
      category: 'Outcome Traceability Index',
      text: 'Where will the outputs of this meeting be recorded?',
      options: [
        { code: 'A', text: 'A pre-existing project management system with assigned owners and due dates.', score: 3, comment: 'Output destination confirmed. Owners exist. Dates exist. ATTEND considers this an acceptable use of a meeting.' },
        { code: 'B', text: 'Someone\'s personal notes, which will not be shared.', score: 0, comment: 'Private note capture detected. Information will enter the meeting and not leave it. This is the definition of a closed system.' },
        { code: 'C', text: 'A meeting recap email that will arrive four days later and be marked unread.', score: 1, comment: 'Delayed recap protocol identified. Four days noted. The information will arrive after it is no longer relevant. Risk adjusted.' },
        { code: 'D', text: 'Outputs are aspirational at this stage.', score: 0, comment: '"Aspirational outputs" logged. ATTEND does not recognise aspiration as a documentation format. Escalating to High Risk.' },
      ],
    },
    {
      id: 'q3c',
      criterion: '3.1',
      category: 'Outcome Traceability Index',
      text: 'How will you know if the objective of this meeting has been achieved?',
      options: [
        { code: 'A', text: 'There is a binary success criterion documented in the agenda.', score: 3, comment: 'Success criterion confirmed. The meeting has a definition of done. ATTEND finds this professionally reassuring.' },
        { code: 'B', text: 'The organiser will say "great, thanks everyone" and end the call.', score: 0, comment: '"Great, thanks everyone" flagged as a pseudo-outcome. This phrase has ended 4.2 million meetings without producing a single documented decision.' },
        { code: 'C', text: 'You will receive a follow-up invite to assess whether the objective was achieved.', score: 0, comment: 'Assessment meeting detected. A meeting to assess a meeting is not a success criterion. It is administrative recursion. Flagged.' },
        { code: 'D', text: 'You will not know. This is fine. This is how it always goes.', score: 0, comment: 'Acceptance of ambiguity logged. ATTEND notes that this response suggests prior conditioning. You have attended too many meetings. Risk: Critical.' },
      ],
    },
  ],

  // ── Criterion 4: Duration Proportionality ──
  [
    {
      id: 'q4a',
      criterion: '4.1',
      category: 'Duration Proportionality Review',
      text: 'Assess the proportionality of the scheduled meeting duration relative to its stated purpose.',
      options: [
        { code: 'A', text: 'Duration is appropriate. A 25-minute cap was set. There is a hard stop.', score: 3, comment: 'Duration proportionality confirmed. A hard stop exists. ATTEND respects this boundary and the person who set it.' },
        { code: 'B', text: 'Scheduled for 60 minutes. The purpose could be addressed in a three-sentence Slack message.', score: 0, comment: '60-minute block flagged. Three sentences have been estimated as sufficient. 57 minutes of temporal surplus identified. Escalating.' },
        { code: 'C', text: 'Scheduled for 30 minutes. Will run to 47. This is a statistical certainty, not a concern.', score: 1, comment: '17-minute overrun pre-acknowledged. Your acceptance of this outcome is itself a risk indicator. Flagged under MCS-07 subsection 9: Temporal Resignation.' },
        { code: 'D', text: 'It is a recurring 90-minute weekly. No one knows who originally created it. It predates current leadership.', score: 0, comment: 'Ancient recurring detected. Origin unknown. Creator departed. Meeting persists. ATTEND classifies this as Organisational Folklore. Risk: Severe.' },
      ],
    },
    {
      id: 'q4b',
      criterion: '4.1',
      category: 'Duration Proportionality Review',
      text: 'This meeting is scheduled for one hour. At what point in that hour will the actual purpose of the meeting be introduced?',
      options: [
        { code: 'A', text: 'Immediately. The first agenda item addresses it directly.', score: 3, comment: 'Immediate purpose introduction confirmed. The meeting will begin with its reason for existing. ATTEND acknowledges this is not guaranteed.' },
        { code: 'B', text: 'Approximately 12 minutes in, after status updates no one requested.', score: 1, comment: '12-minute preamble identified. Status updates will consume time that belongs to the stated purpose. 12 minutes logged as waste.' },
        { code: 'C', text: 'At the 45-minute mark, which is why a follow-up has pre-emptively been scheduled.', score: 0, comment: 'Pre-emptive follow-up detected. The organiser knows 45 minutes will be insufficient. They have scheduled accordingly rather than addressing this. Risk: High.' },
        { code: 'D', text: 'The meeting will end before this is established.', score: 0, comment: 'Purpose introduction failure anticipated. The meeting will conclude without introducing its purpose. This response has been forwarded to the ATTEND Hall of Concern.' },
      ],
    },
    {
      id: 'q4c',
      criterion: '4.1',
      category: 'Duration Proportionality Review',
      text: 'Has a hard stop been communicated for this meeting?',
      options: [
        { code: 'A', text: 'Yes. The organiser has another meeting immediately after and has stated this publicly.', score: 3, comment: 'Hard stop confirmed via external constraint. The organiser\'s subsequent commitment will enforce discipline. ATTEND approves of this mechanism.' },
        { code: 'B', text: 'No hard stop. The organiser describes their schedule as "fluid."', score: 0, comment: '"Fluid schedule" flagged. Fluidity in scheduling is a risk factor. Meetings without boundaries expand to fill available consciousness.' },
        { code: 'C', text: 'The meeting has no hard stop and no soft stop. It will end when energy dissipates.', score: 0, comment: 'Energy-dissipation endpoint detected. This is not a meeting conclusion. It is an organisational heat death. Logged accordingly.' },
        { code: 'D', text: 'The last meeting with this group ran 22 minutes over. That was described as "a good session."', score: 0, comment: 'Overrun reframed as success. 22 minutes of unplanned attendance was celebrated. ATTEND finds this deeply instructive and entirely alarming.' },
      ],
    },
  ],

  // ── Criterion 5: Organiser Authority ──
  [
    {
      id: 'q5a',
      criterion: '5.1',
      category: 'Organiser Authority Verification',
      text: 'Characterise the decision-making authority of the meeting organiser relative to the stated meeting objective.',
      options: [
        { code: 'A', text: 'The organiser owns the decision. This meeting exists to make it.', score: 3, comment: 'Authority confirmed. The person who called the meeting can resolve it. This is the intended design of meetings. Noted with relief.' },
        { code: 'B', text: 'The organiser needs to "get buy-in." The actual decision-maker is not on this invite.', score: 0, comment: 'Buy-in meeting detected. The decision-maker is absent. This meeting will produce a recommendation that requires another meeting. Flagged.' },
        { code: 'C', text: 'The organiser is gathering opinions to present to someone who will gather further opinions.', score: 0, comment: 'Opinion aggregation chain identified. Depth of chain unknown. ATTEND estimates three to five additional meetings before a decision is possible.' },
        { code: 'D', text: 'The organiser\'s title contains the word "Transformation." No further information is available.', score: 0, comment: '"Transformation" title logged. ATTEND has been unable to determine what this role transforms, or into what. Risk elevated on grounds of ambiguity.' },
      ],
    },
    {
      id: 'q5b',
      criterion: '5.1',
      category: 'Organiser Authority Verification',
      text: 'Has the organiser held a meeting on this topic before?',
      options: [
        { code: 'A', text: 'No. This is a new issue requiring fresh input.', score: 3, comment: 'Novel issue confirmed. The meeting is the first of its kind on this topic. ATTEND considers this a legitimate use of a calendar block.' },
        { code: 'B', text: 'Yes, once. That meeting produced the question that this meeting will attempt to answer.', score: 1, comment: 'Sequential meeting chain confirmed. Meeting one produced a question. Meeting two will attempt an answer. Efficiency: unclear.' },
        { code: 'C', text: 'Yes, several times. The topic remains unresolved. The meetings continue.', score: 0, comment: 'Chronic unresolved topic detected. Multiple meetings have failed to produce a conclusion. The meetings are continuing anyway. Risk: Elevated.' },
        { code: 'D', text: 'The organiser cannot recall. There have been many meetings.', score: 0, comment: 'Meeting volume exceeds organiser\'s recall capacity. This is a diagnostic finding. It has been logged under MCS-07 subsection 11: Meeting Saturation.' },
      ],
    },
    {
      id: 'q5c',
      criterion: '5.1',
      category: 'Organiser Authority Verification',
      text: 'Who is the most senior person on this invite?',
      options: [
        { code: 'A', text: 'The organiser. Authority and agenda are correctly aligned.', score: 3, comment: 'Authority alignment confirmed. The most senior person called the meeting. This is structurally sound. Proceeding without flag.' },
        { code: 'B', text: 'Someone who was added "just to keep them in the loop" and will not contribute.', score: 1, comment: 'Senior loop attendee detected. Their presence is symbolic. Their time is not. This has been noted in the risk register.' },
        { code: 'C', text: 'Someone whose assistant accepted on their behalf and who may not attend.', score: 0, comment: 'Proxy acceptance logged. The most senior person on this invite may not attend it. Their assistant\'s calendar is not their calendar. Risk adjusted.' },
        { code: 'D', text: 'It is unclear. Several people on this call have the word "Head" in their title. Their jurisdictions overlap.', score: 0, comment: 'Jurisdictional overlap detected. Multiple Heads identified. No clear apex. ATTEND classifies this as a Governance Ambiguity Event.' },
      ],
    },
  ],

  // ── Criterion 6: Async Substitution ──
  [
    {
      id: 'q6a',
      criterion: '6.1',
      category: 'Asynchronous Substitution Eligibility',
      text: 'Could the intended outcome of this meeting be achieved through a written document reviewed independently by each attendee?',
      options: [
        { code: 'A', text: 'Yes, unambiguously. This meeting is a document that has not yet accepted its true nature.', score: 0, comment: 'Document misclassified as meeting confirmed. The meeting has not yet achieved self-awareness. ATTEND recommends intervention.' },
        { code: 'B', text: 'No. Live discussion and real-time decision-making are structurally required.', score: 3, comment: 'Async substitution ruled out. Live interaction is necessary. The meeting is justified on structural grounds. Proceeding.' },
        { code: 'C', text: 'Possibly. However, the organiser has stated they are "not a big async person."', score: 0, comment: 'Personal preference overriding operational efficiency. "Not a big async person" has been logged as a risk factor under MCS-07 subsection 6: Individual Calendar Externalisation.' },
        { code: 'D', text: 'This question was raised internally. The response was to schedule a meeting about it.', score: 0, comment: 'Meta-meeting confirmed. A meeting was called to determine if a meeting was necessary. The irony has been logged. It did not affect the outcome.' },
      ],
    },
    {
      id: 'q6b',
      criterion: '6.1',
      category: 'Asynchronous Substitution Eligibility',
      text: 'Has anyone on this invite suggested that this meeting could be an email?',
      options: [
        { code: 'A', text: 'No. Live discussion is structurally necessary and all parties agree.', score: 3, comment: 'Unanimous necessity confirmed. No attendee has questioned the meeting\'s existence. This is either a good sign or a cultural one.' },
        { code: 'B', text: 'Yes. The suggestion was received poorly.', score: 0, comment: 'Async suggestion rejected. The suggestion was made and dismissed. ATTEND notes that the correct answer was dismissed. This has been flagged.' },
        { code: 'C', text: 'Yes. The response was to schedule a meeting to discuss the suggestion.', score: 0, comment: 'Recursive meeting response confirmed. The suggestion that a meeting was unnecessary produced a meeting. ATTEND has no further comment at this time.' },
        { code: 'D', text: 'The thought has occurred to several attendees independently. None have spoken it aloud.', score: 0, comment: 'Silent consensus detected. Multiple attendees share a private assessment they have chosen not to voice. ATTEND considers this a systemic finding.' },
      ],
    },
    {
      id: 'q6c',
      criterion: '6.1',
      category: 'Asynchronous Substitution Eligibility',
      text: 'Indicate the volume of information that will be shared in this meeting that could not have been distributed in advance.',
      options: [
        { code: 'A', text: 'Substantial. Real-time input and live data are central to the objective.', score: 3, comment: 'Live information dependency confirmed. The meeting requires real-time data. Async substitution is not viable. Attendance justified.' },
        { code: 'B', text: 'Minimal. The information exists. No one prepared it for distribution.', score: 1, comment: 'Preparation failure identified. The information exists but was not shared. The meeting is compensating for an administrative shortcoming. Risk noted.' },
        { code: 'C', text: 'None. The information will be read aloud from a slide deck attendees will receive afterwards.', score: 0, comment: 'Slide narration meeting confirmed. Information will be read aloud. The same information will be distributed after. Attendance provides no informational advantage.' },
        { code: 'D', text: 'The information does not yet exist. This meeting is being used to generate it.', score: 0, comment: 'Information generation meeting detected. The meeting is being used as a production environment. ATTEND does not endorse this architecture.' },
      ],
    },
  ],

  // ── Criterion 7: Recurrence Justification ──
  [
    {
      id: 'q7a',
      criterion: '7.1',
      category: 'Recurrence Justification Audit',
      text: 'If this is a recurring meeting, indicate the most recent formal review of its continued necessity.',
      options: [
        { code: 'A', text: 'This is not a recurring meeting. It has a defined purpose and a planned end state.', score: 3, comment: 'Non-recurring confirmed. The meeting has an end state. It will conclude when its purpose is met. ATTEND considers this the correct design.' },
        { code: 'B', text: 'It is recurring. It has never been reviewed. Questioning it feels professionally inadvisable.', score: 0, comment: 'Review-free recurrence confirmed. The meeting continues because questioning it carries social risk. This is noted as an Institutional Inertia Event.' },
        { code: 'C', text: 'It is recurring. The original organiser left the company. The meeting remains.', score: 0, comment: 'Organiser departure confirmed. Meeting persistence confirmed. The meeting has outlived its creator. It continues without them. Risk: Elevated.' },
        { code: 'D', text: 'It is a recurring meeting created to replace a recurring meeting that was "taking too long."', score: 0, comment: 'Replacement recurring detected. A meeting was created to fix a meeting. The original problem has been inherited. ATTEND classifies this as Recursive Inefficiency.' },
      ],
    },
    {
      id: 'q7b',
      criterion: '7.1',
      category: 'Recurrence Justification Audit',
      text: 'What is the stated purpose of this recurring meeting?',
      options: [
        { code: 'A', text: 'A specific, documented goal that has not yet been achieved and requires ongoing coordination.', score: 3, comment: 'Documented recurring purpose confirmed. The meeting exists to achieve something specific. It will end when that is done. Proceeding without flag.' },
        { code: 'B', text: '"To stay aligned." No further definition has been offered or requested.', score: 0, comment: '"Stay aligned" flagged. Alignment is not a purpose. It is a state. This meeting has been scheduled to maintain a state with no defined parameters. Risk: High.' },
        { code: 'C', text: '"Sync." The word sync appears in the title, description, and organiser\'s email signature.', score: 0, comment: 'Sync proliferation detected. The word sync has colonised all available description fields. Its meaning has not been specified in any of them.' },
        { code: 'D', text: 'There is no stated purpose. There has never been a stated purpose. Asking feels aggressive.', score: 0, comment: 'Purpose-free recurring confirmed. Inquiry suppressed by social pressure. ATTEND notes that the absence of a stated purpose is itself a purpose. It is not a good one.' },
      ],
    },
    {
      id: 'q7c',
      criterion: '7.1',
      category: 'Recurrence Justification Audit',
      text: 'What would happen if this recurring meeting were cancelled without notice next week?',
      options: [
        { code: 'A', text: 'A specific deliverable would be delayed. This is measurable and unacceptable.', score: 3, comment: 'Operational dependency confirmed. Cancellation produces measurable harm. The meeting is load-bearing. ATTEND acknowledges its necessity.' },
        { code: 'B', text: 'Nothing. This has been tested. Nothing happened.', score: 0, comment: 'Empirical cancellation test confirmed. Nothing happened. The meeting continued to be scheduled. These two facts have not yet been reconciled.' },
        { code: 'C', text: 'Three people would have an unexpected free hour and feel briefly uneasy about it.', score: 1, comment: 'Free time anxiety predicted. Cancellation would produce discomfort, not disruption. ATTEND notes this as a finding about the attendees, not the meeting.' },
        { code: 'D', text: 'The question is theoretical. This meeting cannot be cancelled. It simply is.', score: 0, comment: 'Meeting permanence asserted. Cancellation described as theoretical. ATTEND classifies this meeting as load-bearing mythology.' },
      ],
    },
  ],

  // ── Criterion 8: Psychological Safety ──
  [
    {
      id: 'q8a',
      criterion: '8.1',
      category: 'Psychological Safety Index',
      text: 'Characterise the likely emotional register of this meeting based on available contextual data.',
      options: [
        { code: 'A', text: 'Productive. Disagreement is expected and handled at the content level.', score: 3, comment: 'Functional conflict model confirmed. Disagreement is permitted and content-focused. ATTEND considers this psychologically compliant.' },
        { code: 'B', text: 'The invite was sent at 11:47pm. The subject line contains an exclamation mark.', score: 0, comment: 'Late-night exclamation mark detected. 11:47pm logged. Exclamation mark logged. These two data points in combination constitute a risk event.' },
        { code: 'C', text: 'Someone on this invite has replied-all in the last 72 hours. The tone was not collegial.', score: 0, comment: 'Recent reply-all incident flagged. Non-collegial tone confirmed. The meeting will contain at least one person who has recently demonstrated poor email governance.' },
        { code: 'D', text: 'This meeting was described internally as "a chance to align." Prior alignments have not held.', score: 0, comment: 'Alignment recidivism detected. Previous alignments have failed. A new alignment is being attempted. ATTEND\'s confidence in this outcome is low.' },
      ],
    },
    {
      id: 'q8b',
      criterion: '8.1',
      category: 'Psychological Safety Index',
      text: 'Is there a known interpersonal conflict between any two attendees on this invite?',
      options: [
        { code: 'A', text: 'No. All attendees have a functional professional relationship.', score: 3, comment: 'Interpersonal compliance confirmed. No known conflicts on record. ATTEND notes that unknown conflicts remain outside the scope of this assessment.' },
        { code: 'B', text: 'Yes. It is being managed by ensuring they never speak directly. This meeting will test that system.', score: 0, comment: 'Conflict management system stress test identified. Two parties who do not speak directly are being placed in a room together. Risk: High.' },
        { code: 'C', text: 'There is a conflict. Both parties believe it is invisible. It is not invisible.', score: 0, comment: 'Invisible conflict confirmed as visible. All parties are aware. No party has acknowledged this. The meeting will proceed on this shared fiction.' },
        { code: 'D', text: 'The conflict is not between two people. It is between a person and a process. The process has more institutional support.', score: 0, comment: 'Human vs process conflict logged. The process has institutional backing. ATTEND does not assess the person\'s chances favourably.' },
      ],
    },
    {
      id: 'q8c',
      criterion: '8.1',
      category: 'Psychological Safety Index',
      text: 'Has this meeting been called in response to something that happened?',
      options: [
        { code: 'A', text: 'No. It is proactive and forward-looking.', score: 3, comment: 'Proactive scheduling confirmed. No incident has triggered this meeting. It exists by design, not reaction. ATTEND finds this acceptable.' },
        { code: 'B', text: 'Yes. What happened is not referenced in the invite. Its presence is understood.', score: 0, comment: 'Unacknowledged incident confirmed. Something happened. The invite does not mention it. Everyone knows. This meeting is about that. Risk: Elevated.' },
        { code: 'C', text: 'Yes. The phrase used was "we should probably get everyone together." The word "probably" is doing significant work.', score: 0, comment: '"Probably" flagged. This word indicates the organiser is uncertain whether the meeting is necessary. They scheduled it anyway. Risk noted.' },
        { code: 'D', text: 'This meeting was described as routine. It is not routine. It was expedited.', score: 0, comment: 'Expedited meeting described as routine. The discrepancy between description and scheduling behaviour has been logged. Something happened.' },
      ],
    },
  ],

  // ── Criterion 9: Temporal Displacement ──
  [
    {
      id: 'q9a',
      criterion: '9.1',
      category: 'Temporal Displacement Assessment',
      text: 'Evaluate the scheduling context of this meeting relative to your documented focus hours.',
      options: [
        { code: 'A', text: 'The meeting falls within a designated collaboration window. No deep work is displaced.', score: 3, comment: 'Scheduling compliance confirmed. The meeting occupies appropriate calendar real estate. No focus time was harmed in its placement.' },
        { code: 'B', text: 'It is scheduled across a lunch hour that was the only unbooked slot in a six-hour block.', score: 0, comment: 'Lunch slot colonisation detected. The only available gap in a six-hour block has been identified and filled. ATTEND notes this was not an accident.' },
        { code: 'C', text: 'It bisects a three-hour focus block. Recovery to deep work will require approximately 23 minutes after.', score: 1, comment: '23-minute recovery cost logged. The meeting will cost 23 minutes beyond its scheduled duration. This overhead has not been acknowledged by the organiser.' },
        { code: 'D', text: 'It is at 8am on a Friday. The organiser has described themselves as "a morning person" on LinkedIn.', score: 0, comment: 'Friday 8am scheduling confirmed. LinkedIn morning person disclosure noted. ATTEND classifies this as an act of chronological aggression.' },
      ],
    },
    {
      id: 'q9b',
      criterion: '9.1',
      category: 'Temporal Displacement Assessment',
      text: 'How much notice were you given for this meeting?',
      options: [
        { code: 'A', text: 'Sufficient. The invite arrived with time to prepare and decline if necessary.', score: 3, comment: 'Notice period compliant. Preparation time was available. Declination was possible. ATTEND considers this meeting procedurally sound.' },
        { code: 'B', text: '47 minutes. The word "urgent" appears in the subject line. The topic is not urgent.', score: 0, comment: '"Urgent" classification disputed. 47-minute notice logged. The topic\'s urgency has been assessed as low. The subject line\'s urgency has been assessed as performative.' },
        { code: 'C', text: 'The invite was sent while you were in a different meeting. This is not a coincidence.', score: 0, comment: 'In-meeting invite delivery noted. The scheduling occurred during an existing commitment. ATTEND agrees this is not a coincidence.' },
        { code: 'D', text: 'The meeting is tomorrow. You are learning about it now because you read this tool instead of your email.', score: 0, comment: 'Notification pathway irregularity detected. ATTEND is not an email client. You have been informed through an unintended channel. Check your inbox.' },
      ],
    },
    {
      id: 'q9c',
      criterion: '9.1',
      category: 'Temporal Displacement Assessment',
      text: 'What is the opportunity cost of attending this meeting?',
      options: [
        { code: 'A', text: 'Low. The meeting falls in a period of low-value tasks that can be deferred.', score: 3, comment: 'Low opportunity cost confirmed. The displaced work is deferrable. Attendance does not represent a significant productivity loss. Proceeding.' },
        { code: 'B', text: 'High. You are currently in a state of flow that has taken four days to achieve.', score: 0, comment: 'Flow state displacement confirmed. Four days of accumulation will be interrupted. Re-entry time not yet calculated. Risk: High.' },
        { code: 'C', text: 'Significant. You will spend the hour before the meeting preparing and the hour after recovering.', score: 0, comment: 'Three-hour meeting footprint identified for a one-hour meeting. Preparation and recovery overhead logged. The meeting costs three times its scheduled duration.' },
        { code: 'D', text: 'The opportunity cost cannot be calculated because you have stopped being able to imagine what uninterrupted time feels like.', score: 0, comment: 'Uninterrupted time concept erosion confirmed. This response has been escalated to the ATTEND Welfare sub-committee. Please log off after this assessment.' },
      ],
    },
  ],

  // ── Criterion 10: Existential Necessity ──
  [
    {
      id: 'q10a',
      criterion: '10.1',
      category: 'Existential Necessity Review',
      text: 'In your considered professional judgement, what is the most accurate characterisation of why this meeting was called?',
      options: [
        { code: 'A', text: 'A specific problem exists. This meeting is the most efficient mechanism to resolve it.', score: 3, comment: 'Existential justification confirmed. A problem exists. This meeting addresses it directly. ATTEND considers this a valid use of collective time.' },
        { code: 'B', text: 'The organiser is anxious and the meeting is how they manage it.', score: 0, comment: 'Anxiety-driven scheduling detected. The meeting is performing a therapeutic function for the organiser. This cost is being distributed across all attendees.' },
        { code: 'C', text: 'Visibility. Someone needs to be seen doing something. This meeting is that something.', score: 0, comment: 'Visibility meeting confirmed. The meeting exists to produce the appearance of action. No action is expected. All attendees are props in this narrative.' },
        { code: 'D', text: 'Unclear. The meeting exists because the previous meeting established that a meeting was needed.', score: 0, comment: 'Meeting parthenogenesis confirmed. This meeting was produced by a meeting. That meeting may have been produced by a meeting. The origin is lost.' },
      ],
    },
    {
      id: 'q10b',
      criterion: '10.1',
      category: 'Existential Necessity Review',
      text: 'Complete the following sentence: "If I do not attend this meeting..."',
      options: [
        { code: 'A', text: '"...a decision will be made without critical input and the consequences will be measurable."', score: 3, comment: 'Attendance necessity confirmed by consequence analysis. Your absence produces measurable harm. You are operationally required. Attend.' },
        { code: 'B', text: '"...someone will notice and mention it in a way that is framed as concern."', score: 0, comment: 'Social consequence identified. Non-attendance will be noted and communicated as pastoral concern. It is not pastoral concern. This has been logged.' },
        { code: 'C', text: '"...nothing will change, but I will be asked to comment on the summary as though I had been there."', score: 0, comment: 'Retrospective inclusion protocol identified. Your absence will be accommodated post-meeting. Your attendance is therefore optional and your invitation was courtesy.' },
        { code: 'D', text: '"...the meeting will still happen. It always happens."', score: 0, comment: 'Meeting inevitability confirmed. Your attendance does not affect whether the meeting occurs. You are optional. The meeting is not. This is the finding.' },
      ],
    },
    {
      id: 'q10c',
      criterion: '10.1',
      category: 'Existential Necessity Review',
      text: 'What is your honest assessment of whether this meeting would have occurred regardless of whether you agreed to attend?',
      options: [
        { code: 'A', text: 'No. My attendance was a prerequisite for it being scheduled.', score: 3, comment: 'Attendance as prerequisite confirmed. The meeting required your presence to exist. You are load-bearing. Attend.' },
        { code: 'B', text: 'Yes. My attendance was requested after the meeting was already confirmed.', score: 0, comment: 'Post-confirmation invitation detected. The meeting was scheduled before your attendance was sought. You were added. You were not needed.' },
        { code: 'C', text: 'Yes. A version of this meeting has been happening quarterly since 2019. You are new. The meeting is not.', score: 0, comment: 'Legacy meeting detected. The meeting predates your involvement by several years. It will continue after your involvement ends. You are a temporary variable.' },
        { code: 'D', text: 'The meeting predates the problem it was created to solve. It will outlast the solution.', score: 0, comment: 'Meeting longevity exceeding problem lifespan confirmed. The solution will be found and implemented. The meeting will continue. This has been escalated to the ATTEND Philosophical Risk division.' },
      ],
    },
  ],
]

// Picks one random question from each criterion slot
export function selectQuestions() {
  return questionBank.map((slot) => slot[Math.floor(Math.random() * slot.length)])
}
