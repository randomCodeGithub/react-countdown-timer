export const getRemainingTimeObj = () => {
  let currentYear = new Date().getFullYear() + 1;
  let newYears = `1 Jan ${currentYear}`;
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  if (newYearsDate > currentDate) {
    return {
      days: getRemainingDays(totalSeconds),
      hours: getRemainingHours(totalSeconds),
      mins: getRemainingMins(totalSeconds),
      seconds: getRemainingSeconds(totalSeconds),
    };
  } else {
    return {
      days: "0",
      hours: "00",
      mins: "00",
      seconds: "00",
    };
  }
};

function getRemainingDays(totalSeconds) {
  const days = Math.floor(totalSeconds / 3600 / 24);
  return days;
}

function getRemainingHours(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600) % 24;
  return formatTime(hours);
}

function getRemainingMins(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60) % 60;
  return formatTime(mins);
}

function getRemainingSeconds(totalSeconds) {
  const seconds = Math.floor(totalSeconds) % 60;
  return formatTime(seconds);
}

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
