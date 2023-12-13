<template>
    <div class="big">
    <el-row>
  <el-col :span="10"><div class="grid-content bg-purple">
    <div class="carousel">
    <div class="carousel-container">
    <div class="carousel-images" :style="{ transform: `translateX(${translateValue}px)` }">
    <div class="image-zoom" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="image-container">
      <img :src="imageUrl" :style="imageStyle" alt="Image" v-for="(imageUrl, index) in images" :key="index" class="carousel-image" />
    </div>
  </div></div></div></div>
  <div class="thumbnail-container">
      <img
        v-for="(imageUrl, index) in images"
        :src="imageUrl"
        :key="index"
        :class="{ 'thumbnail-image': true, active: currentIndex === index }"
        @click="changeSlide(index)"
      />
    </div>
  </div></el-col>
  <el-col :span="14"><div class="grid-content bg-purple-light">
    <h1>LED平板燈</h1>
    <p class="p1">💡通過CNS14335 CNS14115國家品質認證，無藍光認証IEC62471，可提供認證證書(電子檔)和出廠證明BMSI:R65104；型號：CYTBAR-2A01W</p>
    <div class="small">
    <p>💡内附快速接頭，安裝更方便，加厚燈板更堅固</p>
    <p>💡使用全電壓100-240V，低頻無藍光傷害，耐久可用15000小時</p>
    <p>💡新款直下式，升級48顆台灣晶圓燈珠，高優質高功率全電壓85~240Ⅴ驅動，更持久耐用，光色有白光，自然光可選擇</p>
    <p>💡升級5500流明高亮燈珠，更亮更省電，演色性≧80Ra</p>
    <p>💡尺寸數據L: 600mm；W:600mm；H:30mm</p>
    <p>💈節能省電、高效環保LED平板燈</p>
    <p>💈日常家居裝潢萬用，品質有保證，讓您的生活充滿明亮</p></div>
  </div></el-col>
</el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      zoomFactor: 2, // 放大倍数
      imageStyle: '', // 图片的样式
      imageUrl: ['https://i.ibb.co/DgBBD7v/1.png','https://i.ibb.co/FWcs94V/2.png','https://i.ibb.co/Tcky9Rh/3.png','https://i.ibb.co/HY131Bj/5.png'], // 图片的URL
      currentindex: 0, // 当前显示的图片索引
      translateValue: 0 // 图片容器的水平偏移量};
    };
},
  methods: {
    changeSlide(index) {
      this.currentIndex = index;
      this.translateValue = -index * 100; // 偏移量为每张图片的宽度
    },

    handleMouseMove(event) {
      const { clientX, clientY, currentTarget } = event;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();

      // 计算鼠标在图片内的相对位置
      const x = clientX - left;
      const y = clientY - top;

      // 计算放大后的图片位置
      const zoomX = -x * (this.zoomFactor - 1);
      const zoomY = -y * (this.zoomFactor - 1);

      // 设置放大样式
      this.imageStyle = `transform: scale(${this.zoomFactor}); transform-origin: ${x}px ${y}px; margin-left: ${zoomX}px; margin-top: ${zoomY}px;`;
    },
    handleMouseLeave() {
      // 重置图片样式
      this.imageStyle = '';
    }
  }
};
</script>

<style>
.image-zoom {
  position: relative;
  overflow: hidden;
  max-width: 400px;
}
.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.image-container img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease; /* 添加过渡效果 */
}
p{
    text-align: left;
}
.big{
    padding:100px 200px 0px 200px;
}
.p1{
    background-color: rgb(182, 182, 182);
    padding:10px;
    border-radius: 10px;
}
.small{
    border:1px solid black;
    padding:20px;
}
.carousel {
  position: relative;
  width: 600px; /* 轮播容器的宽度 */
  height: 400px; /* 轮播容器的高度 */
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-images {
  display: flex;
  transition: transform 0.3s ease; /* 添加过渡效果 */
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.thumbnail-image {
  width: 60px; /* 缩略图的宽度 */
  height: 40px; /* 缩略图的高度 */
  object-fit: cover;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease; /* 添加过渡效果 */
}

.thumbnail-image.active {
  opacity: 1;
}
</style>