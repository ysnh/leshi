
window.onload=function(){
    pageHtml()
    function pageHtml(){
         $.ajax({
        url:'../lib/list.json',
        dataType:"json",
        success:function(res){
            // let str='';
        //    var sc=res.result.hits;
        console.log(res)
            let str='';
            res.forEach((ele) => {
            
              str+=`
              <li>
              <div class="pro_img t_c">
                  <a href="">
                      <img src="${ele.img}" alt="">
                  </a>
              </div>

              <div class="proThumb clearfix">
                  <div class="proThumb_wrap">
                      <div class="p clearfix js_proImg">

                      </div>
                  </div>
              </div>

              <div class="proName">
                  <div class="pro_name dark font14 t_c">
                      <a href="">
                      ${ele.name}
                          
                          <div class="TitTip">
                              <em>超5 x50s底座版</em>
                          </div>
                      </a>
                  </div>
              </div>

              <div class="pro_price">
                  <span class="red font14 t_l js_price">
                      <font>￥</font>
                      ${ele.price}
                  </span>
                  <span class="through js_oldPrice">

                  </span>
              </div>

              <div class="pro_evaluate">
                  <em class="star">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                  </em>
                  <a href="">
                      <span>暂无评价</span>
                  </a>
              </div>

              <div class="pro_btns">
                  <a href="" class="send_action">
                      立即购买
                  </a>
              </div> 
          </li>
                             
              `
            });
       
             $('.result_list').html(str);
       
       
        }

    });
 }
   
    
     //下载显示隐藏
     $('.app-xz > .gb').click(function () {
        $('.app-xz').hide();
        $('.shopp.cart').removeClass("cart");

    });

    //列表显示
    $('.lbcd-select>li').mouseenter(function () {
        var index = $(this).index()
        $(this).parent().siblings().show().children().eq(index).show().siblings().hide();
        $(this).css("background", "#337ab7").siblings().css("background", "rgba(0,0,0,0)")

    });


    $('.lbcd-wrap').mouseleave(function () {
        $('.lbcd-content-yc').hide()
        $('.lbcd-select>li').css("background", "rgba(0,0,0,0)")

    });
     //返回顶部
     $('#backTop').hide()
     $(function () {
         $(window).scroll(function () {
             if ($(window).scrollTop() > 50) {
                 $('#backTop').show()
             } else {
                 $('#backTop').hide()
             }
         })
     });
     $('#backTop').click(function () {
         $('body,html').animate({
             scrollTop: 0
         }, 500);
         return false;
     });
     //移入移出
     $('.is-cart').mouseenter(function () {
         $('#cart-div').show();
 
     });
     $('.is-cart').mouseleave(function () {
         $('#cart-div').hide();
 
     });
     $('.is-share').mouseenter(function () {
         $('#bd-share').show();
 
     })
     $('.is-share').mouseleave(function () {
         $('#bd-share').hide();
 
     });
 
     $('.is-kefu').mouseenter(function () {
         $('#kf-div').show();
 
     });
     $('.is-kefu').mouseleave(function () {
         $('#kf-div').hide();
 
     });

     //列表移入显示
     $('#min-menu').hover(function(){
         $('.lbcd-contiue').css('display','block');
     },
        
     
     
     )
   

     //数据请求
    getList()
    function getList() {
        $.ajax({
            url: '../lib/index.json',
            dataType: 'json',
            success: function (res) {
                //  console.log(typeof(res))
                let line1 = "";
                let line2 = "";
                let line3 = "";
                res.forEach((ele) => {
                    // console.log(ele.line1)

                    ele.line1.forEach((e) => {
                        line1 += `
                        <li>
                        <a href="">
                            <div class="product-cc">
                                <img src="${e.img}" alt="">
                            </div>
                            <div class="product-text">
                                <div class="product-title">
                                    <strong>${e.name}</strong>
                                </div>
                                <div class="product-price">${e.price}</div>
                            </div>
                        </a>
                        </li>`;
                    });

                    ele.line2.forEach((e) => {
                        line2 += `
                        <li>
                        <a href="">
                            <div class="product-cc">
                                <img src="${e.img}" alt="">
                            </div>
                            <div class="product-text">
                                <div class="product-title">
                                    <strong>${e.name}</strong>
                                </div>
                                <div class="product-price">${e.price}</div>
                            </div>
                        </a>
                        </li>`;
                    });
                    ele.line3.forEach((e) => {
                        line3 += `
                        <li>
                        <a href="">
                            <div class="product-cc">
                                <img src="${e.img}" alt="">
                            </div>
                            <div class="product-text">
                                <div class="product-title">
                                    <strong>${e.name}</strong>
                                </div>
                                <div class="product-price">${e.price}</div>
                            </div>
                        </a>
                        </li>`;
                    });


                });

                $(".line1").html(line1);
                $(".line2").html(line2);
                $('.line3').html(line3);


            }
        })
    };

    ge()
    function ge() {
        $.ajax({
            url: '../lib/index2.json',
            dataType: 'json',
            success: function (res) {
                let str = '';
                // console.log(res)
                res.forEach((e) => {
                    str += `
                    <ul class="yc-list list-width-2 yc-type-2 ">
                                      <li class="list-type-name">
                                        <strong>${e.name}</strong>
                                    </li>`
                    e.list.forEach((ele) => {
                        str += `                                
                            <li>
                            <a href="">
                                <div class="product-pic-40">
                                    <img src="${ele.img}" alt="">
                                </div>
                                <div class="product-text">
                                    <div class="product-title">
                                        <strong>${ele.size}</strong>
                                    </div>
                                </div>
                            </a>
                        </li>
                        `;
                    })
                    str += "</ul>";
                })
                $('#tvsize').html(str);
            }
        })
    }

    gc()
    function gc() {
        $.ajax({
            url: '../lib/index3.json',
            dataType: 'json',
            success: function (res) {
                let str = '';
                // console.log(res)
                res.forEach((e) => {
                    str += `
                    <ul class="yc-list list-width-3 yc-type-3 ">
                    <li class="list-type-name">
                    <strong>${e.name}</strong>
                    <span>${e.id}</span>
                </li>`
                    e.list.forEach((ele) => {
                        str += `                                
                            <li>
                            <a href="">
                                <div class="product-pic-40">
                                    <img src="${ele.img}" alt="">
                                </div>
                                <div class="product-text">
                                    <div class="product-title">
                                        <strong>${ele.size}</strong>
                                    </div>
                                </div>
                            </a>
                        </li>
                        `;
                    })
                    str += "</ul>";
                })
                $('#cj').html(str);
            }
        })
    };

    gd()
    function gd() {
        $.ajax({
            url: '../lib/index4.json',
            dataType: 'json',
            success: function (res) {
                let str = '';
                // console.log(res)
                res.forEach((e) => {
                    str += `
                    <ul class="yc-list list-width-3 yc-type-3 ">
                    <li class="list-type-name">
                                        <strong>${e.name}</strong>

                                    </li>`
                    e.list.forEach((ele) => {
                        str += `                                
                            <li>
                            <a href="">
                                <div class="product-pic-40">
                                    <img src="${ele.img}" alt="">
                                </div>
                                <div class="product-text">
                                    <div class="product-title">
                                        <strong>${ele.size}</strong>
                                    </div>
                                </div>
                            </a>
                        </li>
                        `;
                    })
                    str += "</ul>";
                })
                $('#jli').html(str);
            }
        })
    };

    
    getli()
    function getli() {
        $.ajax({
            url: '../lib/index5.json',
            dataType: 'json',
            success: function (res) {
                console.log(res)
                let line4 = "";
                res.forEach((ele) => {
                    // console.log(ele.line1)
                    ele.line4.forEach((e) => {
                        line4 += `
                        <li>
                             <a href="">
                                 <div class="product-pic-40">
                                     <img src="${e.img}" alt="">
                                 </div>
                                 <div class="product-text">
                                        <div class="product-title">
                                                    <strong>${e.name}</strong>
                                                </div>
                                            </div>
                                        </a>
                                    </li>`;
                    });                          
                });
                $(".line4").html(line4);
            }
        })
    };


    


}






