function sumPrimes(num) {
  
  var acc = 0;
  var arrPrimes = [];
  // A prime number has only two divisors, 1 and itself.
  
  // From 1 to the written number
  for (var i = 1; i <= num; i++) {  // 
    // If it's prime, we add it to the array of primes
    alert("Iteration " + i);
    if (isPrime(i)) {
      alert("Yup," + i + " is prime");
      arrPrimes.push(i);
      acc += i;
    } else {
      alert("No, " + i + " is not prime");
    }
    alert(acc);
  }  
  return acc;
}

function isPrime(val){
  var divisor = 1;
  if (val == 1) {return false;} 
  else {
    for (var i = 2; i <= val; i++) {
      if(val % i == 0) {
        divisor++;
      }
    }
  }
  if(divisor == 2) {
    return true;
  } else {
    return false;
  }
}

sumPrimes(10);