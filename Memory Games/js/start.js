function startGame() {
    $('.title').fadeOut(1250, function() {		
		$('.game_menu').css({
            'visibility': 'visible',
            'height': '100%',
            'width': '100%',
            'display': 'table',
			'background-size': '100% 100%'
        });
		
		fadeIn('.game_menu', "visible");                
        fadeIn('.numbers_menu_button', 'visible');
        fadeIn('.letters_menu_button', 'visible');
    });   
}

function startNumbers() {
    $('.game_menu').fadeOut(750, function() {
        fadeOut('.game_table', 'hidden');
        fadeOut('.numbers_menu_button', 'hidden');
        fadeOut('.letters_menu_button', 'hidden');
        
		changeHeight_ModeSelectionMenuItems('.tile_menu_button_numbers');
		changeHeight_ModeSelectionMenuItems('.arrange_menu_button_numbers');
		changeHeight_ModeSelectionMenuItems('.flip_menu_button_numbers');
		
        loadModeMenu("html/mode_selector_menu_numbers.html", ".mode_selector_table_numbers");
    });
}

function startLetters() {
    $('.game_menu').fadeOut(750, function() {
        fadeOut('.game_table', 'hidden');
        fadeOut('.numbers_menu_button', 'hidden');
        fadeOut('.letters_menu_button', 'hidden');
		
		changeHeight_ModeSelectionMenuItems('.tile_menu_button_alphabet');
		changeHeight_ModeSelectionMenuItems('.arrange_menu_button_alphabet');
		changeHeight_ModeSelectionMenuItems('.flip_menu_button_alphabet');
		
        loadModeMenu("html/mode_selector_menu_alphabet.html", ".mode_selector_table_alphabet");
    });
}

function addBackgroundImage(element) {
    $(element).css({
        'background-image': 'url(../images/title_banner_only.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': '100% 100%'
    });
}

function loadModeMenu(htmlFile, table) {
    //$('.mode_selector_menu').load(htmlFile);
    $('.mode_selector_menu').css({ 
		'height': '100%',
		'background-size': '100% 100%'
	});
    $(table).css({ 'height': '85%', 'width': '100%'});
    
    fadeIn('.mode_selector_menu', 'visible');
}

function changeHeight_ModeSelectionMenuItems(element) {
	$(element).css({
		'height': '75px',
		'width': '100%'
	});
}