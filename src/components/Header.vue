<template>
  <div>
    <header>
      <!-- 头部第一部分 -->
      <div class="m-top">
        <div class="wrap">
          <h1 class="logo">
            <a href="javascript:;">网易云音乐</a>
          </h1>
          <ul class="m-nav">
            <li class="fst">
              <span>
                <router-link class="z-slt" to="/Product">
                  发现音乐
                  <sub class="cor"></sub>
                </router-link>
              </span>
            </li>
            <li>
              <span><a href="">我的音乐</a></span>
            </li>
            <li>
              <span><a href="">朋友</a></span>
            </li>
            <li>
              <span><a href="">商城</a> </span>
            </li>
            <li>
              <span><a href="">音乐人 </a></span>
            </li>
            <li>
              <span>
                <a href="">下载客户端</a>
            </span>
            <sub class="hot"></sub>
            </li>
          </ul>
          <div class="m-srch">
            <div class="srchbg">
              <span class="parent">
                <input class="txt" type="text" name="srch" placeholder="音乐/视频/电台/用户">
              </span>
            </div>
          </div>
          <div class="videoUp">
            <div>
              <a href="javascript:;">视频投稿</a>
            </div>
          </div>
          <div class="m-tophead">
              <a  class="link" href="javascript:;">
                  登录
              </a>
              <i class="arr"></i>
              <ul>
                <li>            
                  <a @click="phone()" class="itm-1" href="javascript:;">
                    <i class="icn-mb"></i>
                    手机号登录 
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i class="icn-wx"></i>
                    微信登录
                  </a>
                </li>
                <li>              
                  <a href="javascript:;">
                    <i class="icn-qq"></i>
                    QQ登录
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i class="icn-sn"></i>
                    新浪微博登录
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i class="icn-wy"></i>
                    网易邮箱账号登录
                  </a>
                </li>
              </ul>
          </div>
        </div>   
      </div>
      <!-- 头部第二部分 -->
      <div class="m-subnav">
        <div class="wrap">
          <ul class="nav">
            <li>
              <a class="z-slt" href="javascript:;">
                推荐
              </a>
            </li>
            <li>
              <a href="javascript:;">
                排行榜
              </a>
            </li>
            <li>
              <a href="javascript:;">
                歌单
              </a>
            </li>
            <li>
              <a href="javascript:;">
                主播电台
              </a>
            </li>
            <li>
              <a href="javascript:;">
              歌手
              </a>
            </li>
            <li>
              <a href="javascript:;">
                新碟上架
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!-- 登录页面 -->
    <div id="login">
      <div class="m-layer" :style="popStyle" @mousedown="mdHandler($event)" @mouseup="muHandler">
        <div id="d1" class="zbar">
          <div class="zttl">手机号登录</div>
        </div>
        <div class="zcnt">
          <div class="lyct">
            <div class="n-log2">
              <div class="j-mob">
                <a class="current" href="javascript:;">
                  <span class="j-code">+86</span>
                  <span class="icn" @click="d1"></span>
                </a>
                <div class="txtwrap">
                  <input class="j-phone" type="text" placeholder="请输入手机号" v-model="p" maxlength="11">
                </div>
                <ul class="j-list">
                  <li class="itm">
                    <span class="lt">中国</span>
                    <span class="rt">+86</span>
                  </li>
                  <li class="itm">
                    <span class="lt">中国</span>
                    <span class="rt">+86</span>
                  </li>
                  <li class="itm">
                    <span class="lt">中国香港</span>
                    <span class="rt">+852</span>
                  </li>
                  <li class="itm">
                    <span class="lt">中国澳门</span>
                    <span class="rt">+853</span>
                  </li>
                  <li class="itm">
                    <span class="lt">中国台湾</span>
                    <span class="rt">+886</span>
                  </li>
                </ul>
              </div>
              <div class="f-mgt10">
                <input class="j-pwd" type="password" placeholder="请输入密码" v-model="w" maxlength="8">
              </div>
              <div class="f-mgt10">
                <label class="s-fc3">
                  <input class="j-auto" type="checkbox" checked="checked">自动登录
                </label>
                <a class="f-fr" href="javascript:;">忘记密码</a>
              </div>
              <div class="f-mgt20">
                  <button type="submit" @click="handleLogin">
                  登录
                  </button>
              </div>
            </div>
            <div class="js-btmbar">
              <a class="f-fl" href="javascript:;">
              <span>&lt;</span>
                其他登录方式
              </a>
              <a class="f-fr" @click="cut">没有帐号？免费注册  ></a>
            </div>
          </div>
        </div>
        <span @click="close" class="zcls" title="关闭窗体">×</span>
      </div>
    </div>
      <!-- 注册页面 -->
    <div id="register" style="display:none">
      <div class="m-layer" :style="popStyle" @mousedown="mdHandler($event)" @mouseup="muHandler">
        <div id="d1" class="zbar">
          <div class="zttl">手机号注册</div>
        </div>
        <div class="zcnt">
          <div class="lyct">
            <div class="n-log2">
              <div class="s-fc3">
                <label>手机号：</label>
              </div>
              <div class="j-mob">
                <div class="u-phonewrap">
                  <a class="current" href="javascript:;">
                    <span class="j-code">+86</span>
                    <span class="icn" @click="d1"></span>
                  </a>
                  <div class="txtwrap">
                    <input class="j-phone" type="text" placeholder="请输入手机号" maxlength="11" v-model="p" @blur="verify_p">
                  </div>
                  <ul class="j-list">
                    <li class="itm">
                      <span class="lt">中国</span>
                      <span class="rt">+86</span>
                    </li>
                    <li class="itm">
                      <span class="lt">中国</span>
                      <span class="rt">+86</span>
                    </li>
                    <li class="itm">
                      <span class="lt">中国香港</span>
                      <span class="rt">+852</span>
                    </li>
                    <li class="itm">
                      <span class="lt">中国澳门</span>
                      <span class="rt">+853</span>
                    </li>
                    <li class="itm">
                      <span class="lt">中国台湾</span>
                      <span class="rt">+886</span>
                    </li>
                  </ul>
                  <div class="u-err">
                      <i class="u-icn"></i>
                      <span>请输入手机号</span>
                  </div>
                </div>
              </div>
              <div class="s-fc3 f-mgt10">
                <label>密码：</label>
              </div>
              <div class="f-mgt10">
                <input type="password" class="j-pwd" placeholder="请设置8位登录密码" v-model="w" @blur="verify_w" maxlength="8">
              </div>
              <div class="j-err">
                  <i class="u-icn"></i>
                  <span>请输入密码</span>
              </div>
              <div class='f-mgt20'>
                <button type="submit" @click="register">
                  <span>下一步</span>
                </button>
              </div>
            </div>
            <div class="n-loglink2">
              <a class="s-primary" @click="back">&lt;  返回登录</a>
            </div>
          </div>
        </div>
        <span @click="close" class="zcls" title="关闭窗体">×</span>
      </div>
    </div>
    <!-- 遮盖层 -->
    <div class="m-mask"  @mousemove="mmHandler($event)"></div>
 </div>
