<template>
  <div>
    <div class="background">
      <div class="overlay"></div>
      <div class="text-container">
        <img class="img" src="../assets/234.png" alt="">
        <p id="text">新光照明企業社</p>
        <p class="divider"></p>
        <p id="text2">讓燈光照亮你的生活</p>
        <button class="button"><a href="aboutus">關於我們</a></button>
      </div>
    </div>
  </div>
  
</template>

<script>

</script>

<style>
body,h1,h2,h3,h4,h5,h6,img,a,p,div,ul,li,ol,dd,dt,dl,header,nav,section,article,footer{
    margin: 0;
    padding: 0;
  }
.background {
  background-image: url(../assets/123.jpg); /* 设置背景图片的路径 */
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  height: 100vh;
}
#text2 {
  text-align: left;
  font-size: 35px;
  margin:0 0 0 200px;
  color:white;
  line-height: 100px;
  font-family: 微軟正黑體;
  font-weight:lighter;
}
#text {
  text-align: left;
  font-size: 60px;
  margin:0 0 0 200px;
  color:white;
  font-family: 微軟正黑體;
  font-weight:lighter;
}
.img{
  height:100px;
  width:180px;
  margin: 0px 30px 30px 200px;
}
.divider {
  display: inline-block;
  width: 430px;
  height: 2px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 60%;
  left: 67%;
  transform: translate(-50%, -50%);
}
.text-container {
  position: relative;
  z-index: 2;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.button {
  display: inline-block;
  padding: 10px 40px; /* 按钮内边距 */
  background-color: #333; /* 按钮背景颜色 */
  color: rgb(255, 255, 255); /* 按钮文字颜色 */
  border:2px white solid;
  border-radius: 30px;
  font-size: 24px;
  cursor: pointer;
  margin: 10px 25px 0 200px;
}
.button a{
  text-decoration: none;
  color: inherit;
}
footer{
  background-color: rgb(249, 150, 2);
}
</style>