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

        $.ajax({
            url: '/logon',
            type: 'post',
            data: {
                username: username,
                password: password
            },
            success: function (res) {
                let a = JSON.parse(res)
                console.log(a)
                if (a.code == 1) {
                        layer.msg("登录成功")
                        window.location = "./index.html"
                        var data=new Date();
                        data.setTime(data.getTime()+60*1000*60*24)//24小时
                       
                        document.cookie="username="+username+";expires="+data
                        document.cookie="password="+password+";expires="+data
                        
                }
                if (a.code ==2) {
                    layer.msg('请先注册!');
                }

            }



        })


    })





}