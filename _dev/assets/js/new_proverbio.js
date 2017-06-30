//Create new proverbio
var startCount = 0;

function newProverbio(){
  //function randomProverbios
  var proverbiosA = [],
			proverbiosB = [];

	for (var i = 0; i < data.length; i++) {
		proverbiosA.push(data[i].part1);
		proverbiosB.push(data[i].part2);
	}

  //random numbers
  var randomNumberA = Math.floor(Math.random() * proverbiosA.length);
  var randomNumberB = Math.floor(Math.random() * proverbiosB.length);

  //avoid an original proverb
  while(randomNumberA === randomNumberB) {
    randomNumberB = Math.floor(Math.random() * proverbiosB.length);
  }

  //associate random number with strings
  var randomSentenceA = proverbiosA[randomNumberA];
  var randomSentenceB = proverbiosB[randomNumberB];
	var finalSentence = randomSentenceA + " " + randomSentenceB;

  one.innerHTML = randomSentenceA;
  two.innerHTML = randomSentenceB;

	var backColorNum = startCount % 7 + 1;
  //colorUpdate(backColorNum);
	startCount++;
};

newProverbio();
