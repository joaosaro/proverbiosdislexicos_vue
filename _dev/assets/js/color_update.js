function colorUpdate(nr) {
	var allItems =  document.getElementsByClassName('color-item');
	var colorButton =  document.getElementsByClassName('color-item')[nr-1];
	var getColor = colorButton.value;
	var backgroundDoc = document.body;

	svgcanvas.style.fill = getColor;
	color = getColor;
	createCanvas("canvas", color);

	[].forEach.call(allItems, function(el) {
	 el.classList.remove('active');
	});
	colorButton.className += ' active';
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function tooglePalette() {
		var toolbar = document.getElementsByClassName('toolbar')[0];

		if (hasClass(toolbar, 'is-open')){
			toolbar.classList.remove('is-open');
		} else {
			toolbar.className += ' is-open';
		}
}
