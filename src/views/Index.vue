<template>
    <div>
        <!-- 轮播图 -->
        <div class="imglist">
            <el-carousel :interval="8000" type="card">
                <el-carousel-item v-for="item in list" :key="item.id">
                    <img :src="item.img_url">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 歌单推荐部分 -->
        <section class="recommend_bg">
            <div class="recommend">
                <h2>歌单推荐</h2>
                <div class="second_nav">
                    <ul>
                        <li v-for="(item,i) in recommend" :key="item.nid"  @click="a(i)">
                            <a :class="{active:i==num}" href="javascript:;">{{item}}</a>
                        </li>
                    </ul>
                </div>
                <div class="playlists"> 
                    <ul class="wrapper" v-show="num==0">
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[0].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[0].title}}
                                </p>
                                <p class="pl_amo">{{rec[0].play}}</p>
                                <span>{{rec[0].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[1].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[1].title}}
                                </p>
                                <p class="pl_amo">{{rec[1].play}}</p>
                                <span>{{rec[1].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[2].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[2].title}}
                                </p>
                                <p class="pl_amo">{{rec[2].play}}</p>
                                <span>{{rec[2].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[3].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[3].title}}
                                </p>
                                <p class="pl_amo">{{rec[3].play}}</p>
                                <span>{{rec[3].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[4].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[4].title}}
                                </p>
                                <p class="pl_amo">{{rec[4].play}}</p>
                                <span>{{rec[4].counts}}</span>万
                            </div>
                        </li>
                    </ul>
                    <ul class="wrapper" v-show="num==1">
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[5].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[5].title}}
                                </p>
                                <p class="pl_amo">{{rec[5].play}}</p>
                                <span>{{rec[5].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[6].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[6].title}}
                                </p>
                                <p class="pl_amo">{{rec[6].play}}</p>
                                <span>{{rec[6].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[7].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[7].title}}
                                </p>
                                <p class="pl_amo">{{rec[7].play}}</p>
                                <span>{{rec[7].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[8].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[8].title}}
                                </p>
                                <p class="pl_amo">{{rec[8].play}}</p>
                                <span>{{rec[8].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[9].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[9].title}}
                                </p>
                                <p class="pl_amo">{{rec[9].play}}</p>
                                <span>{{rec[9].counts}}</span>万
                            </div>
                        </li>
                    </ul>
                    <ul class="wrapper" v-show="num==2">
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[10].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[10].title}}
                                </p>
                                <p class="pl_amo">{{rec[10].play}}</p>
                                <span>{{rec[10].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[11].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[11].title}}
                                </p>
                                <p class="pl_amo">{{rec[11].play}}</p>
                                <span>{{rec[11].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[12].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[12].title}}
                                </p>
                                <p class="pl_amo">{{rec[12].play}}</p>
                                <span>{{rec[12].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[13].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[13].title}}
                                </p>
                                <p class="pl_amo">{{rec[13].play}}</p>
                                <span>{{rec[13].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[14].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[14].title}}
                                </p>
                                <p class="pl_amo">{{rec[14].play}}</p>
                                <span>{{rec[14].counts}}</span>万
                            </div>
                        </li>
                    </ul> 
                     <ul class="wrapper" v-show="num==3">
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[15].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[15].title}}
                                </p>
                                <p class="pl_amo">{{rec[15].play}}</p>
                                <span>{{rec[15].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[16].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[16].title}}
                                </p>
                                <p class="pl_amo">{{rec[16].play}}</p>
                                <span>{{rec[16].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[17].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[17].title}}
                                </p>
                                <p class="pl_amo">{{rec[17].play}}</p>
                                <span>{{rec[17].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[18].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[18].title}}
                                </p>
                                <p class="pl_amo">{{rec[18].play}}</p>
                                <span>{{rec[18].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[19].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[19].title}}
                                </p>
                                <p class="pl_amo">{{rec[19].play}}</p>
                                <span>{{rec[19].counts}}</span>万
                            </div>
                        </li>
                    </ul>
                     <ul class="wrapper" v-show="num==4">
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[20].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[20].title}}
                                </p>
                                <p class="pl_amo">{{rec[20].play}}</p>
                                <span>{{rec[20].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[21].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[21].title}}
                                </p>
                                <p class="pl_amo">{{rec[21].play}}</p>
                                <span>{{rec[21].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[22].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[22].title}}
                                </p>
                                <p class="pl_amo">{{rec[22].play}}</p>
                                <span>{{rec[22].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[23].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[23].title}}
                                </p>
                                <p class="pl_amo">{{rec[23].play}}</p>
                                <span>{{rec[23].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[24].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[24].title}}
                                </p>
                                <p class="pl_amo">{{rec[24].play}}</p>
                                <span>{{rec[24].counts}}</span>万
                            </div>
                        </li>
                    </ul>
                    <ul class="wrapper" v-show="num==5">
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[0].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[0].title}}
                                </p>
                                <p class="pl_amo">{{rec[0].play}}</p>
                                <span>{{rec[0].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[2].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[2].title}}
                                </p>
                                <p class="pl_amo">{{rec[2].play}}</p>
                                <span>{{rec[2].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[1].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[1].title}}
                                </p>
                                <p class="pl_amo">{{rec[1].play}}</p>
                                <span>{{rec[1].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[4].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[4].title}}
                                </p>
                                <p class="pl_amo">{{rec[4].play}}</p>
                                <span>{{rec[4].counts}}</span>万
                            </div>
                        </li>
                        <li>
                            <div class="play_btn"></div>
                            <img :src="rec[3].img_url" alt="">
                            <div class="text_container">
                                <p class="pl_intro">
                                    {{rec[3].title}}
                                </p>
                                <p class="pl_amo">{{rec[3].play}}</p>
                                <span>{{rec[3].counts}}</span>万
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- 歌单推荐结束 -->
        <!-- 新歌首发部分 -->
        <div class="new-music">
            <div class="wrap">
            <h2>新歌首发</h2>
            <div class="second_nav">
                <ul>
                <li><a href="javascript:;">内地</a></li>
                <li><a href="javascript:;">港台</a></li>
                <li><a href="javascript:;">欧美</a></li>
                <li><a href="javascript:;">日本</a></li>
                <li><a href="javascript:;">韩国</a></li>
                </ul>
            </div>
            <div class="n-list">
                <ul class="n-wrap">
                <li class="sub_slide">
                    <ul>
                    <li class="pix">
                        <div class="cover_con">
                        <img src="img/new/1.jpg" alt="">
                        <div class="play_btn"></div>
                        </div>
                        <div class="pix_info">
                        <a class="music_name" href="javascript:;">出卖</a>
                        <a class="artist" href="javascript:;">李荣浩</a>
                        </div>
                        <p class="duration">05:20</p>
                    </li>
                    <li class="pix">
                        <div class="cover_con">
                        <img src="img/new/1.jpg" alt="">
                        <div class="play_btn"></div>
                        </div>
                        <div class="pix_info">
                        <a class="music_name" href="javascript:;">出卖</a>
                        <a class="artist" href="javascript:;">李荣浩</a>
                        </div>
                        <p class="duration">05:20</p>
                    </li>
                    <li class="pix">
                        <div class="cover_con">
                        <img src="img/new/1.jpg" alt="">
                        <div class="play_btn"></div>
                        </div>
                        <div class="pix_info">
                        <a class="music_name" href="javascript:;">出卖</a>
                        <a class="artist" href="javascript:;">李荣浩</a>
                        </div>
                        <p class="duration">05:20</p>
                    </li>
                    <li class="pix">
                        <div class="cover_con">
                        <img src="img/new/1.jpg" alt="">
                        <div class="play_btn"></div>
                        </div>
                        <div class="pix_info">
                        <a class="music_name" href="javascript:;">出卖</a>
                        <a class="artist" href="javascript:;">李荣浩</a>
                        </div>
                        <p class="duration">05:20</p>
                    </li>
                    <li class="pix">
                        <div class="cover_con">
                        <img src="img/new/1.jpg" alt="">
                        <div class="play_btn"></div>
                        </div>
                        <div class="pix_info">
                        <a class="music_name" href="javascript:;">出卖</a>
                        <a class="artist" href="javascript:;">李荣浩</a>
                        </div>
                        <p class="duration">05:20</p>
                    </li>
                    <li class="pix">
                        <div class="cover_con">
                        <img src="img/new/1.jpg" alt="">
                        <div class="play_btn"></div>
                        </div>
                        <div class="pix_info">
                        <a class="music_name" href="javascript:;">出卖</a>
                        <a class="artist" href="javascript:;">李荣浩</a>
                        </div>
                        <p class="duration">05:20</p>
                    </li>
                    <li class="pix">
                        <div class="cover_con">
                        <img src="img/new/1.jpg" alt="">
                        <div class="play_btn"></div>
                        </div>
                        <div class="pix_info">
                        <a class="music_name" href="javascript:;">出卖</a>
                        <a class="artist" href="javascript:;">李荣浩</a>
                        </div>
                        <p class="duration">05:20</p>
                    </li>
                    <li class="pix">
                        <div class="cover_con">
                        <img src="img/new/1.jpg" alt="">
                        <div class="play_btn"></div>
                        </div>
                        <div class="pix_info">
                        <a class="music_name" href="javascript:;">出卖</a>
                        <a class="artist" href="javascript:;">李荣浩</a>
                        </div>
                        <p class="duration">05:20</p>
                    </li>
                    <li class="pix">
                        <div class="cover_con">
                        <img src="img/new/1.jpg" alt="">
                        <div class="play_btn"></div>
                        </div>
                        <div class="pix_info">
                        <a class="music_name" href="javascript:;">出卖</a>
                        <a class="artist" href="javascript:;">李荣浩</a>
                        </div>
                        <p class="duration">05:20</p>
                    </li>
                    </ul>
                </li>
                </ul>
                <ul class="dot">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                </ul>
            </div>
            </div>
        </div>
        <!--新歌首发部分结束-->
        <!--新碟推荐部分-->
        <section class="recommend_bg">
            <div class="recommend">
            <h2>歌单推荐</h2>
            <div class="second_nav">
                <ul>
                <li><a href="javascript:;">为你推荐</a></li>
                <li><a href="javascript:;">90年代</a></li>
                <li><a href="javascript:;">民谣</a></li>
                <li><a href="javascript:;">日韩</a></li>
                <li><a href="javascript:;">情歌</a></li>
                <li><a href="javascript:;">网络歌曲</a></li>
                </ul>
            </div>
            <div class="playlists">
                <ul class="wrapper">
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/1.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                    歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/2.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                        歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/3.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                        歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/4.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                        歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/5.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                        歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/5.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                        歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/4.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                        歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/3.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                        歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/2.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                        歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                <li>
                    <div class="play_btn"></div>
                    <img src="img/gedan/1.jpg" alt="">
                    <div class="text_container">
                    <p class="pl_intro">
                        歌单介绍歌单介绍歌单介绍
                    </p>
                    <p class="pl_amo">播放量</p>
                    <span>156.1</span>万
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </section>
        <!--新碟推荐部分结束-->
        <!-- 排行榜 开始部分-->
        <div class="ranking">
            <div class="toplist">
                <h2>排行榜</h2>
                <ul class="lists">
                <li class="toplist_item">
                    <div class="ban">
                    <div class="item_left">
                        <p class="toplist_title">巅峰榜</p>
                        <p class="item_title">流行指数</p>
                        <i class="icon_play "></i>
                        <i class="item_line"></i>
                        <ul class="songlist">
                        <li>
                            <div class="s_num">1</div>
                            <div class="s_name">红蔷薇</div>
                            <div class="s_artist">张靓颖</div>
                        </li>
                        <li>
                            <div class="s_num">2</div>
                            <div class="s_name">我们的时光</div>
                            <div class="s_artist">林俊杰</div>
                        </li>
                        <li>
                            <div class="s_num">3</div>
                            <div class="s_name">刘海砍樵</div>
                            <div class="s_artist">张艺兴</div>
                        </li>
                        <li>
                            <div class="s_num">4</div>
                            <div class="s_name">都选C</div>
                            <div class="s_artist">缝纫机乐队</div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </li>
                <li class="toplist_item">
                    <div class="ban">
                    <div class="item_left">
                        <p class="toplist_title">巅峰榜</p>
                        <p class="item_title">流行指数</p>
                        <i class="item_line"></i>
                        <ul class="songlist">
                        <li>
                            <div class="s_num">1</div>
                            <div class="s_name">红蔷薇</div>
                            <div class="s_artist">张靓颖</div>
                        </li>
                        <li>
                            <div class="s_num">2</div>
                            <div class="s_name">我们的时光</div>
                            <div class="s_artist">林俊杰</div>
                        </li>
                        <li>
                            <div class="s_num">3</div>
                            <div class="s_name">刘海砍樵</div>
                            <div class="s_artist">张艺兴</div>
                        </li>
                        <li>
                            <div class="s_num">4</div>
                            <div class="s_name">都选C</div>
                            <div class="s_artist">缝纫机乐队</div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </li>
                <li class="toplist_item">
                    <div class="ban">
                    <div class="item_left">
                        <p class="toplist_title">巅峰榜</p>
                        <p class="item_title">流行指数</p>
                        <i class="item_line"></i>
                        <ul class="songlist">
                        <li>
                            <div class="s_num">1</div>
                            <div class="s_name">红蔷薇</div>
                            <div class="s_artist">张靓颖</div>
                        </li>
                        <li>
                            <div class="s_num">2</div>
                            <div class="s_name">我们的时光</div>
                            <div class="s_artist">林俊杰</div>
                        </li>
                        <li>
                            <div class="s_num">3</div>
                            <div class="s_name">刘海砍樵</div>
                            <div class="s_artist">张艺兴</div>
                        </li>
                        <li>
                            <div class="s_num">4</div>
                            <div class="s_name">都选C</div>
                            <div class="s_artist">缝纫机乐队</div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </li>
                <li class="toplist_item">
                    <div class="ban">
                    <div class="item_left">
                        <p class="toplist_title">巅峰榜</p>
                        <p class="item_title">流行指数</p>
                        <i class="item_line"></i>
                        <ul class="songlist">
                        <li>
                            <div class="s_num">1</div>
                            <div class="s_name">红蔷薇</div>
                            <div class="s_artist">张靓颖</div>
                        </li>
                        <li>
                            <div class="s_num">2</div>
                            <div class="s_name">我们的时光</div>
                            <div class="s_artist">林俊杰</div>
                        </li>
                        <li>
                            <div class="s_num">3</div>
                            <div class="s_name">刘海砍樵</div>
                            <div class="s_artist">张艺兴</div>
                        </li>
                        <li>
                            <div class="s_num">4</div>
                            <div class="s_name">都选C</div>
                            <div class="s_artist">缝纫机乐队</div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </li>
                <li class="toplist_item">
                    <div class="ban">
                    <div class="item_left">
                        <p class="toplist_title">巅峰榜</p>
                        <p class="item_title">流行指数</p>
                        <i class="item_line"></i>
                        <ul class="songlist">
                        <li>
                            <div class="s_num">1</div>
                            <div class="s_name">红蔷薇</div>
                            <div class="s_artist">张靓颖</div>
                        </li>
                        <li>
                            <div class="s_num">2</div>
                            <div class="s_name">我们的时光</div>
                            <div class="s_artist">林俊杰</div>
                        </li>
                        <li>
                            <div class="s_num">3</div>
                            <div class="s_name">刘海砍樵</div>
                            <div class="s_artist">张艺兴</div>
                        </li>
                        <li>
                            <div class="s_num">4</div>
                            <div class="s_name">都选C</div>
                            <div class="s_artist">缝纫机乐队</div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
        </div>
        <!-- 排行榜部分结束 -->
        <!-- MV部分 -->
        <div class="mv_bg">
            <div class="mv">
            <h2>MV</h2>
            <div class="second_nav">
                <ul>
                <li><a href="javascript:;">推荐</a></li>
                <li><a href="javascript:;">内地</a></li>
                <li><a href="javascript:;">港台</a></li>
                <li><a href="javascript:;">欧美</a></li>
                <li><a href="javascript:;">日本</a></li>
                <li><a href="javascript:;">韩国</a></li>
                </ul>  
            </div>
            <div class="mv_list">
                <ul class="mv_wrap">
                <li class="item_box">
                    <div class="play_btn"></div>
                    <div class="mv_item_cont">
                    <div class="mv_item">
                        <img src="img/MV/mv_2.png" alt="">
                        <div class="mv_intr">
                        <p class="mv_title">
                            <a href="javascript:;">烟花 (《烟花》电影同名主题曲)</a>
                        </p>
                        <p class="mv_artist">
                            <a href="javascript:;">DAOKO</a>
                        </p>
                        <div class="amo">
                            <i class="mv_icon"></i>
                            <span>156.1</span>
                            <span>万</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li class="item_box">
                    <div class="play_btn"></div>
                    <div class="mv_item_cont">
                        <div class="mv_item">
                        <img src="img/MV/mv_2.png" alt="">
                        <div class="mv_intr">
                            <p class="mv_title">
                            <a href="javascript:;">烟花 (《烟花》电影同名主题曲)</a>
                            </p>
                            <p class="mv_artist">
                            <a href="javascript:;">DAOKO</a>
                            </p>
                            <div class="amo">
                            <i class="mv_icon"></i>
                            <span>156.1</span>
                            <span>万</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>
                <li class="item_box">
                    <div class="play_btn"></div>
                    <div class="mv_item_cont">
                        <div class="mv_item">
                        <img src="img/MV/mv_2.png" alt="">
                        <div class="mv_intr">
                            <p class="mv_title">
                            <a href="javascript:;">烟花 (《烟花》电影同名主题曲)</a>
                            </p>
                            <p class="mv_artist">
                            <a href="javascript:;">DAOKO</a>
                            </p>
                            <div class="amo">
                            <i class="mv_icon"></i>
                            <span>156.1</span>
                            <span>万</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>
                <li class="item_box">
                    <div class="play_btn"></div>
                    <div class="mv_item_cont">
                        <div class="mv_item">
                        <img src="img/MV/mv_2.png" alt="">
                        <div class="mv_intr">
                            <p class="mv_title">
                            <a href="javascript:;">烟花 (《烟花》电影同名主题曲)</a>
                            </p>
                            <p class="mv_artist">
                            <a href="javascript:;">DAOKO</a>
                            </p>
                            <div class="amo">
                            <i class="mv_icon"></i>
                            <span>156.1</span>
                            <span>万</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>
                <li class="item_box">
                    <div class="play_btn"></div>
                    <div class="mv_item_cont">
                        <div class="mv_item">
                        <img src="img/MV/mv_2.png" alt="">
                        <div class="mv_intr">
                            <p class="mv_title">
                            <a href="javascript:;">烟花 (《烟花》电影同名主题曲)</a>
                            </p>
                            <p class="mv_artist">
                            <a href="javascript:;">DAOKO</a>
                            </p>
                            <div class="amo">
                            <i class="mv_icon"></i>
                            <span>156.1</span>
                            <span>万</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>
                <li class="item_box">
                    <div class="play_btn"></div>
                    <div class="mv_item_cont">
                        <div class="mv_item">
                        <img src="img/MV/mv_2.png" alt="">
                        <div class="mv_intr">
                            <p class="mv_title">
                            <a href="javascript:;">烟花 (《烟花》电影同名主题曲)</a>
                            </p>
                            <p class="mv_artist">
                            <a href="javascript:;">DAOKO</a>
                            </p>
                            <div class="amo">
                            <i class="mv_icon"></i>
                            <span>156.1</span>
                            <span>万</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>
                <li class="item_box">
                    <div class="play_btn"></div>
                    <div class="mv_item_cont">
                        <div class="mv_item">
                        <img src="img/MV/mv_2.png" alt="">
                        <div class="mv_intr">
                            <p class="mv_title">
                            <a href="javascript:;">烟花 (《烟花》电影同名主题曲)</a>
                            </p>
                            <p class="mv_artist">
                            <a href="javascript:;">DAOKO</a>
                            </p>
                            <div class="amo">
                            <i class="mv_icon"></i>
                            <span>156.1</span>
                            <span>万</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>
                <li class="item_box">
                    <div class="play_btn"></div>
                    <div class="mv_item_cont">
                        <div class="mv_item">
                        <img src="img/MV/mv_2.png" alt="">
                        <div class="mv_intr">
                            <p class="mv_title">
                            <a href="javascript:;">烟花 (《烟花》电影同名主题曲)</a>
                            </p>
                            <p class="mv_artist">
                            <a href="javascript:;">DAOKO</a>
                            </p>
                            <div class="amo">
                            <i class="mv_icon"></i>
                            <span>156.1</span>
                            <span>万</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                recommend:["为你推荐","90年代","民谣","日韩","情歌","网络歌曲"],
                rec:[
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                    {nid:'',img_url:"",title:'',plaky:'',counts:''},
                ],
                num:0,
            }
        },
        created(){
            this.getImages();
            this.recom();
        },
        methods:{
            getImages(){
                // var url=this.$store.state.globalSettings.apiUrl+'/imagelist';
                 var url="http://wyyapi.applinzi.com/imagelist"
                this.$axios.get(url).then(result=>{
                // this.$http.get("http://wyyapi.applinzi.com/imagelist").then(result=>{
                   console.log(result);
                    this.list=result.data;
                })
            },
            recom(){
                var url=this.$store.state.globalSettings.apiUrl+"/recom";
                this.$axios.get(url).then(result=>{
                    // console.log(result)
                    this.rec=result.data;
                })
            },
            a(i){
                this.num=i  
            }
          
        }
    }
