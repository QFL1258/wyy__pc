<template>
  <div>
    <!--底部-->>
    <footer>
      <div class="wrap">
        <ul class="footer_info">
          <li class="download">
            <h3>下载网易云音乐客户端</h3>
            <ul class="download_list">
              <li class="download_item">
                <i class="icon_pc"></i>
                <p>
                  <a href="javascript:;">PC版</a>
                </p>
              </li>
              <li class="download_item">
                <i class="icon_mac"></i>
                <p>
                  <a href="javascript:;">Mac版</a>
                </p>
              </li>
              <li class="download_item">
                <i class="icon_andr"></i>
                <p>
                  <a href="javascript:;">Android版</a>
                </p>
              </li>
              <li class="download_item">
                <i class="icon_iph"></i>
                <p>
                  <a href="javascript:;">iPhone版</a>
                </p>
              </li>
            </ul>
          </li>
          <li class="products">
            <h3>特色产品</h3>
            <ul class="products_list">
              <li class="prod_item">
                <i class="icon_k"></i>
                <p>
                  <a href="javascript:;">天天k歌</a>
                </p>
              </li>
              <li class="prod_item">
                <i class="icon_sp"></i>
                <p>
                  <a href="javascript:;">SUPER SOUND</a>
                </p>
              </li>
              <li class="prod_item">
                <i class="icon_qPlay"></i>
                <p>
                  <a href="javascript:;">Qplay</a>
                </p>
              </li>
              <li class="prod_item">
                <p>
                  <a href="javascript:;">车载互联</a>
                </p>
              </li>
              <li class="prod_item">
                  <p>
                    <a href="javascript:;">网易演唱会</a>
                  </p>
                </li>
            </ul>
          </li>
          <li class="links">
            <h3>合作链接</h3>
            <ul class="links_list">
              <li class="lk_item">
                <a href="javascript">CJ E&M</a>
              </li>
              <li class="lk_item">
                <a href="javascript">网易视频</a>
              </li>
              <li class="lk_item">
                <a href="javascript">手机空间</a>
              </li>
              <li class="lk_item">
                <a href="javascript">阴阳师</a>
              </li>
              <li class="lk_item">
                <a href="javascript">网页社交广告</a>
              </li>
              <li class="lk_item">
                <a href="javascript">电脑管家</a>
              </li>
              <li class="lk_item">
                <a href="javascript">网易浏览器</a>
              </li>
              <li class="lk_item">
                <a href="javascript">炉石传说</a>
              </li>
              <li class="lk_item">
                <a href="javascript">网易云</a>
              </li>
              <li class="lk_item">
                <a href="javascript">初音速</a>
              </li>
              <li class="lk_item">
                <a href="javascript">风暴英雄</a>
              </li>
              <li class="lk_item">
                <a href="javascript">守望先锋</a>
              </li>
            </ul>
          </li>
          <li class="platform">
            <h3>开放平台</h3>
            <ul class="plats_list">
              <li class="plat_item">
                <p>
                  <a href="javascript:;">独立音乐人</a>
                </p>
              </li>
              <li class="plat_item">
                <p>
                  <a href="javascript:;">音乐专栏</a>
                </p>
              </li>
              <li class="plat_item">
                <p>
                  <a href="javascript:;">上传视频</a>
                </p>
              </li>
              <li class="plat_item">
                <p>
                  <a href="javascript:;">上传音频</a>
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <div class="copyright">
          <p>
            <a href="javascript:;" title="关于网易">关于网易</a>
            <span>|</span>
            <a href="javascript:;" title="About Netease">About Netease</a>
            <span>|</span>
            <a href="javascript:;" title="服务条款">服务条款</a>
            <span>|</span>
            <a href="javascript:;" title="用户服务协议">用户服务协议</a>
            <span>|</span>
            <a href="javascript:;" title="隐私政策">隐私政策</a>
            <span>|</span>
            <a href="javascript:;" title="权利声明">权利声明</a>
            <span>|</span>
            <a href="javascript:;" title="广告服务 ">广告服务</a>
            <span>|</span>
            <a href="javascript:;" title="网易招聘 ">网易招聘</a>
            <span>|</span>
            <a href="javascript:;" title="客服中心 ">客服中心</a>
            <span>|</span>
            <a href="javascript:;" title="网站导航 ">网站导航</a>
          </p>
          <p>
            Copyright © 1997 -2018 Netease.
            <a href="javascript:;" title="All Rights Reserved.">All Rights Reserved.</a> 
          </p>
          <p>
          网易公司
          <a href="javascript:;" title="版权所有">版权所有</a>
          <a href="javascript:;" title="网易网络文化经营许可证">网易网络文化经营许可证</a>
          </p>
        </div>
      </div>
    </footer>
    <!--底部结束-->
    <!-- 最下方固定 -->
    <div class="playbar" @mousemove="grow" @mouseleave="leave">
      <div class="m-playbar">
        <div class="updn">
          <div class="left">
            <a @click="btn" class="btn btn1" href="javascript:;"></a>
          </div>
          <div class="right"></div>
        </div>
        <div class="bg"></div>
        <div class="hand" title="展开播放条"></div>
        <div class="wrap">
          <div class="btns">
            <a class="prv" href="javascript::">上一首</a>
            <a class="plv" href="javascript::">播放/暂停</a>
            <a class="nxt" href="javascript::">下一首</a>
          </div>
          <div class="head">
            <img src="../../public/img/play/default_album.jpg" alt="">
            <a class="mask" href="javascript:;"></a>
          </div>
          <div class="play">
            <div class="words"></div>
            <div class="m-pbar">
              <div class="barbg">
                <div class="rdy"></div>
                <div class="cur">
                  <span class="btn"></span>
                </div>
                <span class="time">00:00/00:00</span>
              </div>
            </div>
          </div>
          <div class="oper">
            <a class="icn icn-add" href="javascript:;" title="收藏">收藏</a>
            <a class="icn icn-share" href="javascript:;" title="分享">分享</a>
          </div>
          <div class="ctrl">
            <a class="icn icn-vol" href="javascript:;"></a>
            <a class="icn icn-loop" href="javascript:;" title="循环"></a>
          <span class="add">
            <a class="icn icn-list" href="javascript:;" title="播放列表">0</a>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
  export default{
    data(){
      return{}
    },
    methods:{
      /*底部右下角小锁样式*/
      btn(){
        if($(".m-playbar>.updn>.left>a").hasClass("btn1")){
          $(".m-playbar>.updn>.left>a").removeClass("btn1")
         .css("background-position","-100px -400px")
       }else{
          $(".m-playbar>.updn>.left>a").removeClass("btn2")
         .addClass("btn1").css("background-position","-80px -380px")
       }
      },
      /*鼠标进入显示*/
      grow(){ 
        $('.m-playbar').css("top","-53px");
        if($(".btn").hasClass("btn2")){
          $(".m-playbar").parent().css("position","fixed");
        }
      },
      /*鼠标移除隐藏*/
      leave(){
          setTimeout(function(){
            if($(".btn").hasClass("btn1")){
            $(".m-playbar").css("top","-7px");
          }
        },3000);   
      }
    }
  }
