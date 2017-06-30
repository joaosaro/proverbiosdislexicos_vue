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
