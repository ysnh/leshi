window.onload = function () {


    //判断是否登录
    function getCookie(name) {
        var strCookie = document.cookie;
        var arrCookie = strCookie.split("; ");
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            if (arr[0] == name)
                return arr[1];
        }
        return "";
    }

    var islogin = getCookie("username");
    if (islogin !== '') {
        $(".list-logout").hide();
        $(".list-logoin").show();
        $(".login-wrap").show();
        $(".logout-wrap").hide()
        $(".nickName >a").text(islogin)
        $(".user-desc >a").text(islogin)
    } else {
        $(".list-logout").show();
        $(".list-logoin").hide();
        $(".login-wrap").hide();
        $(".logout-wrap").show()
    }

    //点击退出
    function exitLogin() {
        document.cookie = "username=";
        document.cookie = "password=";
        window.location.reload(true);
    }
    $(".logout").click(function () {
        exitLogin()
        $(".list-logoin").hide();
        $(".login-wrap").hide();
    })



















    //下载显示隐藏
    $('.app-xz > .gb').click(function () {
        $('.app-xz').hide();
        $('.shopp.cart').removeClass("cart");

    })
    //列表显示
    $('.lbcd-select>li').mouseenter(function () {
        var index = $(this).index()
        $(this).parent().siblings().show().children().eq(index).show().siblings().hide();
        $(this).css("background", "#337ab7").siblings().css("background", "rgba(0,0,0,0)")

    })
    $('.lbcd-wrap').mouseleave(function () {
        $('.lbcd-content-yc').hide()
        $('.lbcd-select>li').css("background", "rgba(0,0,0,0)")

    })
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000
        },
        // // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        //     scrollbar: {
        //       el: '.swiper-scrollbar',
        //     },
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

    //  $('.pc-float').mouseleave(function(){
    //     $('#cart-div').hide();
    //     $('#bd-share').hide();
    //     $('#kf-div').hide();
    //  })

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