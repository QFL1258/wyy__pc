 $(function(){
   /*点击登录部分*/
  $(".m-top>.wrap>.m-tophead>ul>li>.itm-1").on("click",function(){
    /*登录页面显示*/  
  $('.m-mask').show();
    /*遮盖层显示*/ 
  $('.m-layer').show();
})
$('.m-layer>.zcls').on('click',function(e){
  var $mz=$(this);
  if($mz.html()=="×"){
    // 登录页面隐藏
    $('.m-mask').hide();
    //遮盖层隐藏
    $('.m-layer').hide();
  }
})


/*拖动登录框*/
  var isFalg = false;
  $(".m-layer").mousedown(function(e){
    var me = $(this);
    var top  = me.offset().top;
    var left = me.offset().left;
    var x = e.clientX;  /* pageX,pageY : 是获取页面坐标*/
    var y = e.clientY;  /* screenX,screenY : 获取屏幕分辨坐标 */
    //$("#x").html(x +"---"+ y);
    isFalg = true;
    //绑定元素的拖动事件，不要绑定在元素本身上面。而是绑定在document上；
    $(document).mousemove(function(e){
      if(isFalg){
        var xx = e.clientX; 
        var yy = e.clientY; 
        var t = yy + top - y;
        var l = xx + left - x
        //$("#y").html(xx +"---"+ yy);
        me.css({left:l,top:t});
      }
    }).mouseup(function(){
      isFalg = false;
    });     
  });

  
});
/*轮播图*/
