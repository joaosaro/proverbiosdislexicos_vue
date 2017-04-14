//CANVAS
(function createCanvas(){
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
})();

const buttonRefresh = document.getElementsByClassName('refresh')[0];

//changeColor
function colorUpdate(nr) {
	const allItems =  document.getElementsByClassName('color-item');
	const colorButton =  document.getElementsByClassName('color-item')[nr-1];
	const getColor = colorButton.value;
	canvas.style.backgroundColor = getColor;
	buttonRefresh.style.backgroundColor = getColor;
	[].forEach.call(allItems, function(el) {
	 el.classList.remove('active');
	});
	colorButton.className += ' active';
}

let startCount = 0;
function newProverbio(){
  //function randomProverbios
  const proverbiosA = [
		"Em Abril,",
		"Grão a grão",
		"Ladrão que rouba ladrão",
		"Perdido por cem",
		"Tantas vezes o cântaro vai à fonte que",
		"Em casa de ferreiro",
		"Quem tem pressa",
		"Quem não tem cão",
		"Quem tudo quer",
		"Gato escaldado",
		"Entre marido e mulher",
		"Quem não chora",
		"Cão que ladra",
		"Vozes de burro",
		"Onde se come",
		"Amigo verdadeiro",
		"Quem tem amores",
		"Em tempo de guerra",
		"Cada macaco",
		"Quem ri por último",
		"Um homem prevenido",
		"Em terra de cego",
		"Quem tem pressa",
		"Antes tarde",
		"Em boca fechada",
		"Quem semeia ventos",
		"Não adianta chorar",
		"Na cama que farás",
		"Quem desdenha",
		"Quem espera",
		"Água mole em pedra dura",
		"Não há bem que sempre dure",
		"A união",
		"Dizei-me com quem andas",
		"Quem tem boca",
		"Melhor um pardal na mão",
		"Quem conta um conto",
		"A vingança"
  ],

  proverbiosB = [
		"águas mil",
		"enche a galinha o papo",
		"tem cem anos de perdão.",
		"perdido por mil",
		"acaba por lá ficar",
		"espeto de pau",
		"vai andando",
		"caça com gato",
		"tudo perde",
		"tem medo de água fria",
		"não se mete a colher",
		"não mama",
		"não morde",
		"não chegam ao céu",
		"ficam migalhas",
		"vale mais do que dinheiro",
		"tem dores",
		"todo o buraco é trincheira",
		"no seu galho",
		"ri melhor",
		"vale por dois",
		"quem tem um olho é rei",
		"come cru",
		"do que nunca",
		"não entra mosca",
		"colhe tempestades",
		"sobre o leite derramado",
		"nela te deitarás",
		"quer comprar",
		"sempre alcança",
		"tanto bate até que fura",
		"nem mal que nunca se acabe",
		"faz a força",
		"e eu te direi quem és",
		"vai a Roma",
		"do que um pombo no telhado",
		"acrescenta um ponto",
		"é um prato que se serve frio"
  ];

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
  colorUpdate(backColorNum);
	startCount++;
}

newProverbio();
