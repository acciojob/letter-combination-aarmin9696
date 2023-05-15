function letterCombinations(digits) {
  // Mapping of digit to letters
  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  // Function to generate letter combinations recursively
  function generateCombinations(combination, digits) {
    // Base case: if there are no more digits, add the current combination to the result
    if (digits.length === 0) {
      result.push(combination);
      return;
    }

    // Get the letters corresponding to the first digit
    const letters = digitToLetters[digits[0]];

    // Recursively generate combinations for the remaining digits
    for (let i = 0; i < letters.length; i++) {
      generateCombinations(combination + letters[i], digits.substring(1));
    }
  }

  const result = [];

  // Call the helper function to generate letter combinations
  generateCombinations('', digits);

  // Sort the result lexicographically
  result.sort();

  return result;
}
function letterCombinations(input_digit) {
  //Complete the function
	
	generateCombinations('', input_digit);
	
}

module.exports = letterCombinations;
