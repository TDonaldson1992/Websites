function startFlip_Numbers() {
    
}

function startArrange_Numbers() {
    
}

function startTiles_Numbers() {
    $('.mode_selector_menu').fadeOut(750, function() {
        fadeOut('.mode_selector_table', 'hidden');
        
        $('.game_tiles_numbers').load("/html/tiles_numbers.html");
        $('.game_tiles_numbers').css({ 
            'height': '100%',
        });
     
        fadeIn('.game_tiles_numbers', 'visible');
    });
}