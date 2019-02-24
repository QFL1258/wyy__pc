<template>
  <div class="app-good">
    <div class="main">
      <!-- 选择导航 -->
      <div class="pl_nav">
        <div class="tag_list">
          <div class="catogery"></div>
          <div class="tags">
            <a v-for="(item,i) in music_city" href="javascript:;" :class="{active:i==num}" @click="change(i)" :key="item.nid">{{item}}</a>
          </div>
          <div class="slide_cube"></div>
        </div>
        <div class="tag_list">
          <div class="catogery">
            <p>流派</p>
          </div>
          <div class="tags">
            <a class="active" href="javascript:;">全部</a>
            <a href="javascript:;">流行</a>
            <a href="javascript:;">古典</a>
            <a href="javascript:;">爵士</a>
            <a href="javascript:;">摇滚</a>
            <a href="javascript:;">电子</a>
            <a href="javascript:;">世界音乐</a>
            <a href="javascript:;">轻音乐</a>
            <a href="javascript:;">嘻哈</a>
            <a href="javascript:;">乡村</a>
            <a href="javascript:;">原声</a>
            <a href="javascript:;">舞曲</a>
            <a href="javascript:;">R&B</a>
            <a href="javascript:;">民谣</a>
            <a href="javascript:;">金属</a>
          </div>
          <div class="slide_cube"></div>
        </div>
        <div class="tag_list">
          <div class="catogery">
            <p>类别</p>
          </div>
          <div class="tags">
            <a class="active" href="javascript:;">全部</a>
            <a href="javascript:;">专辑</a>
            <a href="javascript:;">EP</a>
            <a href="javascript:;">Single</a>
            <a href="javascript:;">演唱会</a>
            <a href="javascript:;">动漫</a>
            <a href="javascript:;">游戏</a>
          </div>
          <div class="slide_cube"></div>
        </div>
        <div class="tag_list filter">
          <div class="catogery">
            <p>筛选</p>
          </div>
          <div class="tags">
            <a href="javascript:;">
              <span>年代</span>
              <i class="arrow_down" @click="appear"></i>
            </a>
            <a href="javascript:;">
              <span>唱片公司</span>
              <i class="arrow_down" @click="appeat"></i>
            </a>
          </div>
        </div>
        <div class="tag_list condition">
          <div class="catogery">
            <p>条件</p>
          </div>
          <div class="tags">
            <a href="javascript:;">
              <span>全部</span>
            </a>
          </div>
        </div>
        <div class="popup_tag ages">
          <a href="javascript:;" class="active">全部</a>
          <a href="javascript:;">2018</a>
          <a href="javascript:;">2017</a>
          <a href="javascript:;">2016</a>
          <a href="javascript:;">2015</a>
          <a href="javascript:;">2014</a>
          <a href="javascript:;">2013</a>
        </div>
        <div class="popup_tag music_comp">
          <a href="javascript:;" class="active">全部</a>
          <a href="javascript:;">环球唱片</a>
          <a href="javascript:;">华纳唱片</a>
          <a href="javascript:;">索尼唱片</a>
          <a href="javascript:;">杰威尔音乐有限公司</a>
          <a href="javascript:;">英皇唱片</a>
          <a href="javascript:;">金牌大风</a>
          <a href="javascript:;">福茂唱片</a>
          <a href="javascript:;">宏声音乐</a>
          <a href="javascript:;">通力唱片</a>
          <a href="javascript:;">滚石唱片</a>
          <a href="javascript:;">相信音乐</a>
          <!-- <a href="javascript:;">华研国际音乐</a> -->
        </div>
      </div>
      <!--内容-->
      <div class="playlist_cont"> 
        <ul class="wrapper">
          <li class="ani_load" v-for="item in list" :key=item.nid>
            <div class="play_btn"></div>
            <img :src="item.img_url" alt="">
            <div class="text_container">
              <p class="pl_intro">{{item.title}}</p>
              <p class="pl_amo">{{item.play}}
                <span>{{item.counts}}</span>万
              </p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 分页 -->
      <div class="page-bar">
         <ul>
            <li v-if="pno>1">
              <a @click="pno--,pageClick(),getProduct()">上一页</a>
            </li>
            <li v-if="pno==1">
              <a class="banclick">上一页</a>
            </li>
            <li v-for="index in pageCount" :class="{ 'active': pno == index}" :key="index.nid">
                <a @click="btnClick(index),getProduct()">{{index}}</a>
            </li>
            <li v-if="pno!=pageCount">
              <a @click="pno++,pageClick(),getProduct()">下一页</a>
            </li>
            <li v-if="pno == pageCount">
              <a class="banclick">下一页</a>
            </li>
            <li>
              <a>共<i>{{pageCount}}</i>页</a>
            </li>
        </ul> 
      </div> 
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
  export default {
    data(){
      return{
        list:[],
        music_city:["全部","内地","港台","欧美","韩国","日本"],
        /*city*/ 
        num:0,
        pno:1,//当前页码
        pageSize:20,//一页显示多少
        pageCount:1,//总页数设置先设置为1
      }
    },
    created(){
      this.getProduct();
    },
    methods:{
      appear(){
        $('.ages').toggle();
        $('.music_comp').hide();
      },
      appeat(){
        $('.music_comp').toggle();
        $('.ages').hide();
      },
      /*获取数据*/
      getProduct(){
        var pno=this.pno;
        if(pno==0){
          return
        }
        //创建变量保存是否有当前页条件
        //true 有数据 false 无数据
         var hasMore=this.pno <=this.pageCount;
         if(!hasMore){return}
        var url=this.$store.state.globalSettings.apiUrl+"/product?pno="+this.pno+"&pageSize="+this.pageSize;
        this.$axios.get(url).then(result=>{
           console.log(result.data)
          this.list=result.data.data;
          this.pageCount=result.data.pageCount;//保留当前总页数
        })
      },
      change(a){
       this.num=a;
      },
      btnClick(data){//页码点击事件
          if(data != this.pno){
              this.pno = data 
          }
      },
      pageClick: function(){
          console.log('现在在'+this.cur+'页');
      }
    },
    computed: {
        indexs(){
          var left = 1;
          var right = this.pageCount; 
          var ar = [];
          if(this.pageCount>= 5){
            if(this.pno > 3 && this.pno < this.pageCount-2){
                    left = this.pno - 2
                    right = this.pno + 2
            }else{
                if(this.pno<=3){
                    left = 1
                    right = 5
                }else{
                    right = this.pageCount
                    left = this.pageCount -4
                }
            }
         }
        while (left <= right){
            ar.push(left)
            left ++
        }
        return ar
       }       
    },
  }
