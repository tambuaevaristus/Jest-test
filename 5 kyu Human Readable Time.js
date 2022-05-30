// 5 kyu Human Readable Time

const { time } = require("console");

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// Steps

function humanReadable(seconds) {
  var [HH, MM, SS] = [
    Math.floor(seconds / 3600),
    Math.floor((seconds % 3600) / 60),
    Math.floor((seconds % 3600) % 60),
  ].map((timeFactor) =>
        timeFactor.toString().length < 2 ? "0" + timeFactor : timeFactor
  )
  
  
  return `${HH}:${MM}:${SS}`;
}

module.exports = humanReadable;
