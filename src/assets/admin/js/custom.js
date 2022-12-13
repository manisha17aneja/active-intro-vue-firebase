import $ from 'jquery'
// import jQuery from 'jquery'

$("#toggle-check").click(function() {
    if($(this).is(":checked")) {
    $(".left-sidebar").addClass('active');
    alert('hello')
        } else {
    $(".left-sidebar").removeClass('active');
    }
});

$(".sidebar-item").click(function(){
    $(this).toggleClass("active");
});