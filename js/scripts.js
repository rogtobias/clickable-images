//back-end

var third = function(){

  var firstLastCap = function(per){
    return per.charAt(0) + per.charAt(per.length -1);
  };

  var twoLetters = firstLastCap(sentence);

  var reverseFirstLast = function(par){
    return par.charAt(1) + par.charAt(0);
  };

  var twoLettersReversed = reverseFirstLast(twoLetters);


  var combo = function(){
    return sentence + twoLettersReversed;
  };

  var fourth = function(par){
    var length = par.length / 2;
    var char = par.charAt(length);
      return char;
  };

  var scramble = fourth(sentence) + combo();

  return (scramble.split("").reverse().join("").split(" ").reverse().join(" "));
};


var sentence = prompt("enter a sentence: ");


third()
//user interface
$(document).ready(function() {
  $("#happyFace").click(function(){
    alert(sentence);
  });
  $("#scrambleFace").click(function(){
    alert(third());
  });
});
