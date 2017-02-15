var $ = require('jquery');
//var todoTemplate = require("../views/partials/todo.hbs");

$(function() {
    $('#logo').on('click', function(event){
        event.preventDefault();
        $('.welcome-overlay').animate({
            opacity: 0
        }, 2200, "linear", function(){
            //todo set cookie.
            $('.welcome-overlay').css('display', 'none');
        });
    });
});