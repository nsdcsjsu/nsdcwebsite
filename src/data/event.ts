/** Draft source data from supplied event README. Reconcile with approved events master. */
export type ApprovalStatus = 'confirmed_in_readme' | 'needs_event_approval';
export type EventTrack = { id: string; name: string; description: string };
export type ScheduleItem = { time: string; activity: string }; // HH:mm in America/Los_Angeles
export type Award = { name: string };
export type FaqItem = { question: string; answer: string };

export const event = {
  name: 'AI Genesis Hacks',
  tagline: 'Impact. Security. Intelligence.',
  date: '2027-02-13',
  timezone: 'America/Los_Angeles',
  location: { label: 'San Jose State University Ballroom', approval: 'needs_event_approval' as ApprovalStatus },
  free: true,
  minimumAge: 18,
  maximumTeamSize: 4,
  registrationUrl: 'https://luma.com/sxb7ae0h',
  discordUrl: 'https://discord.gg/qeuDjHztQF',
  contactEmail: 'nsdcsjsu@gmail.com',
  codeOfConductUrl: 'https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md',
  // Deliberately null until events approves live destinations.
  devpostUrl: null as string | null,
  rulesUrl: null as string | null,
  prizePoolAmount: null as number | null,
  sponsors: [] as { name: string; image: string; href?: string }[],
  organizers: [] as { name: string; title?: string; image?: string }[],
  organizerName: 'National Student Data Corps at San Jose State University',
  summary:
    'A one-day, in-person hackathon at San Jose State University. Students team up to build technology that uplifts communities, protects people, and harnesses the power of AI.',
  formatLabel: 'In-person, full day',
  benefits: [
    'Mentors to help you throughout the day',
    'Prizes for winning teams',
    'Free meals, snacks, and swag',
  ],
  tracks: [
    { id: 'impact', name: 'Impact', description: 'Build technology that makes a real difference in people\'s lives: education, health, accessibility, sustainability or community support.' },
    { id: 'security', name: 'Security', description: 'Build technology that protects people, data and systems: privacy, cybersecurity, fraud prevention and digital safety.' },
    { id: 'intelligence', name: 'Intelligence', description: 'Build AI and machine-learning solutions to solve problems, automate tasks and create smarter experiences.' },
  ] satisfies EventTrack[],
  awards: [
    { name: 'Best Overall Project' },
    { name: 'Best Impact Track Project' },
    { name: 'Best Security Track Project' },
    { name: 'Best Intelligence Track Project' },
  ] satisfies Award[],
  schedule: [
    { time: '08:30', activity: 'Registration and check-in, breakfast, networking, and team formation' },
    { time: '09:00', activity: 'Welcome, rules, and hackathon theme' },
    { time: '09:25', activity: 'Guest speaker' },
    { time: '09:50', activity: 'Final team setup' },
    { time: '10:00', activity: 'Hacking begins' },
    { time: '12:00', activity: 'Lunch break' },
    { time: '13:00', activity: 'Hacking resumes' },
    { time: '14:45', activity: 'Progress check' },
    { time: '15:00', activity: 'Final development and testing' },
    { time: '17:00', activity: 'Project submissions due' },
    { time: '17:10', activity: 'Dinner' },
    { time: '17:45', activity: 'Team presentations' },
    { time: '18:30', activity: 'Judging and deliberation' },
    { time: '19:00', activity: 'Awards and prize distribution' },
    { time: '19:15', activity: 'Closing remarks and cleanup' },
    { time: '19:30', activity: 'Event ends' },
  ] satisfies ScheduleItem[],
  faq: [
    {
      question: 'What is AI Genesis Hacks?',
      answer:
        'AI Genesis Hacks is a one-day, in-person hackathon organized by the National Student Data Corps at San Jose State University. Students team up to build technology that uplifts communities, protects people, and harnesses the power of AI.',
    },
    {
      question: 'When is the event?',
      answer:
        'Saturday, February 13, 2027. The day runs from 8:30 AM to 7:30 PM Pacific Time (America/Los_Angeles).',
    },
    {
      question: 'Where is it held?',
      answer:
        'The planned venue is the San Jose State University Ballroom. Final venue confirmation is still pending, and this page will be updated when events leadership approves the booking.',
    },
    {
      question: 'Who can participate?',
      answer: 'The hackathon is open to everyone ages 18+.',
    },
    {
      question: 'How much does it cost?',
      answer: 'The event is free.',
    },
    {
      question: 'How do teams work?',
      answer:
        'Teams may have up to 4 members. Solo registrants can find a team at the event.',
    },
    {
      question: 'How do I register?',
      answer:
        'Register for free on Luma using the Register link on this page.',
    },
    {
      question: 'How do project submissions work?',
      answer:
        'Project submissions will be collected on Devpost. The event-specific Devpost URL will be posted here once it is available.',
    },
    {
      question: 'What are the tracks?',
      answer:
        'Teams choose one track when submitting: Impact, Security, or Intelligence. Every project is also eligible for Best Overall.',
    },
    {
      question: 'What do participants get?',
      answer:
        'Mentors throughout the day, prizes for winning teams, and free meals, snacks, and swag. Prize amounts will be published when they are confirmed.',
    },
    {
      question: 'Is there a community chat?',
      answer: 'Yes. Join the Discord using the link in the header and footer.',
    },
    {
      question: 'What are the rules?',
      answer:
        'Full event rules will be published here when they are ready. Participants are expected to follow the Code of Conduct linked on this page. Using that policy does not mean MLH is sponsoring or affiliated with this event.',
    },
    {
      question: 'How can my organization sponsor?',
      answer: 'Email nsdcsjsu@gmail.com. Confirmed sponsors will appear on this page.',
    },
    {
      question: 'Who organizes AI Genesis Hacks?',
      answer: 'The National Student Data Corps at San Jose State University.',
    },
  ] satisfies FaqItem[],
} as const;
