<template>
    <div class="background2">
    <el-row class="backgroundx">
        <el-col :span="12"><div class="info">
            <br>聯絡人：楊先生
            <br>聯絡電話：0909-529-729
            <br>門店地址：新北市新莊區化成路267巷38號
            <p><img class="fblogo" src="../assets/IeBL9JtUgk.png" alt=""> Facebook 粉絲專頁：<a href="https://www.facebook.com/profile.php?id=100063905289861">炬光 LED 照明</a></p>
            <p><img class="shopeelogo" src="../assets/更.png" alt=""> Shopee 蝦皮賣場首頁：<a href="https://shopee.tw/glight168168">新光照明企業社</a></p>
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.401625565547!2d121.46204657483277!3d25.05437313747195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a918f4182109%3A0x41dc26f79fac5ac3!2z5paw5YWJ54Wn5piO5LyB5qWt56S-!5e0!3m2!1szh-TW!2stw!4v1700985064042!5m2!1szh-TW!2stw" width="1020" height="720" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div></el-col>
         <el-col :span="12"><div class="asdf">
            <img class="logo" src="../assets/234.png" alt="">
         </div></el-col></el-row>
    </div>
</template>

<script>

</script>

<style>
body,img,a{
            margin: 0;
            padding: 0;
}
.background2{
    background-image: url(../assets/123.jpg); /* 设置背景图片的路径 */
    background-size: cover;
    background-position: top center;
    background-repeat: repeat-y;
    /* width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center; */
}
.backgroundx{
    background-color: #6c6c6c;  
    margin:25px 200px 0 200px;
}
.info{
    color:white;
    text-align: left;
    padding:100px;
    font-size: 18px;
}
.logo{
    max-width: 30%;
    margin: 150px;
}
.fblogo,.shopeelogo{
    max-width: 4%;
}
p{
    margin:50px 0;
    color:white;
}
a:link,
a:visited{
    color:rgb(176, 176, 176);
    text-decoration: none;
    font-weight: bolder;
}
a:hover,
a:active{
    color:rgb(141, 0, 0);
}
.map{
    margin-left: 150px;
}
</style>