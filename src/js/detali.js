
window.onload = function () {
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
    $('#min-menu').mouseenter(function () {
        $('.lbcd-contiue').show()
    })
    $('#min-menu').mouseleave(function () {
        $('.lbcd-contiue').hide()
    })



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




    var flag = true;
    var list2 = [];

    pageHtml()
    function pageHtml() {
        $.ajax({
            url: '../lib/list.json',
            dataType: 'json',
            success: function (res) {
                // console.log(res) 
                //2.渲染分页器
                $('.pagi').pagination({
                    pageCount: Math.ceil(res.length / 30),//总页数
                    jump: false,
                    coping: false,
                    current: 1,
                    prevContent: '上页',
                    nextContent: '下页',
                    callback: function (api) {
                        let curr = api.getCurrent()
                        var list = res.slice((curr - 1) * 30, curr * 30)

                        bindHtml(list)//每次使用分页器切换的时候渲染一次
                    }
                })
                bindHtml(res.slice(0, 30))

                //给全局变量赋值
                list2 = res
                console.log(list2)
            }
        })
    }
    //渲染页面
    function bindHtml(list) {
        // console.log(list)
        let str = ''
        list.forEach(item => {
            str += `
                    <li data-id="${item.id}">
                                  <div class="pro_img t_c">
                                       <a href="javascript:void(0)">
                                          <img src="${item.img}" alt="">
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
                                           ${item.name}
                                              
                                               <div class="TitTip">
                                                   <em>超5 x50s底座版</em>
                                              </div>
                                           </a>
                                       </div>
                                   </div>
                    
                                   <div class="pro_price">
                                <span class="red font14 t_l js_price">
                                           <font>￥</font>
                                           ${item.price}
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
                                      <a href="javascript:void(0)" class="send_action">
                                           立即购买
                                      </a>
                                   </div> 
                               </li>
                    
                    
                    `
        })

        $('.result_list').html(str);

    }

    //排序
    $(".ss_tab_left a span").on('click', function () {
        $(this).addClass('red').parent().siblings().children().removeClass('red')
        flag = !flag
        //不管什么都把数组重组
        list2.sort(function (a, b) {
            if (flag === true) {
                return a.price - b.price
            } else {
                return b.price - a.price
            }
        })


        $('.pagi').pagination({
            pageCount: Math.ceil(list2.length / 30),//总页数
            jump: false,
            coping: false,
            current: 1,
            prevContent: '上页',
            nextContent: '下页',
            callback: function (api) {
                let curr = api.getCurrent()
                var list = list2.slice((curr - 1) * 30, curr * 30)

                bindHtml(list)//每次使用分页器切换的时候渲染一次
            }
        })
        bindHtml(list2.slice(0, 30))
    })



    //2.事件委托的形式给每个li添加事件
    $('#parts_list >ul').on('click', 'li', function () {
        console.log(this)
        // 找到渲染这个 li 的数据
        // 从 list 数组里面找到这个数据
        // 点击 li 的时候, 拿到自己身上的 id 属性
        const id = $(this).data('id')

        // 2. 去到 list 这个数组里面找到一个 id 对应的数据
        //   这个数据就是渲染这个 li 的数据
        let data=null
        for(let i=0;i<list2.length;i++){
            if(list2[i].id===id){
                data=list2[i]
                break
            }
        }
        // console.log(data) //我要找到的渲染当前这个li的数据
        // 3. 把找到的数据存储到 localStorage 里面
      //   为了详情页面使用
        localStorage.setItem('goodsInfo',JSON.stringify(data))

        //4.跳转页面
        window.location.href='./dist.html'

    })







}






