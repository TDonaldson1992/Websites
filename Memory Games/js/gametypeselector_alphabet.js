function startFlip_Alphabet() {
    
}

function startArrange_Alphabet() {
    
}

function startTiles_Alphabet() {
    $('.mode_selector_menu').fadeOut(750, function() {
        fadeOut('.mode_selector_table', 'hidden');
        
        $('.game_tiles_alphabet').load("/html/tiles_alphabet.html");
        $('.game_tiles_alphabet').css({ 
            'height': '100%',
        });
     
        fadeIn('.game_tiles_alphabet', 'visible');
    });
}