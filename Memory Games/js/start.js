function startGame() {
    $('.title').fadeOut(1250, function() {
        addBackgroundImage('.game_menu');
        $('.game_menu').css({
            'visibility': 'visible',
            'height': '100%',
            'width': '100%',
            'display': 'table'
        }).hide().fadeIn(750); 
        
        
        fadeIn('.numbers_menu_button', 'visible');
        fadeIn('.letters_menu_button', 'visible');
    });   
}

function startNumbers() {
    $('.game_menu').fadeOut(750, function() {
        fadeOut('.game_table', 'hidden');
        fadeOut('.numbers_menu_button', 'hidden');
        fadeOut('.letters_menu_button', 'hidden');
        
        loadModeMenu("/html/mode_selector_menu_numbers.html");
    });
}

function startLetters() {
    $('.game_menu').fadeOut(750, function() {
        fadeOut('.game_table', 'hidden');
        fadeOut('.numbers_menu_button', 'hidden');
        fadeOut('.letters_menu_button', 'hidden');
    
        loadModeMenu("/html/mode_selector_menu_alphabet.html");
    });
}

function addBackgroundImage(element) {
    $(element).css({
        'background-image': 'url(/images/title_banner_only.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'contain'
    });
}

function loadModeMenu(htmlFile) {
    $('.mode_selector_menu').load(htmlFile);
    $('.mode_selector_menu').css({ 'height': '100%'});
    $('.mode_selector_table').css({ 'height': '85%'});
    
    addBackgroundImage('.mode_selector_menu');
    fadeIn('.mode_selector_menu', 'visible');
}