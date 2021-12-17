const checkGreaterThanAYear = (vidDate, todaysDate) => {
  let years = new Date(todaysDate - vidDate).getFullYear() - 1970;
  if (years === 1) {
    return `${years} year ago`;
  } else if (years > 1) {
    return `${years} years ago`;
  } else return false;
};

const checkGreaterThanAMonth = (vidDate, todaysDate) => {
  let months;
  months = (todaysDate.getFullYear() - vidDate.getFullYear()) * 12;
  months -= todaysDate.getMonth();
  months += vidDate.getMonth();

  if (months === 1) {
    return `${months} month ago`;
  } else if (months > 1) {
    return `${months} months ago`;
  } else return false;
};

const checkGreaterThanAWeek = (vidDate, todaysDate) => {
  let weeks = Math.round((todaysDate - vidDate) / (7 * 24 * 60 * 60 * 1000));

  if (weeks === 1) {
    return `${weeks} week ago`;
  } else if (weeks > 1) {
    return `${weeks} weeks ago`;
  } else return false;
};

const checkGreaterThanADay = (vidDate, todaysDate) => {
  let days = Math.round((todaysDate - vidDate) / (24 * 60 * 60 * 1000));
  if (days === 0) return checkGreaterThanAnHour(vidDate, todaysDate);
  if (days === 1) {
    return `${days} day ago`;
  } else if (days > 1) {
    return `${days} days ago`;
  } else return;
};

const checkGreaterThanAnHour = (vidDate, todaysDate) => {
  let hours = Math.round((todaysDate - vidDate) / (60 * 60 * 1000));

  if (hours <= 1) {
    return `${hours} hour ago`;
  } else if (hours > 1) {
    return `${hours} hours ago`;
  } else return false;
};

const youtubePublishedAt = (date) => {
  let vidDate = new Date(date);
  let todaysDate = new Date();

  //going through checks

  //if greater than a year return how many
  if (checkGreaterThanAYear(vidDate, todaysDate)) {
    return checkGreaterThanAYear(vidDate, todaysDate);
  }
  //if greater than a month return how many
  else if (checkGreaterThanAMonth(vidDate, todaysDate)) {
    return checkGreaterThanAMonth(vidDate, todaysDate);
  }
  //if greater than a week return how many
  else if (checkGreaterThanAWeek(vidDate, todaysDate)) {
    return checkGreaterThanAWeek(vidDate, todaysDate);
  }
  //if greater than a day return how many
  else if (checkGreaterThanADay) {
    return checkGreaterThanADay(vidDate, todaysDate);
  }
};
export default youtubePublishedAt;
