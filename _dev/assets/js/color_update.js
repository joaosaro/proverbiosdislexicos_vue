var buttonRefresh = document.getElementsByClassName('refresh')[0];

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
