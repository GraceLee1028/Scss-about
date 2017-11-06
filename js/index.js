/**
 * Created by lea on 2017/11/3.
 */
(function(win,$){
    win.onload = function(){
        setTimeout(function(){
            $(".page-loader").fadeOut();
        },1000);
    };
    var indexObj = {
        init: function(){
            indexObj.navToggle();
        },
        navToggle: function(){
            console.log("---1");
            $(".navbar-toggle").on("click",function(){
                var target = $(this).data("target");
                $(target).toggleClass("show");
            });
        },
        navScroll:function(){
            $("a","#nav-scroll").on("click",function(){

            });
        }
    };
    $(indexObj.init);
})(window,jQuery);