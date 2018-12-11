define(['jquery'], function($){
    function cela(){
         $.ajax({
                url: "data/index.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd1"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".showbag").eq(i));
                        }
                    }
                }
            });

            //箱包
             $.ajax({
                url: "data/xiangbao.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd2"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd2 .showbag").eq(i));
                        }
                    }
                }
            });

            //美妆
             $.ajax({
                url: "data/meizhuang.json",
                success: function(res){
                    // alert(res[0].text[0].fooder.length)
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag">

                                </div>
                            </div>
                            `).appendTo($(".v3_dd3"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            var node = $(`<div class="showbag_1">
                                    <h3>
                                        <a href="">${res[i].text[j].head}</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            
                                        </li>
                                    </ul>
                                </div>
                            `);
                            node.appendTo($(".v3_dd3 .showbag").eq(i));
                            for(var k = 0 ; k < res[i].text[j].fooder.length; k++){
                                $(`<a href="">${res[i].text[j].fooder[k]}</a>`)
                                .appendTo(node.find("li"));
                            }
                        }
                    }
                }
            });

             //服饰
             $.ajax({
                url: "data/fushi.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd4"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd4 .showbag").eq(i));
                        }
                    }
                }
            });

             //腕表
             $.ajax({
                url: "data/wanbiao.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd5"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd5 .showbag").eq(i));
                        }
                    }
                }
            });

             //配饰
             $.ajax({
                url: "data/peishi.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd6"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd6 .showbag").eq(i));
                        }
                    }
                }
            });

             //鞋靴
             $.ajax({
                url: "data/xiexue.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd7"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd7 .showbag").eq(i));
                        }
                    }
                }
            });

             //母婴
             $.ajax({
                url: "data/muying.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd8"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd8 .showbag").eq(i));
                        }
                    }
                }
            });

             //美酒
             $.ajax({
                url: "data/meijiu.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd9"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd9 .showbag").eq(i));
                        }
                    }
                }
            });

             //美食
             $.ajax({
                url: "data/meishi.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd10"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd10 .showbag").eq(i));
                        }
                    }
                }
            });

             //家居
             $.ajax({
                url: "data/jiaju.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd11"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd11 .showbag").eq(i));
                        }
                    }
                }
            });
             
             //电子
             $.ajax({
                url: "data/dianzi.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd12"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd12 .showbag").eq(i));
                        }
                    }
                }
            });
             
             //办公
             $.ajax({
                url: "data/bangong.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd13"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd13 .showbag").eq(i));
                        }
                    }
                }
            });
             
             //礼品
             $.ajax({
                url: "data/lipin.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd14"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd14 .showbag").eq(i));
                        }
                    }
                }
            });

             //海外馆
             $.ajax({
                url: "data/haiwaiguan.json",
                success: function(res){
                    for(var i = 0 ; i < res.length; i++){
                            $(`<div class="showshop">
                                <h2>
                                    <a href="">${res[i].title}</a>
                                </h2>
                                <div class="showbag"></div>
                            </div>
                            `).appendTo($(".v3_dd15"));
                        for(var j = 0 ;j < res[i].text.length ; j++){
                            $(`<a href="">${res[i].text[j]}</a>
                            `).appendTo($(".v3_dd15 .showbag").eq(i));
                        }
                    }
                }
            });

            //侧拉拦动画
            $(".superA").mouseenter(function(){
                $(".v3_u3").css("display","block")
            });
            $(".superA").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });
            $(".v3_u3").mouseenter(function(){
                $(".v3_u3").css("display","block")
            })
            $(".v3_u3").mouseleave(function(){
                $(".v3_u3").css("display","none")
            })
            //ul1
            $(".v3_d1").mouseenter(function(){
                $(".v3_d1 i").css("display","block")
            })
            $(".v3_d1").mouseleave(function(){
                $(".v3_d1 i").css("display","none")
            })

            $(".li1").mouseenter(function(){
                $(".v3_nav1").css("display","block")
            })
            $(".li1").mouseleave(function(){
                $(".v3_nav1").css("display","none")
                 $(".v3_d1 i").css("display","none")

            })
            $(".v3_nav1").mouseleave(function(){
                $(".v3_u3").css("display","none")
            })

            //箱包
            $(".v3_d2").mouseenter(function(){
                $(".v3_d2 i").css("display","block")
            })
            $(".v3_d2").mouseleave(function(){
                $(".v3_d2 i").css("display","none")
            })

            $(".li2").mouseenter(function(){
                $(".v3_nav2").css("display","block")
            })
            $(".li2").mouseleave(function(){
                $(".v3_nav2").css("display","none")
                 $(".v3_d2 i").css("display","none")
            })
            $(".v3_nav2").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //美妆
             $(".v3_d3").mouseenter(function(){
                $(".v3_d3 i").css("display","block")
            })
            $(".v3_d3").mouseleave(function(){
                $(".v3_d3 i").css("display","none")
            })

            $(".li3").mouseenter(function(){
                $(".v3_nav3").css("display","block")
            })
            $(".li3").mouseleave(function(){
                $(".v3_nav3").css("display","none")
                 $(".v3_d3 i").css("display","none")
            })
            $(".v3_nav3").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //服饰
            $(".v3_d4").mouseenter(function(){
                $(".v3_d4 i").css("display","block")
            })
            $(".v3_d4").mouseleave(function(){
                $(".v3_d4 i").css("display","none")
            })

            $(".li4").mouseenter(function(){
                $(".v3_nav4").css("display","block")
            })
            $(".li4").mouseleave(function(){
                $(".v3_nav4").css("display","none")
                 $(".v3_d4 i").css("display","none")
            })
            $(".v3_nav4").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //腕表
            $(".v3_d5").mouseenter(function(){
                $(".v3_d5 i").css("display","block")
            })
            $(".v3_d5").mouseleave(function(){
                $(".v3_d5 i").css("display","none")
            })

            $(".li5").mouseenter(function(){
                $(".v3_nav5").css("display","block")
            })
            $(".li5").mouseleave(function(){
                $(".v3_nav5").css("display","none")
                 $(".v3_d5 i").css("display","none")
            })
            $(".v3_nav5").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //配饰
             $(".v3_d6").mouseenter(function(){
                $(".v3_d6 i").css("display","block")
            })
            $(".v3_d6").mouseleave(function(){
                $(".v3_d6 i").css("display","none")
            })

            $(".li6").mouseenter(function(){
                $(".v3_nav6").css("display","block")
            })
            $(".li6").mouseleave(function(){
                $(".v3_nav6").css("display","none")
                 $(".v3_d6 i").css("display","none")
            })
            $(".v3_nav5").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //鞋靴
             $(".v3_d7").mouseenter(function(){
                $(".v3_d7 i").css("display","block")
            })
            $(".v3_d7").mouseleave(function(){
                $(".v3_d7 i").css("display","none")
            })

            $(".li7").mouseenter(function(){
                $(".v3_nav7").css("display","block")
            })
            $(".li7").mouseleave(function(){
                $(".v3_nav7").css("display","none")
                 $(".v3_d7 i").css("display","none")
            })
            $(".v3_nav7").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //母婴
             $(".v3_d8").mouseenter(function(){
                $(".v3_d8 i").css("display","block")
            })
            $(".v3_d8").mouseleave(function(){
                $(".v3_d8 i").css("display","none")
            })

            $(".li8").mouseenter(function(){
                $(".v3_nav8").css("display","block")
            })
            $(".li8").mouseleave(function(){
                $(".v3_nav8").css("display","none")
                 $(".v3_d8 i").css("display","none")
            })
            $(".v3_nav8").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //美酒
             $(".v3_d9").mouseenter(function(){
                $(".v3_d9 i").css("display","block")
            })
            $(".v3_d9").mouseleave(function(){
                $(".v3_d9 i").css("display","none")
            })

            $(".li9").mouseenter(function(){
                $(".v3_nav9").css("display","block")
            })
            $(".li9").mouseleave(function(){
                $(".v3_nav9").css("display","none")
                 $(".v3_d9 i").css("display","none")
            })
            $(".v3_nav9").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //美食
             $(".v3_d10").mouseenter(function(){
                $(".v3_d10 i").css("display","block")
            })
            $(".v3_d10").mouseleave(function(){
                $(".v3_d10 i").css("display","none")
            })

            $(".li10").mouseenter(function(){
                $(".v3_nav10").css("display","block")
            })
            $(".li10").mouseleave(function(){
                $(".v3_nav10").css("display","none")
                 $(".v3_d10 i").css("display","none")
            })
            $(".v3_nav10").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //家居
             $(".v3_d11").mouseenter(function(){
                $(".v3_d11 i").css("display","block")
            })
            $(".v3_d11").mouseleave(function(){
                $(".v3_d11 i").css("display","none")
            })

            $(".li11").mouseenter(function(){
                $(".v3_nav11").css("display","block")
            })
            $(".li11").mouseleave(function(){
                $(".v3_nav11").css("display","none")
                 $(".v3_d11 i").css("display","none")
            })
            $(".v3_nav11").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //电子
             $(".v3_d12").mouseenter(function(){
                $(".v3_d12 i").css("display","block")
            })
            $(".v3_d12").mouseleave(function(){
                $(".v3_d12 i").css("display","none")
            })

            $(".li12").mouseenter(function(){
                $(".v3_nav12").css("display","block")
            })
            $(".li12").mouseleave(function(){
                $(".v3_nav12").css("display","none")
                 $(".v3_d12 i").css("display","none")
            })
            $(".v3_nav12").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //办公
             $(".v3_d13").mouseenter(function(){
                $(".v3_d13 i").css("display","block")
            })
            $(".v3_d13").mouseleave(function(){
                $(".v3_d13 i").css("display","none")
            })

            $(".li13").mouseenter(function(){
                $(".v3_nav13").css("display","block")
            })
            $(".li13").mouseleave(function(){
                $(".v3_nav13").css("display","none")
                 $(".v3_d13 i").css("display","none")
            })
            $(".v3_nav13").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //礼品
             $(".v3_d14").mouseenter(function(){
                $(".v3_d14 i").css("display","block")
            })
            $(".v3_d14").mouseleave(function(){
                $(".v3_d14 i").css("display","none")
            })

            $(".li14").mouseenter(function(){
                $(".v3_nav14").css("display","block")
            })
            $(".li14").mouseleave(function(){
                $(".v3_nav14").css("display","none")
                 $(".v3_d14 i").css("display","none")
            })
            $(".v3_nav14").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });

            //海外馆
             $(".v3_d15").mouseenter(function(){
                $(".v3_d15 i").css("display","block")
            })
            $(".v3_d15").mouseleave(function(){
                $(".v3_d15 i").css("display","none")
            })

            $(".li15").mouseenter(function(){
                $(".v3_nav15").css("display","block")
            })
            $(".li15").mouseleave(function(){
                $(".v3_nav15").css("display","none")
                 $(".v3_d15 i").css("display","none")
            })
            $(".v3_nav15").mouseleave(function(){
                $(".v3_u3").css("display","none")
            });
    }
    return {
        cela:cela
    }
})
           