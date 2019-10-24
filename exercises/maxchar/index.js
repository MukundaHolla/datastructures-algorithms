// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // convert the str to an object
  // where key: => charecter
  // and value: => no. of times the char has been repeated
  // how to create obj like that see below
  const charObj = {};

  //   for (let char of str) {
  //     if (!charObj[char]) {
  //       charObj[char] = 1;
  //     } else {
  //       charObj[char]++;
  //     }
  //   }

  //   charObj; // has that object

  // another way is
  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }

  console.log(charObj);
  let max = 0;
  let maxChar = '';

  for (let char in charObj) {
    if (charObj[char] > max) {
      max = charObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
