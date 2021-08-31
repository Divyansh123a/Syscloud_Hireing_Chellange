$('input').focusin(function(){
    $(this).css("background-color" , "green")});
$('input').focusout(function()
{
    $(this).css("background-color" , "grey");
});
$('#fname').change(function(){
    $('form').append('<p>You have changed the First name</p>');
});
$('#lname').change(function(){
    $('form').append('<p>You have changed the Last name</p>');
});
