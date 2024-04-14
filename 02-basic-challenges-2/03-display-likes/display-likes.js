// My Solution
function displayLikes(names) {
  const namesLength = names.length;

  if (namesLength === 3) message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (namesLength === 2) message = `${names[0]} and ${names[1]} like this`;
  if (namesLength === 1) message = `${names[0]} likes this`;
  if (namesLength === 0) message = "no one likes this";
  if (namesLength > 3)
    message = `${names[0]}, ${names[1]} and ${namesLength - 2} others like this`;

  return message;
}

module.exports = displayLikes;
