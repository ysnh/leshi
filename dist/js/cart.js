"use strict";window.onload=function(){var e=JSON.parse(localStorage.getItem("cartList"));function c(){var t=e.every(function(t){return!0===t.isSelect}),n="";n+='\n        <div class="cart">\n        <div class="top">\n          <input class="selectAll" type="checkbox" '.concat(t?"checked":"",'>   全选\n          <ul>\n                    <li>商品信息</li>\n                    <li>单价(元)</li>\n                    <li>数量</li>\n                    <li>小计(元)</li>\n                    <li>操作</li>\n                </ul>\n        </div>\n        <ul class="cart-center">\n      '),e.forEach(function(t){n+='\n          <li>\n            <div class="select">\n              <input data-id='.concat(t.id,' class="selectOne" type="checkbox" ').concat(t.isSelect?"checked":"",'>\n            </div>\n            <div class="info">\n              <img src="').concat(t.img,'" alt="">\n              <p>').concat(t.name,'</p>\n            </div>\n            <p class="price">').concat(t.price,'</p>\n            <div class="number">\n              <button class="sub" data-id=').concat(t.id,'>-</button>\n              <input type="text" value="').concat(t.number,'">\n              <button class="add" data-id=').concat(t.id,'>+</button>\n            </div>\n            <p class="xiaoji">￥： ').concat(t.xiaoji,'</p>\n            <div class="del" data-id=').concat(t.id,">删除</div>\n          </li>\n        ")});var c=e.filter(function(t){return t.isSelect}),i=0,a=0;c.forEach(function(t){i+=t.number,a+=t.xiaoji}),n+='\n        </ul>\n        <div class="bottom">\n          <p>选中商品数量  <span>'.concat(i,"</span></p>\n          <p>总价： <span>￥： ").concat(a,'</span></p>\n          <button class="pay" ').concat(c.length?"":"disabled",'>去支付</button>\n          <button class="clear">清空购物车</button>\n        </div>\n        </div>\n\n        '),$(".gw").html(n)}e?($(".gw-logo").hide(),c(),$(".cart").on("change",".selectAll",function(){var n=this;e.forEach(function(t){t.isSelect=n.checked}),c(),localStorage.setItem("cartList",JSON.stringify(e))}),$(".cart").on("change",".selectOne",function(){var n=$(this).data("id");e.forEach(function(t){t.id===n&&(t.isSelect=!t.isSelect)}),c(),localStorage.setItem("cartList",JSON.stringify(e))}),$(".cart").on("click",".sub",function(){var n=$(this).data("id");e.forEach(function(t){t.id===n&&(1<t.number&&t.number--,t.xiaoji=t.price*t.number)}),c(),localStorage.setItem("cartList",JSON.stringify(e))}),$(".cart").on("click",".add",function(){var n=$(this).data("id");e.forEach(function(t){t.id===n&&(t.number++,t.xiaoji=t.number*t.price)}),c(),localStorage.setItem("cartList",JSON.stringify(e))}),$(".gw>.cart").on("click",".del",function(){var n=$(this).data("id");$(this).parent().parent().parent().remove();var t=e.filter(function(t){return t.id!=n});localStorage.setItem("cartList",JSON.stringify(t)),c()}),$(".gw>.cart").on("click",".clear",function(){console.log($(this))})):($(".gw-logo").show(),alert("您的购物车为空, 快去选购把"))};