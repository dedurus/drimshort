<template>
  <Layout>

  <div class="row">
    <div class="col-md order-md-12 mobile_mar_btm">
      <g-image src="~/assets/img/main_txt.png" class="img-fluid" width="500"/>
      <div class="col text-center">
        <b-link href="/stream" class="btn btn-watch btn-lg" role="button">
            <div class="dsff_btn_wrapper">
                <div class="watch_now_btn watch_n">Watch Now</div>
                <div class="watch_now_btn dsff2020">DSFF<br>2020</div>
            </div>
        </b-link>
      </div>
    </div>
    <div class="col-md order-md-1">
      <g-image src="~/assets/img/foot_art.png" class="img-fluid" width="500"/>
    </div>

  </div>

  </Layout>
</template>

<script>

export default {
  components: {
  },
  metaInfo: {
    title: ' Home',

    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'full_bg'
    },
  }
}
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  #app{
    justify-content: center;
  }
}
@media only screen and (max-width: 425px) {
  .mobile_mar_btm{
    margin-bottom: 50px;
  }
}
.btn-watch{
  color: #fff;
  background-color: #692848;
}
.btn-watch:hover,
.btn-watch:active{
  background-color: #521e38;
}
.dsff_btn_wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
}

.watch_now_btn {
  display: flex;
  align-items: center;
}
.watch_n{
  border-right: 2px solid #ad6e8d;
  padding-right: 10px;
}
.dsff2020{
  font-size: 14px;
  line-height: 1;
  padding-left: 10px;
}
.brown_text{
  color: #fff;
}
</style>
