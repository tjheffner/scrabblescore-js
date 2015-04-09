var score = function(input) {

  input = input.toUpperCase();

  var letters = {'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1,
                 'N': 1, 'R': 1, 'S': 1, 'T': 1, 'D': 2, 'G': 2,
                 'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4,
                 'V': 4, 'W': 4, 'Y': 4, 'K': 5, 'J': 8, 'X': 8,
                 'Q': 10, 'Z': 10};

  var output = 0;

  for (var i = 0; i < input.length; i++) {
    output += letters[input.charAt(i)] || 0;
  }

  /* setting output to also have || 0 means if something in the input is not found
     in the object 'letters' it will just add 0, effectively ignoring it.
  */
  
  return output;
};
