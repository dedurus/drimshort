<template>
  <Layout>

    <div id="program_tabs">
        <b-tabs content-class="mt-3">
            <b-tab title="DAY ONE" active>
              <h3 class="mb-4 head3"> 13.11.20 / FRIDAY</h3>

                <div class="row justify-content-center">
                <div class="col" style="max-width: 1024px; height: auto;">
                    <div style='padding:100% 0 0 0;position:relative;'><iframe src='https://vimeo.com/showcase/7784591/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>
                </div>
                </div>
            </b-tab>

            <b-tab title="DAY TWO" disabled>
              <h3 class="mb-4 head3"> 14.11.20 / Saturday</h3>

                <div class="row justify-content-center">
                <div class="col" style="max-width: 1024px; height: auto;">
                    <div style='padding:100% 0 0 0;position:relative;'><iframe src='https://vimeo.com/showcase/7784592/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>
                </div>
                </div>
            </b-tab>

             <b-tab title="DAY THREE" disabled>
              <h3 class="mb-4 head3"> 15.11.20 / Sunday</h3>

                <div class="row justify-content-center">
                <div class="col" style="max-width: 1024px; height: auto;">
                    <div style='padding:100% 0 0 0;position:relative;'><iframe src='https://vimeo.com/showcase/7784885/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>
                </div>
                </div>
            </b-tab>
        </b-tabs>
    </div>










  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Day One',
    htmlAttrs: {
      lang: 'en',
    },
  }
}
</script>

<style lang="scss">
  h3.head3{
    color: #10daf7;
    text-align: center;
  }
  #program_tabs ul.nav-tabs{
        border-bottom: 1px solid transparent;
    }

    #program_tabs ul.nav-tabs .nav-link, .nav-tabs .nav-item.show .nav-link{
        font-size: 1.6rem;
        text-transform: uppercase;
        font-weight: bold;
    }
    #program_tabs ul.nav-tabs .nav-link.disabled.dsff_tab{
        color: #b275b5;
    }
    #program_tabs ul.nav-tabs .nav-link{
        padding-left: 0;
    }
    #program_tabs ul.nav-tabs .nav-link.active,
    #program_tabs ul.nav-tabs .nav-link:hover{
        color: #10daf7;
        background-color: transparent;
        border: 1px solid transparent;
    }
</style>
