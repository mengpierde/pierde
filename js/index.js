define(['jquery'], function($){
    function index(){
         //我的第五大道
        $(".v1_my").mouseenter(function(){
            $("#nav1").css("display",'block')
        });
        $(".v1_my").mouseenter(function(){
            $(".v1_my").css("backgroundColor",'#fff')
        });
        $(".v1_my").mouseleave(function(){
            $("#nav1").css("display",'none')
            $(".v1_my").css("backgroundColor",'#f2f2f2')
        })

        //手机app
       
        $(".app").mouseenter(function(){
            $(".app").css("backgroundColor","#fff");
            $(".dl1").css("display","block")
        });
         $(".app").mouseleave(function(){
            $(".dl1").css("display",'none')
            $(".app").css("backgroundColor",'#f2f2f2')
        });

                 //购物车
        $(".p1").mouseenter(function(){
            $(".shopping").css("display","block")
        });
         $(".p1").mouseleave(function(){
            $(".shopping").css("display",'none')
        });

         // 定位到店
         
         $(".location").mouseenter(function(){
            $('.location').css("color,#fff");
            $('.location #i1').css("background","url(../images/share02.png) no-repeat -366px -254px");
         });
         $(".location").mouseleave(function(){
            $("location").css("color","#c8a985");
            $('.location #i1').css("background","url(images/share02.png) no-repeat -58px -171px");
         });        
    }
return {
    index:index
}
})