</template>

<script>
 import $ from "jquery";
  export default {
    data(){
     return {
       p:'',
       w:'',
       canMove:false, /*移动开关*/
       offsetX:0, offsetY:0,
       popStyle:{ top:"350px", left:"350px" }
     }
    },
    methods:{
      /*第一排手机号下拉点击*/
      d1(){
        $(".j-list").toggle();
      },
      /*切换注册页面*/ 
      cut(){
        this.p='';
        this.w='';
        $("#login").hide();
        $("#register").show();
        $(".u-err").hide();
      },
      verify_p(){
         var phone = this.p;
         var reg=/^1[34578]\d{9}$/
          if(phone.length==''){
            $(".u-err>span").html('手机号不能为空')
            $(".u-err").show();
          } else if(reg.test(phone)&&phone.length!==''){
            $(".u-err>span").html('手机号可以用')
            return true
          }else{
            $(".u-err>span").html("手机号格式不正确")
          }
      },
      verify_w(){
        var pwd =this.w;
        var reg=/^\d{8}$/
        if(pwd.length==''){
          $(".j-err").show();
          $(".j-err>span").html('密码不能为空')
        } else if(reg.test(pwd)&&pwd.length!==''){
          $(".j-err>span").html('密码可以用')
          return true
        }else{
          // $(".j-err").show();
          $(".j-err>span").html("密码格式不正确")
        }
      },
      /*注册验证*/
      register(){
          var p = this.p;
          var w =this.w;
          var phone=this.verify_p();
          var pwd=this.verify_w()    
          var url="http://wyyapi.applinzi.com/register";
          var param=`phone=${p}&pwd=${w}`
          this.$axios.post(url,param).then(result=>{
          console.log(result)
          if(result.data.code==1&&phone==true&&pwd==true){
            alert("注册成功")
            $("#login").show();
            $("#register").hide();
            $(".j-err").hide();
          }else{
            alert("注册失败")
          }
         
        })
      },
       /*返回登录*/
      back(){
        this.p='';
        this.w='';
        $("#login").show();
        $("#register").hide();
        $(".j-err").hide();
      },
      /*获取鼠标位置*/ 
      mmHandler(e){
        if(this.canMove){
          var left=e.clientX-this.offsetX;
          var top=e.clientY-this.offsetY;
          this.popStyle.left=left+"px";
          this.popStyle.top=top+"px";
        }
      },
      /*鼠标移动*/
      mdHandler(e){
        this.offsetX=e.offsetX;
        this.offsetY=e.offsetY;
        this.canMove=true;
      },
      /*鼠标按下，框固定*/ 
      muHandler(){
        this.canMove=false;
      },
      /*登录验证*/
      handleLogin(){
        //1:获取参数
        var p=this.p;
        var w =this.w;        
        if(p.length==''){
          alert('手机号不能为空')
          return
        }
        if(w.length==''){
          alert('密码不能为空')
          return 
        }
        var url = "http://wyyapi.applinzi.com/login?phone="+p+"&pwd="+w;
        this.$axios.get(url).then(result=>{
          console.log(result);
          if(result.data.code==1){
            alert('登录成功')
            $('.m-layer').css("display",'none');
            $('.m-mask').css('display','none');
          }else{
           
            alert('手机号或者密码错误')
          }
        })
      },
      /*登录框显示和影藏*/
      phone(){
          // 登录页面隐藏
          $('.m-mask').show();
            //遮盖层隐藏
          $('.m-layer').show();
        },
      close(){
          // 登录页面隐藏
          $('.m-mask').hide();
          //遮盖层隐藏
          $('.m-layer').hide();
          $("#register").hide();
          $("#login").show();
        }
    },   
  }
