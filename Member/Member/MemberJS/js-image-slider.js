var $first = $('li1:first', 'ul1'),
      $last = $('li1:last', 'ul1');

//$("#next").click(function () {
//    var $next,
//        $selected = $(".selected");
//    // get the selected item
//    // If next li is empty , get the first
//    $next = $selected.next('li').length ? $selected.next('li') : $first;
//    $selected.removeClass("selected").fadeOut('fast');
//    $next.addClass('selected').fadeIn('fast');
//});

//$("#prev").click(function () {
//    var $prev,
//        $selected = $(".selected");
//    // get the selected item
//    // If prev li is empty , get the last
//    $prev = $selected.prev('li').length ? $selected.prev('li') : $last;
//    $selected.removeClass("selected").fadeOut('fast');
//    $prev.addClass('selected').fadeIn('fast');
//});

var time = 3000;
var tid = setTimeout(timer, time);
function timer() {
    var $next,
    $selected = $(".selected");
    // get the selected item
    // If next li is empty , get the first
    console.log($selected.next('li1').length);
    $next = $selected.next('li1').length ? $selected.next('li1') : $first;
    $selected.removeClass("selected").fadeOut('fast');
    $next.addClass('selected').fadeIn('fast');
    tid = setTimeout(timer, time); // repeat myself
}
function abortTimer() { // to be called when you want to stop the timer
    clearTimeout(tid);
}

