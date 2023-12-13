<template>
<div>
    <div class="background">
      <div class="overlay"></div>
      <div class="timeline">
    <div class="timeline-container">
      <div v-for="item in timelineItems" :key="item.id" class="timeline-item">
        <div class="timeline-content">
          <h3 class="topic">{{ item.time }}</h3>
          <p class="text">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timelineItems: [
        { id: 1, time: '由來', content: '由努力工作的楊家爸爸創造，名字是媽媽算命算出來的，哥哥負責前期攝影，妹妹做平面設計。產品提供，維護，售前售後都是爸爸負責。' },
        { id: 2, time: '主要營業', content: 'LED照明：LED燈具店提供各種LED照明產品，包括LED燈泡、LED軌道燈、LED平板燈、LED投光燈等。這些產品適用於家庭、辦公室、商店、餐廳等室內環境，提供高效能、節能和舒適的照明解決方案。' },
        { id: 3, time: '致力於', content: '我們致力於為您提供高品質、高效能的LED燈產品，幫助您照亮未來。LED燈是當今照明行業的領先技術，其卓越的節能性、長壽命和環保特性使其成為理想的照明解決方案。' },
        // 添加更多时间线项
      ]
    };
  },
};
</script>

<style>
body,h1,h2,h3,h4,h5,h6,img,a,p,div,.timeline,.timeline-container,.timeline-content{
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
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.timeline {
  display: flex;
  justify-content: center;
  align-items: center;
}
.timeline-container {
  position: relative;
  z-index: 2;
  margin:100px 0 0 100px;
}
.timeline-item {
    /* 文字 */
  color:white;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-right: 800px;
  margin-bottom: 50px;
}
.timeline-content {
    /* 線條 */
  border-left: 2px solid #ffffff;
  padding-left: 20px;
}
.text{
    text-align: left;
}
.topic{
    background-color: brown;
}
</style>