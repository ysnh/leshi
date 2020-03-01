window.onload=function(){
    //下载显示隐藏
    $('.app-xz > .gb').click(function(){
        $('.app-xz').hide();
        $('.shopp.cart').removeClass("cart");
        
    })

    //列表显示
    $('.lbcd-select>li').mousemove(function(){
        var index=$(this).index()
        $(this).parent().siblings().show().children().eq(index).show().siblings().hide();
       $(this).css("background","#337ab7").siblings().css("background","rgba(0,0,0,0)")
       
            
            
    

    })

    $('.lbcd-wrap').mouseleave(function(){
        $('.lbcd-content-yc').hide()
        $('.lbcd-select>li').css("background","rgba(0,0,0,0)")

    })


}