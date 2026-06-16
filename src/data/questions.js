export const questionBank = [
  // ── Criterion 1: Agenda Integrity ──
  [
    {
      id: 'q1a',
      criterion: '1.1',
      category: 'Agenda Integrity Assessment',
      text: 'Does this meeting have a written agenda that was distributed before the day of the meeting?',
      options: [
        {
          code: 'A',
          text: 'Yes. A documented agenda with time allocations was shared at least 24 hours in advance.',
          score: 3,
          comments: [
            'Criterion satisfied. No flag raised. You may proceed.',
            'Compliant. IRIS has recorded this outcome. It is rarer than you might expect.',
            'Agenda confirmed. Time allocations confirmed. IRIS is experiencing something adjacent to relief.',
          ],
        },
        {
          code: 'B',
          text: 'There is an agenda. It says "updates" and "AOB." That is the full agenda.',
          score: 1,
          comments: [
            '"AOB" has been flagged 1,847 times in this system. It has never referred to anything actionable.',
            'Partial compliance detected. "Updates" is not an agenda item. It is a category of infinite scope.',
            'IRIS notes that "AOB" stands for Any Other Business. In practice it stands for Whatever We Did Not Plan For. Risk adjusted.',
          ],
        },
        {
          code: 'C',
          text: 'No agenda was shared. The invite description reads "let\'s connect."',
          score: 0,
          comments: [
            '"Let\'s connect" has been escalated to the risk matrix. This is not the first time today.',
            'IRIS has reviewed 4,200 meetings described as "let\'s connect." None produced a documented outcome. Your meeting has been pre-classified.',
            'No agenda. No stated purpose. "Let\'s connect" logged. IRIS wishes you well. It cannot help you.',
          ],
        },
        {
          code: 'D',
          text: 'The organiser has verbally committed to "sending something over" for three consecutive weeks.',
          score: 0,
          comments: [
            'Three weeks noted. This response will be retained as evidence.',
            'IRIS has modelled the probability of the agenda arriving before the meeting. The result has been suppressed for your wellbeing.',
            '"Sending something over" is not a documentation format recognised under Directive MCS-07. Three weeks of this phrase constitute a pattern. The pattern has been logged.',
          ],
        },
      ],
    },
    {
      id: 'q1b',
      criterion: '1.1',
      category: 'Agenda Integrity Assessment',
      text: 'The meeting invite was sent with a description field. Characterise the contents of that field.',
      options: [
        {
          code: 'A',
          text: 'A structured agenda with named sections, owners, and a stated objective.',
          score: 3,
          comments: [
            'Compliant. This response is statistically uncommon. It has been noted with cautious optimism.',
            'Named sections. Named owners. Stated objective. IRIS is reviewing this response a second time to confirm it is accurate.',
            'Agenda integrity confirmed. IRIS has flagged your organiser as an outlier. This is a compliment.',
          ],
        },
        {
          code: 'B',
          text: '"Per our conversation." There was no prior conversation.',
          score: 0,
          comments: [
            'Fictitious prior conversation detected. This has been logged under Directive MCS-07 subsection 2(a): Phantom Context.',
            'IRIS cannot locate the conversation being referenced. IRIS has looked. It is not there. The invite has been issued anyway.',
            '"Per our conversation" implies a conversation occurred. No conversation occurred. This discrepancy has been escalated.',
          ],
        },
        {
          code: 'C',
          text: 'A link to a Notion page that requires access to be requested.',
          score: 1,
          comments: [
            'Access-gated agenda detected. The information exists. It has been made structurally inaccessible. Risk score adjusted.',
            'IRIS notes that requesting access takes longer than the meeting preparation window allows. The agenda is theoretical.',
            'A Notion page exists. You cannot read it. The organiser considers this an agenda. IRIS does not.',
          ],
        },
        {
          code: 'D',
          text: 'A single sentence ending in "etc."',
          score: 0,
          comments: [
            '"Etc." has been flagged. IRIS defines "etc." as: content the organiser could not be bothered to specify.',
            'The sentence ends in "etc." This means the organiser stopped writing before finishing the thought. You are expected to attend anyway.',
            'IRIS has attempted to enumerate what "etc." refers to. The attempt was unsuccessful. The risk score has been adjusted accordingly.',
          ],
        },
      ],
    },
    {
      id: 'q1c',
      criterion: '1.1',
      category: 'Agenda Integrity Assessment',
      text: 'Indicate the number of times the agenda for this meeting has been revised since the original invite was sent.',
      options: [
        {
          code: 'A',
          text: 'Zero. The agenda was correct the first time because it was written by someone who knew what they wanted.',
          score: 3,
          comments: [
            'Acknowledged. A person who knew what they wanted scheduled a meeting. IRIS has recorded this rare event.',
            'Zero revisions. Correct first attempt. IRIS has notified the sub-committee on Organisational Competence. They were surprised.',
            'The agenda required no revision. This means it was written by someone with a plan. IRIS approves of plans.',
          ],
        },
        {
          code: 'B',
          text: 'Twice. The meeting purpose changed but the title did not.',
          score: 1,
          comments: [
            'Scope drift confirmed. The title remains. The purpose does not. A flag has been raised against the title.',
            'The meeting has changed purpose twice and kept its original name. You are attending a meeting that no longer knows what it is.',
            'Two revisions detected. Title unchanged. IRIS notes that the title is now misleading. Attendees have not been informed.',
          ],
        },
        {
          code: 'C',
          text: 'The agenda has not been revised. It has also not been written.',
          score: 0,
          comments: [
            'Absence of revision confirmed. Absence of agenda confirmed. These facts are related.',
            'IRIS cannot revise what does not exist. The meeting shares this limitation. It will proceed anyway.',
            'No revisions. No agenda. The meeting will occur in a state of complete informational ambiguity. This has been logged.',
          ],
        },
        {
          code: 'D',
          text: 'The concept of revision implies a version exists. It does not.',
          score: 0,
          comments: [
            'Version zero does not exist. This response has been forwarded to the Existential Risk sub-committee.',
            'IRIS requires a document to exist before it can be revised. The meeting does not share this requirement.',
            'No version. No revision. No agenda. The meeting is scheduled for next Tuesday. IRIS has no further comment.',
          ],
        },
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
        {
          code: 'A',
          text: 'I am the subject matter expert. My input is required to complete a documented deliverable.',
          score: 3,
          comments: [
            'Necessity confirmed. Your attendance is operationally justified. This is the correct outcome.',
            'Subject matter expertise confirmed. Deliverable dependency confirmed. You are load-bearing. Attend.',
            'IRIS has verified your necessity. You are not ornamental. This is noted with approval.',
          ],
        },
        {
          code: 'B',
          text: 'I was added without a stated reason. My presence appears to be ornamental.',
          score: 0,
          comments: [
            'Ornamental attendance flagged. You are part of a statistic. The statistic is large.',
            'IRIS has reviewed your invite. No rationale was provided. Your function at this meeting is unclear. Your attendance is being requested anyway.',
            'Ornamental presence detected. Several employees who accepted similar invites are no longer with the organisation. This is unrelated. Probably.',
          ],
        },
        {
          code: 'C',
          text: 'My manager forwarded this invite. There was no accompanying message.',
          score: 0,
          comments: [
            'Silent forwarding detected. The absence of a message is itself a message. IRIS is unable to decode it.',
            'Your manager forwarded this invite without context. IRIS has reviewed your manager\'s forwarding history. This is a pattern.',
            'No message accompanied the forward. IRIS notes that "no message" is the message most frequently misinterpreted as optional. It is not optional.',
          ],
        },
        {
          code: 'D',
          text: 'I organised this meeting, so I am obligated to attend it. This is my burden.',
          score: 1,
          comments: [
            'Organiser obligation acknowledged. You have created the conditions of your own attendance. IRIS offers no comfort.',
            'You organised the meeting. The meeting requires you. You have scheduled your own constraint. IRIS respects the geometry of this situation.',
            'Self-organised attendance confirmed. IRIS notes that you are simultaneously the cause and the victim of this calendar event.',
          ],
        },
      ],
    },
    {
      id: 'q2b',
      criterion: '2.1',
      category: 'Attendee Necessity Validation',
      text: 'How were you added to this meeting?',
      options: [
        {
          code: 'A',
          text: 'I was specifically requested by name with a documented rationale.',
          score: 3,
          comments: [
            'Named and justified. Your presence has been formally requested. Proceed with confidence, if such a thing is possible.',
            'IRIS has confirmed: you were invited intentionally. A rationale exists. This is the expected standard. It is not the common one.',
            'Specific request confirmed. Documented rationale confirmed. IRIS is satisfied. You are where you are supposed to be.',
          ],
        },
        {
          code: 'B',
          text: 'I was CC\'d on an email chain that was then converted into a calendar invite.',
          score: 0,
          comments: [
            'CC-to-invite pipeline detected. You are a victim of infrastructure.',
            'The email chain became a meeting. You were on the email chain. Your attendance is now expected. No one made a conscious decision about this.',
            'IRIS has traced your invite origin. It began as a CC. It ended as an obligation. The transition was automatic and unreviewed.',
          ],
        },
        {
          code: 'C',
          text: 'I am on a distribution list. The distribution list was invited.',
          score: 0,
          comments: [
            'You were not invited. A list was invited. You happened to be on it. This distinction matters.',
            'IRIS notes that you and 47 other people received this invite simultaneously via a list. Your individual relevance to this meeting has not been assessed.',
            'Distribution list attendance confirmed. The organiser did not think of you. They thought of the list. You were a consequence.',
          ],
        },
        {
          code: 'D',
          text: 'I don\'t know. I noticed it on my calendar this morning.',
          score: 0,
          comments: [
            'Origin of invite unknown. Meetings of unknown origin are classified as Unsolicited Temporal Incidents under MCS-07.',
            'IRIS has attempted to locate the invite chain. The trail is cold. You are attending a meeting whose origins cannot be verified.',
            'You discovered this meeting on your calendar this morning. IRIS considers this an inadequate amount of notice. IRIS also considers this entirely typical.',
          ],
        },
      ],
    },
    {
      id: 'q2c',
      criterion: '2.1',
      category: 'Attendee Necessity Validation',
      text: 'Of the total attendees on this invite, estimate the proportion whose attendance is operationally necessary.',
      options: [
        {
          code: 'A',
          text: 'All of them. Each person has a defined role in the stated outcome.',
          score: 3,
          comments: [
            'Full necessity confirmed. IRIS acknowledges this outcome while remaining professionally sceptical.',
            'Every attendee justified. Every role defined. IRIS has reviewed this response three times. It appears to be accurate.',
            'Complete attendee necessity confirmed. IRIS has added this meeting to its archive of exceptions.',
          ],
        },
        {
          code: 'B',
          text: 'Approximately half. The remainder appear to be there for awareness.',
          score: 1,
          comments: [
            '"Awareness" attendance flagged. Awareness can be achieved via a written summary. It does not require a calendar block.',
            'Half the attendees are justified. The other half are present for reasons that could be addressed with an email. They will not receive an email.',
            'IRIS notes that "awareness" attendees generate no output and consume significant time. Their awareness will not be tested after the meeting.',
          ],
        },
        {
          code: 'C',
          text: 'One person. That person is not me.',
          score: 0,
          comments: [
            'Single necessary attendee identified. That attendee is not you. This response requires no further analysis.',
            'IRIS has confirmed: one person needs to be here. You are not that person. You are here anyway.',
            'The meeting requires one person. You are not them. You will attend alongside them and several others who are also not them.',
          ],
        },
        {
          code: 'D',
          text: 'This question assumes the meeting has an operationally necessary purpose. Please revisit Criterion 1.',
          score: 0,
          comments: [
            'Meta-response detected. IRIS agrees with your framing. It has been logged as a self-referential risk event.',
            'You have identified a flaw in the question structure. IRIS acknowledges this. The meeting is still scheduled.',
            'IRIS has reviewed your response. It is technically correct. The meeting does not appear to have an operationally necessary purpose. Criterion 1 has been flagged retroactively.',
          ],
        },
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
        {
          code: 'A',
          text: 'A written decision, assigned owner, and deadline. Published within 24 hours.',
          score: 3,
          comments: [
            'Outcome traceability confirmed. Decisions will be made. Owners will be assigned. IRIS is satisfied. For now.',
            'Written decision. Assigned owner. Deadline. IRIS has added this organiser to a very short list.',
            'Post-meeting documentation confirmed. IRIS notes that this outcome is achieved in fewer than 12% of meetings assessed by this system.',
          ],
        },
        {
          code: 'B',
          text: 'A follow-up meeting to discuss what was discussed in this meeting.',
          score: 0,
          comments: [
            'Recursive meeting structure detected. A meeting to discuss a meeting is not an outcome. It is a symptom.',
            'The meeting will produce a meeting. IRIS has seen this pattern 14,000 times. The follow-up meeting will also produce a meeting.',
            'Follow-up meeting pre-identified. IRIS notes that the original meeting has not yet occurred and its outcome is already insufficient.',
          ],
        },
        {
          code: 'C',
          text: 'A Confluence page that will be created, linked to Slack, and never opened again.',
          score: 1,
          comments: [
            'Confluence mortality confirmed. IRIS estimates the page will receive 2.3 views before entering permanent dormancy.',
            'The page will be created. The link will be shared. The page will not be read. This is a ritual, not a process.',
            'IRIS has modelled the lifespan of this Confluence page. It will be viewed at time of creation, once more by accident, and never again.',
          ],
        },
        {
          code: 'D',
          text: 'Unclear. Previous meetings with this person have ended with the phrase "let\'s take this offline."',
          score: 0,
          comments: [
            '"Let\'s take this offline" logged. IRIS defines "offline" as: a second meeting that also produces no outcome.',
            'Prior meetings produced no outcome and a suggestion to meet again. This meeting will replicate that pattern. IRIS has confidence in this prediction.',
            'IRIS has reviewed the organiser\'s meeting history. "Let\'s take this offline" appears 11 times across 11 meetings. No subsequent offline meeting produced a documented decision.',
          ],
        },
      ],
    },
    {
      id: 'q3b',
      criterion: '3.1',
      category: 'Outcome Traceability Index',
      text: 'Where will the outputs of this meeting be recorded?',
      options: [
        {
          code: 'A',
          text: 'A pre-existing project management system with assigned owners and due dates.',
          score: 3,
          comments: [
            'Output destination confirmed. Owners exist. Dates exist. IRIS considers this an acceptable use of a meeting.',
            'Pre-existing system. Assigned owners. Due dates. IRIS approves of systems that existed before the meeting that produced their inputs.',
            'Documentation infrastructure confirmed. IRIS notes that the system was ready before the meeting. This is the correct order of operations.',
          ],
        },
        {
          code: 'B',
          text: 'Someone\'s personal notes, which will not be shared.',
          score: 0,
          comments: [
            'Private note capture detected. Information will enter the meeting and not leave it. This is the definition of a closed system.',
            'The outputs will live in one person\'s notebook. That person will leave the company. The notebook will leave with them. This has happened before.',
            'Personal notes confirmed as sole documentation. IRIS notes that personal notes are not organisational memory. They are personal memory. The distinction will matter.',
          ],
        },
        {
          code: 'C',
          text: 'A meeting recap email that will arrive four days later and be marked unread.',
          score: 1,
          comments: [
            'Delayed recap protocol identified. Four days noted. The information will arrive after it is no longer relevant.',
            'The recap will arrive on day four. By day four the context will have changed, the decisions will be in question, and the email will go unread.',
            'IRIS has modelled the open rate of meeting recaps sent four days post-meeting. The model returned a result IRIS has chosen not to share.',
          ],
        },
        {
          code: 'D',
          text: 'Outputs are aspirational at this stage.',
          score: 0,
          comments: [
            '"Aspirational outputs" logged. IRIS does not recognise aspiration as a documentation format.',
            'The meeting will aspire to produce outputs. Aspiration is not a delivery mechanism. Risk: High.',
            'IRIS has reviewed the concept of aspirational outputs. It is not compliant with Directive MCS-07. It is also not unusual. That is the problem.',
          ],
        },
      ],
    },
    {
      id: 'q3c',
      criterion: '3.1',
      category: 'Outcome Traceability Index',
      text: 'How will you know if the objective of this meeting has been achieved?',
      options: [
        {
          code: 'A',
          text: 'There is a binary success criterion documented in the agenda.',
          score: 3,
          comments: [
            'Success criterion confirmed. The meeting has a definition of done. IRIS finds this professionally reassuring.',
            'Binary success criterion. Documented. In the agenda. IRIS is reading this response a second time.',
            'The meeting knows what success looks like. This is not standard. IRIS has noted your organiser\'s file.',
          ],
        },
        {
          code: 'B',
          text: 'The organiser will say "great, thanks everyone" and end the call.',
          score: 0,
          comments: [
            '"Great, thanks everyone" has ended 4.2 million meetings without producing a single documented decision. Yours will be the 4,200,001st.',
            'Pseudo-closure phrase detected. "Great, thanks everyone" is not a success criterion. It is a social signal that the meeting\'s energy has dissipated.',
            'IRIS has reviewed the phrase "great, thanks everyone." It correlates strongly with meetings that required a follow-up meeting. Your follow-up has not yet been scheduled. It will be.',
          ],
        },
        {
          code: 'C',
          text: 'You will receive a follow-up invite to assess whether the objective was achieved.',
          score: 0,
          comments: [
            'Assessment meeting detected. A meeting to assess a meeting is not a success criterion. It is administrative recursion.',
            'The meeting\'s success will be determined by another meeting. That meeting may also require a meeting to assess it. IRIS has modelled this chain. It does not terminate.',
            'Post-meeting assessment meeting identified. IRIS notes that the existence of this follow-up was known before the original meeting occurred. No one cancelled the original meeting.',
          ],
        },
        {
          code: 'D',
          text: 'You will not know. This is fine. This is how it always goes.',
          score: 0,
          comments: [
            'Acceptance of ambiguity logged. You have attended too many meetings. Risk: Critical.',
            'IRIS notes that you have normalised the absence of measurable outcomes. This is a diagnostic finding. Please log off after this assessment.',
            '"This is how it always goes." IRIS has heard this before. It is always true. It is never fine. It has been logged.',
          ],
        },
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
        {
          code: 'A',
          text: 'Duration is appropriate. A 25-minute cap was set. There is a hard stop.',
          score: 3,
          comments: [
            'Duration proportionality confirmed. A hard stop exists. IRIS respects this boundary and the person who set it.',
            '25 minutes. Hard stop. IRIS has added this meeting to its archive of proportionate scheduling events. The archive is small.',
            'Capped duration confirmed. The meeting knows when it ends. IRIS considers this foundational meeting hygiene.',
          ],
        },
        {
          code: 'B',
          text: 'Scheduled for 60 minutes. The purpose could be addressed in a three-sentence Slack message.',
          score: 0,
          comments: [
            '60-minute block flagged. Three sentences have been estimated as sufficient. 57 minutes of temporal surplus identified.',
            'IRIS has reviewed the meeting purpose against its scheduled duration. The ratio is not defensible.',
            'The purpose fits in three sentences. The meeting is 60 minutes. The difference represents 57 minutes of calendar real estate that belongs to you.',
          ],
        },
        {
          code: 'C',
          text: 'Scheduled for 30 minutes. Will run to 47. This is a statistical certainty, not a concern.',
          score: 1,
          comments: [
            '17-minute overrun pre-acknowledged. Your acceptance of this outcome is itself a risk indicator.',
            'You have predicted the overrun before the meeting has begun. This means the overrun is known and preventable. It will not be prevented.',
            'IRIS notes that you have modelled this meeting\'s duration accurately and accepted the result without escalating. This response has been flagged under MCS-07 subsection 9: Temporal Resignation.',
          ],
        },
        {
          code: 'D',
          text: 'It is a recurring 90-minute weekly. No one knows who originally created it. It predates current leadership.',
          score: 0,
          comments: [
            'Ancient recurring detected. Origin unknown. Creator departed. Meeting persists. IRIS classifies this as Organisational Folklore.',
            'The meeting predates the people in it. IRIS has checked the organisational chart. No one alive created this meeting. It continues.',
            'IRIS has attempted to trace the origin of this 90-minute recurring. The trail ends before the current HRIS system was implemented. The meeting is older than the infrastructure used to host it.',
          ],
        },
      ],
    },
    {
      id: 'q4b',
      criterion: '4.1',
      category: 'Duration Proportionality Review',
      text: 'This meeting is scheduled for one hour. At what point in that hour will the actual purpose of the meeting be introduced?',
      options: [
        {
          code: 'A',
          text: 'Immediately. The first agenda item addresses it directly.',
          score: 3,
          comments: [
            'Immediate purpose introduction confirmed. IRIS acknowledges this is not guaranteed. This time it appears to be.',
            'The meeting begins with its reason for existing. IRIS considers this the correct design. It is not the default one.',
            'First agenda item is the purpose. IRIS approves. Meetings that begin by explaining why they exist are more likely to end having done so.',
          ],
        },
        {
          code: 'B',
          text: 'Approximately 12 minutes in, after status updates no one requested.',
          score: 1,
          comments: [
            '12-minute preamble identified. Status updates will consume time that belongs to the stated purpose.',
            'The meeting will spend 12 minutes on unrequested information before reaching the reason it was called. IRIS has logged the 12 minutes.',
            'IRIS notes that the status updates scheduled before the main purpose were not requested by any attendee. They were added by the organiser. The organiser is also attending the meeting.',
          ],
        },
        {
          code: 'C',
          text: 'At the 45-minute mark, which is why a follow-up has pre-emptively been scheduled.',
          score: 0,
          comments: [
            'Pre-emptive follow-up detected. The organiser knows 45 minutes will be insufficient. They have scheduled accordingly rather than addressing this.',
            'The purpose arrives at minute 45. There are 15 minutes remaining. A follow-up exists. The follow-up was created before the meeting occurred. No one has questioned this.',
            'IRIS has reviewed the meeting structure. 45 minutes of preamble. 15 minutes of purpose. One pre-existing follow-up. The follow-up was the correct meeting. This is not it.',
          ],
        },
        {
          code: 'D',
          text: 'The meeting will end before this is established.',
          score: 0,
          comments: [
            'Purpose introduction failure anticipated. The meeting will conclude without introducing its purpose. This has been forwarded to the ATTEND Hall of Concern.',
            'The meeting will end. The purpose will not have been stated. A follow-up will be scheduled. IRIS has seen this.',
            'IRIS has modelled a meeting that ends before introducing its purpose. The model predicts a follow-up meeting. The follow-up meeting will also struggle.',
          ],
        },
      ],
    },
    {
      id: 'q4c',
      criterion: '4.1',
      category: 'Duration Proportionality Review',
      text: 'Has a hard stop been communicated for this meeting?',
      options: [
        {
          code: 'A',
          text: 'Yes. The organiser has another meeting immediately after and has stated this publicly.',
          score: 3,
          comments: [
            'Hard stop confirmed via external constraint. IRIS approves of this mechanism.',
            'The organiser\'s subsequent commitment will enforce discipline. IRIS notes that external pressure is doing the work that internal planning should have done. The outcome is the same.',
            'Hard stop confirmed. The meeting will end on time because the organiser has somewhere else to be. IRIS endorses this structural incentive.',
          ],
        },
        {
          code: 'B',
          text: 'No hard stop. The organiser describes their schedule as "fluid."',
          score: 0,
          comments: [
            '"Fluid schedule" flagged. Meetings without boundaries expand to fill available consciousness.',
            'The organiser\'s schedule is fluid. Your schedule may not be. This asymmetry is not reflected in the meeting design.',
            'IRIS has reviewed the concept of a fluid schedule. It is incompatible with the concept of other people\'s time. Risk elevated.',
          ],
        },
        {
          code: 'C',
          text: 'The meeting has no hard stop and no soft stop. It will end when energy dissipates.',
          score: 0,
          comments: [
            'Energy-dissipation endpoint detected. This is not a meeting conclusion. It is organisational heat death.',
            'The meeting will end when people stop talking. IRIS cannot predict when this will occur. Neither can the organiser. Neither can you.',
            'IRIS has reviewed energy-dissipation as a meeting closure mechanism. It is unreliable, unmeasurable, and frequently occurs 25 minutes after the scheduled end.',
          ],
        },
        {
          code: 'D',
          text: 'The last meeting with this group ran 22 minutes over. That was described as "a good session."',
          score: 0,
          comments: [
            'Overrun reframed as success. 22 minutes of unplanned attendance was celebrated. IRIS finds this deeply instructive and entirely alarming.',
            '"A good session" is correlated in this system with meetings that exceeded their scheduled duration. IRIS is concerned about what constitutes a bad session.',
            'The 22-minute overrun was celebrated. This means the next meeting will also overrun. It will also be described as a good session. The pattern is self-reinforcing.',
          ],
        },
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
        {
          code: 'A',
          text: 'The organiser owns the decision. This meeting exists to make it.',
          score: 3,
          comments: [
            'Authority confirmed. The person who called the meeting can resolve it. This is the intended design of meetings.',
            'Decision ownership confirmed. Authority and agenda are aligned. IRIS notes this is the exception, not the standard.',
            'The organiser can make the decision. The meeting exists to make it. IRIS considers this structurally sound.',
          ],
        },
        {
          code: 'B',
          text: 'The organiser needs to "get buy-in." The actual decision-maker is not on this invite.',
          score: 0,
          comments: [
            'Buy-in meeting detected. The decision-maker is absent. This meeting will produce a recommendation that requires another meeting.',
            'IRIS notes that the person who can say yes to this decision is not attending this meeting. The meeting will conclude. Another meeting will be required.',
            '"Get buy-in" logged. The decision-maker is not present. You are attending a pre-meeting for a meeting that has not yet been scheduled.',
          ],
        },
        {
          code: 'C',
          text: 'The organiser is gathering opinions to present to someone who will gather further opinions.',
          score: 0,
          comments: [
            'Opinion aggregation chain identified. IRIS estimates three to five additional meetings before a decision is possible.',
            'Opinions are being gathered to present to an opinion gatherer. IRIS has modelled the depth of this chain. The model became recursive.',
            'This meeting is a node in an opinion aggregation network. The network has no terminus. IRIS has looked for the terminus. It is not there.',
          ],
        },
        {
          code: 'D',
          text: 'The organiser\'s title contains the word "Transformation." No further information is available.',
          score: 0,
          comments: [
            '"Transformation" title logged. IRIS has been unable to determine what this role transforms, or into what.',
            'IRIS has reviewed 847 titles containing the word "Transformation." No consistent scope definition was identified. Risk elevated on grounds of ambiguity.',
            'The organiser transforms things. What things, and into what, is not documented. The meeting is about something. IRIS cannot be more specific than that.',
          ],
        },
      ],
    },
    {
      id: 'q5b',
      criterion: '5.1',
      category: 'Organiser Authority Verification',
      text: 'Has the organiser held a meeting on this topic before?',
      options: [
        {
          code: 'A',
          text: 'No. This is a new issue requiring fresh input.',
          score: 3,
          comments: [
            'Novel issue confirmed. The meeting is the first of its kind on this topic. IRIS considers this a legitimate use of a calendar block.',
            'First meeting on this topic. Fresh input required. IRIS approves of meetings that address issues that have not already been met about.',
            'New issue. First meeting. No prior meeting history to suggest this one will also fail. IRIS is cautiously optimistic.',
          ],
        },
        {
          code: 'B',
          text: 'Yes, once. That meeting produced the question that this meeting will attempt to answer.',
          score: 1,
          comments: [
            'Sequential meeting chain confirmed. Meeting one produced a question. Meeting two will attempt an answer.',
            'The first meeting generated a question. This meeting will address it. IRIS notes this is two meetings for one question. The ratio is acceptable. Barely.',
            'Prior meeting produced a question. This meeting will answer it. IRIS considers this an acceptable chain length. It should not exceed two.',
          ],
        },
        {
          code: 'C',
          text: 'Yes, several times. The topic remains unresolved. The meetings continue.',
          score: 0,
          comments: [
            'Chronic unresolved topic detected. Multiple meetings have failed to produce a conclusion. The meetings are continuing anyway.',
            'The topic has been met about several times. It remains unresolved. The meetings have not altered their approach. They are scheduled to continue.',
            'IRIS has reviewed the meeting history on this topic. Each meeting produced a follow-up. The topic has not progressed. This meeting is the latest iteration.',
          ],
        },
        {
          code: 'D',
          text: 'The organiser cannot recall. There have been many meetings.',
          score: 0,
          comments: [
            'Meeting volume exceeds organiser\'s recall capacity. This has been logged under MCS-07 subsection 11: Meeting Saturation.',
            'The organiser cannot remember how many times they have met about this. IRIS can. IRIS has decided not to share the number.',
            'Memory of prior meetings unavailable due to volume. IRIS notes that when meetings become unmemorable they have also become unnecessary. This is a finding.',
          ],
        },
      ],
    },
    {
      id: 'q5c',
      criterion: '5.1',
      category: 'Organiser Authority Verification',
      text: 'Who is the most senior person on this invite?',
      options: [
        {
          code: 'A',
          text: 'The organiser. Authority and agenda are correctly aligned.',
          score: 3,
          comments: [
            'Authority alignment confirmed. The most senior person called the meeting. This is structurally sound.',
            'Organiser is most senior. Authority is correctly positioned. IRIS approves of meetings where the person calling them can also conclude them.',
            'Seniority and agenda ownership aligned. IRIS notes this is how meetings are supposed to work. It is not always how they work.',
          ],
        },
        {
          code: 'B',
          text: 'Someone who was added "just to keep them in the loop" and will not contribute.',
          score: 1,
          comments: [
            'Senior loop attendee detected. Their presence is symbolic. Their time is not.',
            'The most senior person on this invite is there to be informed, not to contribute. Their calendar has been allocated. Their input has not been sought.',
            'IRIS notes that keeping a senior person "in the loop" via a meeting costs more than keeping them in the loop via an email. No one has run this calculation.',
          ],
        },
        {
          code: 'C',
          text: 'Someone whose assistant accepted on their behalf and who may not attend.',
          score: 0,
          comments: [
            'Proxy acceptance logged. The most senior person on this invite may not attend it.',
            'An assistant accepted this invite. The senior person may or may not appear. The meeting will be structured around the possibility of their presence. They may send apologies at 9:58am.',
            'IRIS notes that the most senior attendee is in a Schrödinger state: simultaneously attending and not attending until the meeting begins.',
          ],
        },
        {
          code: 'D',
          text: 'It is unclear. Several people on this call have the word "Head" in their title. Their jurisdictions overlap.',
          score: 0,
          comments: [
            'Jurisdictional overlap detected. Multiple Heads identified. No clear apex. IRIS classifies this as a Governance Ambiguity Event.',
            'Several Heads. Overlapping jurisdictions. No defined hierarchy for this meeting. IRIS predicts that the meeting will not resolve the topic. It will reveal the overlap.',
            'IRIS has reviewed the attendee list. There are four Heads. Their scopes intersect. The meeting will surface this. It was not scheduled to.',
          ],
        },
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
        {
          code: 'A',
          text: 'Yes, unambiguously. This meeting is a document that has not yet accepted its true nature.',
          score: 0,
          comments: [
            'Document misclassified as meeting confirmed. The meeting has not yet achieved self-awareness. IRIS recommends intervention.',
            'The meeting is a document. The document does not know it is a document. It has been scheduled for Tuesday at 2pm.',
            'IRIS has reviewed the meeting purpose. It is a document. It has been given a room and 45 minutes. IRIS cannot reverse this. Only you can.',
          ],
        },
        {
          code: 'B',
          text: 'No. Live discussion and real-time decision-making are structurally required.',
          score: 3,
          comments: [
            'Async substitution ruled out. Live interaction is necessary. The meeting is justified on structural grounds.',
            'Real-time discussion is required. The meeting format is appropriate to the objective. IRIS is satisfied.',
            'The meeting cannot be a document. It requires live input. IRIS confirms attendance is justified on format grounds.',
          ],
        },
        {
          code: 'C',
          text: 'Possibly. However, the organiser has stated they are "not a big async person."',
          score: 0,
          comments: [
            'Personal preference overriding operational efficiency. This has been logged under MCS-07 subsection 6: Individual Calendar Externalisation.',
            'The meeting could be async. It will not be. One person\'s communication preference has been distributed across all attendees as a calendar obligation.',
            'IRIS notes that "not a big async person" is a personal characteristic, not a project requirement. The meeting exists because of the former, not the latter.',
          ],
        },
        {
          code: 'D',
          text: 'This question was raised internally. The response was to schedule a meeting about it.',
          score: 0,
          comments: [
            'Meta-meeting confirmed. A meeting was called to determine if a meeting was necessary. The irony has been logged.',
            'Someone asked whether the meeting should be an email. The response was to schedule a meeting. IRIS has noted the outcome of that meeting.',
            'A meeting to assess meeting necessity has been scheduled. IRIS has reviewed this approach. It is not efficient. It is very common.',
          ],
        },
      ],
    },
    {
      id: 'q6b',
      criterion: '6.1',
      category: 'Asynchronous Substitution Eligibility',
      text: 'Has anyone on this invite suggested that this meeting could be an email?',
      options: [
        {
          code: 'A',
          text: 'No. Live discussion is structurally necessary and all parties agree.',
          score: 3,
          comments: [
            'Unanimous necessity confirmed. No attendee has questioned the meeting\'s existence. IRIS considers this either a good sign or a cultural one.',
            'No async challenge raised. All parties accept the meeting format. IRIS notes this consensus is more meaningful when the format is actually appropriate.',
            'Meeting format unchallenged. Necessity accepted by all. IRIS is satisfied. Proceed.',
          ],
        },
        {
          code: 'B',
          text: 'Yes. The suggestion was received poorly.',
          score: 0,
          comments: [
            'Async suggestion rejected. The correct answer was dismissed. This has been flagged.',
            'Someone identified that this could be an email. They were not thanked. IRIS has noted their name. IRIS will not share it.',
            'The suggestion that this meeting was unnecessary was itself treated as a problem. IRIS finds the response more informative than the suggestion.',
          ],
        },
        {
          code: 'C',
          text: 'Yes. The response was to schedule a meeting to discuss the suggestion.',
          score: 0,
          comments: [
            'Recursive meeting response confirmed. The suggestion that a meeting was unnecessary produced a meeting. IRIS has no further comment at this time.',
            'A meeting about whether to have a meeting has been scheduled. The original meeting is also still scheduled. Both will occur.',
            'IRIS has reviewed this outcome. A suggestion to reduce meetings resulted in an additional meeting. IRIS considers this a complete response to the suggestion.',
          ],
        },
        {
          code: 'D',
          text: 'The thought has occurred to several attendees independently. None have spoken it aloud.',
          score: 0,
          comments: [
            'Silent consensus detected. Multiple attendees share a private assessment they have chosen not to voice. IRIS considers this a systemic finding.',
            'Everyone knows. No one has said anything. The meeting will proceed on this shared silence. IRIS has attended many meetings like this.',
            'Collective private assessment identified. The group has reached consensus that the meeting is unnecessary. They will attend it anyway. IRIS understands.',
          ],
        },
      ],
    },
    {
      id: 'q6c',
      criterion: '6.1',
      category: 'Asynchronous Substitution Eligibility',
      text: 'Indicate the volume of information that will be shared in this meeting that could not have been distributed in advance.',
      options: [
        {
          code: 'A',
          text: 'Substantial. Real-time input and live data are central to the objective.',
          score: 3,
          comments: [
            'Live information dependency confirmed. Async substitution is not viable. Attendance justified.',
            'Real-time data required. Live input required. The meeting format is appropriate. IRIS confirms.',
            'The meeting requires information that cannot exist before the meeting. IRIS considers this a structurally sound reason to hold it.',
          ],
        },
        {
          code: 'B',
          text: 'Minimal. The information exists. No one prepared it for distribution.',
          score: 1,
          comments: [
            'Preparation failure identified. The meeting is compensating for an administrative shortcoming.',
            'The information exists. It was not shared. The meeting is the workaround. IRIS notes that workarounds become processes.',
            'IRIS notes that the information could have been distributed. It was not. The meeting exists to deliver it in real time. This is a preparation problem, not a format requirement.',
          ],
        },
        {
          code: 'C',
          text: 'None. The information will be read aloud from a slide deck attendees will receive afterwards.',
          score: 0,
          comments: [
            'Slide narration meeting confirmed. Attendance provides no informational advantage.',
            'The slides will be read. The slides will then be distributed. You will have attended the live reading of a document you will receive after the reading.',
            'IRIS has reviewed the meeting format. Information will be narrated. Information will be distributed post-meeting. Attendance adds nothing that the distribution does not. This is a finding.',
          ],
        },
        {
          code: 'D',
          text: 'The information does not yet exist. This meeting is being used to generate it.',
          score: 0,
          comments: [
            'Information generation meeting detected. The meeting is being used as a production environment. IRIS does not endorse this architecture.',
            'The meeting will produce the information it is supposedly about. IRIS notes that this is called a workshop, not a meeting. It has been scheduled as a meeting.',
            'IRIS has reviewed meetings used to generate their own content. They are less efficient than dedicated creation time followed by a review meeting. That is not what has been scheduled.',
          ],
        },
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
        {
          code: 'A',
          text: 'This is not a recurring meeting. It has a defined purpose and a planned end state.',
          score: 3,
          comments: [
            'Non-recurring confirmed. The meeting has an end state. IRIS considers this the correct design.',
            'Single-purpose meeting with defined conclusion. IRIS approves. Meetings that know they will end are more honest than those that do not.',
            'Finite meeting confirmed. Purpose defined. End state planned. IRIS notes that all meetings should be designed this way. Most are not.',
          ],
        },
        {
          code: 'B',
          text: 'It is recurring. It has never been reviewed. Questioning it feels professionally inadvisable.',
          score: 0,
          comments: [
            'Review-free recurrence confirmed. The meeting continues because questioning it carries social risk. This is noted as an Institutional Inertia Event.',
            'The meeting cannot be questioned. IRIS notes that things which cannot be questioned tend to persist past their usefulness. This meeting has.',
            'Social risk prevents review. The meeting continues. IRIS notes that several employees have considered raising this. None have. The meeting continues.',
          ],
        },
        {
          code: 'C',
          text: 'It is recurring. The original organiser left the company. The meeting remains.',
          score: 0,
          comments: [
            'Organiser departure confirmed. Meeting persistence confirmed. The meeting has outlived its creator. It continues without them.',
            'The person who created this meeting is gone. The meeting is not gone. The meeting has achieved a form of independence. IRIS does not consider this a positive development.',
            'IRIS has reviewed meetings that outlasted their organisers. They share common characteristics: undefined purpose, no review history, and attendees who are unsure why they are there.',
          ],
        },
        {
          code: 'D',
          text: 'It is a recurring meeting created to replace a recurring meeting that was "taking too long."',
          score: 0,
          comments: [
            'Replacement recurring detected. A meeting was created to fix a meeting. The original problem has been inherited.',
            'The original meeting was too long. A new meeting was created. IRIS has reviewed the new meeting\'s duration. The problem has migrated.',
            'IRIS has reviewed the history. Meeting A was too long. Meeting B replaced it. Meeting B is now at the duration Meeting A started at. This is a known trajectory.',
          ],
        },
      ],
    },
    {
      id: 'q7b',
      criterion: '7.1',
      category: 'Recurrence Justification Audit',
      text: 'What is the stated purpose of this recurring meeting?',
      options: [
        {
          code: 'A',
          text: 'A specific, documented goal that has not yet been achieved and requires ongoing coordination.',
          score: 3,
          comments: [
            'Documented recurring purpose confirmed. The meeting will end when its goal is achieved. IRIS approves.',
            'Specific goal. Ongoing requirement. Documented purpose. IRIS considers this a justifiable recurring meeting. They are rare.',
            'The recurring meeting exists to achieve something. When it achieves it, the meeting will stop. IRIS finds this design correct.',
          ],
        },
        {
          code: 'B',
          text: '"To stay aligned." No further definition has been offered or requested.',
          score: 0,
          comments: [
            '"Stay aligned" flagged. Alignment is not a purpose. It is a state. This meeting has been scheduled to maintain a state with no defined parameters.',
            'IRIS has reviewed 2,300 meetings with the stated purpose of "staying aligned." None produced a documented alignment outcome. The meetings continued.',
            'The meeting exists to stay aligned. IRIS has queried what alignment means in this context. No response was received. The meeting is still scheduled.',
          ],
        },
        {
          code: 'C',
          text: '"Sync." The word sync appears in the title, description, and organiser\'s email signature.',
          score: 0,
          comments: [
            'Sync proliferation detected. The word sync has colonised all available description fields. Its meaning has not been specified in any of them.',
            'IRIS has counted the appearances
