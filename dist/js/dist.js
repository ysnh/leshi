"use strict";window.onload=function(){var t=function(t){for(var n=document.cookie.split("; "),i=0;i<n.length;i++){var e=n[i].split("=");if(e[0]==t)return e[1]}return""}("username");function n(t,n){return window.getComputedStyle?window.getComputedStyle(t,null)[n]:t.currentStyle[n]}""!==t?($(".list-logout").hide(),$(".list-logoin").show(),$(".nickName >a").text(t)):($(".list-logout").show(),$(".list-logoin").hide()),$(".logout").click(function(){document.cookie="username=",document.cookie="password=",window.location.reload(!0),$(".list-logoin").hide()});var o=document.querySelector("#img-box"),c=document.querySelector(".middleImg"),s=document.querySelector("#bigImg"),l=document.querySelector("#middleArea"),i=document.querySelector("#bigArea");l.style.width=parseFloat(n(c,"width"))/parseFloat(n(s,"width"))*parseFloat(n(i,"width"))+"px",l.style.height=parseFloat(n(c,"height"))/parseFloat(n(s,"height"))*parseFloat(n(i,"height"))+"px";var a=parseFloat(n(i,"width"))/parseFloat(n(l,"width"));c.addEventListener("mouseenter",function(){l.style.display="block",i.style.display="block",document.onmousemove=function(t){var n=t||window.event,i=n.pageX-o.offsetLeft-c.offsetLeft-l.offsetWidth/2,e=n.pageY-o.offsetTop-c.offsetTop-l.offsetWidth/2;i<=0&&(i=0),i>=c.offsetWidth-l.offsetWidth&&(i=c.offsetWidth-l.offsetWidth),e<=0&&(e=0),e>=c.offsetHeight-l.offsetHeight&&(e=c.offsetHeight-l.offsetHeight),l.style.left=i+"px",l.style.top=e+"px",console.log(a),s.style.left=-a*i+"px",s.style.top=-a*e+"px"}}),c.addEventListener("mouseleave",function(){l.style.display="none",i.style.display="none",document.onmousemove=null}),$("#min-menu").mouseenter(function(){$(".lbcd-contiue").show()}),$("#min-menu").mouseleave(function(){$(".lbcd-contiue").hide()}),$(".lbcd-select>li").mouseenter(function(){var t=$(this).index();$(this).parent().siblings().show().children().eq(t).show().siblings().hide(),$(this).css("background","#337ab7").siblings().css("background","rgba(0,0,0,0)")}),$(".lbcd-wrap").mouseleave(function(){$(".lbcd-content-yc").hide(),$(".lbcd-select>li").css("background","rgba(0,0,0,0)")}),$(".app-xz > .gb").click(function(){$(".app-xz").hide(),$(".shopp.cart").removeClass("cart")}),$.ajax({url:"../lib/index.json",dataType:"json",success:function(t){var n="",i="",e="";t.forEach(function(t){t.line1.forEach(function(t){n+='\n                        <li>\n                        <a href="">\n                            <div class="product-cc">\n                                <img src="'.concat(t.img,'" alt="">\n                            </div>\n                            <div class="product-text">\n                                <div class="product-title">\n                                    <strong>').concat(t.name,'</strong>\n                                </div>\n                                <div class="product-price">').concat(t.price,"</div>\n                            </div>\n                        </a>\n                        </li>")}),t.line2.forEach(function(t){i+='\n                        <li>\n                        <a href="">\n                            <div class="product-cc">\n                                <img src="'.concat(t.img,'" alt="">\n                            </div>\n                            <div class="product-text">\n                                <div class="product-title">\n                                    <strong>').concat(t.name,'</strong>\n                                </div>\n                                <div class="product-price">').concat(t.price,"</div>\n                            </div>\n                        </a>\n                        </li>")}),t.line3.forEach(function(t){e+='\n                        <li>\n                        <a href="">\n                            <div class="product-cc">\n                                <img src="'.concat(t.img,'" alt="">\n                            </div>\n                            <div class="product-text">\n                                <div class="product-title">\n                                    <strong>').concat(t.name,'</strong>\n                                </div>\n                                <div class="product-price">').concat(t.price,"</div>\n                            </div>\n                        </a>\n                        </li>")})}),$(".line1").html(n),$(".line2").html(i),$(".line3").html(e)}}),$.ajax({url:"../lib/index2.json",dataType:"json",success:function(t){var n="";t.forEach(function(t){n+='\n                    <ul class="yc-list list-width-2 yc-type-2 ">\n                                      <li class="list-type-name">\n                                        <strong>'.concat(t.name,"</strong>\n                                    </li>"),t.list.forEach(function(t){n+='                                \n                            <li>\n                            <a href="">\n                                <div class="product-pic-40">\n                                    <img src="'.concat(t.img,'" alt="">\n                                </div>\n                                <div class="product-text">\n                                    <div class="product-title">\n                                        <strong>').concat(t.size,"</strong>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        ")}),n+="</ul>"}),$("#tvsize").html(n)}}),$.ajax({url:"../lib/index3.json",dataType:"json",success:function(t){var n="";t.forEach(function(t){n+='\n                    <ul class="yc-list list-width-3 yc-type-3 ">\n                    <li class="list-type-name">\n                    <strong>'.concat(t.name,"</strong>\n                    <span>").concat(t.id,"</span>\n                </li>"),t.list.forEach(function(t){n+='                                \n                            <li>\n                            <a href="">\n                                <div class="product-pic-40">\n                                    <img src="'.concat(t.img,'" alt="">\n                                </div>\n                                <div class="product-text">\n                                    <div class="product-title">\n                                        <strong>').concat(t.size,"</strong>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        ")}),n+="</ul>"}),$("#cj").html(n)}}),$.ajax({url:"../lib/index4.json",dataType:"json",success:function(t){var n="";t.forEach(function(t){n+='\n                    <ul class="yc-list list-width-3 yc-type-3 ">\n                    <li class="list-type-name">\n                                        <strong>'.concat(t.name,"</strong>\n\n                                    </li>"),t.list.forEach(function(t){n+='                                \n                            <li>\n                            <a href="">\n                                <div class="product-pic-40">\n                                    <img src="'.concat(t.img,'" alt="">\n                                </div>\n                                <div class="product-text">\n                                    <div class="product-title">\n                                        <strong>').concat(t.size,"</strong>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        ")}),n+="</ul>"}),$("#jli").html(n)}}),$.ajax({url:"../lib/index5.json",dataType:"json",success:function(t){console.log(t);var n="";t.forEach(function(t){t.line4.forEach(function(t){n+='\n                        <li>\n                             <a href="">\n                                 <div class="product-pic-40">\n                                     <img src="'.concat(t.img,'" alt="">\n                                 </div>\n                                 <div class="product-text">\n                                        <div class="product-title">\n                                                    <strong>').concat(t.name,"</strong>\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </li>")})}),$(".line4").html(n)}});var r=JSON.parse(localStorage.getItem("goodsInfo"));console.log(r),r||(alert("您要查看的数据不存在"),window.location.href="./detali.html"),$(".text-box .goodsName").text(r.name),$(".text-box .price").text(r.price),$(".middleImg img").attr("src",r.img),$("#bigArea #bigImg").attr("src",r.img),$("#small .as").attr("src",r.img),$(".addCart").click(function(){var t=function(t){for(var n=document.cookie.split("; "),i=0;i<n.length;i++){var e=n[i].split("=");if(e[0]==t)return e[1]}return""}("username");console.log(t),""!==t?location.href="./cart.html":(alert("您还没有登录哦！立即登录！"),location.href="./login.html");var n=JSON.parse(localStorage.getItem("cartList"))||[],i=n.some(function(t){return t.id===r.id});if(console.log(i),i){for(var e=null,o=0;o<n.length;o++)if(n[o].id===r.id){e=n[o];break}e.number++,e.xiaoji=e.number*e.price}else r.number=1,r.xiaoji=r.price,r.isSelect=!1,n.push(r);alert("添加成功"),localStorage.setItem("cartList",JSON.stringify(n)),console.log(n)})};