</script>

<style scoped>
.m-top{
  background: #242424;
}
.m-top .wrap{
  width: 1226px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #232323;
}
.m-top .wrap .logo {
  width: 176px;
  height: 69px;
  background: url("../../public/img/topbar.png") no-repeat;
  background-position: 0 0;
}
.m-top .wrap .logo a {
  display: block;
  height: 100%;
  text-indent: -9999px;
}
.m-top .wrap .m-nav {
  width: 47%;
  color: #aaa;
  display: flex;
  list-style: none;
}
.m-top .wrap .m-nav li{
  cursor: pointer;
  font-size: 1em;
  padding: 0 19px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  transition: all 0.3s linear;
  position: relative;
}
.m-top .wrap .m-nav li a{
  color: #ccc;
}
.m-top .wrap .m-nav li:hover{
  background: #000;
}
.m-top .wrap .m-nav li a:hover{
  color:#fff; 
}
.m-top .wrap .m-nav li.fst{
  background: #000;
}
.m-top .wrap .m-nav li.fst a{
 color: #fff;
}
/*小三角*/
.m-top .wrap .m-nav .fst .z-slt .cor{
  display: block;
  position: absolute;
  left: 50%;
  top: 64px;
  width: 12px;
  height: 7px;
  margin-left: -6px;
  overflow: hidden;
  background: url(../../public/img/topbar.png) no-repeat 0 9999px;
  background-position: -226px 0;
}
/*hot图标*/
.m-top .wrap .m-nav .hot{
  display: block;
  position: absolute;
  top: 21px;
  left: 105px;
  width: 28px;
  height: 19px;
  background-image: url(../../public/img/topbar.png);
  background-position: -190px 0;
}
/*搜素框*/
.m-top .m-srch{
  margin-left: 28px;
}
.m-top .m-srch .srchbg{
  position: relative;
  width: 190px;
  height: 32px;
  border-radius: 16px;
  margin-top: 10%;
  background-color: #fff;
  background-image: url(../../public/img/topbar.png);
  background-position: 0 -99px;
 
}
.m-top .m-srch .srchbg .parent{
  display: block;
  position: relative;
  margin: 8px 0 0 30px;
}
.m-top .m-srch .srchbg .parent input{
  font-size: 0.8em;
  background-color: transparent;
  width: 100px;
  padding-left: 10px;
  vertical-align: sub;
  outline: none;
  border: none;
}

