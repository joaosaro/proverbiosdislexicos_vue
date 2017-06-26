function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var data = JSON.parse(Get('http://proverbios.joaosaro.com/api/proverbios'));

//CANVAS
function createCanvas(){
	//Get root and canvas
	var root = document.documentElement;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	//set canvas size variable - quad
	var size = 500;

	//set css variable
	root.style.setProperty('--canvasSize', size + "px");

	//set canvas size function
	canvas.width = size;
	canvas.height = size;

	//set key points
	var middleStart = 275;
	var middleFinal = 225;

	//Bottom background
	ctx.fillStyle = 'rgba(0,0,0,.4)';
	ctx.beginPath();
	ctx.moveTo(0, middleStart);
	ctx.lineTo(size, middleFinal);
	ctx.lineTo(size, size);
	ctx.lineTo(0, size);
	ctx.lineTo(0, middleStart);
	ctx.closePath();
	ctx.fill();

	//stripes
	var stripeWidth = 6,
			stripeColor = '#fff',
			stripeMoveA = -stripeWidth / 2 - 9,
			stripeMoveB = -stripeWidth / 2;

	ctx.beginPath();
	ctx.moveTo(0, middleStart + stripeMoveA);
	ctx.lineTo(size, middleFinal + stripeMoveA);
	ctx.lineWidth = stripeWidth;
	ctx.strokeStyle = stripeColor;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(0, middleStart + stripeMoveB);
	ctx.lineTo(size, middleFinal + stripeMoveB);
	ctx.lineWidth = stripeWidth;
	ctx.strokeStyle = stripeColor;
	ctx.stroke();
};

//Lighten or Darken Colors
//function from: https://css-tricks.com/snippets/javascript/lighten-darken-color/
function LightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);

}

var buttonRefresh = document.getElementsByClassName('refresh')[0];

//changeColor
function colorUpdate(nr) {
	var allItems =  document.getElementsByClassName('color-item');
	var colorButton =  document.getElementsByClassName('color-item')[nr-1];
	var getColor = colorButton.value;
	var backgroundDoc = document.body;

	canvas.style.backgroundColor = getColor;
	buttonRefresh.style.backgroundColor = getColor;
	[].forEach.call(allItems, function(el) {
	 el.classList.remove('active');
	});
	colorButton.className += ' active';
	backgroundDoc.style.background = LightenDarkenColor(getColor, 75);
}

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

  //insert random proverb into html
  var one = document.getElementById("one");
  var two = document.getElementById("two");

  one.innerHTML = randomSentenceA;
  two.innerHTML = randomSentenceB;

	var backColorNum = startCount % 7 + 1;
  //colorUpdate(backColorNum);
	startCount++;
}

newProverbio();
