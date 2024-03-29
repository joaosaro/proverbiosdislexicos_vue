//Push Data
var proverbiosA = [],
    proverbiosB = [];

for (var i = 0; i < data.length; i++) {
  proverbiosA.push(data[i].part1);
  proverbiosB.push(data[i].part2);
}

//Create new proverbio
var startCount = 0;
var proverbioPart1,
    proverbioPart2,
    randomNumberA,
    randomNumberB;

function newProverbio(newProverbioA, newProverbioB){
  //random numbers
  if(newProverbioA && newProverbioB) {
    randomNumberA = Math.floor(Math.random() * proverbiosA.length);
    randomNumberB = Math.floor(Math.random() * proverbiosB.length);
  } else if (newProverbioA) {
    randomNumberA = Math.floor(Math.random() * proverbiosA.length);
  } else if (newProverbioB) {
    randomNumberB = Math.floor(Math.random() * proverbiosB.length);
  }

  //avoid an original proverb
  while(randomNumberA === randomNumberB) {
    randomNumberB = Math.floor(Math.random() * proverbiosB.length);
  }

  //associate random number with strings
  var randomSentenceA = proverbiosA[randomNumberA];
  var randomSentenceB = proverbiosB[randomNumberB];
	var finalSentence = randomSentenceA + " " + randomSentenceB;

  //minimum lenght to insert break tag
  var minLenght = 19;

  if (randomSentenceA.length > minLenght) {
    one.innerHTML = breakSentence(randomSentenceA);
  } else {
    one.innerHTML = randomSentenceA;
  }

  if (randomSentenceB.length > minLenght) {
    two.innerHTML = breakSentence(randomSentenceB);
  } else {
    two.innerHTML = randomSentenceB;
  }

  //temporary to canvas text
  proverbioPart1 = randomSentenceA;
  proverbioPart2 = randomSentenceB;

	var backColorNum = startCount % 7 + 1;
	startCount++;
};

newProverbio(true, true);
