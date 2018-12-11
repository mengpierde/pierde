define(['jquery'], function($){
    function equal(){
    //左右动画
        $('.store_top .store_top1').mouseover(function(){
            $(this).find('.store_toptxt').stop().animate({'left':'-20px'});
            $(this).find('.store_toppic').stop().animate({'left':'20px'});
        });
        $('.store_top .store_top1').mouseout(function(){
            $(this).find('.store_toptxt').stop().animate({'left':'0'});
            $(this).find('.store_toppic').stop().animate({'left':'0'});
        });

        $('.store_top .store_top2').mouseover(function(){
            $(this).find('.store_toptxt').stop().animate({'left':'-20px'});
            $(this).find('.store_toppic').stop().animate({'left':'20px'});
        });
        $('.store_top .store_top2').mouseout(function(){
            $(this).find('.store_toptxt').stop().animate({'left':'0'});
            $(this).find('.store_toppic').stop().animate({'left':'0'});
        });

        $('.store_top .store_top3').mouseover(function(){
            $(this).find('.store_toptxt').stop().animate({'left':'-20px'});
            $(this).find('.store_toppic').stop().animate({'left':'20px'});
        });
        $('.store_top .store_top3').mouseout(function(){
            $(this).find('.store_toptxt').stop().animate({'left':'0'});
            $(this).find('.store_toppic').stop().animate({'left':'0'});
        });
        
        $('.store_bottom .store_bottom1').mouseover(function(){
            $(this).find('.store_bottomtxt').stop().animate({'left':'-20px'});
            $(this).find('.store_bottompic').stop().animate({'left':'20px'});
        });
        $('.store_bottom .store_bottom1').mouseout(function(){
            $(this).find('.store_bottomtxt').stop().animate({'left':'0'});
            $(this).find('.store_bottompic').stop().animate({'left':'0'});
        });
    }
    return{
        equal:equal
    }
})