/*视频投稿*/
.m-top .videoUp{
  width: 90px;
  height: 100%;
}
.m-top .videoUp>div{
  background-image:url(../../public/img/topbar.png);
  background-position: 0 -140px;
  margin-top: 20%;
  width: 100%;
  height: 32px;
  border-radius: 16px;
  line-height: 31px;
  font-size: 0.8em;
  color: #ccc;
}
.m-top .videoUp>div a{
  color:#ccc;
  padding-left: 31px;
}
.m-top .videoUp>div a:hover{
  background-position: -100px -140px;
  color: #fff;
  text-decoration: none;
}
/*登录*/
.m-top .wrap .m-tophead{
  width: 48px;
  font-size: 0.9em;
  line-height: 70px;
  background-image: url(../../public/img/topbar.png);
  background-position: right -27px;
  position: relative;
  color: #bbb;
}

.m-top .wrap .m-tophead a{
  color: inherit;
}
.m-top .wrap .m-tophead a:hover{
  color: #fff;
}
/*登录下拉*/
.m-top .wrap .m-tophead .arr{
  position: absolute;
  top: 48px;
  left: 8px;
  width: 14px;
  height: 8px;
  background-image: url(../../public/img/toplist.png);
  background-position: -20px 0;

}
/*显示和隐藏*/
.m-tophead>.arr,.m-tophead>ul {
  transform: scaleY(0);
  opacity: 0;
  overflow: hidden;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.m-top>.wrap>.m-tophead:hover .arr, .m-tophead:hover>ul{
  transform: scaleY(1);
  opacity: 1; 
}

.m-top>.wrap>.m-tophead>ul{
  list-style: none;
  width: 168px;
  position: absolute;
  top: 57px;
  left: -64px;
  background-color: #2A2A2A;
  font-size: 1em;
  box-shadow: 0px 8px 28px 1px #444;
  border-radius: 5px;
  transform-origin: center 0;
  z-index: 100;
  color: #bbb;
}
.m-top>.wrap>.m-tophead>ul>li{
  height: 38px;
  line-height: 38px;
  border-bottom: 1px solid #222222;
  cursor: pointer;
}
.m-top>.wrap>.m-tophead>ul>li:hover{
  background: #444;
}
.m-top>.wrap>.m-tophead>ul>li>a{
  color: inherit;
}
.m-top>.wrap>.m-tophead>ul>li>a>i{
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('../../public/img/toplist.png');
  margin-left: 19px;
  margin-right: 5px;
  vertical-align: middle;
}
.m-top>.wrap>.m-tophead>ul>li>a>.icn-mb{
  background-position: 0 0;
}
.m-top>.wrap>.m-tophead>ul>li>a>.icn-wx{
  background-position: -20px -20px;
}
.m-top>.wrap>.m-tophead>ul>li>a>.icn-qq{
  background-position: -20px -40px;
}
.m-top>.wrap>.m-tophead>ul>li>a>.icn-qq{
  background-position: 0 -20px;
}
.m-top>.wrap>.m-tophead>ul>li>a>.icn-sn{
  background-position: 0 -20px;
}
.m-top>.wrap>.m-tophead>ul>li>a>.icn-wy{
  background-position: 0 -40px;
}
/*头部第二部分*/
.m-subnav {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;
}
.m-subnav>.wrap{
  width: 1100px;
  height: 34px;
  margin: 0 auto;
}
.m-subnav>.wrap>.nav{
  list-style: none;
  float: left;
  padding-left: 157px;
}
.m-subnav>.wrap>.nav>li>a{
  display: inline-block;
  height: 20px;
  padding: 0 13px;
  margin: 7px 17px 0;
  border-radius: 20px;
  line-height: 20px;
}
.m-subnav>.wrap>.nav>li,.nav>li>a{
  float: left;
  height: 34px;
  text-align: center;
  color: #fff;
}
.m-subnav>.wrap>.nav>li>a:hover{
  background: #9B0909;
}
.m-subnav>.wrap>.nav>li>a.z-slt{
  background: #9B0909;
}
/*头部结束*/


/*遮盖层*/
div.m-mask{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: none;
}
/* 登录页面 */
/*大盒子*/
div.m-layer{
  top:300px;
  left:348px;
  position: absolute;
  z-index: 9998;
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.8);
  border: none;
  background: #fff;
  display: none;
  margin: auto;
}
div.m-layer .zbar{
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #191919;
  border-radius: 4px 4px 0 0;
  background: #2d2d2d;
  line-height: 30px;
}
div.m-layer .zbar .zttl{
  padding-right: 45px;
  margin: 0;
  height: 38px;
  line-height: 38px;
  padding-left: 18px;
  border-radius: 3px 3px 0 0;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background-position: 50% 0;
}
div.m-layer .zcls {
  position: absolute;
  z-index: 20;
  top: 16px;
  right: 20px;
  width: 10px;
  height: 10px;
  overflow: hidden;
  text-indent: -9999px;
  cursor: pointer;
  background: url(../../public/img/layer.png) no-repeat 0 9999px;
  background-position: 0 -95px;
}
/*第一排手机号登录结束*/
div.m-layer .zcnt{
  padding: 0;
  border: 1px solid #878787;
  border-width: 0 1px 1px;
  border-radius: 0 0 4px 4px;
  background: #fff;
}
div.m-layer .zcnt .lyct{
  padding: 0;
}
div.m-layer .zcnt .lyct .n-log2{
  padding: 30px 0 43px;
  width: 220px;
  margin: 0 auto;
}
div.m-layer .zcnt .lyct .n-log2 .j-mob{
  position: relative;
  height: 30px;
  margin: 0;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  z-index: 10;
}



