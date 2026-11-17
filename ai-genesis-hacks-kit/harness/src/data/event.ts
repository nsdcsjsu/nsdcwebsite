/** Draft source data from supplied event README. Reconcile with approved events master. */
export type ApprovalStatus = 'confirmed_in_readme' | 'needs_event_approval';
export type EventTrack = { id: string; name: string; description: string };
export type ScheduleItem = { time: string; activity: string }; // HH:mm in America/Los_Angeles
export type Award = { name: string };

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
} as const;
