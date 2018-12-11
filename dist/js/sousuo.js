 define(['jquery'], function($){
    function sousuo(){
        //搜索框
        function show(data){
            var oUl1 = document.getElementById('ul1');
            // alert(data.s)
            oUl1.style.display = 'block';
            oUl1.innerHTML = '';
            var arr = data.s;
            for(var i = 0 ;i < arr.length; i++){
                var oLi = document.createElement('li');
                var oA = document.createElement('a');
                oA.href = 'http://www.baidu.com/s?wd='+ arr[i];
                oA.target = '_blank';
                oA.innerHTML = arr[i];
                oLi.appendChild(oA);
                oUl1.appendChild(oLi);
            }

        }
        window.onload = function(){
            var oQ = document.getElementById('q');
            var oUl1 = document.getElementById('ul1');
            oQ.onkeyup = function(){
                if(oQ.value){
                    var oScript = document.createElement('script');
                    oScript.src =  "http://suggestion.baidu.com/s?wd=" + oQ.value + "&cb=show";
                    document.body.appendChild(oScript)
                }else{
                    oUl1.style.display= 'none'
                }
            }
        }
    }
    return{
        lunbo:lunbo
    }
 }   
  