/* Program Process
  Loop through every number
    If n[i] == (n[i + 1] || input[0]):
      T => Add to the sum
      F => continue
*/

var input, sum, num, nextNum;

input = '413121224' // Declare Input Here
sum = 0

for (var i = 0; i < input.length; i++) {

  num = parseInt(input[i])
  nextNum = input[i + 1] || input[0]

  if (num == parseInt(nextNum)) sum += num

}

console.log(sum)
