// Given a positive integer num, return the sum of all odd
// Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  
  var prev = 0;
  var current = 1;
  var sum;
  var arr = [];
  
  // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
  // 1, 2, 3, 4, 5, 6,  7,  8,  9, 10
  if (num != 1){
    while (current <= num) {
      sum = prev + current;	
      prev = current;
      current = sum;
      // We need to include the current number in an array of Fibonacci numbers
      arr.push(prev);
    }
  }
  else {
  	sum = 1;
    arr.push(current);
  }
  
  var oddArr = arr.filter(function(val) {  // Let's get rid of all the even numbers
  	return val % 2 == 1;
  });
  
  sum = oddArr.reduce(function(a, b) {     // And now let's add them
  	return a + b;
  });

  return sum;
}



sumFibs(10);