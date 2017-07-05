$('#editTo').click(function(){
    var $div = $('#one, #two'), isEditable = $div.is('.editable');
    $div.prop('contenteditable',!isEditable).toggleClass('editable');

    //Insert Input
    var editable = $(".editable").eq(0);
    var elemLength = editable.value.length;

    editable.selectionStart = elemLen;
    editable.selectionEnd = elemLen;
    editable.focus();
})