</script>

<style scoped>
/*轮播图图片*/

.imglist img{
    width: 100%;
    height: 100%;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
/*歌单推荐*/
.recommend_bg{
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #F1F1F1 0%, #FEFEFE 100%);
}
.recommend_bg .recommend{
  margin: 0 auto;
  width: 1226px;
}
.recommend h2{
  padding: 50px 0 20px;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  letter-spacing: 10px;
  font-size: 1.7em;
  color: #323232;
}
.recommend .second_nav {
  font-size: 0.9em;
  text-align: center;
  margin-bottom: 20px;
}
.recommend .second_nav>ul {
  display: flex;
  justify-content: center;
  list-style: none;
}
.recommend .second_nav>ul>li {
  width: 6.7%;
  line-height: 40px;
}
.recommend .second_nav a:hover{
  color: #f46262;
}
.recommend_bg>.recommend>.second_nav>ul>li>a.active{
    color:#f46262;
}

/*ul*/
.recommend .wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
}
.recommend .wrapper li {
  overflow: hidden;
  position: relative;
  width: 220px;
  margin: 0 10px 30px;
  height: 300px;
  font-size: 0.9em;
  border-radius: 15px;
  background: #fff;
  border: 1px solid transparent;
  transition: transform 0.4s ease;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
}
/*li hover 效果*/
.recommend .wrapper li:hover {
  overflow: hidden;
  transform: translateY(-2%);
  cursor: pointer;
  box-shadow: 1px 4px 10px 2px #CCC;
  transition: all 0.4s ease-in;
}
.recommend .wrapper li > * {
  position: absolute;
}
/*li hover 按钮*/
.recommend .wrapper li:hover>.play_btn {
  transform: scale(0.8);
}
.recommend .wrapper .play_btn {
  top: 18%;
  left: 28%;
  width: 100px;
  height: 100px;
  background-image: url(../../public/img/gedan/iconall.png);
  background-position: -8px -394px;
  z-index: 1;
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.recommend .wrapper li>img {
  width: 220px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.recommend .text_container {
  bottom: 3%;
  padding: 0 5px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
/*li hover 字体*/
.recommend .wrapper li:hover>.text_container {
  transform: translateY(-10px);
}
.recommend .text_container>.pl_intro {
  top: 75%;
  color: #000;
  margin: 5px 0;
}
.recommend .text_container>.pl_amo {
  top: 85%;
  color: #666;
  font-size: 0.8em;
}
.recommend .text_container>.pl_amo {
  color: #666;
  font-size: 0.8em;
}
/*歌单推荐结束*/
/*新歌首发*/
.new-music{
 width: 100%; 
}
.new-music .wrap{
  margin: 0 auto;
  width: 1226px;
  background-image: linear-gradient(to bottom, #F1F1F1 0%, #FEFEFE 100%);
  color: black;
}
.new-music .wrap h2{
  padding: 50px 0 20px;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  letter-spacing: 10px;
  font-size: 1.7em;
  color: #323232;
}
.new-music .wrap .second_nav{
  font-size: 0.9em;
  text-align: center;
  margin-bottom: 20px;
}
.new-music .wrap .second_nav>ul{
  display: flex;
  justify-content: center;
  list-style: none;
}
.new-music .wrap .second_nav>ul>li{
  width: 6.7%;
  line-height: 40px;
}
.new-music .wrap .second_nav>ul>li>a:hover{
  color: #f46262;
}
.new-music .wrap .n-list{
  background-color: transparent;
  width: 1200px;
  overflow: hidden;
  position: relative;
}
.new-music .wrap .n-list>.n-wrap{
  height: 390px;
}
.new-music .wrap .n-list>.n-wrap>.sub-slide{
  position: absolute;
  width: 1200px;
  transform-origin: 100% 50%;
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.n-wrap>.sub_slide>ul{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.n-wrap>.sub_slide>ul>.pix{
  display: flex;
  width: 30%;
  margin: 0 15px;
  padding: 15px 0;
  border-bottom: 1px solid #e7e4e4;
  position: relative;
}
.n-wrap>.sub_slide>ul>.pix>div>img{
  width: 96px;
  height: 96px;
  vertical-align: middle;
} 
.n-wrap>.sub_slide>ul>.pix>div>.play_btn{
  position: absolute;
  top: 13%;
  left: 1%;
  width: 100px;
  height: 100px;
  background-image: url(../../public/img/gedan/iconall.png);
  background-position: -8px -394px;
  z-index: 1;
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.n-wrap>.sub_slide>ul>.pix>.cover_con:hover .play_btn{
  transform: scale(0.5);
  cursor: pointer;
}
.n-wrap>.sub_slide>ul>.pix>.pix_info{
  margin: 23px 0 0 10px;
}
.n-wrap>.sub_slide>ul>.pix>.pix_info>a{
  display: block;
}
.n-wrap>.sub_slide>ul>.pix>p{
  position: absolute;
  right: 0;
  top: 36px;
}
/*最下面小圆点*/
.new-music .wrap .n-list .dot{
  margin: 12px auto;
  display: flex;
  justify-content: center;
}
.new-music .wrap .n-list>.dot>li{
  background: rgba(0, 0, 0, 0.1);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
}
.new-music .wrap .n-list>.dot>li.active{
  background: rgba(0, 0, 0, 0.3);
}
/*新歌首发部分结束*/
/*排行榜部分开始*/
.ranking{
  width: 100%;
}
.toplist {
  margin: 0 auto;
  width: 1226px;
  background-image: linear-gradient(to bottom, #F1F1F1 0%, #FEFEFE 100%);
  color: #fff;
}
.toplist>h2{
  padding: 50px 0;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  letter-spacing: 10px;
  font-size: 1.7em;
  color: #323232;
}

.toplist>.lists {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;
}
.toplist>.lists>li{
  width: 220px;
  height: 500px;
  margin: 0 10px;
  position: relative;
  display: flex;
  perspective: 500px;
  backface-visibility: hidden;
  flex-direction: column;
  transition: transform 0.4s;
  transform-origin: 50% 50% -110px;
}
.toplist>.lists>li>.ban {
  transform-origin: 50% 50% -110px;
  transform-style: preserve-3d;
  z-index: 10;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toplist>.lists>.toplist_item>.ban>.item_left>.vicon_play{
  background-image: url(../../public/img/paihang/cover_play.png);
  background-size: 72%;
  background-repeat: no-repeat;
  background-position: 50%;
  position: absolute;
  left: 50%;
  top: 150px;
  margin: -35px;
  width: 70px;
  height: 70px;
  transform: scale(.7) translateZ(0);
  transition-property: opacity,transform;
  transition-duration: .5s;
  opacity: 0;
}
.toplist_item:hover .vicon_playy{
  opacity: 1;
  filter: none;
  transform: scale(1) translateZ(0);
  transition-property: opacity,transform;
  transition-duration: .5s;
  cursor: pointer;
}
.toplist>.lists>.toplist_item>.ban>.item_left{
  background: url(../../public/img/paihang/1.jpg) no-repeat;
  transform-origin: 50% 50% -110px;
  width: 100%;
  height: 500px;
  position: absolute;
  box-shadow: 3px 11px 10px 1px #a5a1a1;
}
.toplist .lists .toplist_item:nth-child(2) .item_left {
  background-position: -224px 0;
}
.toplist .lists .toplist_item:nth-child(3) .item_left {
  background-position: -448px 0;
}
.toplist .lists .toplist_item:nth-child(4) .item_left {
  background-position: -672px 0;
}
.toplist .lists .toplist_item:nth-child(5) .item_left {
  background-position: -896px 0;
}
.toplist_item>.ban>.item_left>.toplist_title{
  font-size: 1.4em;
  font-weight: lighter;
  margin: 50px 0 5px;
  letter-spacing: 1px;
}
.toplist_item>.ban>.item_left>.item_title{
  font-weight: 500;
  font-size: 1.6em;
  letter-spacing: 2px;
}
.toplist_item>.ban>.item_left>.item_line{
  display: block;
  width: 36px;
  height: 2px;
  margin: 0 auto;
  background: #fff;
  margin: 28px auto;
}
.toplist>.lists>.toplist_item>.ban>.item_left>.songlist{
  text-align: left;
}
.toplist>.lists>.toplist_item>.ban>.item_left>.songlist>li{
  margin: 0 0 15px 26px;
  padding-left: 20px;
  position: relative;
}
.toplist>.lists>.toplist_item>.ban>.item_left>.songlist>li>.s_num{
  position: absolute;
  left: 0;
  top: 0;
}

/*排行榜部分结束*/
/*MV部分开始*/
.mv_bg{
  background-image: linear-gradient(to bottom, #F1F1F1 0%, #FEFEFE 100%);
}
.mv {
  margin: 0 auto;
  width: 1200px;
  background-image: linear-gradient(to bottom, #F1F1F1 0%, #FEFEFE 100%);
  color: black;
}
.mv h2{
  padding: 50px 0 20px;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  letter-spacing: 10px;
  font-size: 1.7em;
  color: #323232;
}
.mv .second_nav {
  font-size: 0.9em;
  text-align: center;
  margin-bottom: 20px;
}
.mv .second_nav>ul {
  display: flex;
  justify-content: center;
}
.mv .second_nav>ul>li {
  width: 6.7%;
  line-height: 40px;
}
.mv .mv_list {
  font-size: 0.95em;
}
.mv .mv_wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.mv .item_box {
  position: relative;
  width: 23%;
  perspective: 500px;
  height: 240px;
  margin: 8px 10px;
  border-radius: 15px;
  overflow: hidden;
}
.mv .item_box .play_btn {
  position: absolute;
  top: 15%;
  left: 33%;
  width: 100px;
  height: 100px;
  background-image: url(../../public/img/MV/iconall.png);
  background-position: -8px -394px;
  z-index: 1;
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.mv .item_box:hover .play_btn {
  transform: scale(0.5);
  cursor: pointer;
} 
.mv .item_box .mv_item_cont {
  position: relative;
  transform-style: preserve-3d;
  transform-origin: center center;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
}
.mv .mv_item_cont .mv_item {
  position: absolute;
  backface-visibility: hidden;
}
.mv .mv_item_cont .mv_item img {
  width: 100%;
}
.mv .mv_item .mv_intr {
  margin-left: 10px;
}
.mv .mv_item .mv_icon {
  display: inline-block;
  width: 19px;
  height: 12px;
  background-image: url(../../public/img/MV/icon_sprite.png);
  background-position: -180px -20px;
  margin-right: 5px;
}
.mv .mv_item .mv_artist a, .mv .mv_item .amo {
  color: #777;
}
</style>