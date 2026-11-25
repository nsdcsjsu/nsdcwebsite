import { describe, expect, it } from 'vitest';
import { event } from './event';

const expectedTimes = [
  '08:30', '09:00', '09:25', '09:50', '10:00', '12:00',
  '13:00', '14:45', '15:00', '17:00', '17:10', '17:45',
  '18:30', '19:00', '19:15', '19:30',
];
const awardNames = [
  'Best Overall Project',
  'Best Impact Track Project',
  'Best Security Track Project',
  'Best Intelligence Track Project',
];

describe('approved README-derived content contract', () => {
  it('has the expected event identity, date and timezone', () => {
    expect(event.name).toBe('AI Genesis Hacks');
    expect(event.tagline).toBe('Impact. Security. Intelligence.');
    expect(event.date).toBe('2027-02-13');
    expect(event.timezone).toBe('America/Los_Angeles');
    expect(new Date(`${event.date}T12:00:00Z`).getUTCDay()).toBe(6); // Saturday
  });

  it('preserves cost, age and team limit', () => {
    expect(event.free).toBe(true);
    expect(event.minimumAge).toBe(18);
    expect(event.maximumTeamSize).toBe(4);
  });

  it('has exactly three distinct tracks', () => {
    expect(event.tracks.map(t => t.name)).toEqual(['Impact', 'Security', 'Intelligence']);
    expect(new Set(event.tracks.map(t => t.id)).size).toBe(3);
    for (const track of event.tracks) expect(track.description.length).toBeGreaterThan(30);
  });

  it('has the complete schedule in strictly increasing order', () => {
    const times = event.schedule.map(s => s.time);
    expect(times).toEqual(expectedTimes);
    expect(new Set(times).size).toBe(times.length);
    for (let i = 1; i < times.length; i++) expect(times[i] > times[i-1]).toBe(true);
  });

  it('does not move the 5pm project submission deadline', () => {
    expect(event.schedule.find(s => /submissions due/i.test(s.activity))?.time).toBe('17:00');
  });

  it('contains all four award categories', () => {
    expect(event.awards.map(a => a.name)).toEqual(awardNames);
  });

  it('keeps URLs and contact information exact', () => {
    expect(event.registrationUrl).toBe('https://luma.com/sxb7ae0h');
    expect(event.discordUrl).toBe('https://discord.gg/qeuDjHztQF');
    expect(event.contactEmail).toBe('nsdcsjsu@gmail.com');
    expect(event.codeOfConductUrl).toBe('https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md');
  });

  it('does not fabricate pending info', () => {
    expect(event.devpostUrl).toBeNull();
    expect(event.rulesUrl).toBeNull();
    expect(event.prizePoolAmount).toBeNull();
    expect(event.sponsors).toHaveLength(0);
    expect(event.location.approval).toBe('needs_event_approval');
  });
});
