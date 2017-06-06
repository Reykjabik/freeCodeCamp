function smallestCommons(arr) {
	
  var biggest;
  var smallest;
  var result;
  // First off, we sort the array so that it goes from less to more
  arr = arr.sort(function(a, b){
  	return a - b;
  });
  
  smallest = arr[0];
  biggest = arr[1];
  
  // We get the SCM of the first and last element...
  result = biggest * smallest;
  
  // ... and those in between.
  for (var j = biggest-1; j > smallest; j--){
    result = scm (result, j);
  }
  
  return result;
}

// Returns the SCM of 2 given numbers
function scm(a, b){
	var i = 1;
  while(true){
  	if ((a * i) % b === 0){
    	return a*i;
    }
    i++;
  }
}

smallestCommons([1,13]);