</script>
<style>
.main {
    width: 1200px;
    min-height: 600px;
    margin: 0 auto;
}
.pl_nav{
    margin-top: 40px;
    position: relative;
    font-size: 0.9em;
}
.tag_list {
    display: flex;
    position: relative;
    background: rgba(235, 235, 235, 1);
    border-radius: 5px;
    margin-bottom: 10px;
    color: #aaa;
    height: 38px;
    line-height: 38px;
}
.tag_list .catogery {
    width: 7%;
    text-align: center;
}
.tags{
    position: absolute;
    z-index: 2;
    left: 7%;
}
.tags a.active {
    background: transparent;
    color: #fff;
    
}
.tags a, .popup_tag a {
    color: #999;
    margin: 0 14px;
}
/*红色框框*/
.tag_list .slide_cube{
  width: 45px;
  height: 41px;
  position: absolute;
  left: 90px;
  border-radius: 5px;
  background-image: linear-gradient(to bottom, #ed1c24, #aa1317);
  top: -2px;
  z-index: 1;
  box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.4);
  transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.filter .tags a {
    display: inline-block;
    height: 26px;
    margin: 0px 14px 0px 6px;
    padding: 0px 5px;
    line-height: 26px;
}
.filter .tags a span{
  margin-right: 5px;
}
.arrow_up {
    transform: rotateZ(45deg) translateY(2px);
}
.arrow_down {
    transform: rotateZ(225deg) translateX(3px);
}
.arrow_up, .arrow_down {
    display: inline-block;
    border-top: 2px solid #999;
    border-left: 2px solid #999;
    width: 7px;
    height: 7px;
}
.filter .tags a:hover {
    border-radius: 3px;
    background-image: linear-gradient(to bottom, #ed1c24, #aa1317);
    color: #fff;
}
.filter .tags a.active i, .filter .tags a:hover i {
    border-color: #fff;
}
.condition .tags a {
    border: 1px solid #a7a1a1;
    padding: 6px 5px;
    margin-left: 7px;
}
.condition .tags a:hover{
  color: #fff;
  background: #df4041;
  border: 1px solid #df4041;
}
.popup_tag {
  
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    padding: 10px 0;
    padding-left: 7%;
    background: rgba(235, 235, 235, 1);
    border-radius: 5px;
    display: none; 
    top: 81%;
    z-index: 10;
 
}
.popup_tag a{
    display: inline-block;
    height: 26px;
    margin: 0px 14px 0px 6px;
    padding: 0px 5px;
    line-height: 26px;
}
.popup_tag .active {
    border-radius: 3px;
    background-image: linear-gradient(to bottom, #ed1c24, #aa1317);
    color: #fff;
}
/*选择结束*/
.playlist_cont .wrapper {
    display: flex;
    flex-wrap: wrap;
}
.playlist_cont .wrapper>li {
    /* opacity: 0;  */
    overflow: hidden;
    position: relative;
    width: 18%;
    margin: 0 9px 30px;
    height: 200px;
    font-size: 0.9em;
    border-radius: 15px;
    background: #fff;
    transition: transform 0.4s ease;
}
.playlist_cont .wrapper li:hover {
    overflow: hidden;
    transform: translateY(-2%);
    cursor: pointer;
    box-shadow: 3px 4px 10px 2px #c4bfbf;
}
.playlist_cont .wrapper li:hover > .play_btn {
    transform: scale(0.6);
}
.ani_load {
    animation: load 0.3s;
    animation-fill-mode: forwards;
}
.playlist_cont .wrapper .play_btn {
    top: 20%;
    left: 27%;
    width: 100px;
    height: 100px;
    background-image: url(../../public/img/good/iconall.png);
    background-position: -8px -394px;
    z-index: 1;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.playlist_cont .wrapper li>img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.playlist_cont .wrapper li > * {
    position: absolute;
}
.playlist_cont .text_container {
    width: 100%;
    bottom: -17px;
    padding: 0 11px;
    background: rgba(255,255,255,0.69);
    transition: all 0.3s ease-in-out;
}
.playlist_cont .text_container>.pl_intro {
    top: 75%;
    color: #999;
    margin: 5px 0;
}
.playlist_cont .text_container>.pl_amo {
    top: 85%;
    color: #666;
    font-size: 0.8em;
}
.playlist_cont .wrapper li:hover>.text_container {
    transform: translateY(-16px);
}
/*内容结束*/
.page-bar{
  margin-bottom: 25px;
}
.page-bar>ul{
 float: right;
}
.page-bar>ul>li{
  float: left;
  border-radius: 3px;
  margin-left: 5px;
  cursor: pointer;
  background-image: linear-gradient(to bottom,#f3f3f3,#e9e9e9);
  box-sizing: border-box;
}
.page-bar a{
    border: 1px solid #ddd;
    position: relative;
    float: left;
    padding: 6px 12px;
    color: #337ab7;
    cursor: pointer
}
.page-bar a:hover{
    background-color: #eee;
}
.page-bar a.banclick{
    cursor:not-allowed;
}
.page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
.page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
}
.page-bar>ul::after{
  content: "";
  display: block;
  clear: both;
}

</style>


