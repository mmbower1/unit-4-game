//create onClick event for each character
$('.character').on('click', function() {
    alert($(this).attr("data"));
    $('#yourCharacterRow').append($(this))
})