</script>
<style>
  /* 底部 */
footer{
  background: #333;
  color: #767676;

}
footer .wrap{
  background: #333;
  width: 1226px;
  margin: 0 auto;
  border-bottom: 1px solid #333;
}
footer .wrap .footer_info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
footer .download, footer .products, footer .links {
  margin-top: 50px;
  width: 30%;
  height: 200px;
}
footer .download{
  margin-left:40px;
}
footer .products{
  margin-left: 35px;
  
}
footer .links{
  margin-right:-40px; 
}
footer .platform{
  margin-left: 40px;
}
footer h3 {
  font-weight: normal;
  font-size: 0.95em;
  margin-top:15px;
  margin-bottom: 15px; 
}
footer .download_list, footer .products_list, footer .links_list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
footer .download_list .download_item, footer .products_list .prod_item {
  margin-right: 29px;
  cursor: pointer;
}
footer .download_list .download_item > p, footer .products_list .prod_item > p {
  margin-top: 15px;
}
.icon_pc,.icon_mac,.icon_andr,.icon_iph,.icon_k,.icon_sp,.icon_qPlay{
  display: block;
  width: 40px;
  height: 48px;
  background: url(../../public/img/footer/footer.png) no-repeat;
  background-position: -2px 0;
  margin: 0 auto;
}
.icon_pc:hover {
  background-position: -2px -49px;
}
.icon_mac {
  background-position: -92px 0;
}
.icon_mac:hover {
  background-position: -92px -49px;
}
.icon_andr {
  background-position: -190px 0;
  width: 38px;
}
.icon_andr:hover {
  background-position: -190px -49px;
}
.icon_iph {
  background-position: -279px 0;
  width: 34px;
}
.icon_iph:hover {
  background-position: -279px -47px;
} 
.icon_k {
  background-position: -370px 0;
  width: 40px;
}
.icon_k:hover {
  background-position: -370px -49px;
}
.icon_sp {
  background-position: -463px 0;
  width: 35px;
}
.icon_sp:hover {
  background-position: -462px -47px;
}
.icon_qPlay {
  background-position: -561px 0;
  width: 42px;
}
.icon_qPlay:hover {
  background-position: -561px -49px;
}
footer, footer a {
  color: #767676;
  font-size: 0.95em;
}
footer a:hover {
  color: #f46262;
}
footer .links_list .lk_item {
  width: 30%;
  text-align: left;
}
footer .platform {
  width: 100%;
}
footer .plats_list {
  display: flex;
}
footer .plat_item > p {
  margin-right: 30px;
}
footer .copyright {
  margin: 40px 0 20px;
  text-align: center;
}
footer .copyright > * {
  margin: 10px auto;
}
/*footer结束*/

