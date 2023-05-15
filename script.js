solve(index,calculatedString,input_digit){
	let mapping = {
		"2":"abc",
		"3":"def",
		"4":"ghi",
		"5":"jkl",
		"6":"mno",
		"7":"pqrs",
		"8":"tuv",
		"9":"wxyz"
	}
	let result = []
	if(index>=input_digit.length){
		result.push(calculatedString)
		retun result
	}
	let currString = mapping[input_digit[index]]
	for(let i=0;i<currString.length;i++){
		solve(index+1,calculatedString+currString[i],input_digit)
	}
}
function letterCombinations(input_digit) {
  //Complete the function
	
	solve(0,"",input_digit)
	
}

module.exports = letterCombinations;
