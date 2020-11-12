<template>
    <div class="counter">
        {{timerCount}}
    </div>
</template>

<script>

export default {
    name: 'Counter',
     data() {
            return {
                timerCount: ''
            }
        },

        watch: {

            timerCount: {
                handler(value) {
                    var cd_date = new Date("Nov 13, 2020 16:59:59").getTime();

                    setTimeout(() => {
                        var now = new Date().getTime();
                        var diff = cd_date - now;
                        var d = Math.floor(diff / (1000 * 60 * 60 * 24));
                        var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                        var s = Math.floor((diff % (1000 * 60)) / 1000);
                        return this.timerCount = d + "d " + h + "h " + m + "m " + s + "s ";
                    }, 1000);

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }

        }
}
</script>
