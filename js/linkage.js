define(["jquery","jquery-cookie"],function($){
	function linkage(){
		var money = 0;
		var num = 0;
		$.ajax({
	    url: 'data/list.json',
	    success: function(res){
	        //在所有商品信息里面找出，加入购物车的商品信息
	        var cookie_res = eval($.cookie('goods'));
	    	
	        for(var i = 0; i < cookie_res.length; i++){
	            $(`<tr>

				<td class="border_v">
					<img src="${res[cookie_res[i].id].img}" alt="">
				</td>
				<td class="border_v" style="width:200px;">
					<a href="">"${res[cookie_res[i].id].text}"</a>
				</td>
				<td class="border_v">十片</td>
				<td class="border_v border_z">${res[cookie_res[i].id].price}</td>
				<td class="border_v">
					<p class="cart_goods_num">
						<i class="reduce-1565293-5359382" id="${cookie_res[i].id}" money="${res[cookie_res[i].id].price}">-</i>
						<input type="text" value="${cookie_res[i].num}">
						<i class="increase-1565293-5359382" id="${cookie_res[i].id}" money="${res[cookie_res[i].id].price}">+</i>
					</p>
				</td>
				<td class="border_v"></td>
				<td class="border_v"></td>
				<td class="border_v border_r cart_goods_ope tr_operate">
					<i class="cart-remove" id="${cookie_res[i].id}">删除</i>
					<a href="" class="goods-cllect">移入收藏夹</a>
				</td>
			</tr>`).appendTo($(".cart_goods tbody"));
	            money += parseInt(res[cookie_res[i].id].price) * parseInt(cookie_res[i].num);
	            num += parseInt(cookie_res[i].num)
	        }
	        $(".textm strong").html(money)
	        $(".red_number").html(num)
	    	}
		})

		//数量-
		$("tbody").on("click",".reduce-1565293-5359382",function(){
			var cookie_res = eval($.cookie('goods'));
			var rmb = parseInt($(this).attr("money"));
			for(var i = 0; i < cookie_res.length ; i++){
				if(cookie_res[i].id == this.id){
					cookie_res[i].num--
					if(cookie_res[i].num <=0){
						cookie_res[i].num = 1;
					}else{
						num--;
						money -= rmb;
	    				$(".textm strong").html(money);
	    				$(".red_number").html(num)
					}
				$(this).siblings("input").val(cookie_res[i].num)
				}                			
			}
			var cookieStr = JSON.stringify(cookie_res);
	        $.cookie('goods', cookieStr, {expires: 7});
		})
		//数量+
		$("tbody").on("click",".increase-1565293-5359382",function(){
			var rmb = parseInt($(this).attr("money"));
			var cookie_res = eval($.cookie('goods'));
			for(var i = 0; i < cookie_res.length ; i++){
				if(cookie_res[i].id == this.id){
					cookie_res[i].num++;
					num++;
					money += rmb;
					$(".textm strong").html(money);
					$(".red_number").html(num)
				$(this).siblings("input").val(cookie_res[i].num)
				}                			
			}
			var cookieStr = JSON.stringify(cookie_res);
	        $.cookie('goods', cookieStr, {expires: 7});
		})

		//删除
		$("tbody").on("click",".cart-remove",function(){
			var id = this.id;
			$(this).parents("tr").remove();
			num -= parseInt($(this).parents("tr").find("input").val());
			$(".red_number").html(num);
			money -= parseInt($(this).parents("tr").find("input").val()) * parseInt($(this).parents("tr").find(".border_z").text());
			$(".textm strong").html(money);
	    	var cookie_arr = eval($.cookie('goods'));
	    	var newarr = [];
	    	for(var i = 0 ; i < cookie_arr.length ; i++){
	    		if(id != cookie_arr[i].id){
	    			newarr.push(cookie_arr[i]);
	    		}
	    	}
	    	var cookieStr = JSON.stringify(newarr);
	         $.cookie('goods', cookieStr, {expires: 7});
	    	})
	}
	return{
		linkage:linkage
	}
})