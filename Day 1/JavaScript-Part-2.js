/* Program Process
  Loop through every number
    If i + loc >= input.length:
      T => nextLoc = i - input.length + loc
      F => nextLoc = i + loc
        If n[i] == (n[nextLoc] || input[0]):
          T => Add to the sum
          F => continue
*/

var input, sum, num, nextNum, loc, nextLoc;

input = '123425' // Declare Input Here
sum = 0
loc = input.length / 2

for (var i = 0; i < input.length; i++) {

  num = parseInt(input[i])
  nextNum = input[i + loc >= input.length ? i - input.length + loc : i + loc]
  
  if (num == parseInt(nextNum)) sum += num

}

console.log(sum)
