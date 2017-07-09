function downloadCanvas(link, canvasId, filename) {
    link.href = canvasId.toDataURL();
    link.download = filename;
}

$('#download-image').on('click', function() {
    downloadCanvas(this, canvasRoot, 'proverbios.png');
});
