define(["jquery"],function($){
    function lunbo(){
        var aBtns = $(".v4").find(".main").find(".ul2").find("li");
        var oUl = $(".v4").find(".ul1");
        var aLis = oUl.find("li");
        var timer = null;
        var iNow = 0;//代表当前显示的图片的下标
        //划过
        aBtns.mouseenter(function(){
            iNow = $(this).index();
            tab();
        });

        //点击左按钮
        $(".nav_left").click(function(){
            iNow--;
            tab();
        });

        //点击右按钮
         $(".nav_right").click(function(){
            iNow++;
            tab();
        });


        //轮播函数
        function tab(){
            aBtns.attr("class","");
            aBtns.eq(iNow).attr("class","active");
            oUl.stop().animate({left: -1440 * iNow},500,function(){
                if(iNow == aLis.size() - 1){
                    iNow = 0;
                    oUl.css("left","0");
                }
                // if(iNow <= 0){
                //     iNow = aLis.size() - 1;
                //     oUl.css("left","8640")
                // }
            });
        }

        function timerInner(){
            iNow++;
            tab();
            if(iNow == aLis.size() -1){
                    aBtns.eq(0).attr("class","active");
             }
        }
           
           //移入停止轮播
            timer = setInterval(timerInner,4000);
            $("#v4").hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(timerInner,4000)
            });

    }
    return{
        lunbo:lunbo
    }
})
           