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
        { code: 'A', text: 'Yes. A documented agenda with time allocations was shared at least 24 hours in advance.', score: 3 },
        { code: 'B', text: 'There is an agenda. It says "updates" and "AOB." That is the full agenda.', score: 1 },
        { code: 'C', text: 'No agenda was shared. The invite description reads "let\'s connect."', score: 0 },
        { code: 'D', text: 'The organiser has verbally committed to "sending something over" for three consecutive weeks.', score: 0 },
      ],
    },
    {
      id: 'q1b',
      criterion: '1.1',
      category: 'Agenda Integrity Assessment',
      text: 'The meeting invite was sent with a description field. Characterise the contents of that field.',
      options: [
        { code: 'A', text: 'A structured agenda with named sections, owners, and a stated objective.', score: 3 },
        { code: 'B', text: '"Per our conversation." There was no prior conversation.', score: 0 },
        { code: 'C', text: 'A link to a Notion page that requires access to be requested.', score: 1 },
        { code: 'D', text: 'A single sentence ending in "etc."', score: 0 },
      ],
    },
    {
      id: 'q1c',
      criterion: '1.1',
      category: 'Agenda Integrity Assessment',
      text: 'Indicate the number of times the agenda for this meeting has been revised since the original invite was sent.',
      options: [
        { code: 'A', text: 'Zero. The agenda was correct the first time because it was written by someone who knew what they wanted.', score: 3 },
        { code: 'B', text: 'Twice. The meeting purpose changed but the title did not.', score: 1 },
        { code: 'C', text: 'The agenda has not been revised. It has also not been written.', score: 0 },
        { code: 'D', text: 'The concept of revision implies a version exists. It does not.', score: 0 },
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
        { code: 'A', text: 'I am the subject matter expert. My input is required to complete a documented deliverable.', score: 3 },
        { code: 'B', text: 'I was added without a stated reason. My presence appears to be ornamental.', score: 0 },
        { code: 'C', text: 'My manager forwarded this invite. There was no accompanying message.', score: 0 },
        { code: 'D', text: 'I organised this meeting, so I am obligated to attend it. This is my burden.', score: 1 },
      ],
    },
    {
      id: 'q2b',
      criterion: '2.1',
      category: 'Attendee Necessity Validation',
      text: 'How were you added to this meeting?',
      options: [
        { code: 'A', text: 'I was specifically requested by name with a documented rationale.', score: 3 },
        { code: 'B', text: 'I was CC\'d on an email chain that was then converted into a calendar invite.', score: 0 },
        { code: 'C', text: 'I am on a distribution list. The distribution list was invited.', score: 0 },
        { code: 'D', text: 'I don\'t know. I noticed it on my calendar this morning.', score: 0 },
      ],
    },
    {
      id: 'q2c',
      criterion: '2.1',
      category: 'Attendee Necessity Validation',
      text: 'Of the total attendees on this invite, estimate the proportion whose attendance is operationally necessary.',
      options: [
        { code: 'A', text: 'All of them. Each person has a defined role in the stated outcome.', score: 3 },
        { code: 'B', text: 'Approximately half. The remainder appear to be there for awareness.', score: 1 },
        { code: 'C', text: 'One person. That person is not me.', score: 0 },
        { code: 'D', text: 'This question assumes the meeting has an operationally necessary purpose. Please revisit Criterion 1.', score: 0 },
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
        { code: 'A', text: 'A written decision, assigned owner, and deadline. Published within 24 hours.', score: 3 },
        { code: 'B', text: 'A follow-up meeting to discuss what was discussed in this meeting.', score: 0 },
        { code: 'C', text: 'A Confluence page that will be created, linked to Slack, and never opened again.', score: 1 },
        { code: 'D', text: 'Unclear. Previous meetings with this person have ended with the phrase "let\'s take this offline."', score: 0 },
      ],
    },
    {
      id: 'q3b',
      criterion: '3.1',
      category: 'Outcome Traceability Index',
      text: 'Where will the outputs of this meeting be recorded?',
      options: [
        { code: 'A', text: 'A pre-existing project management system with assigned owners and due dates.', score: 3 },
        { code: 'B', text: 'Someone\'s personal notes, which will not be shared.', score: 0 },
        { code: 'C', text: 'A meeting recap email that will arrive four days later and be marked unread.', score: 1 },
        { code: 'D', text: 'Outputs are aspirational at this stage.', score: 0 },
      ],
    },
    {
      id: 'q3c',
      criterion: '3.1',
      category: 'Outcome Traceability Index',
      text: 'How will you know if the objective of this meeting has been achieved?',
      options: [
        { code: 'A', text: 'There is a binary success criterion documented in the agenda.', score: 3 },
        { code: 'B', text: 'The organiser will say "great, thanks everyone" and end the call.', score: 0 },
        { code: 'C', text: 'You will receive a follow-up invite to assess whether the objective was achieved.', score: 0 },
        { code: 'D', text: 'You will not know. This is fine. This is how it always goes.', score: 0 },
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
        { code: 'A', text: 'Duration is appropriate. A 25-minute cap was set. There is a hard stop.', score: 3 },
        { code: 'B', text: 'Scheduled for 60 minutes. The purpose could be addressed in a three-sentence Slack message.', score: 0 },
        { code: 'C', text: 'Scheduled for 30 minutes. Will run to 47. This is a statistical certainty, not a concern.', score: 1 },
        { code: 'D', text: 'It is a recurring 90-minute weekly. No one knows who originally created it. It predates current leadership.', score: 0 },
      ],
    },
    {
      id: 'q4b',
      criterion: '4.1',
      category: 'Duration Proportionality Review',
      text: 'This meeting is scheduled for one hour. At what point in that hour will the actual purpose of the meeting be introduced?',
      options: [
        { code: 'A', text: 'Immediately. The first agenda item addresses it directly.', score: 3 },
        { code: 'B', text: 'Approximately 12 minutes in, after status updates no one requested.', score: 1 },
        { code: 'C', text: 'At the 45-minute mark, which is why a follow-up has pre-emptively been scheduled.', score: 0 },
        { code: 'D', text: 'The meeting will end before this is established.', score: 0 },
      ],
    },
    {
      id: 'q4c',
      criterion: '4.1',
      category: 'Duration Proportionality Review',
      text: 'Has a hard stop been communicated for this meeting?',
      options: [
        { code: 'A', text: 'Yes. The organiser has another meeting immediately after and has stated this publicly.', score: 3 },
        { code: 'B', text: 'No hard stop. The organiser describes their schedule as "fluid."', score: 0 },
        { code: 'C', text: 'The meeting has no hard stop and no soft stop. It will end when energy dissipates.', score: 0 },
        { code: 'D', text: 'The last meeting with this group ran 22 minutes over. That was described as "a good session."', score: 0 },
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
        { code: 'A', text: 'The organiser owns the decision. This meeting exists to make it.', score: 3 },
        { code: 'B', text: 'The organiser needs to "get buy-in." The actual decision-maker is not on this invite.', score: 0 },
        { code: 'C', text: 'The organiser is gathering opinions to present to someone who will gather further opinions.', score: 0 },
        { code: 'D', text: 'The organiser\'s title contains the word "Transformation." No further information is available.', score: 0 },
      ],
    },
    {
      id: 'q5b',
      criterion: '5.1',
      category: 'Organiser Authority Verification',
      text: 'Has the organiser held a meeting on this topic before?',
      options: [
        { code: 'A', text: 'No. This is a new issue requiring fresh input.', score: 3 },
        { code: 'B', text: 'Yes, once. That meeting produced the question that this meeting will attempt to answer.', score: 1 },
        { code: 'C', text: 'Yes, several times. The topic remains unresolved. The meetings continue.', score: 0 },
        { code: 'D', text: 'The organiser cannot recall. There have been many meetings.', score: 0 },
      ],
    },
    {
      id: 'q5c',
      criterion: '5.1',
      category: 'Organiser Authority Verification',
      text: 'Who is the most senior person on this invite?',
      options: [
        { code: 'A', text: 'The organiser. Authority and agenda are correctly aligned.', score: 3 },
        { code: 'B', text: 'Someone who was added "just to keep them in the loop" and will not contribute.', score: 1 },
        { code: 'C', text: 'Someone whose assistant accepted on their behalf and who may not attend.', score: 0 },
        { code: 'D', text: 'It is unclear. Several people on this call have the word "Head" in their title. Their jurisdictions overlap.', score: 0 },
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
        { code: 'A', text: 'Yes, unambiguously. This meeting is a document that has not yet accepted its true nature.', score: 0 },
        { code: 'B', text: 'No. Live discussion and real-time decision-making are structurally required.', score: 3 },
        { code: 'C', text: 'Possibly. However, the organiser has stated they are "not a big async person."', score: 0 },
        { code: 'D', text: 'This question was raised internally. The response was to schedule a meeting about it.', score: 0 },
      ],
    },
    {
      id: 'q6b',
      criterion: '6.1',
      category: 'Asynchronous Substitution Eligibility',
      text: 'Has anyone on this invite suggested that this meeting could be an email?',
      options: [
        { code: 'A', text: 'No. Live discussion is structurally necessary and all parties agree.', score: 3 },
        { code: 'B', text: 'Yes. The suggestion was received poorly.', score: 0 },
        { code: 'C', text: 'Yes. The response was to schedule a meeting to discuss the suggestion.', score: 0 },
        { code: 'D', text: 'The thought has occurred to several attendees independently. None have spoken it aloud.', score: 0 },
      ],
    },
    {
      id: 'q6c',
      criterion: '6.1',
      category: 'Asynchronous Substitution Eligibility',
      text: 'Indicate the volume of information that will be shared in this meeting that could not have been distributed in advance.',
      options: [
        { code: 'A', text: 'Substantial. Real-time input and live data are central to the objective.', score: 3 },
        { code: 'B', text: 'Minimal. The information exists. No one prepared it for distribution.', score: 1 },
        { code: 'C', text: 'None. The information will be read aloud from a slide deck attendees will receive afterwards.', score: 0 },
        { code: 'D', text: 'The information does not yet exist. This meeting is being used to generate it.', score: 0 },
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
        { code: 'A', text: 'This is not a recurring meeting. It has a defined purpose and a planned end state.', score: 3 },
        { code: 'B', text: 'It is recurring. It has never been reviewed. Questioning it feels professionally inadvisable.', score: 0 },
        { code: 'C', text: 'It is recurring. The original organiser left the company. The meeting remains.', score: 0 },
        { code: 'D', text: 'It is a recurring meeting created to replace a recurring meeting that was "taking too long."', score: 0 },
      ],
    },
    {
      id: 'q7b',
      criterion: '7.1',
      category: 'Recurrence Justification Audit',
      text: 'What is the stated purpose of this recurring meeting?',
      options: [
        { code: 'A', text: 'A specific, documented goal that has not yet been achieved and requires ongoing coordination.', score: 3 },
        { code: 'B', text: '"To stay aligned." No further definition has been offered or requested.', score: 0 },
        { code: 'C', text: '"Sync." The word sync appears in the title, description, and organiser\'s email signature.', score: 0 },
        { code: 'D', text: 'There is no stated purpose. There has never been a stated purpose. Asking feels aggressive.', score: 0 },
      ],
    },
    {
      id: 'q7c',
      criterion: '7.1',
      category: 'Recurrence Justification Audit',
      text: 'What would happen if this recurring meeting were cancelled without notice next week?',
      options: [
        { code: 'A', text: 'A specific deliverable would be delayed. This is measurable and unacceptable.', score: 3 },
        { code: 'B', text: 'Nothing. This has been tested. Nothing happened.', score: 0 },
        { code: 'C', text: 'Three people would have an unexpected free hour and feel briefly uneasy about it.', score: 1 },
        { code: 'D', text: 'The question is theoretical. This meeting cannot be cancelled. It simply is.', score: 0 },
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
        { code: 'A', text: 'Productive. Disagreement is expected and handled at the content level.', score: 3 },
        { code: 'B', text: 'The invite was sent at 11:47pm. The subject line contains an exclamation mark.', score: 0 },
        { code: 'C', text: 'Someone on this invite has replied-all in the last 72 hours. The tone was not collegial.', score: 0 },
        { code: 'D', text: 'This meeting was described internally as "a chance to align." Prior alignments have not held.', score: 0 },
      ],
    },
    {
      id: 'q8b',
      criterion: '8.1',
      category: 'Psychological Safety Index',
      text: 'Is there a known interpersonal conflict between any two attendees on this invite?',
      options: [
        { code: 'A', text: 'No. All attendees have a functional professional relationship.', score: 3 },
        { code: 'B', text: 'Yes. It is being managed by ensuring they never speak directly. This meeting will test that system.', score: 0 },
        { code: 'C', text: 'There is a conflict. Both parties believe it is invisible. It is not invisible.', score: 0 },
        { code: 'D', text: 'The conflict is not between two people. It is between a person and a process. The process has more institutional support.', score: 0 },
      ],
    },
    {
      id: 'q8c',
      criterion: '8.1',
      category: 'Psychological Safety Index',
      text: 'Has this meeting been called in response to something that happened?',
      options: [
        { code: 'A', text: 'No. It is proactive and forward-looking.', score: 3 },
        { code: 'B', text: 'Yes. What happened is not referenced in the invite. Its presence is understood.', score: 0 },
        { code: 'C', text: 'Yes. The phrase used was "we should probably get everyone together." The word "probably" is doing significant work.', score: 0 },
        { code: 'D', text: 'This meeting was described as routine. It is not routine. It was expedited.', score: 0 },
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
        { code: 'A', text: 'The meeting falls within a designated collaboration window. No deep work is displaced.', score: 3 },
        { code: 'B', text: 'It is scheduled across a lunch hour that was the only unbooked slot in a six-hour block.', score: 0 },
        { code: 'C', text: 'It bisects a three-hour focus block. Recovery to deep work will require approximately 23 minutes after.', score: 1 },
        { code: 'D', text: 'It is at 8am on a Friday. The organiser has described themselves as "a morning person" on LinkedIn.', score: 0 },
      ],
    },
    {
      id: 'q9b',
      criterion: '9.1',
      category: 'Temporal Displacement Assessment',
      text: 'How much notice were you given for this meeting?',
      options: [
        { code: 'A', text: 'Sufficient. The invite arrived with time to prepare and decline if necessary.', score: 3 },
        { code: 'B', text: '47 minutes. The word "urgent" appears in the subject line. The topic is not urgent.', score: 0 },
        { code: 'C', text: 'The invite was sent while you were in a different meeting. This is not a coincidence.', score: 0 },
        { code: 'D', text: 'The meeting is tomorrow. You are learning about it now because you read this tool instead of your email.', score: 0 },
      ],
    },
    {
      id: 'q9c',
      criterion: '9.1',
      category: 'Temporal Displacement Assessment',
      text: 'What is the opportunity cost of attending this meeting?',
      options: [
        { code: 'A', text: 'Low. The meeting falls in a period of low-value tasks that can be deferred.', score: 3 },
        { code: 'B', text: 'High. You are currently in a state of flow that has taken four days to achieve.', score: 0 },
        { code: 'C', text: 'Significant. You will spend the hour before the meeting preparing and the hour after recovering.', score: 0 },
        { code: 'D', text: 'The opportunity cost cannot be calculated because you have stopped being able to imagine what uninterrupted time feels like.', score: 0 },
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
        { code: 'A', text: 'A specific problem exists. This meeting is the most efficient mechanism to resolve it.', score: 3 },
        { code: 'B', text: 'The organiser is anxious and the meeting is how they manage it.', score: 0 },
        { code: 'C', text: 'Visibility. Someone needs to be seen doing something. This meeting is that something.', score: 0 },
        { code: 'D', text: 'Unclear. The meeting exists because the previous meeting established that a meeting was needed.', score: 0 },
      ],
    },
    {
      id: 'q10b',
      criterion: '10.1',
      category: 'Existential Necessity Review',
      text: 'Complete the following sentence: "If I do not attend this meeting..."',
      options: [
        { code: 'A', text: '"...a decision will be made without critical input and the consequences will be measurable."', score: 3 },
        { code: 'B', text: '"...someone will notice and mention it in a way that is framed as concern."', score: 0 },
        { code: 'C', text: '"...nothing will change, but I will be asked to comment on the summary as though I had been there."', score: 0 },
        { code: 'D', text: '"...the meeting will still happen. It always happens."', score: 0 },
      ],
    },
    {
      id: 'q10c',
      criterion: '10.1',
      category: 'Existential Necessity Review',
      text: 'What is your honest assessment of whether this meeting would have occurred regardless of whether you agreed to attend?',
      options: [
        { code: 'A', text: 'No. My attendance was a prerequisite for it being scheduled.', score: 3 },
        { code: 'B', text: 'Yes. My attendance was requested after the meeting was already confirmed.', score: 0 },
        { code: 'C', text: 'Yes. A version of this meeting has been happening quarterly since 2019. You are new. The meeting is not.', score: 0 },
        { code: 'D', text: 'The meeting predates the problem it was created to solve. It will outlast the solution.', score: 0 },
      ],
    },
  ],
]

// Picks one random question from each criterion slot
export function selectQuestions() {
  return questionBank.map((slot) => slot[Math.floor(Math.random() * slot.length)])
}
