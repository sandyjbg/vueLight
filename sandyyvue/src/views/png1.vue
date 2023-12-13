<template>
    <div class="background">
        <div class="big">
            <h1>LED平板燈</h1>
    <el-row>
    <el-col :span="12"><div class="leftthings">   
    <div class="product-carousel">
      <div class="carousel-main">
        <div class="image-zoom" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="image-container">
      <!-- <img :src="images" :style="imageStyle" alt="Image" /> -->
        <div class="carousel-image">
          <img :src="currentImage" :style="imageStyle" alt="Product Image" />
        </div></div></div>
        
        <div class="carousel-arrows">
        <div class="arrow left" @click="previousSlide">&#8249;</div>
        <div class="arrow right" @click="nextSlide">&#8250;</div>
      </div>
      </div>
      
      <div class="carousel-thumbnails">
        <img
          v-for="(image, index) in images"
          :src="image"
          :key="index"
          :class="{ 'thumbnail-image': true, active: currentIndex === index }"
          @click="changeSlide(index)"/>
      </div>
    </div>
</div>
</el-col>

<el-col :span="12"><div class="grid-content bg-purple-light">
    
    <p class="p1">💡通過CNS14335 CNS14115國家品質認證，無藍光認証IEC62471，可提供認證證書(電子檔)和出廠證明BMSI:R65104；型號：CYTBAR-2A01W</p>
    <div class="small">
    <p>💡内附快速接頭，安裝更方便，加厚燈板更堅固</p>
    <p>💡使用<span>全電壓100-240V</span>，低頻無藍光傷害，耐久可用15000小時</p>
    <p>💡新款直下式，升級48顆台灣晶圓燈珠，高優質高功率<span>全電壓85~240Ⅴ驅動</span>，更持久耐用，光色有白光，自然光可選擇</p>
    <p>💡升級<span>5500流明</span>高亮燈珠，更亮更省電，<span>演色性≧80Ra</span></p>
    <p>💡尺寸數據<span>L: 600mm；W:600mm；H:30mm</span></p>
    <p>💈節能省電、高效環保LED平板燈</p>
    <p>💈日常家居裝潢萬用，品質有保證，讓您的生活充滿明亮</p></div>
    <a href="https://shopee.tw/%E3%80%90CNS%E8%AA%8D%E8%A8%BC2%E5%B9%B4%E4%BF%9D%E5%9B%BA%E3%80%91%F0%9F%8E%898%E4%BB%B6%E5%85%8D%E9%81%8B%E8%B2%BB%F0%9F%8E%89%E9%AB%98%E5%93%81%E8%B3%AALED48W%E5%B9%B3%E6%9D%BF%E7%87%88%E8%BC%95%E9%8B%BC%E6%9E%B6%E5%8F%B0%E7%81%A3%E5%93%81%E7%89%8C%E5%B7%A5%E5%BB%A0%E8%87%AA%E7%87%9F%E6%96%B0%E6%AC%BE%E7%9B%B4%E4%B8%8B%E5%BC%8F%E7%99%BD%E5%85%89%E8%87%AA%E7%84%B6%E5%85%89%E8%B6%85%E4%BA%AE%E9%AB%98%E5%93%81%E8%B3%AA%E7%89%B9%E5%83%B9%E4%BF%83%E9%8A%B7-i.140825124.2281030635?xptdk=f36ed067-7e22-40fc-9930-d90c61595dc4" target="_blank">
  <el-button class="button" type="place">銷售通路：蝦皮賣場</el-button>
</a>
    <el-button type="place" @click="tiao()">聯繫我們</el-button>
</div>
</el-col>
</el-row>
</div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: ['https://i.ibb.co/Rzc1S21/2023-11-24-22-05-11.png','https://i.ibb.co/1fpszKN/2023-11-24-22-13-46.png','https://i.ibb.co/31CfBLf/2023-11-24-22-08-58.png','https://i.ibb.co/HVn6q2r/2023-11-24-22-11-11.png'], // 图片URL数组
        currentIndex: 0, // 当前显示的图片索引
        zoomFactor: 2, // 放大倍数
        imageStyle: '' // 图片的样式
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex];
      }
    },
    methods: {
    changeSlide(index) {
        this.currentIndex = index;
    },
    previousSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
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
    },
    tiao()
      {
        this.$router.push({path:'/contactus'})
      }
    }
  };
  </script>
  
  <style scoped>
    body,img,a{
            margin: 0;
            padding: 0;
        }
  .leftthings{
    margin-right: 120px;
  }
  .product-carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .carousel-main {
    width: 100%;
    height:350px; /* 大图容器的高度 */
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 100px; */
  }
  
  .carousel-image img {
    max-width: 200%;
    max-height: 200%;
    /* object-fit: contain; */
    margin:80px 200px 0 0;
    transform: scale(1.5);
    /* border:1px solid black; */
  }
  
  .carousel-thumbnails {
    display: flex;
    justify-content: center;
    margin:40px 0 0 0;
  }
  
  .thumbnail-image {
    width: 60px; /* 缩略图的宽度 */
    height: 60px; /* 缩略图的高度 */
    object-fit: cover;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease; /* 添加过渡效果 */
    margin:0 10px;
  }
  
  .thumbnail-image.active {
    opacity: 1;
  }

  .carousel-arrows {
  position: absolute;
  top: 35%;
  left: -40px;
  right: 750px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

.arrow {
  width: 30px; /* 箭头的宽度 */
  height: 30px; /* 箭头的高度 */
  font-size: 24px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  cursor: pointer;
}

.arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.arrow.left {
  margin-right: 5px;
}

.arrow.right {
  margin-left: 5px;
}   
.image-zoom {
  position: relative;
  overflow: hidden;
  width: 400px; 
  height: 350px; 
  margin-left: 100px;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: 100px;
}

.image-container img {
  transition: transform 0.3s ease;
}

p{
    text-align: left;
}
.big{
    padding:80px 150px 100px 150px;
    margin:0 100px;
    background-color: rgba(128, 128, 128, 0.644);
}
h1{
    color:rgb(255, 255, 255);
    background-color: #333;
    padding:10px;
}
.p1{
    background-color: rgb(208, 208, 208);
    padding:10px;
    border-radius: 10px;
    color:black;
}
.small{
    /* border:1px solid black; */
    padding:10px;
    margin-bottom: 10px;
    color:#FFF;
}
.button{
    margin-right: 20px;
}
.el-button--place:focus,
.el-button--place:hover {
  background: #000000;
  border-color: #000000;
  color: #fff;
}
.el-button--place {
  color: #FFF;
  background-color: #333;
  border-color: #333;
}
.background{
    background-image: url(../assets/123.jpg); /* 设置背景图片的路径 */
    background-size: cover;
    background-position: top center;
    background-repeat: repeat-y;
    width: 100vw;
    height: 100vh;
    /* display: flex; */
    /* align-items: center; */
  }
  </style>