/**
 * Created by lea on 2017/11/3.
 */
(function(win,$){
    win.onload = function(){
        setTimeout(function(){
            $(".page-loader").fadeOut();
        },1000);
    };
})(window,jQuery);