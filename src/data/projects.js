export const featured = [
  {
    name: 'agentblocks',
    tag: 'Config-driven multi-agent platform',
    url: 'https://github.com/Naveenkumaar/agentblocks',
    journal: 'https://github.com/Naveenkumaar/design-journal/blob/main/systems/config-driven-agent-platform.md',
    blurb:
      "Run any number of AI agents from versioned JSON configuration, interpreted by one generic engine — nothing agent-specific lives in code.",
    points: [
      'Two-plane design: control plane (author/activate) never touches the runtime plane (execute)',
      'Staged turn pipeline — govern → guardrails-in → route → assemble → reason-act → effect → guardrails-out → egress',
      'Eval-gated activation: a version that fails golden/adversarial suites never goes live',
      'Maker-checker approvals on high-risk effector actions',
      'Built-in autonomous orchestrator: decomposes a goal, routes each sub-task to the best-fit specialist by self-declared profile, delegates, synthesizes one answer',
      'Plan is previewable and human-editable before it runs; routing exposes score, confidence, and ranked alternatives',
    ],
    stack: ['Python', 'FastAPI', 'SQLite → Postgres', 'pytest'],
  },
  {
    name: 'voxbridge',
    tag: 'Cascaded voice agent (STT → LLM → TTS)',
    url: 'https://github.com/Naveenkumaar/voxbridge',
    journal: 'https://github.com/Naveenkumaar/design-journal/blob/main/systems/cascaded-voice-agent.md',
    blurb:
      'A task-oriented voice assistant built as three inspectable, swappable stages instead of one opaque speech-to-speech model.',
    points: [
      'Pure, deterministic dialogue state machine — fully testable with plain strings, no audio or model required',
      'Folds every slot heard in a turn: "table for 4 tomorrow 8pm, Sam" resolves in one shot',
      'Lookup / modify / cancel by reference, multi-booking sessions, relative date-time parsing',
      'Streams in both directions — partial transcripts in, sentence-chunked TTS out',
      'Live mic capture with barge-in; runs fully offline via pluggable backend stubs',
    ],
    stack: ['Python', 'Whisper', 'pyttsx3', 'SQLite'],
  },
]

export const more = [
  {
    name: 'ET_Hackathon_main',
    tag: 'Hybrid GraphRAG system',
    url: 'https://github.com/Naveenkumaar/ET_Hackathon_main',
  },
  {
    name: 'kovai-delivery-hackathon',
    tag: 'Multi-agent drone delivery simulation',
    url: 'https://github.com/Naveenkumaar/kovai-delivery-hackathon',
  },
  {
    name: 'emotionsense',
    tag: 'Multi-label emotion classification',
    url: 'https://github.com/Naveenkumaar/emotionsense',
  },
  {
    name: 'autolysis',
    tag: 'LLM-powered automated data analysis',
    url: 'https://github.com/Naveenkumaar/autolysis',
  },
  {
    name: 'github-users-analysis',
    tag: 'GitHub API scraper & analysis',
    url: 'https://github.com/Naveenkumaar/github-users-analysis',
  },
]
