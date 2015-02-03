function fadeIn(element, visibility) {
    $(element).css({
        'visibility': visibility
    }).hide().fadeIn(750);
}

function fadeOut(element, visibility) {
    $(element).fadeOut(1250);
}