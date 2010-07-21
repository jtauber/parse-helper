function makeParseAttribute(name, features) {
    var $el = jQuery('<div />');
    $el.addClass('parse-attribute');
    $el.addClass(name);
    
    $el.append($('<b>').text(name));
    $el.append(": ");
    
    jQuery(features).each(function(){
        $el.append($('<a>', { href: '#', title: this[0] }).text(this[1]));
        $el.append(" ");
    });
    
    $el.append($('<span>').addClass('help'));
    
    return $el;
}

function getValue(el, selector, defaultValue) {
    var v = $(el).parent().parent().children(selector).children(".selected").text();
    v = v ? v: defaultValue;
    return v;
}

function displayAttributes(el, on, off) {
    $.each(off, function(i, selector) {
        $(el).parent().siblings(selector).children(".selected").removeClass("selected");
        $(el).parent().siblings(selector).hide();
    })
    $.each(on, function(i, selector) {
        $(el).parent().siblings(selector).show();
    })
}

function hookUpHelper(selector1, selector2, createControls, toggleAttributes, generateParseCode) {
    
    createControls(selector1);
    
    $(selector1).find(".parse-attribute a").hover(
        function() {
            $(this).siblings(".help").text($(this).attr("title"));
        }, function() {
            $(this).siblings(".help").text("");
        }
    );
    
    $(selector1).find(".parse-attribute a").click(function() {
        $(this).toggleClass("selected");
        $(this).siblings().not(this).removeClass("selected");
        
        toggleAttributes(this);
        $(selector2).val(generateParseCode(this));
        
        return false;
    });
}
