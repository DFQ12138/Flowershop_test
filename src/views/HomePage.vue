<template>
  <div>首页</div>
  <el-carousel height="150px">
    <!--    <el-carousel-item v-for="item in 4" :key="item">
          <el-link target="_blank">
            <el-image src="/images/banners/21_birthday_banner_pc.jpg"></el-image>
          </el-link>
        </el-carousel-item>-->

    <el-carousel-item>
      <el-link target="_blank">
        <el-image src="/images/banners/21_birthday_banner_pc.jpg"></el-image>
      </el-link>
    </el-carousel-item>
    <el-carousel-item>
      <el-link target="_blank">
        <el-image src="/images/banners/21_brand_banner_pc.jpg"></el-image>
      </el-link>
    </el-carousel-item>
    <el-carousel-item>
      <el-link target="_blank">
        <el-image src="/images/banners/21_syz_banner_pc.jpg"></el-image>
      </el-link>
    </el-carousel-item>

  </el-carousel>
</template>

<script>

export default {
  name: 'HomePage',
};
</script>

<style lang="scss">
.el-carousel__container {
  height: 480px !important;
  margin-top: 10px;
}
</style>
