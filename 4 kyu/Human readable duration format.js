function calculate(seconds) {
  if (seconds >= 31536000) {
    var years = Math.floor(seconds / 31536000);
    seconds %= 31536000;
  }

  if (seconds >= 86400) {
    var days = Math.floor(seconds / 86400);
    seconds %= 86400;
  }

  if (seconds >= 3600) {
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
  }

  if (seconds >= 60) {
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;
  }

  return [years, days, hours, minutes, seconds];
}

function formatDuration(params) {
  let getDuration = calculate(params);
  let str = "";

  const units = ['years', 'days', 'hours', 'minutes', 'seconds'];

  for (let i = 0; i < getDuration.length; i++) {
    if (getDuration[i]) {
      str += `${getDuration[i]} ${getDuration[i] > 1 ? units[i] : units[i].slice(0, -1)}`;

      // Add "and" if there are more units
      const remainingUnits = getDuration.slice(i + 1).filter(unit => unit > 0);
      if (remainingUnits.length > 1) {
        str += ', ';
      } else if (remainingUnits.length === 1) {
        str += ` and `;
      }
    }
  }

  return str || "now";
}

console.log(formatDuration(3662));