/*最下方固定播放按钮*/
.playbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
}
.playbar .m-playbar{
  position: absolute;
  left: 0;
  top: -7px;
  width: 100%;
  height: 53px;
  margin: 0 auto;
}
.m-playbar .updn {
  position: relative;
  z-index: 11;
}
.m-playbar .updn .btn {
  display: block;
  width: 18px;
  height: 18px;
  margin: 6px 0 0 17px;
  background: url(../../public/img/play/playbar.png) no-repeat;
  
}
.m-playbar .updn .btn1{
  background-position: -80px -380px;
}
/* .m-playbar .updn .btn:hover {
  background-position: -100px -400px;
} */
.m-playbar .updn .right {
  position: absolute;
  top: -1px;
  right: 0;
  width: 15px;
  height: 54px;
  background-position: -52px -393px;
  pointer-events: none;
}
.m-playbar .updn .left {
  position: absolute;
  top: -14px;
  right: 15px;
  width: 52px;
  height: 67px;
  background: url(../../public/img/play/playbar.png) no-repeat;
  background-position: 0 -380px;
}
.playbar .m-playbar .bg{
  height: 95px;
  margin-right: 0px;
  background-image:url(../../public/img/play/playbar.png);
  background-position:0 0;
  background-repeat: repeat-x;
}
.playbar .m-playbar .hand{
  position: absolute;
  top: -10px;
  width: 100%;
  height: 0px;
  cursor: pointer;
}
.playbar .m-playbar .wrap{
  position: absolute;
  left: 50%;
  top: 6px;
  z-index: 15;
  width: 980px;
  height: 47px;
  margin: 0 auto;
  margin-left: -498.5px;
}
.playbar .m-playbar .wrap .btns{
  width: 137px;
  padding: 6px 0 0 0; 
  float: left;
}
.playbar .m-playbar .wrap .btns a{
  display: block;
  float: left;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  margin-top: 5px;
  text-indent: -9999px;
  background: url(../../public/img/play/playbar.png) no-repeat;
}
.playbar .m-playbar .wrap .btns .prv{
  background-position: 0 -130px;
}
.playbar .m-playbar .wrap .btns .plv{
  width: 36px;
  height: 36px;
  margin-top: 0;
  background-position: 0 -204px;
}
.playbar .m-playbar .wrap .btns .nxt{
  background-position: -80px -130px;
}
.playbar .m-playbar .wrap .head{
  position: relative;
  margin: 6px 15px 0 0;
  float: left;
  width: 34px;
  height: 34px;
}
.playbar .m-playbar .wrap .head img{
  width: 34px;
  height: 34px
}
/* .playbar .m-playbar .wrap .head .mask{
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  width: 34px;
  height: 35px;
  background: url(../../public/img/播放/default_album.jpg) no-repeat;
  background-position: 0 -80px;
}  */
.playbar .m-playbar .wrap .play{
  position: relative;
  width: 608px;
  float: left;
}
.playbar .m-playbar .wrap .play .words{
  height: 28px;
  overflow: hidden;
  color: #e8e8e8;
  text-shadow: 0 1px 0 #171717;
  line-height: 28px;
}
.playbar .m-playbar .wrap .play .m-pbar{
  width: 493px;
  position: relative;
}
.m-pbar .barbg, .m-pbar .cur, .m-pbar .rdy {
  height: 9px;
  background: url(../../public/img/play/statbar.png) no-repeat;
  background-position: right 0;
}
.m-pbar .barbg{
  width: 493px;
}
.m-pbar .rdy {
  background-position: right -30px;
  width: 0%;
}
.m-pbar .cur {
  position: absolute;
  top: 0;
  left: 0;
  background-position: left -66px;
  width: 0%;
}
.m-pbar .btn {
  position: absolute;
  top: -7px;
  right: -13px;
  width: 22px;
  height: 24px;
  margin-left: -11px;
  background: url(../../public/img/play/iconall.png) no-repeat;
  background-position: 0 -250px;
}
.m-pbar .time {
  position: absolute;
  top: -9px;
  right: -105px;
  color: #797979;
  text-shadow: 0 1px 0 #121212;
}
.m-playbar .oper {
  width: 60px;
  float: left;
}
.m-playbar .icn {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  text-indent: -9999px;
  background: url(../../public/img/play/playbar.png) no-repeat;
}
.m-playbar .icn-add {
  background-position: -88px -163px;
}
.m-playbar .icn-share {
  background-position: -114px -163px;
}
.m-playbar .ctrl {
  position: relative;
  z-index: 10;
  width: 113px;
  padding-left: 13px;
  float: left;
  background: url(../../public/img/play/playbar.png) no-repeat;
  background-position: -147px -238px;
}
.m-playbar .icn {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  text-indent: -9999;
}
.m-playbar .icn-vol {
  background-position: -2px -248px;
}
.m-playbar .icn-loop {
  background-position: -3px -344px;
}
.m-playbar .add {
  position: relative; 
  float: left;
  width: 59px;
  height: 36px;
}
.m-playbar .icn-list {
  display: block;
  float: none;
  width: 38px;
  padding-left: 21px;
  background-position: -42px -68px;
  line-height: 27px;
  text-align: center;
  color: #666;
  text-shadow: 0 1px 0 #080707;
  text-indent: 0;
  text-decoration: none;
  height: 25px;
  margin: 11px 2px 0 0;
}
/*固定按钮结束*/

</style>
