/**
 * Created by lea on 2017/11/8.
 */
(function(win,doc){
    var wowObj = {
        init:function(){
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init();
        }
    };
    $(wowObj.init);
})(window,document);
