<template>
  <Layout>
    <h1 class="mb-4 headingh1">Production</h1>

    <p>Four short documentaries produced by Bager Genesis 2.0 Struga, written, directed and edited by young citizens of Struga, as part of the project "Citizens in our town, main actors or mute extras” supported by Civica Mobilitas.</p>

    <!-- <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/videoseries?list=PLGH7-DmhVvNjUQ_Ll__q4rLme1_8GYqKb"
    allowfullscreen
    ></b-embed> -->

    <div class="row">
        <div class="col-6 mb-4">
            <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/p0M1idMrYXg"
            allowfullscreen
            ></b-embed>
        </div>

        <div class="col-6 mb-4">
            <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/1CfgXWTgn8g"
            allowfullscreen
            ></b-embed>
        </div>

        <div class="col-6 mb-4">
            <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/TDtftbHuLzQ"
            allowfullscreen
            ></b-embed>
        </div>

        <div class="col-6 mb-4">
            <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/wVCVYyrC950"
            allowfullscreen
            ></b-embed>
        </div>



    </div><!-- ./row -->

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
    htmlAttrs: {
      lang: 'en',
    },
  }
}
</script>

<style lang="scss" scoped>
.about-image {
  display: block;
  margin: auto;
  width: 70%;
  max-width: 200px;
  padding-bottom: 20px;
}
</style>
