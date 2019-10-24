// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return (
    stringA
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('') ===
    stringB
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  );
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const strMapA = buildCharMap(stringA);
//     const strMapB = buildCharMap(stringB);

//     if (Object.keys(strMapA).length !== Object.keys(strMapB).length) {
//       return false;
//     }

//     for (let char in strMapA) {
//       if (strMapA[char] !== strMapB[char]) {
//         return false;
//       }
//     }

//     return true;
//   }

//   function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   }
