define(["jquery"],function($){
    function center(){
        // 购物中心数据
        $.ajax({
            url: "data/goods1.json",
            success: function(res){
                for(var i = 0 ; i < res.length; i++){
                    $(`<a class="a1" href="">
                            <img src="${res[i].head}" alt="">
                        </a>
                        <a class="a2" href="">
                            <img src="${res[i].center}" alt="">
                        </a>
                        <a class="a3" href="">
                            <img src="${res[i].footer}" alt="">
                        </a>
                        <a class="a4" href="">
                            <img src="${res[i].picture}" alt="">
                        </a>
                    `).appendTo($(".sliderbox .li1"));
                }
            }
        });
        $.ajax({
            url: "data/goods1.json",
            success: function(res){
                for(var i = 0 ; i < res.length; i++){
                    $(`<a class="a1" href="">
                            <img src="${res[i].head}" alt="">
                        </a>
                        <a class="a2" href="">
                            <img src="${res[i].center}" alt="">
                        </a>
                        <a class="a3" href="">
                            <img src="${res[i].footer}" alt="">
                        </a>
                        <a class="a4" href="">
                            <img src="${res[i].picture}" alt="">
                        </a>
                    `).appendTo($(".sliderbox .li2"));
                }
            }
        });

        $.ajax({
            url: "data/goods1.json",
            success: function(res){
                for(var i = 0 ; i < res.length; i++){
                    $(`<a class="a1" href="">
                            <img src="${res[i].head}" alt="">
                        </a>
                        <a class="a2" href="">
                            <img src="${res[i].center}" alt="">
                        </a>
                        <a class="a3" href="">
                            <img src="${res[i].footer}" alt="">
                        </a>
                        <a class="a4" href="">
                            <img src="${res[i].picture}" alt="">
                        </a>
                    `).appendTo($(".sliderbox .li3"));
                }
            }
        });
    }
    return{
        center:center
    }
})
        