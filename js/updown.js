define(["jquery"],function($){
	function updown(){
		 // 购物中心导航
    $('.shopcenter li').mouseover(function(){
        $(this).find('.shopcenterbox').stop().animate({'top':'-50px'});
    });
    $('.shopcenter li').mouseout(function(){
        $(this).find('.shopcenterbox').stop().animate({'top':'0'});
    });
	}
	return{
		updown:updown
	}
})