div.m-layer .zcnt .lyct .n-log2 .j-mob .current{
  position: relative;
  float: left;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 18px 0 5px;
  border-right: 1px solid #cdcdcd;
  cursor: pointer;
}
div.m-layer .zcnt .lyct .n-log2 .j-mob .current .icn{
  position: absolute;
  top: 14px;
  right: 7px;
  width: 7px;
  height: 4px;
  background-image: url(../../public/img/icon2.png);
  background-position: -260px -450px;
}
.u-icn, .u-icn2, .u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
/*请输入手机号框*/
div.m-layer .zcnt .lyct .n-log2 .txtwrap{
  overflow: hidden;
}
div.m-layer .zcnt .lyct .n-log2 .txtwrap .j-phone{
  width: 206px;
  display: block;
  padding: 5px 8px 5px;
  height: 20px;
  line-height: 20px;
  border: none;
  border-radius: 2px;
}
div.m-layer .zcnt .lyct .n-log2 .f-mgt10{
  margin-top: 10px;
}
div.m-layer .zcnt .lyct .n-log2 .f-mgt10 .j-pwd{
  width: 206px;
  height: 19px;
  margin: 0;
  padding: 5px 6px 6px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  line-height: 19px;
}
div.m-layer .zcnt .lyct .n-log2 .j-err{
  height: auto;
  line-height: 18px;
  margin-top: 3px;
  color: #e33232;
}
div.m-layer .zcnt .lyct .n-log2 .j-err .u-icn{
  margin-right: 8px;
  height: 14px;
  background: url(../../public/img/icon.png) no-repeat;
  background-position: -50px -270px;
}
div.m-layer .zcnt .lyct .n-log2 .f-mgt10 .s-fc3 input{
  margin: 0px 12px 0 0;
  vertical-align: middle;
}
div.m-layer .zcnt .lyct .n-log2 .f-mgt10 .f-fr{
  float:right;
}
div.m-layer .zcnt .lyct .n-log2 .f-mgt20{
  margin-top: 20px;
}
/*登录按钮*/
div.m-layer .zcnt .lyct .n-log2 .f-mgt20 a{
  width: 215px;
  color: #fff;
  background: url(../../public/img/button2.png) no-repeat;
  background-position: right -386px;
  padding: 0 5px 0 0;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}
