jQuery(function ($) {

    var
        selects = $('#select-container select'),
        results = $('#results-container > div');

    selects.change(function () {
        var values = '';
        selects.each(function () {
            values += '.' + $(this).val();
        });
        results.filter(values).show().siblings().hide();
    });

});