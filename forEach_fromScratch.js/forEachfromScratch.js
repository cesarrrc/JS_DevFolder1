const winningLottoNumbers = [1, 25, 34, 39, 52, 58];

/**
 * This is a for Loop that loops through each iteration of the array. So long as the current
 * iterations is below the length of the array (array[i]), it will continue to loop through
 * until it reaches th end of the array.
 * 
 * Returns: a console log of each iterations index number (array.indexOf(array.[i])) 
 *          as well as the current number that (array.[i]) is currently on.
 */
for(i = 0; i < winningLottoNumbers.length; i++){
  console.log(`this is using the Loop method: `, winningLottoNumbers.indexOf(winningLottoNumbers[i]), winningLottoNumbers[i]);
}

console.log("")

/**
 * This is a method [.forEach()] that is called on a array (array.forEach(callback(currentValue, [index], [array])))
 * which should take in a callback (Function to execute on each element. It accepts between
 * one and three arguments: currentValue, index(optional), array(optional)).
 * 
 * Returns: the callback will return a console log exactly like the forLoop above. 
 */
winningLottoNumbers.forEach(function(number, index, array) {
  console.log(`this is using the forEach method: `, index, number)
})
