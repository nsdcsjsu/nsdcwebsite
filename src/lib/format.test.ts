import { describe, expect, it } from 'vitest';
import { formatDisplayDate, formatTime12h } from './format';

describe('display formatters', () => {
  it('formats the event date as a long Saturday label', () => {
    expect(formatDisplayDate('2027-02-13')).toBe('Saturday, February 13, 2027');
  });

  it('formats schedule times in 12-hour local labels', () => {
    expect(formatTime12h('08:30')).toBe('8:30 AM');
    expect(formatTime12h('12:00')).toBe('12:00 PM');
    expect(formatTime12h('17:00')).toBe('5:00 PM');
    expect(formatTime12h('19:30')).toBe('7:30 PM');
  });
});
