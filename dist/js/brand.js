define(["jquery"],function($){
    function brand(){
         $.ajax({
            url: "data/qijian.json",
            success: function(res){
                for(var i = 0 ; i < res.length; i++){
                        $(`<li class="v5_li">
                                <a href="">
                                    <img src="${res[i].picture}" alt="">
                                </a>
                                <div class="v5_d2">

                                </div>
                            </li>
                        `).appendTo($(".v5_u1"));
                    for(var j = 0 ;j < res[i].text.length ; j++){
                        var node = $(`
                            <nav class="v5_n1">
                                <img src="${res[i].text[j].head}"alt="">
                                <p class="v5_p1">
                                    <span></span>
                                </p>
                                <p class="v5_p2">${res[i].text[j].center}</p>
                                <p class="v5_p3">${res[i].text[j].footer}</p>
                            </nav>
                        `);
                        node.appendTo($(".v5_u1 .v5_d2").eq(i));
                    }
                }
            }
        });


         $('.v5_u1').on("mouseenter",".v5_li",function(){
            $(this).find('.v5_n1').stop().animate({'top':'0'})
         })

        $('.v5_u1').on("mouseleave",".v5_li",function(){
            $(this).find('.v5_n1').stop().animate({'top':'100'})
         })

    }
    return{
        brand:brand
    }
})
            