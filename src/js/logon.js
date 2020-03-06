window.onload = function () {
    $('.username').blur(function(){
        let reg=/^\w{4,9}$/;
        let stu=reg.test($('.username').val());
        if(!stu){
            layer.msg("用户名不合法")
        }
    })

    $('.password').blur(function(){
        let reg=/^\w{5,10}$/;
        let stu=reg.test($('.password').val());
        if(!stu){
            layer.msg("密码不合法")
        }
    })


    $('#login-btn').click(function () {
        var username = $('.username').val()
        var password = $('.password').val()
        console.log(username)
        if(username==null){
            layer.msg("请输入用户名")
            return false
        }
        if(password==null){
            layer.msg("请输入密码")
            return false
        }
        $.ajax({
            url: '/login',
            type: 'post',
            data: {
                username: username,
                password: password
            },
            success: function (res) {
                let a = JSON.parse(res)
                if (a.code == 1) {
                    console.log("页面注册成功");
                    //注册成功,是否去登录
                    layer.confirm("恭喜您,注册成功,是否立即去登录?", {
                        btn: ["是的", "我不要"]
                    }, (index) => {
                        layer.close(index);
                        window.location = "./login.html"

                    }, (index) => {
                        layer.close(index);
                        // window.location.reload();
                        layer.msg("好的")

                    })
                }
                if (a.code ==0) {
                    layer.msg('用户名已注册!');
                }

            }



        })


    })





}