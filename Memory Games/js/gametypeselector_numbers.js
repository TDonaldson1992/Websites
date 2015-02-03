function startFlip_Numbers() {
    
}

function startArrange_Numbers() {
    
}

function startTiles_Numbers() {
    $('.mode_selector_menu').fadeOut(750, function() {
        fadeOut('.mode_selector_table', 'hidden');
        fadeOut('.flip_menu_button', 'hidden');
        fadeOut('.arrange_menu_button', 'hidden');
        fadeOut('.tile_menu_button', 'hidden');
        
        $('.game').load("/html/tiles_numbers.html");
        $('.game').css({ 
            'height': '100%',
        });
     
        fadeIn('.game', 'visible');
    });
}