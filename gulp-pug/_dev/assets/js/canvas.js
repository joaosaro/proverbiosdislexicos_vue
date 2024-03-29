//Get root and canvas
var root = document.documentElement;
var canvasRoot = document.getElementById("canvas");

function createCanvas(id, color) {
	var canvas = document.getElementById(id);
	var ctx = canvas.getContext("2d");

	//set canvas size variable - quad
	var size = 600;

	//set css variable
	root.style.setProperty('--canvasSize', size + "px");

	//set canvas size function
	canvas.width = size;
	canvas.height = size;

	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// //Logo
	// ctx.font="36px 'Raleway', sans-serif";
	// ctx.fillStyle = '#FFFFFF';
	// ctx.fillText("P/D",20,20);

	//set key points
	var middleStart = .56 * size;
	var middleFinal = .48 * size;

	//Linear Background
	var angle = middleStart - middleFinal;
	var my_gradient=ctx.createLinearGradient(0,0,angle,size);
	my_gradient.addColorStop(0,"rgba(0,0,0,0)");
	my_gradient.addColorStop(1,"rgba(0,0,0,0.5)");
	ctx.fillStyle=my_gradient;
	ctx.fillRect(0,0,size,size);

	//stripes
	var stripeWidth = 5,
			stripeColor = '#fff',
			stripeMoveA = -stripeWidth / 2 - 9,
			stripeMoveB = -stripeWidth / 2;

	ctx.beginPath();
	ctx.moveTo(0, middleStart + stripeMoveA);
	ctx.lineTo(size, middleFinal + stripeMoveA);
	ctx.lineWidth = stripeWidth;
	ctx.strokeStyle = stripeColor;
	ctx.stroke();

	base_image = new Image();
  base_image.src = '/assets/images/logo.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, 20, 20);
  }

	//Proverbio 1
	ctx.font="900 45px 'Raleway', sans-serif";
	ctx.fillStyle = '#FFFFFF';
	ctx.fillText(proverbioPart1,80,200);
};

createCanvas("canvas", color);

function dlCanvas() {

  var dt = canvas.toDataURL('image/png');
  /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
  dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

  /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
  dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=proverbio.png');

  this.href = dt;
};
