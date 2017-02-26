console.log("main js is running");


function encrypt() {
  var encryptText = document.getElementById("encrypt1").value;
  document.getElementById("encryptAnswer").innerHTML = encryptText;
  var ekey = parseInt(document.getElementById("ekey").value);
  console.log(ekey);
  console.log(encryptText);
  console.log(typeof ekey);
  init(ekey,encryptText);
  document.getElementById("encrypt1").value = "";
  document.getElementById("ekey").value = "";
}

function decrypt() {
  var decryptText = document.getElementById("encrypt2").value;
  document.getElementById("decryptAnswer").innerHTML = decryptText;
  var dkey = parseInt(document.getElementById("dkey").value);
  console.log(dkey);
  init(dkey,decryptText);
  document.getElementById("encrypt2").value = "";
  document.getElementById("dkey").value = "";
}

caesarCipher = function(offset,string) { 
     var words    = string.split(" "),
			word_idx = 0,
		  
      arrayWords = [];

	while(word_idx < words.length) {
		var   word = words[word_idx],
		letter_idx = 0;
    new_word = "";
    while(letter_idx < word.length) {
    	var char_i = word.charCodeAt(letter_idx) - "a".charCodeAt();
      if (document.getElementById("encrypt1").value){
        new_char_i = ((char_i) + offset) % 26;
      } else {
        new_char_i = ((char_i) - offset) % 26;
      }
    	new_word += String.fromCharCode("a".charCodeAt() + new_char_i);
    	letter_idx++;
    }
    arrayWords.push(new_word);
    word_idx++;
	}


  if(document.getElementById("encrypt1").value){
    document.getElementById("encryptAnswer").innerHTML = arrayWords.join(" ");
  } else {
    document.getElementById("decryptAnswer").innerHTML = arrayWords.join(" ");
  }
	console.log(arrayWords.join(" "));
	return arrayWords.join(" ");

};

function init(key,text) {
	console.log("function initialized...");
  caesarCipher(key,text);    
}





// function encrypt() {
//   var encryptText = document.getElementById("encrypt1").value;
//   document.getElementById("answer1").innerHTML = encryptText;
//   var ekey = document.getElementById("ekey").value;
//   console.log(ekey);
// }

// function decrypt() {
//   var decryptText = document.getElementById("encrypt2").value;
//   document.getElementById("answer2").innerHTML = decryptText;
//   var dkey = document.getElementById("dkey").value;
//   console.log(dkey);
// }
