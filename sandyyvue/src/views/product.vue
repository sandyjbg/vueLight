<template>
    <div class="background3">
        <el-row>
            <el-col :span="24"><div class="lighttitle"><h1>所有產品</h1></div></el-col>
        </el-row>
    <el-carousel :interval="5000" style="height: 425px" class="lightinfo" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in carouselData" :key="index">
        <div>
        <el-row>
            <el-col :span="8" class="container"><div>
                <img :src="item.image" alt="Image" class="carousel-image">
            </div></el-col>
            <el-col :span="16"><div class="text-container2">
                <h3>{{ item.topic }}</h3>
                <p>{{ item.text }}</p>
            </div>
            <div class="elbtm">
            <el-button type="goon" @click="tiao()">查看詳細</el-button>
            </div></el-col>
        </el-row>
        </div>
      </el-carousel-item>
    </el-carousel>
    </div>
<!-- </div> -->
</template>
    
  <script>
   export default{
    name: 'background3',
    methods :{
      tiao()
      {
        this.$router.push({path:'/png'})
      }
    },
      data() {
        return  {
          carouselData: [
          {
            image: 'https://i.ibb.co/DgBBD7v/1.png',
            topic:'LED平板燈',
            text: 'LED平板灯是一种高效节能的照明设备。它采用LED作为光源，具有以下特点：高亮度、低能耗、长寿命和环保。LED平板灯的设计以平板状为主，提供均匀柔和的光线，适用于各种场所，如办公室、学校、商场和家庭等。它具有省电、无频闪、无紫外线和红外线辐射等优点，能够提供舒适的照明环境。LED平板灯还支持调光和色温调节功能，可以根据需求调整亮度和色彩，满足不同场景的照明需求。总之，LED平板灯是一种节能环保、高质量的照明选择，为用户带来舒适、健康的光照体验。'
          },
          {
            image: 'https://i.ibb.co/FWcs94V/2.png',
            topic:'LED軌道燈',
            text: 'LED軌道燈是一種靈活且功能強大的照明設備。它采用LED作為光源，具有以下特點：高亮度、節能、長壽命和可調光性。LED軌道燈設計獨特，可以安裝在軌道上，可自由調整燈具的位置和角度，以滿足不同照明需求。它適用於商業場所、畫廊、展覽館等需要靈活照明的場景。LED軌道燈具有出色的光線投射效果，提供均勻、無陰影的照明，能夠突出重點區域和展示物品。通過調整軌道上的燈具，可以實現照明的靈活控制和定向照明效果。總之，LED軌道燈是一種多功能、可調節的照明解決方案，為場所提供高質量、高效能的照明效果。'
          },
          {
            image: 'https://i.ibb.co/Tcky9Rh/3.png',
            topic:'LED崁燈',
            text: 'LED嵌入式燈是一種緊湊而高效的照明設備。它采用LED作為光源，具有以下特點：節能、長壽命、高亮度和環保。LED嵌入式燈通常安裝在天花板或墻壁上，以嵌入的方式提供照明。它的設計精巧，外觀簡潔，能夠提供均勻柔和的光線。LED嵌入式燈適用於商業和居家環境，如辦公室、酒店、商場和家庭等。它具有較低的能耗，減少能源浪費，並且不含有害物質，對環境友好。LED嵌入式燈可根據需要進行調光和色溫調節，以滿足不同場景的照明需求。總之，LED嵌入式燈是一種高效、環保、多功能的照明選擇，為用戶提供舒適、節能的照明體驗。'
          },
          {
            image: 'https://i.ibb.co/HY131Bj/5.png',
            topic:'LED吸頂燈',
            text: 'LED吸頂燈是一種常見且實用的照明設備。它采用LED作為光源，具有以下特點：高亮度、節能、長壽命和環保。LED吸頂燈安裝在天花板上，提供整體照明效果。它的設計簡潔、緊湊，適用於各種場所，如居家、商業和辦公環境等。LED吸頂燈具有高能效和較低的能耗，能夠減少能源消耗和電費支出。LED光源的長壽命意味著更少的維護和更長的使用壽命。此外，LED吸頂燈還支持調光和色溫調節功能，可根據需求調整亮度和色彩，創造出適合不同場景的舒適照明環境。總之，LED吸頂燈是一種高效、耐用、環保的照明解決方案，提供明亮、節能的照明效果。'
          },
          {
            image: 'https://i.ibb.co/YccD6my/4.png',
            topic:'LED投光燈',
            text: 'LED投光燈是一種強大而多功能的照明設備。它采用LED作為光源，具有以下特點：高亮度、節能、長壽命和可調角度。LED投光燈設計緊湊，具備優秀的光線投射效果。它適用於室內和室外場所，如建築物外墻、廣場、景觀照明等。LED投光燈具有高能效，可提供明亮的照明效果，同時節約能源和降低運行成本。LED光源的長壽命減少了更換燈泡的頻率和維護成本。此外，LED投光燈還支持調光和色溫調節功能，可根據需要調整亮度和色彩，以滿足不同照明需求。總之，LED投光燈是一種高效、耐用、可靠的照明解決方案，為場所提供強大、靈活的照明效果。'
          }
      ]
      }
    }
  }
  </script>
    
  <style scoped>
    html,body,img,a,.background3{
        margin: 0;
        padding: 0;
    }
    .el-carousel__container{
        height:350px;
    }
  .background3 {
    background-image: url(../assets/123.jpg); 
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    align-items: center;
  }
  .lighttitle{
    color:rgb(255, 255, 255);
    background-color:#333;
    padding:0.5px 100px;
    margin:100px 100px 0 100px;
  }
  .lightinfo{
    padding:40px 40px 0px 40px;
    margin:0 100px;
    background-color: rgba(254, 254, 254, 0.447);
  }
  /* .bigbg{
    padding:100px 100px 0 100px;
  } */
  .carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    background-color: bisque;
    margin:100px 0 0 0;
  }
  .carousel-image {
    max-width: 100%;
    transform: scale(1.5);
    /* margin:0 0 0px 60px; */
  }
  .text-container2{
    flex: 1;
    padding:0 100px;
  }
  h3{
    font-size: 20px;
    text-align: left;
    color:black;
  }
  p{
    font-size: 18px;
    color:black;
    text-align: left;
  }

  .el-button--goon {
  color: #FFF;
  background-color: #333;
  border-color: #333;
}
.el-button--goon:focus,
.el-button--goon:hover {
  background: #000000;
  border-color: #000000;
  color: #ffffff;
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px; /* 设置容器的高度，根据需要进行调整 */
}
  </style>