div.m-layer .js-btmbar{
  padding: 0 19px;
  height: 48px;
  border-top: 1px solid #c6c6c6;
  border-radius: 0 0 4px 4px;
  line-height: 48px;
  background-color: #f7f7f7;
}
div.m-layer .js-btmbar .f-fl{
  color: #0c72c3;
  float: left;
}
div.m-layer .js-btmbar .f-fr{
  color: #999;
  float: right;
}

/*注册页面样式*/
.n-log2 .s-fc3{
  color: #666;
  margin-bottom:10px;
 
}
.n-log2 .j-mob .u-phonewrap{
  position: relative;
  height: 30px;
  margin: 0;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  z-index: 10;
}
/*手机号下拉栏*/
.j-list {
    position: absolute;
    top: 31px;
    left: -1px;
    width: 100%;
    height: 128px;
    border: 1px solid #cdcdcd;
    border-top: none;
    clear: both;
    background-color: #fff;
    overflow: auto;
    display: none;
}
.j-list .itm {
    height: 32px;
    line-height: 32px;
    color: #333;
    cursor: pointer;
    overflow: hidden;
}
.j-list .itm .lt{
  padding-left: 7px;
}
.j-list .itm .rt{
  float: right;
  margin-right: 10px;
}
.n-log2 .f-mgt10{
  margin-top: 20px;
}
.f-mgt10 .j-pwd{
  width: 206px;
  height: 19px;
  padding: 5px 6px 6px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  line-height: 19px;
}

.f-mgt20 {
    margin-top: 20px;
}
.f-mgt20 button{
  width: 215px;
  color: #fff;
  padding: 0 5px 0 0;
  white-space: nowrap;
  height: 31px;
  line-height: 31px;
  background: #2475c3;
  border: 0;
}
.n-loglink2 {
    padding: 0 19px;
    height: 48px;
    border-top: 1px solid #c6c6c6;
    border-radius: 0 0 4px 4px;
    line-height: 48px;
    background-color: #f7f7f7;
}
.n-loglink2 a{
    color: #0c72c3;
    font-size: 12px;
}
/*警示*/
.u-err{
  color: #e33232;
  display:none;
}
.j-err{
  margin-top: 5px;
  color: #e33232;
  display:none;
}
.j-err i,.u-err i{
    margin-top: -2px;
    margin-right: 8px;
    width: 14px;
    height: 14px;
    background: url(../../public/img/icon.png) no-repeat 0 9999px;;
    background-position: -50px -270px;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
}
div.m-layer .zcnt .lyct .n-log2 .u-err{
  margin-top: 5px;
}
div.m-layer .zcnt .lyct .n-log2 .s-fc3{
  margin-top: 25px;
}





</style>