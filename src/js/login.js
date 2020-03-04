window.onload=function(){
    $.ajax({
        url:'/login',
        type:'post',
        data:{
            username:'admin',
            password:'123456'
        },
        success:function(res){
            console.log(res)

        }
    })





}