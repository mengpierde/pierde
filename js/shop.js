define(["jquery"],function($){
    function shop(){
         // 品牌店铺
             $.ajax({
                url: "data/pinpai.json",
                success: function(res){
                    for(var j = 0; j < 3;j++){
                        for(var i = 0 ; i < res.length; i++){
                            $(`<div class="v5_d5">
                                <img src="${res[i].picture}" alt="">
                                <div class="middle">
                                    
                                </div>
                                <div class="topline"></div>
                                <div class="rightline"></div>
                                <div class="bottomline"></div>
                                <div class="leftline"></div>
                            </div>
                            `).appendTo($(".v5_d4 .v5_li"));
                        
                            var node = $(`
                        <a href="" class="v5_a1">
                           <p>${res[i].text[0].footer}</p>
                           <div class="v5_d5_1">
                               <span></span>
                           </div>
                           </a>
                        `);
                        node.appendTo($(`.v5_d4 .v5_li:eq(${j}) .v5_d5:eq(${i}) .middle`));
                    
                        }
                    }
                }
            });
             // 点击轮播
            var liLength =1210;
            var isYes = true;
            $('.v5_u2').css('width',$('.v5_u2 .v5_li').length* 1210);
            $('.v5_d3_1 .v5_a_left').click(function(){
                if(parseInt($('.v5_u2').css('left')) >= 0){
                    return false;
                }

                if(isYes){
                    isYes = false;
                    $('.v5_u2').animate({'left':parseInt($('.v5_u2').css('left'))+ 1210 },function(){
                        isYes = true;
                    }); 
                }
            });
                

             
            
            $('.v5_d3_1 .v5_a_right').click(function(){
                if(parseInt($('.v5_u2').css('left')) <= ($('.v5_u2 .v5_li').length-1) *- 1210 ){
                    return false;
                }
                if(isYes){
                    isYes = false;
                    $('.v5_u2').animate({'left':parseInt($('.v5_u2').css('left'))- 1210 },function(){
                        isYes = true;
                    });
                }                
            });


            // 移入动画
            

             $('.v5_li').on("mouseenter",".v5_d5",function(){
                $(this).find('.middle').stop().animate({'opacity':'1'});
                $(this).find('.topline').stop().animate({'width':'166px'},100);
                $(this).find('.rightline').stop().animate({'height':'85px'},100);
                $(this).find('.bottomline').stop().animate({'width':'166px'},100);
                $(this).find('.leftline').stop().animate({'height':'85px'},100);
             })

             $('.v5_li').on("mouseleave",".v5_d5",function(){
                $(this).find('.middle').stop().animate({'opacity':'0'});
                $(this).find('.topline').stop().animate({'width':'0'},100);
                $(this).find('.rightline').stop().animate({'height':'0'},100);
                $(this).find('.bottomline').stop().animate({'width':'0'},100);
                $(this).find('.leftline').stop().animate({'height':'0'},100);
             })            
    }
    return{
        shop:shop
    }
})        
       