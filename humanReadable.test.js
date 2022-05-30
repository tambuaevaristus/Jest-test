const humanReadable = require('./5 kyu Human Readable Time');


// 3600 seconds = 01:00:00
test('Human Readable returns 01:00:00 when 0 is passed in', () => {
    expect(humanReadable(3600)).toBe('01:00:00');
  });

  test('Human Readable returns 00:00:00 when 0 is passed in', () => {
    expect(humanReadable(0)).toBe('00:00:00');
  });

  test('Human Readable returns 00:00:59 when 3600 is passed in', () => {
    expect(humanReadable(59)).toBe('00:00:59');
  });

  test('Human Readable returns 00:01:00 when 60 is passed in', () => {
    expect(humanReadable(60)).toBe('00:01:00');
  });

  test('Human Readable returns 00:01:30 when 90 is passed in', () => {
    expect(humanReadable(90)).toBe('00:01:30');
  });

  test('Human Readable returns 00:59:59 when 3599 is passed in', () => {
    expect(humanReadable(3599)).toBe('00:59:59');
  });

  test('Human Readable returns 99:59:59 when 359999 is passed in', () => {
    expect(humanReadable(359999)).toBe('99:59:59');
  });



