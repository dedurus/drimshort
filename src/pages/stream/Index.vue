<template>
  <Layout>

    <div id="program_tabs">
        <b-tabs content-class="mt-3">
            <b-tab title="DAY ONE">
              <h3 class="mb-4 head3"> 13.11.20 / FRIDAY</h3>
                <p class="muted">The stream is closed</p>
                <div id="program_wrapper">


                    <h4 class="program_date">
                        DAY ONE / 13.11.20 / FRIDAY
                    </h4>

                    <p class="program_time">
                        5PM - 10PM
                    </p>

                    <p class="program_p">
                        International competition program
                    </p>

                    <ul>
                        <li>"The distance between us and the sky" - Vasilis Kekatos 9' /GRE 2019</li>
                        <li>"Exam"-Sonia K. Hadad 15' /IRL 2019</li>
                        <li>"The visit" - Djordje Vojvodic 20' /MNE 2020</li>
                        <li>"Home is where the house is" - Peter Cerovsek 23' /SLO/SER 2019</li>
                    </ul>

                    <p class="program_p">
                        National competition program
                    </p>

                    <ul>
                        <li>"I am calling your father" - Leon Ristov 12' /MKD 2020</li>
                        <li>"Labour day waltz"- Zoran Stojkovski 17' /CRO 2019</li>
                        <li>"Ficus" - Andrej Volkashin 17' /BiH, MKD 2018</li>
                        <li>"Ashes" - Gjorgji Lazov 18' /MKD 2019</li>
                    </ul>

                    <p class="program_p">
                        Student competition program
                    </p>

                    <ul>
                        <li>"Nobody told me I have to love you" - Matjaz Jamnik 18' /SLO 2019</li>
                        <li>"Development" - Nikola Vucinic 22' /MNE 2020</li>
                        <li>"Family vacation" - Katarina Koljevic 19' /SER 2020</li>
                    </ul>

                    <p class="program_p">
                        `Dealing with the past` competition program
                    </p>

                    <ul>
                        <li>"B4" - Alen Simic 13' /BIH 2020</li>
                        <li>"Foreign body" - Dusan Zoric 21' /SER 2018</li>
                        <li>"Mother Mariam" - Mustafa Gurbuz 9' /TUR 2018</li>
                        <li>"Unripe cherries" - Nebojsa Jovanovikj 16' /MKD 2015</li>
                    </ul>


                </div>
            </b-tab>

            <b-tab title="DAY TWO" active>
              <h3 class="mb-4 head3"> 14.11.20 / Saturday</h3>

              <Counter />

            </b-tab>

             <b-tab title="DAY THREE" disabled>
              <h3 class="mb-4 head3"> 15.11.20 / Sunday</h3>


            </b-tab>
        </b-tabs>
    </div>










  </Layout>
</template>

<script>
import Counter from '~/components/Counter.vue'
export default {
  components: {
    Counter
  },
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
