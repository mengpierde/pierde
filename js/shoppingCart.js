define(["jquery","jquery-cookie"],function($){
	function shoppingCart(){
	    sc_car();
	    sc_msg();
		$.ajax({ 
			url:"data/list.json",
			success:function(res){
				for(var i = 0 ; i < res.length ; i++){
					$(`							
						<ul>
							<li class="v30pi_img">
								<a href="particulars.html">
									<img src="${res[i].img}" alt="">
								</a>
							</li>
							<li class="blank"><a href=""></a></li>
							<li class="w500">${res[i].head}<a href=""></a></li>
							<li class="w500">${res[i].text}<a href=""></a></li>
							<li class="price">${res[i].price}</a></li>
	                        <div class = 'sc'>
	                            <div id = "${res[i].id}" class = 'sc_btn'>加入购物车</div>
	                        </div>
						</ul>
						<p class="flashship"></p>`)
					.appendTo($(".v30p_inbox").eq(i))
				}
			}
		});

	    //加入购物车
	    $(".v30p_inbox").on("click",".sc_btn",function(){
	        sc_msg()
	        var id = this.id;
	        var first = $.cookie("goods") == null ? true : false;
	        if(first){
	            $.cookie('goods',`[{id:${id},num:1}]`,{expires:30})
	        }else{
	            var str = $.cookie("goods");
	            var res = eval(str);
	            var same = false;
	            for(var i = 0; i < res.length; i++){
	                if(res[i].id == id){
	                    res[i].num++
	                    var cookieStr = JSON.stringify(res);
	                    $.cookie('goods', cookieStr, {expires: 7});
	                    same = true;
	                    break;
	                }
	            }

	            if(!same){
	                var obj = {id: id,num: 1};
	                res.push(obj);
	                var cookieStr = JSON.stringify(res);
	                $.cookie('goods', cookieStr, {expires: 7});
	            }   
	        }
	        sc_car();
	    })
	    // 购物车数字
	    function sc_car(){
	        var str = $.cookie("goods");
	        if(str){
	            var arr = eval(str);
	            var sum = 0;
	            for(var i = 0; i < arr.length; i++){
	                sum += arr[i].num;
	            }
	            $(".pic_spn").html(sum);
	        }
	    }
	    

	    // //购物车
	    // $(".p1").mouseenter(function(){
	    //     $(".shopping").css("display","block");
	    //     sc_msg();
	    // });
	    //  $(".p1").mouseleave(function(){
	    //     $(".shopping").css("display",'none')
	    // });


	    function sc_msg(){
	        $.ajax({
	            url: 'data/list.json',
	            success: function(res){
	                //在所有商品信息里面找出，加入购物车的商品信息
	                var cookie_res = eval($.cookie('goods'));
	                $(".spg_ul").html("");
	                for(var i = 0; i < cookie_res.length; i++){
	                    $(`<li>
	                        <div class="v30hmc_box clear">
	                            <div class = "sc_goodsPic">
	                                <img src="${res[cookie_res[i].id].img}" alt="">
	                            </div>
	                            <ul class="v30hmcb_l">
	                                <li class="li1">${res[cookie_res[i].id].head}</li>
	                                <li class="li2">${res[cookie_res[i].id].price}
	                                    <span>X${cookie_res[i].num}</span>
	                                </li>
	                            </ul> 
	                        </div>                          
	                    </li>`).appendTo($(".spg_ul"));
	                }
	            }
	        })
	    }            
	}
	return{
		shoppingCart:shoppingCart
	}
})