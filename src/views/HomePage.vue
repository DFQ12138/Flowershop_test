<template>
  <div>首页</div>
  <el-carousel height="150px">
    <el-carousel-item v-for="item in images" :key="item">
      <el-link :href="item.courseUrl" target="_blank">
        <!--target="_blank"在新窗口打开   target="_self"在当前窗口打开-->
        <el-image :src="item.imageUrl"></el-image>
      </el-link>
    </el-carousel-item>


  </el-carousel>
</template>

<script setup>
/*
export default {
  name: 'HomePage',
};*/

import {ref, onMounted} from 'vue';
import {getBanner} from '../http/index';

const images = ref();
onMounted(async () => {
  console.log(await getBanner());
  images.value = (await getBanner()).data;
});
images.value = [
  {
    imageUrl: '/images/banners/21_birthday_banner_pc.jpg',
    courseUrl: 'https://www.baidu.com',
  },
  {
    imageUrl: '/images/banners/21_brand_banner_pc.jpg',
    courseUrl: 'https://www.baidu.com',
  },
  {
    imageUrl: '/images/banners/21_syz_banner_pc.jpg',
    courseUrl: 'https://www.baidu.com',
  },
];


</script>

<style lang="scss">
.el-carousel__container {
  height: 290px !important;
  margin-top: 10px;
  marker-offset: 10px;
}
</style>
