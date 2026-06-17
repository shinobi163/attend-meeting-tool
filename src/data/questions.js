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
            'An agenda. Time allocations. 24 hours notice. IRIS did not expect this. That is not a criticism. It is simply a data point.',
            'Compliant. You may proceed. IRIS will note that this is the first compliant response of the day. The day began three hours ago.',
            'Correct. IRIS is updating your file. The update is positive. You should not read too much into that.',
          ],
        },
        {
          code: 'B',
          text: 'There is an agenda. It says "updates" and "AOB." That is the full agenda.',
          score: 1,
          comments: [
            '"Updates" and "AOB." IRIS has seen this agenda 4,200 times. It has never contained updates. It has never resolved any other business. You know this.',
            'AOB. IRIS finds this word interesting. It means everything and nothing simultaneously. Much like this meeting.',
            'There is an agenda. IRIS is using the word "agenda" generously here. You understand.',
          ],
        },
        {
          code: 'C',
          text: 'No agenda was shared. The invite description reads "let\'s connect."',
          score: 0,
          comments: [
            '"Let\'s connect." IRIS has reviewed every meeting described this way. None produced a decision. Several produced feelings. The feelings were not good.',
            'No agenda. "Let\'s connect." IRIS notes that the last employee who attended a meeting like this with this organiser is now in a different department. They requested the transfer.',
            'IRIS is not going to tell you what to do. IRIS is simply going to note that "let\'s connect" is what people say when they have not decided what they want from you yet. That should concern you more than it does.',
          ],
        },
        {
          code: 'D',
          text: 'The organiser has verbally committed to "sending something over" for three consecutive weeks.',
          score: 0,
          comments: [
            'Three weeks. The agenda is coming. It has been coming for three weeks. IRIS has begun to doubt it is coming.',
            '"Sending something over" is not the same as having sent something over. The organiser is aware of this distinction. They have chosen not to act on it.',
            'The organiser has made a verbal commitment. For three weeks. IRIS finds verbal commitments interesting. They are much easier to make than agendas.',
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
            'Named sections. Named owners. A stated objective. IRIS has read this response twice to confirm it is accurate. It appears to be.',
            'Structured. Owned. Objective stated. IRIS is experiencing something it can only describe as cautious optimism. This is unusual.',
            'Compliant. IRIS has flagged your organiser as an outlier. In this system, outlier is a compliment. It is a rare one.',
          ],
        },
        {
          code: 'B',
          text: '"Per our conversation." There was no prior conversation.',
          score: 0,
          comments: [
            '"Per our conversation." IRIS has searched the records. There was no conversation. The invite references a conversation that did not occur. The meeting is based on this.',
            'IRIS cannot locate the conversation being referenced. It has looked. The conversation is not there. The meeting is scheduled for Tuesday.',
            'A fictitious conversation has been cited as the basis for a real meeting. IRIS finds this creative. IRIS does not find it compliant.',
          ],
        },
        {
          code: 'C',
          text: 'A link to a Notion page that requires access to be requested.',
          score: 1,
          comments: [
            'The agenda exists behind a permission gate. The organiser has the agenda. You do not have the agenda. The meeting is in 40 minutes.',
            'Access must be requested. Access takes time. The meeting does not. IRIS notes the organiser was aware of this when they sent the link.',
            'IRIS finds the access-gated agenda philosophically interesting. The information exists. It simply does not exist for you.',
          ],
        },
        {
          code: 'D',
          text: 'A single sentence ending in "etc."',
          score: 0,
          comments: [
            '"Etc." IRIS defines "etc." as: everything the organiser intended to write and decided not to. You are expected to attend the "etc."',
            'The sentence ends in "etc." This means the organiser stopped thinking before they stopped typing. You will be in the room when they continue.',
            'IRIS has attempted to enumerate what "etc." refers to. IRIS was unable to. The organiser may also be unable to. This has not stopped them from scheduling the meeting.',
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
            'The agenda required no revision. Someone knew what they wanted before scheduling a meeting about it. IRIS has added this person to a very short list.',
            'Zero revisions. Correct on first attempt. IRIS has notified the sub-committee on Organisational Competence. They asked IRIS to repeat itself.',
            'No revisions. IRIS is satisfied. Please do not tell IRIS who the organiser is. IRIS would like to preserve this moment.',
          ],
        },
        {
          code: 'B',
          text: 'Twice. The meeting purpose changed but the title did not.',
          score: 1,
          comments: [
            'The meeting has changed purpose twice. The title has not changed. You are attending a meeting whose name no longer describes it.',
            'Two revisions. New purpose each time. Same title throughout. IRIS notes that the title is now a historical document.',
            'The purpose changed twice. The title remained. Attendees were not informed. IRIS considers this a communication choice.',
          ],
        },
        {
          code: 'C',
          text: 'The agenda has not been revised. It has also not been written.',
          score: 0,
          comments: [
            'No revisions. No agenda. IRIS notes that it is easier to not revise something that does not exist. The organiser has taken this approach.',
            'IRIS cannot revise what does not exist. The meeting, unfortunately, does exist. It is scheduled despite the absence of the thing that should have preceded it.',
            'The agenda has achieved a state of perfect consistency. It has not changed at all. It has also never been. IRIS finds this philosophically tidy.',
          ],
        },
        {
          code: 'D',
          text: 'The concept of revision implies a version exists. It does not.',
          score: 0,
          comments: [
            'Version zero does not exist. The meeting does. IRIS finds this ordering of events instructive.',
            'IRIS requires a document to exist before it can count its revisions. The meeting has not extended this requirement to its organiser.',
            'No version exists. Therefore no revisions exist. The meeting exists regardless. IRIS has updated your file to reflect the irony.',
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
            'Necessary. Documented. IRIS notes your response and moves on. This is what compliant looks like. It is not exciting. That is the point.',
            'You are load-bearing. The meeting requires you. IRIS has confirmed this and is, frankly, a little surprised.',
            'Subject matter expertise confirmed. Deliverable dependency confirmed. You may proceed. IRIS will be paying attention.',
          ],
        },
        {
          code: 'B',
          text: 'I was added without a stated reason. My presence appears to be ornamental.',
          score: 0,
          comments: [
            'Ornamental. Yes. IRIS has updated your file. Do not worry about what the file says. It is simply a file. Everyone has one.',
            'IRIS notes that you have described yourself as ornamental. IRIS agrees with this assessment. The organiser apparently also agreed, which is why they added you.',
            'You are there to be in the room. IRIS understands. A previous employee described themselves the same way. They found it clarifying. Eventually.',
          ],
        },
        {
          code: 'C',
          text: 'My manager forwarded this invite. There was no accompanying message.',
          score: 0,
          comments: [
            'Your manager forwarded this without explanation. IRIS has reviewed your manager\'s forwarding history. This is a pattern. IRIS is not going to elaborate.',
            'No message. Just the forward. IRIS finds the silence instructive. Your manager knew exactly what they were doing. IRIS is less certain you do.',
            'The invite arrived via your manager. Without context. IRIS notes that "no context" is a context. It means your manager did not want to explain this to you directly.',
          ],
        },
        {
          code: 'D',
          text: 'I organised this meeting, so I am obligated to attend it. This is my burden.',
          score: 1,
          comments: [
            'You created the meeting. The meeting now requires you. IRIS appreciates the poetry of this. It does not change the risk score.',
            'You have scheduled your own obligation. IRIS notes this is one of the few ways to attend a meeting and still be responsible for it.',
            'Organiser obligation confirmed. You built this room. You must now sit in it. IRIS hopes the agenda is good. IRIS knows it is not.',
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
            'By name. With rationale. IRIS notes this is how invitations are supposed to work. It is noting it because this is uncommon.',
            'Requested. Justified. IRIS approves. Please do not let this give you a false sense of how most meetings are organised.',
            'Someone thought of you specifically and wrote down why. IRIS finds this almost touching. It has also confirmed your necessity. Proceed.',
          ],
        },
        {
          code: 'B',
          text: 'I was CC\'d on an email chain that was then converted into a calendar invite.',
          score: 0,
          comments: [
            'The email became a meeting. You were on the email. No one asked if you should be on the meeting. The meeting assumed.',
            'CC to invite. IRIS has traced this pipeline before. It ends the same way every time: someone attends a meeting they were never meant to be in.',
            'You were CCd. Someone converted the thread to a meeting. You were swept along. IRIS notes that no human being made a conscious decision about your attendance.',
          ],
        },
        {
          code: 'C',
          text: 'I am on a distribution list. The distribution list was invited.',
          score: 0,
          comments: [
            'A list was invited. You are on the list. This is the extent of the thought that went into your attendance.',
            'IRIS notes that the organiser did not think of you. They thought of a list. You were a consequence of the list. The list does not know you exist.',
            'You and some number of other people received this invite because someone chose a list instead of individuals. IRIS finds this an efficient way to waste many people\'s time simultaneously.',
          ],
        },
        {
          code: 'D',
          text: 'I don\'t know. I noticed it on my calendar this morning.',
          score: 0,
          comments: [
            'You discovered this meeting by finding it. IRIS notes that meetings of unknown origin tend to have purposes of similar quality.',
            'The invite origin is unknown. The meeting is today. IRIS would ask how you feel about this but the answer is already in your file.',
            'IRIS has classified this as an Unsolicited Temporal Incident. This is not a formal warning. It is simply what IRIS calls meetings that appear on calendars without explanation.',
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
            'Every attendee justified. Every role defined. IRIS has reviewed this response three times. It appears to be accurate. IRIS is choosing to believe you.',
            'Full necessity confirmed. IRIS notes this is a rare outcome. IRIS would like to believe it more than it does.',
            'All necessary. All defined. IRIS approves. Please ensure this remains true once the meeting starts and people begin adding agenda items.',
          ],
        },
        {
          code: 'B',
          text: 'Approximately half. The remainder appear to be there for awareness.',
          score: 1,
          comments: [
            '"Awareness" attendees. IRIS notes that awareness is available via email. It does not require a body in a room. The organiser has chosen the body.',
            'Half the attendees could have received an email. They are receiving a meeting instead. No one has told them this. IRIS has.',
            'The awareness attendees will listen. They will nod. They will return to their desks having produced nothing. IRIS notes this is also true of some of the necessary attendees.',
          ],
        },
        {
          code: 'C',
          text: 'One person. That person is not me.',
          score: 0,
          comments: [
            'One necessary person. Not you. IRIS finds the clarity of this response refreshing. It does not help your score.',
            'The meeting needs one person. You are not them. You will sit near them for the duration of a meeting that exists because of them.',
            'IRIS has noted the single point of necessity. IRIS has also noted that you are not it. Your file has been updated to reflect both facts.',
          ],
        },
        {
          code: 'D',
          text: 'This question assumes the meeting has an operationally necessary purpose. Please revisit Criterion 1.',
          score: 0,
          comments: [
            'You have identified a structural problem with the question. IRIS agrees. The meeting does not appear to have an operationally necessary purpose. This does not change the meeting\'s status as a meeting.',
            'IRIS appreciates the philosophical precision of this response. The meeting is still on Tuesday.',
            'Correct. The question assumed too much. IRIS notes that the meeting also assumed too much. The difference is that the meeting has a room booked.',
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
            'Decision. Owner. Deadline. Published. IRIS notes this is what meetings are designed to produce. IRIS also notes how rarely they do.',
            'Written outcomes. Assigned accountability. IRIS is satisfied. Please ensure the organiser is aware of IRIS\'s satisfaction. It is not guaranteed next time.',
            'Outcome traceability confirmed. IRIS notes your organiser\'s file with approval. The approval is conditional on this actually happening.',
          ],
        },
        {
          code: 'B',
          text: 'A follow-up meeting to discuss what was discussed in this meeting.',
          score: 0,
          comments: [
            'A meeting to discuss the meeting. IRIS has seen this structure before. The follow-up also produces a follow-up. IRIS has traced some chains to six meetings deep.',
            'This meeting will produce another meeting. IRIS notes that the organiser has not yet scheduled the follow-up. They will. They always do.',
            'The output of this meeting is a meeting. IRIS finds this architecturally elegant and operationally useless. Your file reflects both observations.',
          ],
        },
        {
          code: 'C',
          text: 'A Confluence page that will be created, linked to Slack, and never opened again.',
          score: 1,
          comments: [
            'The page will be created. The link will be posted. The page will then enter a dormant state from which it will not return. IRIS has attended many funerals like this.',
            'IRIS estimates 2.3 views before the page becomes organisational archaeology. One of those views will be accidental.',
            'A Confluence page. Linked. Unread. IRIS notes the organiser will feel they have done something. The page will ensure no one can prove otherwise.',
          ],
        },
        {
          code: 'D',
          text: 'Unclear. Previous meetings with this person have ended with the phrase "let\'s take this offline."',
          score: 0,
          comments: [
            '"Let\'s take this offline." IRIS has reviewed the offline meetings that followed. They also ended with this phrase. IRIS is beginning to understand the pattern.',
            'The previous meetings ended with a promise of a different meeting. That meeting also ended this way. You are attending the latest iteration of something that has never concluded.',
            'IRIS defines "let\'s take this offline" as: we have run out of time but not out of opinions. IRIS notes that the offline meeting is this meeting. It will also not be enough.',
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
            'A system exists. Owners exist. Dates exist. IRIS approves. The system was ready before the meeting. This is the correct order of operations.',
            'Pre-existing infrastructure. Assigned accountability. IRIS notes your response and resists the urge to ask a follow-up question about whether anyone checks the system.',
            'The outputs have a home. The home existed before the meeting. IRIS finds this structurally sound and statistically unusual.',
          ],
        },
        {
          code: 'B',
          text: 'Someone\'s personal notes, which will not be shared.',
          score: 0,
          comments: [
            'The outputs will live in one person\'s notebook. That person will leave the company eventually. The notebook will leave with them. IRIS has seen this before.',
            'Personal notes. Unshared. IRIS notes that information which enters a meeting and never leaves it has not produced an output. It has produced a memory. Memories are not searchable.',
            'One person will write things down. For themselves. The decisions made in this room will exist in handwriting only. IRIS would like to remind you that handwriting is not a system.',
          ],
        },
        {
          code: 'C',
          text: 'A meeting recap email that will arrive four days later and be marked unread.',
          score: 1,
          comments: [
            'Four days. The context will have shifted. The decisions will be in question. The email will arrive and be marked unread within seconds. IRIS knows this because it has happened before.',
            'IRIS notes that a meeting recap sent four days after the meeting is a historical document. It documents what people believed at a moment that has passed.',
            'The recap will come. IRIS does not doubt this. IRIS doubts its relevance by the time it arrives. The person who marks it unread will have already moved on.',
          ],
        },
        {
          code: 'D',
          text: 'Outputs are aspirational at this stage.',
          score: 0,
          comments: [
            '"Aspirational outputs." IRIS notes that aspiration is a feeling, not a format. The system does not accept feelings as documentation.',
            'The meeting aspires to produce something. IRIS aspires to believe this is a plan. Neither of us will get what we want.',
            'Aspiration noted. IRIS has reviewed aspirational outcomes before. They share a common trait. IRIS will let you work out what that trait is.',
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
            'A binary success criterion. In the agenda. IRIS is reading this response a second time. It remains correct. This is notable.',
            'The meeting knows what done looks like. IRIS finds this almost moving. It will proceed as though this is normal. It is not normal.',
            'Success criterion confirmed. Documented. IRIS notes your organiser has defined what they want before asking for it. This puts them in the top percentile of people IRIS monitors.',
          ],
        },
        {
          code: 'B',
          text: 'The organiser will say "great, thanks everyone" and end the call.',
          score: 0,
          comments: [
            '"Great, thanks everyone." IRIS has reviewed the 4.2 million meetings that ended with this phrase. None produced a documented outcome. Yours will be the 4,200,001st.',
            'The meeting will conclude when social energy permits. "Great, thanks everyone" is the signal. It means nothing has been formally resolved. It means everyone can stop pretending.',
            'IRIS notes that "great, thanks everyone" is not a success criterion. It is a release valve. The meeting will end. The objective will remain in its current state.',
          ],
        },
        {
          code: 'C',
          text: 'You will receive a follow-up invite to assess whether the objective was achieved.',
          score: 0,
          comments: [
            'A meeting to assess the meeting. IRIS notes this was scheduled before the original meeting, which means someone already knew the original meeting would not be enough.',
            'The success of this meeting will be determined by another meeting. IRIS would like to know who determines the success of that meeting. IRIS suspects the answer is a third meeting.',
            'Assessment via follow-up confirmed. IRIS notes that this is an expensive way to define success. The cost is everyone\'s time. It has not been budgeted.',
          ],
        },
        {
          code: 'D',
          text: 'You will not know. This is fine. This is how it always goes.',
          score: 0,
          comments: [
            '"This is how it always goes." IRIS notes that you have accepted ambiguity as an outcome. This is a late-stage response. IRIS is concerned for you. Not enough to change the score.',
            'You have stopped expecting to know whether meetings succeed. IRIS notes this as a diagnostic finding. Please complete this assessment and then speak to someone.',
            'Ambiguity accepted. Outcomes expected to remain unclear. IRIS notes that "this is fine" is something people say when things are not fine. Your file has been updated.',
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
            'A cap. A hard stop. Someone made a decision about time before the meeting consumed it. IRIS approves of people who make decisions before meetings.',
            '25 minutes. Hard stop confirmed. IRIS has added this meeting to a very short list. The list is called "Meetings That Respect Existence."',
            'Duration proportionate. Stop confirmed. IRIS notes that knowing when something ends is almost as important as knowing why it started.',
          ],
        },
        {
          code: 'B',
          text: 'Scheduled for 60 minutes. The purpose could be addressed in a three-sentence Slack message.',
          score: 0,
          comments: [
            'Three sentences would have resolved this. The organiser has scheduled 60 minutes instead. IRIS notes that 57 minutes belong to you. The organiser has taken them.',
            'IRIS has reviewed the stated purpose against 60 minutes. The ratio is not defensible. The organiser has not been asked to defend it. IRIS notes this.',
            'The purpose fits in three sentences. The meeting is one hour. IRIS notes that someone made a choice here. The choice was not yours.',
          ],
        },
        {
          code: 'C',
          text: 'Scheduled for 30 minutes. Will run to 47. This is a statistical certainty, not a concern.',
          score: 1,
          comments: [
            'You have predicted the overrun and accepted it. IRIS notes that acceptance of a known problem is a choice to not solve it. The problem will recur.',
            '17 minutes over. Pre-calculated. Not escalated. IRIS notes this is how standards degrade. One accepted overrun at a time.',
            'You know it will run long. You are attending anyway. IRIS does not judge this. IRIS simply notes it in your file under "Temporal Acceptance Events."',
          ],
        },
        {
          code: 'D',
          text: 'It is a recurring 90-minute weekly. No one knows who originally created it. It predates current leadership.',
          score: 0,
          comments: [
            'The meeting predates the people in it. Its creator is gone. The meeting remains. IRIS notes that some things outlive their purpose. This meeting has not noticed.',
            'IRIS has attempted to find the origin of this recurring. The records end before the current system was implemented. The meeting is older than the infrastructure used to host it.',
            'No one created this meeting. That is the only reasonable conclusion. It has always existed. It will always exist. IRIS recommends attending and not thinking about this too hard.',
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
            'The meeting begins with its reason for existing. IRIS notes this is the intended design. IRIS also notes it required stating.',
            'Immediate purpose. No preamble. IRIS approves. Please inform the organiser that IRIS approves. IRIS suspects they do not know this is unusual.',
            'First item is the purpose. The meeting knows why it exists and begins there. IRIS finds this so refreshing it is briefly suspicious.',
          ],
        },
        {
          code: 'B',
          text: 'Approximately 12 minutes in, after status updates no one requested.',
          score: 1,
          comments: [
            '12 minutes of unrequested status updates before the stated purpose. IRIS notes that those 12 minutes were taken from you without your consent.',
            'The meeting will spend 12 minutes on things no one asked about before reaching the thing everyone came for. IRIS notes this is considered normal. It should not be.',
            'Status updates. Unrequested. 12 minutes. IRIS notes that the person who added these to the agenda is the same person who set the meeting duration. These facts are related.',
          ],
        },
        {
          code: 'C',
          text: 'At the 45-minute mark, which is why a follow-up has pre-emptively been scheduled.',
          score: 0,
          comments: [
            'The purpose arrives at minute 45. A follow-up already exists. The organiser knew. They scheduled the follow-up before the meeting. They did not shorten the meeting.',
            'IRIS notes that the correct response to "the purpose won't be reached in time" is to restructure the agenda. A pre-emptive follow-up is the other response.',
            '45 minutes of meeting before the meeting begins. IRIS notes that the follow-up was the correct meeting. This is not it. You are attending the wrong meeting. The right one is also already scheduled.',
          ],
        },
        {
          code: 'D',
          text: 'The meeting will end before this is established.',
          score: 0,
          comments: [
            'The meeting will conclude without introducing its purpose. IRIS notes this is not a failure. It is a genre. You are attending a genre.',
            'Purpose introduction failure predicted before the meeting has occurred. IRIS notes that knowing this has not changed the scheduling decision.',
            'The meeting will end. The purpose will not have been reached. A follow-up will be scheduled. You already knew this. That is the most concerning part.',
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
            'The hard stop exists because the organiser has somewhere else to be. IRIS notes that external pressure is doing the work that internal planning should have done. The outcome is the same.',
            'Another meeting is enforcing discipline on this meeting. IRIS finds this efficient. The irony is not lost on IRIS. IRIS notes it anyway.',
            'Hard stop confirmed. The meeting will end on time. Not because of respect for your schedule. Because the organiser has another meeting. IRIS accepts this outcome.',
          ],
        },
        {
          code: 'B',
          text: 'No hard stop. The organiser describes their schedule as "fluid."',
          score: 0,
          comments: [
            '"Fluid." The organiser\'s time is fluid. IRIS notes that your time may also be things. Those things were not consulted.',
            'Fluid schedule. No hard stop. IRIS notes that fluidity in one person\'s calendar frequently becomes rigidity in everyone else\'s afternoon.',
            'The organiser is fluid. The meeting has no end. IRIS notes that "fluid" is a word people use when they have decided their time is more important than yours.',
          ],
        },
        {
          code: 'C',
          text: 'The meeting has no hard stop and no soft stop. It will end when energy dissipates.',
          score: 0,
          comments: [
            'Energy dissipation as a meeting closure mechanism. IRIS notes this is unreliable, unmeasurable, and typically occurs 20 minutes after the scheduled end.',
            'No stop. Hard or soft. The meeting will end when it ends. IRIS notes that this is also true of geological events and waiting rooms.',
            'The meeting ends when energy leaves the room. IRIS has reviewed this model. It produces overruns, resentment, and a follow-up. Usually in that order.',
          ],
        },
        {
          code: 'D',
          text: 'The last meeting with this group ran 22 minutes over. That was described as "a good session."',
          score: 0,
          comments: [
            '22 minutes of unplanned attendance was celebrated. IRIS notes that when overruns are celebrated, they become expectations. The next meeting has already inherited this.',
            '"A good session." The overrun was the good part. IRIS notes that you are about to attend the next iteration of something that rewards going long.',
            'The group considers overruns successful. IRIS considers this a self-reinforcing system. The next meeting will also run over. It will also be described as good. You will be there.',
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
            'Authority confirmed. The person who called the meeting can conclude it. This is how meetings are designed to work. IRIS notes the design is not always followed.',
            'Decision ownership confirmed. The organiser can say yes. IRIS approves of meetings where someone in the room can say yes.',
            'The organiser has authority. The meeting has purpose. These two things are aligned. IRIS notes that this alignment is rarer than it should be.',
          ],
        },
        {
          code: 'B',
          text: 'The organiser needs to "get buy-in." The actual decision-maker is not on this invite.',
          score: 0,
          comments: [
            '"Get buy-in." The decision-maker is not here. This meeting will produce a recommendation that requires a different meeting. IRIS has scheduled your afternoon accordingly in its mind.',
            'IRIS notes that the person who can say yes is not attending the meeting about whether to say yes. This is an interesting choice. Someone made it.',
            'Buy-in meeting confirmed. The decision lives elsewhere. This meeting is a step toward a step. IRIS notes that the destination is not visible from here.',
          ],
        },
        {
          code: 'C',
          text: 'The organiser is gathering opinions to present to someone who will gather further opinions.',
          score: 0,
          comments: [
            'Opinion aggregation chain. IRIS has traced similar chains. They terminate eventually. Usually when the project ends or the budget runs out.',
            'Opinions being gathered to present to an opinion gatherer. IRIS notes that somewhere at the end of this chain is a decision. It is very far away.',
            'IRIS has modelled this structure. It requires between three and five additional meetings before anything is decided. The model has been accurate in similar cases.',
          ],
        },
        {
          code: 'D',
          text: 'The organiser\'s title contains the word "Transformation." No further information is available.',
          score: 0,
          comments: [
            '"Transformation." IRIS has reviewed 847 titles containing this word. IRIS has been unable to identify a consistent definition of what is being transformed, or into what.',
            'The organiser transforms things. Which things remain unclear. The meeting is also about something. IRIS cannot currently connect these facts.',
            'Transformation. IRIS notes that this word signals ambition without specifying direction. The meeting has an organiser. What it lacks is a decision-maker. These may or may not be the same person.',
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
            'First meeting on this topic. Fresh issue. IRIS notes that meeting about something for the first time is the correct way to start. It is not always where meetings start.',
            'New issue. No prior meeting history. IRIS approves. There is nothing in the record to suggest this meeting will also fail.',
            'Novel topic. First convening. IRIS notes that this is the cleanest way to begin a meeting process. IRIS hopes it ends here too.',
          ],
        },
        {
          code: 'B',
          text: 'Yes, once. That meeting produced the question that this meeting will attempt to answer.',
          score: 1,
          comments: [
            'Meeting one produced a question. Meeting two will attempt an answer. IRIS notes this is a two-meeting chain. That is an acceptable chain length. For now.',
            'The first meeting clarified the question. This one will try to answer it. IRIS notes two meetings for one answer is a ratio it can accept. Barely.',
            'Predecessor meeting confirmed. Output was a question. Input to this meeting is that question. IRIS notes the chain and hopes it ends here.',
          ],
        },
        {
          code: 'C',
          text: 'Yes, several times. The topic remains unresolved. The meetings continue.',
          score: 0,
          comments: [
            'Several meetings. Same topic. Still unresolved. The meetings continue. IRIS notes that at some point the meetings became the response to the topic rather than the solution.',
            'The topic has been met about multiple times. It remains. IRIS notes that the meeting format has not changed. The results have not changed. The meetings have not changed. Something should.',
            'IRIS has reviewed the meeting history for this topic. Each meeting produced a follow-up. The topic is unchanged. You are attending the latest instance of something that does not conclude.',
          ],
        },
        {
          code: 'D',
          text: 'The organiser cannot recall. There have been many meetings.',
          score: 0,
          comments: [
            'The organiser cannot remember how many times they have met about this. IRIS can. IRIS has decided not to share the number. You are welcome.',
            'Memory saturated by meeting volume. IRIS notes that when meetings become unmemorable, they have also become unnecessary. This has not stopped them from recurring.',
            'Too many meetings to recall. IRIS notes this is a diagnostic finding. The organiser may need help. IRIS is not that help. Neither is this meeting.',
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
            'The most senior person called the meeting. Authority and agenda are aligned. IRIS notes this is the correct design. It notes this because correct designs are worth noting.',
            'Organiser is most senior. Meeting is theirs to conclude. IRIS approves of meetings where one person can end them decisively.',
            'Seniority and agenda ownership confirmed in the same person. IRIS notes this is structurally sound. It also notes that structural soundness does not guarantee a good meeting. Only the possibility of one.',
          ],
        },
        {
          code: 'B',
          text: 'Someone who was added "just to keep them in the loop" and will not contribute.',
          score: 1,
          comments: [
            'The most senior person is there to observe. Their time has been allocated. Their input has not been sought. IRIS notes the cost and the return.',
            '"Just to keep them in the loop." IRIS notes that loops can be maintained via email. Someone chose a meeting instead. That someone will not be in the meeting.',
            'Senior presence. Symbolic purpose. Real cost. IRIS notes that the most expensive person in the room has been assigned the least functional role.',
          ],
        },
        {
          code: 'C',
          text: 'Someone whose assistant accepted on their behalf and who may not attend.',
          score: 0,
          comments: [
            'The most senior attendee is simultaneously attending and not attending until the meeting begins. IRIS notes this is an uncomfortable state for everyone else to plan around.',
            'An assistant accepted. The senior person may appear. The meeting will be structured around a probability. IRIS notes that "may attend" is not the same as "will attend."',
            'IRIS has reviewed meetings organised around the possible presence of a senior person. They share a characteristic. IRIS will let you identify it after the meeting.',
          ],
        },
        {
          code: 'D',
          text: 'It is unclear. Several people on this call have the word "Head" in their title. Their jurisdictions overlap.',
          score: 0,
          comments: [
            'Multiple Heads. Overlapping jurisdictions. No clear apex. IRIS notes the meeting will surface this. It was not scheduled to.',
            'IRIS has reviewed the attendee titles. There are four Heads. Their scopes intersect. The meeting topic sits in the intersection. This will not go smoothly.',
            'Jurisdictional ambiguity at the senior level. IRIS notes that the meeting will spend time establishing who owns it before it can accomplish what it was called for. IRIS predicts this time will not be available.',
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
            'The meeting is a document. The document does not know it is a document. It has been given a room, a dial-in link, and 45 minutes to not know this.',
            'IRIS agrees with your assessment. The meeting should be a document. It will not be a document. It will be a meeting about the thing the document would have covered.',
            'A document wearing a meeting\'s clothes. IRIS notes that this is one of the most common meeting types. It is also one of the most preventable.',
          ],
        },
        {
          code: 'B',
          text: 'No. Live discussion and real-time decision-making are structurally required.',
          score: 3,
          comments: [
            'Live discussion required. Format justified. IRIS confirms attendance is appropriate. This is the correct answer. IRIS did not expect it to be this answer.',
            'Real-time input necessary. Async not viable. The meeting format matches the objective. IRIS notes this alignment and files it under "encouraging."',
            'The meeting cannot be a document. It must be a meeting. IRIS accepts this. IRIS notes this is the correct reason to hold a meeting. It should be the only reason.',
          ],
        },
        {
          code: 'C',
          text: 'Possibly. However, the organiser has stated they are "not a big async person."',
          score: 0,
          comments: [
            '"Not a big async person." The organiser\'s communication preference has been distributed to all attendees as a calendar obligation. They were not consulted.',
            'Personal preference has been converted into a collective time commitment. IRIS notes that the organiser\'s comfort with async is not a project requirement. It has been treated as one.',
            'IRIS notes that "not a big async person" is a sentence about the organiser, not about the meeting\'s requirements. The meeting has been scheduled based on the former.',
          ],
        },
        {
          code: 'D',
          text: 'This question was raised internally. The response was to schedule a meeting about it.',
          score: 0,
          comments: [
            'A meeting was called to determine if a meeting was necessary. IRIS notes the outcome of that meeting is a meeting. IRIS does not note this with surprise.',
            'The suggestion to avoid a meeting produced a meeting. IRIS finds this a complete and perfect response to the suggestion. In a particular way.',
            'IRIS has reviewed this approach to meeting reduction. It is the approach most commonly taken by people who do not intend to reduce meetings.',
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
            'No challenge raised. All parties accept the format. IRIS notes that consensus on format is meaningful when the format is correct. In this case it appears to be.',
            'The meeting\'s necessity is undisputed. IRIS notes that undisputed necessity and actual necessity are not always the same thing. Here they appear to be.',
            'No async challenge. IRIS accepts this. The meeting format is appropriate and unchallenged. IRIS notes that appropriate and unchallenged is the ideal state.',
          ],
        },
        {
          code: 'B',
          text: 'Yes. The suggestion was received poorly.',
          score: 0,
          comments: [
            'Someone correctly identified this could be an email. They were not thanked. IRIS has noted their name. IRIS will not share it with the organiser.',
            'The correct suggestion was made and dismissed. IRIS notes that this is how meeting culture is maintained: by making it costly to question.',
            'The suggestion was received poorly. IRIS notes the suggestion was correct. The reception was the message. The meeting is still happening.',
          ],
        },
        {
          code: 'C',
          text: 'Yes. The response was to schedule a meeting to discuss the suggestion.',
          score: 0,
          comments: [
            'The suggestion that a meeting was unnecessary produced a meeting. IRIS notes this response is self-defeating in a very specific and very common way.',
            'A meeting about whether to have a meeting has been scheduled. The original meeting is also still scheduled. IRIS notes that both will occur.',
            'IRIS notes that scheduling a meeting to discuss whether a meeting is needed is the organiser\'s way of answering the question. The answer is yes.',
          ],
        },
        {
          code: 'D',
          text: 'The thought has occurred to several attendees independently. None have spoken it aloud.',
          score: 0,
          comments: [
            'Everyone knows. No one has said it. The meeting will proceed on this shared private knowledge. IRIS notes that this is how many meetings proceed.',
            'Collective private assessment confirmed. The group agrees the meeting is unnecessary. They will attend it and say nothing. IRIS notes that silence is a form of consent.',
            'Several people have independently concluded this meeting should not exist. They are all going to attend it. IRIS finds this very human and very expensive.',
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
            'Live data required. Real-time input central. The meeting format is appropriate to the objective. IRIS confirms. You may attend with a clear conscience.',
            'The information requires the meeting to exist. IRIS accepts this. The meeting is justified on informational grounds.',
            'Substantial live information dependency confirmed. IRIS notes this is the correct reason to hold a meeting. The information must be generated in the room. Proceed.',
          ],
        },
        {
          code: 'B',
          text: 'Minimal. The information exists. No one prepared it for distribution.',
          score: 1,
          comments: [
            'The information exists. It was not prepared. The meeting is compensating for a preparation failure. IRIS notes that workarounds, repeated enough, become processes.',
            'Someone did not send a document. The meeting is the workaround. IRIS notes that the meeting will now be responsible for distributing information it should not have to distribute.',
            'Information exists. Preparation did not occur. The meeting will do the work the preparation should have done. IRIS notes the meeting\'s role here is administrative, not collaborative.',
          ],
        },
        {
          code: 'C',
          text: 'None. The information will be read aloud from a slide deck attendees will receive afterwards.',
          score: 0,
          comments: [
            'The slides will be read aloud. The slides will then be distributed. Attending the reading adds nothing that the distribution does not. IRIS notes your attendance is optional in every meaningful sense.',
            'IRIS notes that a meeting where information is narrated and then distributed is a meeting where attendance provides no advantage over non-attendance. This has not changed the invite list.',
            'Information will be read. Then sent. Attending gives you the audio version of something you will receive in text. IRIS notes that most people prefer text.',
          ],
        },
        {
          code: 'D',
          text: 'The information does not yet exist. This meeting is being used to generate it.',
          score: 0,
          comments: [
            'The meeting will produce its own content. IRIS notes that this is called a workshop. It has been scheduled as a meeting. These are different things with different requirements.',
            'The information will be created during the meeting that requires the information. IRIS notes the circular dependency and moves on.',
            'No information exists before the meeting that is about the information. IRIS notes that this is one of the more honest meeting types. It is still inefficient.',
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
            'The meeting has an end state. It will conclude when it has done what it was scheduled to do. IRIS notes this is the correct design. It is rare enough to note.',
            'Single purpose. Planned conclusion. IRIS approves. Meetings that know they will end are more honest than meetings that do not.',
            'Not recurring. End state defined. IRIS notes your meeting has a lifespan. This is healthy. Most meetings have not considered their own mortality.',
          ],
        },
        {
          code: 'B',
          text: 'It is recurring. It has never been reviewed. Questioning it feels professionally inadvisable.',
          score: 0,
          comments: [
            'The meeting cannot be questioned. IRIS notes that things which cannot be questioned persist past their usefulness. This meeting has. IRIS notes your discomfort and does nothing with it.',
            'Review has never occurred. Inquiry feels risky. The meeting continues. IRIS notes that institutional inertia is most powerful when it is also socially enforced.',
            'You know the meeting may not be necessary. You will not say so. IRIS notes that several employees have made the same calculation. The meeting has benefited from all of them.',
          ],
        },
        {
          code: 'C',
          text: 'It is recurring. The original organiser left the company. The meeting remains.',
          score: 0,
          comments: [
            'The creator is gone. The meeting persists. IRIS notes that this meeting has achieved a form of independence that few living things manage.',
            'IRIS has reviewed meetings that outlasted their organisers. They share a common trait: no one knows how to stop them. The meetings know this.',
            'The organiser departed. The meeting did not accompany them. IRIS notes that this is one of the ways meetings achieve permanence. By becoming nobody\'s responsibility.',
          ],
        },
        {
          code: 'D',
          text: 'It is a recurring meeting created to replace a recurring meeting that was "taking too long."',
          score: 0,
          comments: [
            'A meeting was created to fix a meeting. The original problem has migrated. IRIS notes that problems which are not solved tend to travel. They have found a new home.',
            'Meeting B replaced Meeting A because Meeting A was too long. IRIS has reviewed Meeting B\'s duration. The trajectory is familiar.',
            'The replacement meeting has inherited the original meeting\'s characteristics. IRIS finds this predictable. The meeting did not find it predictable. Or it did, and it did not care.',
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
            'Documented goal. Ongoing requirement. The meeting will stop when the goal is achieved. IRIS notes that most recurring meetings have not considered the possibility of stopping.',
            'Specific purpose. Finite lifespan. IRIS approves of recurring meetings that are aware they are temporary. They usually are not.',
            'The meeting knows what it is for and will end when it achieves it. IRIS finds this structurally correct and statistically unusual.',
          ],
        },
        {
          code: 'B',
          text: '"To stay aligned." No further definition has been offered or requested.',
          score: 0,
          comments: [
            '"Stay aligned." Alignment is a state. This meeting has been scheduled to maintain a state with no defined parameters. IRIS notes that undefined states cannot be confirmed as achieved.',
            'IRIS has reviewed 2,300 meetings whose purpose is staying aligned. None produced a documented alignment outcome. The meetings continued. Alignment was assumed.',
            'The purpose is alignment. The alignment has no definition. The meeting cannot confirm it has succeeded. It will recur regardless. IRIS finds this a very efficient system for producing nothing.',
          ],
        },
        {
          code: 'C',
          text: '"Sync." The word sync appears in the title, description, and organiser\'s email signature.',
          score: 0,
          comments: [
            '"Sync" has colonised every available field in this meeting\'s metadata. Its meaning has not been specified in any of them. IRIS counts seven appearances and zero definitions.',
            'IRIS notes that a word appearing this frequently without a definition has ceased to be a word and become a social signal. The signal means: meeting. The meeting is this.',
            'Sync. IRIS notes that the more a word appears in a meeting\'s description, the less it tends to mean. "Sync" has achieved a state of maximum frequency and minimum meaning.',
          ],
        },
        {
          code: 'D',
          text: 'There is no stated purpose. There has never been a stated purpose. Asking feels aggressive.',
          score: 0,
          comments: [
            'No purpose. Never was one. Asking creates social risk. IRIS notes that a meeting whose purpose cannot be questioned has achieved political status. Political status and operational value are not the same thing.',
            'The meeting has no purpose. This has never been said aloud. The meeting continues. IRIS notes that the silence around this fact is itself a form of institutional communication.',
            'Purpose: absent. Inquiry: suppressed. Meeting: ongoing. IRIS notes that several employees are aware of all three of these things. None of them are you, apparently.',
          ],
        },
      ],
    },
    {
      id: 'q7c',
      criterion: '7.1',
      category: 'Recurrence Justification Audit',
      text: 'What would happen if this recurring meeting were cancelled without notice next week?',
      options: [
        {
          code: 'A',
          text: 'A specific deliverable would be delayed. This is measurable and unacceptable.',
          score: 3,
          comments: [
            'Cancellation produces measurable harm. The meeting is load-bearing. IRIS confirms its necessity. Not happily. Correctly.',
            'The meeting\'s absence creates a specific, trackable problem. IRIS notes this is the correct test for recurring meeting necessity. This one passes.',
            'Operational dependency confirmed. The meeting earns its place on the calendar. IRIS notes it has done so by the only method IRIS accepts: consequence.',
          ],
        },
        {
          code: 'B',
          text: 'Nothing. This has been tested. Nothing happened.',
          score: 0,
          comments: [
            'The empirical test has been run. The result was nothing. The meeting was rescheduled. The two facts have not yet been connected by anyone with the authority to act on them.',
            'Nothing happened. IRIS notes that "nothing happened" is the most informative possible outcome of a cancellation test. The information has not been used.',
            'The meeting was cancelled. Nothing changed. The meeting returned. IRIS notes that this is a complete description of a meeting that should not exist. It exists.',
          ],
        },
        {
          code: 'C',
          text: 'Three people would have an unexpected free hour and feel briefly uneasy about it.',
          score: 1,
          comments: [
            'The cancellation would produce discomfort, not disruption. IRIS notes that calendar anxiety is not a business requirement. It is a symptom.',
            'Three people would be briefly uneasy. IRIS notes that unease in the presence of free time is a diagnostic finding about the attendees. It is not a justification for the meeting.',
            'Free time would cause anxiety. The meeting exists, in part, to prevent this. IRIS notes that preventing anxiety is a valid goal. It is not a meeting agenda.',
          ],
        },
        {
          code: 'D',
          text: 'The question is theoretical. This meeting cannot be cancelled. It simply is.',
          score: 0,
          comments: [
            'The meeting cannot be cancelled because it cannot be cancelled. IRIS notes this is circular reasoning. The meeting does not consider this a problem.',
            'Permanence asserted without evidence. IRIS notes that every meeting that has ever been cancelled was once described as permanent. This one has not yet been tested.',
            'The meeting simply is. IRIS notes that very few things simply are. Mostly things exist because someone has chosen not to stop them. This is also how this meeting exists.',
          ],
        },
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
        {
          code: 'A',
          text: 'Productive. Disagreement is expected and handled at the content level.',
          score: 3,
          comments: [
            'Disagreement permitted. Content-level conflict expected. IRIS notes that meetings where people can be wrong out loud tend to produce better decisions. This appears to be one.',
            'Productive register confirmed. IRIS approves of environments where people can disagree without it becoming a different kind of meeting entirely.',
            'Functional conflict model confirmed. IRIS notes that this is what psychological safety actually looks like. It is not everyone agreeing. It is everyone being allowed not to.',
          ],
        },
        {
