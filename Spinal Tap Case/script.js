function spinalCase(str) {
 
  var reCapital = /[A-Z]/g;
  var reSpace = /[\s_*]/g;	// All whitespaces and underscores
  var newArr = [];

	str = str.replace(reSpace, "-");

	for (var i = 0; i < str.length; i++) {
  	
  	if(reCapital.test(str.charAt(i)) && i !== 0 && /[a-z0-9]/.test(str.charAt(i-1))){
    	alert("We have a capital: " + str.charAt(i));
        newArr.push("-");
    }
    newArr.push(str.charAt(i));
  }
  
  str = newArr.join("");
  str = str.toLowerCase();
    
  return str;
}

spinalCase('AllThe-small Things');
