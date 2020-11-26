<template>
    <div  class="IframeCounter">
        <div v-if="renderIframeInit">

                <div style='padding:41.89% 0 0 0;position:relative;'><iframe src='https://vimeo.com/showcase/7798333/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>

        </div>

        <div class="closedStream" v-if="closedStream">
            <p class="mt-1 text-center">The stream is not available in your country.</p>

        </div>
    </div>
</template>

<script>

export default {
    name: 'IframeCounter',
     data() {
            return {
                closedStream: false,
                renderIframeInit: false,
                timerCount: ''
            }
        },

        watch: {
            timerCount: {
                handler(value) {

                    setTimeout(() => {

                            console.log('geoplugin_countryName(): ', geoplugin_countryName());
                        if(geoplugin_countryName() === 'North Macedonia'){
                            this.$data.renderIframeInit = true
                            this.$data.closedStream = false
                            return;
                        }

                        this.$data.renderIframeInit = false
                        this.$data.closedStream = true

                    }, 1000);

                },
                immediate: true // This ensures the watcher is triggered upon creation
            },


        }
}
</script>
