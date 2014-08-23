//include this code in head enclosed by script

google.load("jquery", "1.10.4");
google.load("webfont", "1.5.2");
google.setOnLoadCallback(function() {
    //for 1st font chooser
    $('#selectH1').googleFontPicker({
        defaultFont: 'Allan',
        callbackFunc: function(fontFamily) {
            $('#selectH1sample').css('fontFamily', fontFamily);
        }
    });
    $('.plus').click(function() {
        var target = $(this).attr('rel');
        var currentSize = parseInt($("#" + target).css('fontSize'));
        $("#" + target).css('fontSize', (currentSize + 1) + 'px');
    });
    $('.minus').click(function() {
        var target = $(this).attr('rel');
        var currentSize = parseInt($("#" + target).css('fontSize'));
        $("#" + target).css('fontSize', (currentSize - 1) + 'px');
    });

    //for 2nd font chooser
    $('#selectH11').googleFontPicker({
        defaultFont: 'Allan',
        callbackFunc: function(fontFamily) {
            $('#selectH2sample').css('fontFamily', fontFamily);
        }
    });

    //Common for all font choosers
    WebFont.load({
        google: {
            families: ['Tangerine', 'Cantarell', 'Droid Sans', 'Allan', 'Allerta', 'Allerta Stencil', 'Anonymous Pro', 'Arimo', 'Arvo', 'Bentham', 'Buda', 'Cabin', 'Calligraffitti', 'Cantarell', 'Cardo', 'Cherry Cream Soda', 'Chewy', 'Coda', 'Coming Soon', 'Copse', 'Corben', 'Cousine', 'Covered By Your Grace', 'Crafty Girls', 'Crimson Text', 'Crushed', 'Cuprum', 'Droid Sans', 'Droid Sans Mono', 'Droid Serif', 'Fontdiner Swanky', 'GFS Didot', 'GFS Neohellenic', 'Geo', 'Gruppo', 'Hanuman', 'Homemade Apple', 'IM Fell DW Pica', 'IM Fell DW Pica SC', 'IM Fell Double Pica', 'IM Fell Double Pica SC', 'IM Fell English', 'IM Fell English SC', 'IM Fell French Canon', 'IM Fell French Canon SC', 'IM Fell Great Primer', 'IM Fell Great Primer SC', 'Inconsolata', 'Irish Growler', 'Josefin Sans', 'Josefin Slab', 'Just Another Hand', 'Just Me Again Down Here', 'Kenia', 'Kranky', 'Kristi', 'Lato', 'Lekton', 'Lobster', 'Luckiest Guy', 'Merriweather', 'Molengo', 'Mountains of Christmas', 'Neucha', 'Neuton', 'Nobile', 'OFL Sorts Mill Goudy TT', 'Old Standard TT', 'Orbitron', 'PT Sans', 'PT Sans Caption', 'PT Sans Narrow', 'Permanent Marker', 'Philosopher', 'Puritan', 'Raleway', 'Reenie Beanie', 'Rock Salt', 'Schoolbell', 'Slackey', 'Sniglet', 'Sunshiney', 'Syncopate', 'Tangerine', 'Tinos', 'Ubuntu', 'UnifrakturCook', 'UnifrakturMaguntia', 'Unkempt', 'Vibur', 'Vollkorn', 'Walter Turncoat', 'Yanone Kaffeesatz']
        }
    });
});
