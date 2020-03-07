window.onload = function () {
    //登录
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
            if(islogin!==''){
                $(".list-logout").hide();
                $(".list-logoin").show();
                $(".nickName >a").text(islogin)
            }else{
                $(".list-logout").show();
                $(".list-logoin").hide();
            }

function exitLogin() {
            document.cookie = "username=";
            document.cookie = "password=";
            window.location.reload(true);
        }
 $(".logout").click(function(){
        exitLogin()
        $(".list-logoin").hide();
 })


    //放大镜
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        }
        return obj.currentStyle[attr];
    }

    // * 公式: 小图 / 大图 = 小区域 / 大区域 *
    //     只能修改小区域 *
    //     小区域 = (小图 / 大图) * 大区域 *
    //     比例 = 大区域 / 小区域

    var oBox = document.querySelector('#img-box')

    var middleImg = document.querySelector(".middleImg"); //小图
    var bigImg = document.querySelector("#bigImg"); //大图
    var middleArea = document.querySelector('#middleArea'); //小区域
    var bigArea = document.querySelector('#bigArea'); //大区域
    // 350 / 800 =  100/ 400
    // 小区域 = (小图 / 大图) * 大区域 *
    middleArea.style.width = (parseFloat(getStyle(middleImg, "width")) / parseFloat(getStyle(bigImg, "width"))) *
        parseFloat(getStyle(bigArea, "width")) + "px";

    middleArea.style.height = (parseFloat(getStyle(middleImg, "height")) / parseFloat(getStyle(bigImg, "height"))) *
        parseFloat(getStyle(bigArea, "height")) + "px";
    // 只有在小区域调整了大小后,才能计算比例
    //     比例 = 大区域 / 小区域
    var oScale = parseFloat(getStyle(bigArea, "width")) / parseFloat(getStyle(middleArea, "width"))
    //鼠标进入
    middleImg.addEventListener("mouseenter", function () {
        middleArea.style.display = "block"; // 小区显示
        bigArea.style.display = "block"; //大区域显示

        document.onmousemove = function (evt) {
            var e = evt || window.event;
            var disX = e.pageX - oBox.offsetLeft - middleImg.offsetLeft - middleArea.offsetWidth / 2;
            var disY = e.pageY - oBox.offsetTop - middleImg.offsetTop - middleArea.offsetWidth / 2;

            if (disX <= 0) {
                disX = 0
            }

            if (disX >= middleImg.offsetWidth - middleArea.offsetWidth) {
                disX = middleImg.offsetWidth - middleArea.offsetWidth
            }

            if (disY <= 0) {
                disY = 0
            }
            if (disY >= middleImg.offsetHeight - middleArea.offsetHeight) {
                disY = middleImg.offsetHeight - middleArea.offsetHeight
            }
            middleArea.style.left = disX + "px";
            middleArea.style.top = disY + "px";
            console.log(oScale)

            bigImg.style.left = -oScale * disX + "px";
            bigImg.style.top = -oScale * disY + "px"

        }
    })

    middleImg.addEventListener("mouseleave", function () {
        middleArea.style.display = "none"; // 小区隐藏
        bigArea.style.display = "none"; //大区域隐藏
        document.onmousemove = null;
    })




    //列表移入显示
    $('#min-menu').mouseenter(function () {
        $('.lbcd-contiue').show()
    })
    $('#min-menu').mouseleave(function () {
        $('.lbcd-contiue').hide()
    })

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
    //下载显示隐藏
    $('.app-xz > .gb').click(function () {
        $('.app-xz').hide();
        $('.shopp.cart').removeClass("cart");

    });

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





    //1.获取localStorage 里面的数据

    const info = JSON.parse(localStorage.getItem('goodsInfo'))
    console.log(info)
    if (!info) {
        alert('您要查看的数据不存在')
        window.location.href = './detali.html'
    }

    //渲染页面
    bindHtml()
    function bindHtml() {
        // console.log($('.text-box .goodsName'))
        $('.text-box .goodsName').text(info.name)
        $('.text-box .price').text(info.price)
        $('.middleImg img').attr('src', info.img)
        $('#bigArea #bigImg').attr('src', info.img)
        $('#small .as').attr('src', info.img)
        // console.log( $('.text-box .price'))
    }

    //点击添加购物车
    $('.addCart').click(() => {
        // console.log('我要添加购物车了')

        //4.2判断是否登录
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
        console.log(islogin)
        if (islogin !== '') {
            // $(".list-logout").hide();
            // $(".list-logoin").show();
            alert("添加成功")
             location.href = './cart.html'
            // $(".nickName >a").text(islogin)
        } else {
            alert("您还没有登录哦！立即登录！");
            location.href = './login.html';
            // $(".list-logout").show();
            // $(".list-logoin").hide();
        }


        







        // 4-3. 加入到购物车数组里面
        //    先拿到 localStorage 里面的那个数组信息
        //    如果原先没有数据, 那么我就用一个空数组来代替
        //    如果有数据, 就用我们的数据
        const cartList = JSON.parse(localStorage.getItem('cartList')) || []
        // 象数组里面把本条数据添加进去
        // 4-4. 判断有没有这个数据
        //      每一个数据都有一个自己的 id
        //      只要看数组里面有没有 id 一样的数据, 就知道有没有这个数据了
        //      数组常用方法有一个叫做 some 的方法
        //      返回值:
        //        true: 表示数组里面有这个信息
        //        false: 表示数组里面没有这个信息
        let exits = cartList.some(item => {
            // 数组里面每一个的 id === 本页面的这条数据的 id
            return item.id === info.id
        })

        console.log(exits)
        if (exits) {
            // 表示有这个信息了, 我们要让 number ++
            // console.log('已经存在 number ++')
            // 找到这个信息给他 number ++
            let data = null
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].id === info.id) {
                    data = cartList[i]
                    break
                }
            }
            //data就是我找到的这个信息
            data.number++
            //4-5数据添加的时候,小计的价格要改变
            data.xiaoji = data.number * data.price//数量-单价
        } else {
            // 表示没有这个信息, 直接 push 就可以了
            // push 之前, 象里面添加一个 number 信息为 1
            info.number = 1

            //4-5多添加一些信息
            info.xiaoji = info.price//因为默认是第一个,小计就是单价
            info.isSelect = false//默认不选中
            cartList.push(info)
        }
        //储存到locastorage里面
        
        localStorage.setItem('cartList', JSON.stringify(cartList))

        console.log(cartList)

    })









}





