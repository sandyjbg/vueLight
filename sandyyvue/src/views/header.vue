<template>
<div>
  <div class="navbar">
    <ul class="nav-list">
      <li id="a"><a href="/">首頁</a></li>
      <li id="a"><a href="aboutus">關於我們</a></li>
      <li id="a"><a href="product">產品</a></li>
      <li id="a"><a href="contactus">聯繫我們</a></li>
    </ul>
  </div>
<router-view/>
</div>

</template>

<script>
// export default {
//   mounted(){
//         console.log('进来了')
//   },
//   methods:{
//   }
// }
</script>

<style>
.navbar {
  background-color: #333; /* 导航栏背景颜色 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999; /* 确保导航栏显示在最上层 */
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#a{
  float: left;
}

#b{
  float: right;
}

#c{
  float: right;
  margin-top: 3px;
}

.nav-list li a {
  display: block;
  color: white; /* 导航链接文字颜色 */
  text-align: center;
  padding: 14px 16px; /* 导航链接内边距 */
  text-decoration: none;
}

.nav-list li a:hover {
  background-color: #111; /* 鼠标悬停时的背景颜色 */
}
</style>